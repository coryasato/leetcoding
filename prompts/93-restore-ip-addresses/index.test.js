import { describe, expect, test } from "bun:test";
import restoreIpAddresses from './index';

const cases = [
  ["25525511135", ["255.255.11.135","255.255.111.35"]],
  ["0000", ["0.0.0.0"]],
  ["101023", ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]],
];

describe("restore-ip-addresses", () => {
  test.each(cases)("(s=%s) should equal %o", (a, expected) => {
    expect(restoreIpAddresses(a)).toEqual(expected);
  });
});
