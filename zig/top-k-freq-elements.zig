const std = @import("std");
const Entry = std.AutoHashMap(u64, u64).Entry;

fn greaterThan(
    context: void,
    a: Entry,
    b: Entry,
) std.math.Order {
    _ = context;
    return std.math.order(a.value_ptr.*, b.value_ptr.*).invert();
}

const TopKFreq = struct {
    allocator: std.mem.Allocator,
    freq: std.AutoHashMap(u64, u64),
    arr: []const u64,
    const Self = @This();

    pub fn init(allocator: std.mem.Allocator, arr: []const u64) Self {
        return Self{ .allocator = allocator, .arr = arr, .freq = std.AutoHashMap(u64, u64).init(allocator) };
    }

    pub fn deinit(self: *Self) void {
        self.freq.deinit();
    }

    pub fn getTopK(self: *Self, comptime K: u64) ![K]u64 {
        for (self.arr) |e| {
            const entry = try self.freq.getOrPut(e);
            if (!entry.found_existing) entry.value_ptr.* = 0;
            entry.value_ptr.* = 1;
        }

        var queue = std.PriorityQueue(Entry, void, greaterThan).init(self.allocator, {});
        defer queue.deinit();

        var it = self.freq.iterator();
        while (it.next()) |entry| {
            try queue.add(entry);
        }

        var res: [K]u64 = [_]u64{0} ** K;
        for (0..K) |i| {
            res[i] = queue.remove().key_ptr.*;
        }

        return res;
    }
};

pub fn main() !void {
    var sol = TopKFreq.init(std.heap.page_allocator, &[_]u64{ 1, 2, 3, 4, 3, 4, 4 });
    defer sol.deinit();
    std.debug.print("{any}", .{try sol.getTopK(2)});
}
