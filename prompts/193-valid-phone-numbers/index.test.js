import { $ } from 'bun';
import { describe, expect, test } from "bun:test";

const expected = `
987-123-4567
(123) 456-7890
`;

describe("valid-phone-numbers.sh", () => {
  test("bash script returns string", async () => {
    const result = await $`bun ./valid-phone-numbers.sh`.text();
    expect(result.trim()).toBe(expected.trim());
  });
});
