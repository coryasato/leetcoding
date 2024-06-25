const print = std.debug.print;
const std = @import("std");
// const os = std.os;
// const assert = std.debug.assert;
// const expect = std.testing.expect;

// TODO: Need some more knowledge on Slices and how to manage memory to dynamically create the matrix. We can probably use structs here instead but the matrix
//       solution via the JS solution would be good to understand.
fn convert(s: []const u8, numRows: i32) []const u8 {
    const matrix = [numRows]i32{};

    // std.debug.print("{s}\n", .{s});

    return s;
}

pub fn main() !void {
    const res = convert("hello", 3);
    print("{s}\n", .{res});
}
