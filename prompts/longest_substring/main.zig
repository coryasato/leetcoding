const std = @import("std");

fn lengthOfLongestSubstring(str: []const u8) []const u8 {
    return str;
}

// Use test instead of main?
pub fn main() !void {
    const stdout = std.io.getStdOut().writer();
    try stdout.print("Hello, {s}!\n", .{lengthOfLongestSubstring("world")});
}
