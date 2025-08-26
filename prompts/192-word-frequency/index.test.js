import { $ } from 'bun';
import { describe, expect, test } from "bun:test";

const expected = `
the 4
is 3
sunny 2
day 1
`;

// NOTE:
// 1) We're being verbose here with Bun.file. We can also simply do:
//    const result = await $`bun ./word-frequency.sh'`;
// 2) The ".quiet()" method is silencing stdout to the terminal.
//    If we call ".text()" directly, it will implicitly call .quiet(). Being verbose.
describe("word-frequency.sh", () => {
  test("bash script returns string", async () => {
    const result = await $`bun run ${Bun.file('./word-frequency.sh')}`.quiet();
    expect(result.text().trim()).toBe(expected.trim());
  });
});
