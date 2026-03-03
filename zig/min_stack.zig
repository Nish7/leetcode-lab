const std = @import("std");

const MinStack = struct {
    allocator: std.mem.Allocator,
    stack: std.ArrayList(i64) = .empty,
    min_stack: std.ArrayList(i64) = .empty,
    const Self = @This();

    pub fn init(allocator: std.mem.Allocator) MinStack {
        return MinStack{
            .allocator = allocator,
        };
    }

    pub fn deinit(self: *Self) void {
        self.min_stack.deinit(self.allocator);
        self.stack.deinit(self.allocator);
    }

    pub fn push(self: *Self, value: i64) !void {
        try self.stack.append(self.allocator, value);
        if (self.min_stack.items.len == 0 or self.min_stack.getLast() >= value) {
            try self.min_stack.append(self.allocator, value);
        }
    }

    pub fn pop(self: *Self) !void {
        if (self.stack.items.len == 0) return error.Empty;
        const popped_value = self.stack.pop();
        if (self.min_stack.getLast() == popped_value) {
            _ = self.min_stack.pop();
        }
    }

    pub fn top(self: *Self) !i64 {
        if (self.stack.items.len == 0) return error.Empty;
        return self.stack.getLast();
    }

    pub fn getMin(self: *Self) !i64 {
        if (self.stack.items.len == 0) return error.Empty;
        return self.min_stack.getLast();
    }
};

pub fn main() !void {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();
    var minstack = MinStack.init(gpa.allocator());
    defer minstack.deinit();
    try minstack.push(3);
    try minstack.push(2);
    try minstack.push(1);
    std.debug.print("{}\n", .{try minstack.getMin()});
    try minstack.pop();
    try minstack.push(0);
    std.debug.print("{}\n", .{try minstack.getMin()});
}
