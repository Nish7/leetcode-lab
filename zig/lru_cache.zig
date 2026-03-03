const std = @import("std");
const Node = std.DoublyLinkedList.Node;
const builtin = @import("builtin");

const Entry = struct {
    key: u32,
    value: u32,
    node: Node = .{},
};

const LRUCache = struct {
    allocator: std.mem.Allocator,
    list: std.DoublyLinkedList,
    map: std.AutoHashMap(u32, *Entry),
    capacity: usize,

    const Self = @This();

    pub fn init(allocator: std.mem.Allocator, capacity: usize) !Self {
        if (capacity == 0) return error.InvalidCapacity;
        var self: Self = .{
            .list = .{},
            .allocator = allocator,
            .map = std.AutoHashMap(u32, *Entry).init(allocator),
            .capacity = capacity,
        };

        try self.map.ensureTotalCapacity(@intCast(capacity));
        return self;
    }

    pub fn deinit(self: *Self) void {
        self.map.deinit();

        while (self.list.pop()) |ptr| {
            const l: *Entry = @fieldParentPtr("node", ptr);
            self.allocator.destroy(l);
        }
    }

    /// int get(int key) Return the value of the key if the key exists, otherwise return -1.
    pub fn get(self: *Self, key: u32) ?u32 {
        if (self.map.get(key)) |v| {
            self.list.remove(&v.node);
            self.list.append(&v.node);
            return v.value;
        }

        return null;
    }

    // void put(int key, int value) Update the value of the key if the key exists.
    // Otherwise, add the key-value pair to the cache.
    // If the number of keys exceeds the capacity from this operation, evict the least recently used key.
    pub fn put(self: *Self, key: u32, value: u32) !void {
        if (self.map.get(key)) |v| {
            self.list.remove(&v.node);
            self.list.append(&v.node);
            v.value = value;
            return;
        }

        if (self.map.count() + 1 > self.capacity) {
            const poppedValue = self.list.popFirst().?;
            const poppedL: *Entry = @fieldParentPtr("node", poppedValue);
            _ = self.map.remove(poppedL.key);
            self.allocator.destroy(poppedL);
        }

        const nn: *Entry = try self.allocator.create(Entry);
        nn.* = Entry{ .key = key, .value = value };
        self.list.append(&nn.node);
        try self.map.put(key, nn);
    }
};

test "General Purpose Allocator" {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();

    var lru = try LRUCache.init(gpa.allocator(), 4);
    defer lru.deinit();

    try lru.put(1, 11);
    try lru.put(2, 22);
    try lru.put(3, 33);
    try lru.put(4, 44);
    try lru.put(5, 55);
    try lru.put(5, 22);
    try lru.put(5, 33);

    try std.testing.expect(lru.get(5).? == 33);
}

test "get returns null for missing key" {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();

    var lru = try LRUCache.init(gpa.allocator(), 2);
    defer lru.deinit();

    try std.testing.expect(lru.get(99) == null);
}

test "evicts least recently used on overflow" {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();

    var lru = try LRUCache.init(gpa.allocator(), 2);
    defer lru.deinit();

    try lru.put(1, 10);
    try lru.put(2, 20);
    try lru.put(3, 30);

    try std.testing.expect(lru.get(1) == null);
    try std.testing.expectEqual(@as(u32, 20), lru.get(2).?);
    try std.testing.expectEqual(@as(u32, 30), lru.get(3).?);
}

test "get refreshes recency" {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();

    var lru = try LRUCache.init(gpa.allocator(), 2);
    defer lru.deinit();

    try lru.put(1, 10);
    try lru.put(2, 20);
    _ = lru.get(1);
    try lru.put(3, 30);

    try std.testing.expect(lru.get(2) == null);
    try std.testing.expectEqual(@as(u32, 10), lru.get(1).?);
    try std.testing.expectEqual(@as(u32, 30), lru.get(3).?);
}

test "updating existing key refreshes recency and value" {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();

    var lru = try LRUCache.init(gpa.allocator(), 2);
    defer lru.deinit();

    try lru.put(1, 10);
    try lru.put(2, 20);
    try lru.put(1, 11);
    try lru.put(3, 30);

    try std.testing.expect(lru.get(2) == null);
    try std.testing.expectEqual(@as(u32, 11), lru.get(1).?);
    try std.testing.expectEqual(@as(u32, 30), lru.get(3).?);
}

test "capacity one keeps only newest key" {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();

    var lru = try LRUCache.init(gpa.allocator(), 1);
    defer lru.deinit();

    try lru.put(7, 70);
    try std.testing.expectEqual(@as(u32, 70), lru.get(7).?);

    try lru.put(8, 80);
    try std.testing.expect(lru.get(7) == null);
    try std.testing.expectEqual(@as(u32, 80), lru.get(8).?);
}

test "rejects zero capacity" {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();

    try std.testing.expectError(error.InvalidCapacity, LRUCache.init(gpa.allocator(), 0));
}
