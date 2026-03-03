const std = @import("std");

fn twoSum(allocator: std.mem.Allocator, list: []const i64, target: i64) ![2]usize {
    var map = std.AutoHashMap(i64, usize).init(allocator);
    defer map.deinit();

    for (list, 0..) |v, i| {
        const t = target - v;
        if (map.get(t)) |found_i| return .{ found_i, i };
        try map.put(v, i);
    }

    return error.NotFound;
}

pub fn main() !void {
    const listA = &[_]i64{ 1, 2, 3, 4, 5, 6 };
    const res = try twoSum(std.heap.page_allocator, listA, 1); // ListA is coerced into slice
    std.debug.print("res: 1: {d} 2: {d}\n", .{ res[0], res[1] });
}
