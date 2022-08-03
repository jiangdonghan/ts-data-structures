import { arrayRotate1, arrayRotate2 } from "../../algo/array-rotate";
import { checkBracketsMatch } from "../../algo/brackets-match";

const cases1 = {
  k: 3,
  arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  result: [7, 8, 9, 1, 2, 3, 4, 5, 6],
};
describe("Array Rotate", () => {
  test("Test Case 1", () => {
    const res = arrayRotate1(cases1.arr, cases1.k);
    expect(res).toEqual(cases1.result);
  });
  test("Test Case 2", () => {
    const res = arrayRotate2(cases1.arr, cases1.k);
    expect(res).toEqual(cases1.result);
  });
});

describe("Brackets Match", () => {
  test("Test Case 1", () => {
    const res = checkBracketsMatch("{[()]}");
    expect(res).toEqual(true);
  });

  test("Test Case 2", () => {
    const res = checkBracketsMatch("{[zz(33re)re}");
    expect(res).toEqual(false);
  });

  test("Test Case 3", () => {
    const res = checkBracketsMatch("([)]232{}");
    expect(res).toEqual(false);
  });
});
