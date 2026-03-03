const std = @import("std");
const Foo = struct {
    number: u32,

    pub const empty: Foo = .{ .number = 0 };

    pub fn init() Foo {
        return Foo{
            .number = 20,
        };
    }
};

pub fn main() !void {
    std.debug.print("{any}\n", .{.{ .year = 2020, .name = 8 }});

    const f: Foo = .empty;
    std.debug.print("{any}", .{@TypeOf(f)});
}
