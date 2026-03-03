// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

//     For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering
//
// Approach:
// - create a innode map which tracks the number of innodes
// - create a adjcency list as well
// - put the 0 innodes nodes in the queue and process htem
// - for each node: remove their nbr and subtract thei value and push it back if innopde vaue is 0
//
//
//
const std = @import("std");

const CourseSchedule = struct {
    allocator: std.mem.Allocator,
    invalue: std.AutoHashMap(u64, u64),
    numcourse: u64,
    prereq: []const [2]u64,
    adj: std.AutoHashMap(u64, std.ArrayList(u64)),

    const Self = @This();

    pub fn init(allocator: std.mem.Allocator, prereq: []const [2]u64, numcourse: u64) Self {
        return Self{
            .allocator = allocator,
            .prereq = prereq,
            .numcourse = numcourse,
            .invalue = std.AutoHashMap(u64, u64).init(allocator),
            .adj = std.AutoHashMap(u64, std.ArrayList(u64)).init(allocator),
        };
    }

    pub fn deinit(self: *Self) void {
        self.invalue.deinit();
        var it = self.adj.valueIterator();
        while (it.next()) |value| value.deinit(self.allocator);
        self.adj.deinit();
    }

    fn printAdj(self: *Self) void {
        std.debug.print("Adjencency list: \n", .{});

        var it = self.adj.iterator();

        while (it.next()) |el| {
            std.debug.print("{d}=[", .{el.key_ptr.*});
            for (el.value_ptr.*.items) |e| {
                std.debug.print("{d},", .{e});
            }

            std.debug.print("]\n", .{});
        }
    }

    pub fn schedule(self: *Self) ![]u64 {
        for (0..self.numcourse) |i| {
            try self.invalue.put(i, 0);
            try self.adj.put(i, .empty);
        }

        for (self.prereq) |entry| {
            const course, const preq = entry;
            const resa = self.invalue.getEntry(course).?;
            resa.value_ptr.* += 1;
            const resb = self.adj.getEntry(preq).?;
            try resb.value_ptr.*.append(self.allocator, course);
        }
m
        // build the queue
        var queue = std.ArrayList(u64).empty;
        defer queue.deinit(self.allocator);

        //push 0 indegree to the queue
        var it = self.invalue.iterator();
        while (it.next()) |el| {
            if (el.value_ptr.* == 0) try queue.append(self.allocator, el.key_ptr.*);
        }

        var res: std.ArrayList(u64) = .empty;
        errdefer res.deinit(self.allocator);
        var head: usize = 0;

        while (head < queue.items.len) : (head += 1) {
            const course = queue.items[head];
            try res.append(self.allocator, course);

            for ((self.adj.get(course) orelse continue).items) |nbr| {
                self.invalue.getPtr(nbr).?.* -= 1;
                if (self.invalue.getPtr(nbr).?.* == 0) try queue.append(self.allocator, nbr);
            }
        }

        return res.toOwnedSlice(self.allocator);
    }
};

pub fn main() !void {
    const pre = [_][2]u64{ .{ 1, 0 }, .{ 2, 0 }, .{ 3, 1 }, .{ 3, 2 } };
    // 0 -> 1???  preqe is 0
    //
    var gpa: std.heap.GeneralPurposeAllocator(.{}) = .init;
    defer _ = gpa.deinit();
    var sol = CourseSchedule.init(gpa.allocator(), &pre, 4);
    defer sol.deinit();
    std.log.debug("preq = {any}", .{sol.prereq});
    const result = try sol.schedule();
    defer gpa.allocator().free(result);
    std.debug.print("{any}\n", .{result});
}
