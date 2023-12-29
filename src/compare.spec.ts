interface Item {
  propA: string;
  propB: string;
}

class ItemImpl implements Item {
  propA: string;
  propB: string;
  constructor(propA: string, propB: string) {
    this.propA = propA;
    this.propB = propB;
  }
  compare = (another: Item): number =>
    this.propA.localeCompare(another.propA) ||
    this.propB.localeCompare(another.propB);
}

function sum(a: number, b: number) {
  return a + b;
}
import { expect, test } from "vitest";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test.each([
  ["aaa", "bbb", "=", "aaa", "bbb"],
  ["aaa", "bbc", ">", "aaa", "bbb"],
  ["aaa", "bbb", "<", "aaa", "bbc"],
  ["aab", "bbb", ">", "aaa", "bbb"],
  ["aaa", "bbb", "<", "aab", "bbb"],
  ["aab", "bbb", ">", "aaa", "bbc"],
  ["aaa", "bbc", "<", "aab", "bbb"],
])(`compareテスト %s.%s %s %s.%s`, async (a1, a2, sign, b1, b2) => {
  const itemA = new ItemImpl(a1, a2);
  const itemB = new ItemImpl(b1, b2);
  const result = sign === ">" ? 1 : sign === "<" ? -1 : 0;
  expect(itemA.compare(itemB)).toBe(result);
});
