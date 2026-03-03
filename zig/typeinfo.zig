const std = @import("std");

const Animal = struct {
    name: [:0]const u8,
    size: u32,
};

pub fn main() void {
    inline for (@typeInfo(Animal).@"struct".fields) |f| {
        std.debug.print("{s}\n", .{f.name});
    }
}
