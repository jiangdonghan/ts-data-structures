import {
    baseConverter,
    decimalToBinary,
    parenthesesChecker,
} from "../../data-structure/stack";

describe("Stack Test", () => {
    test("Decimal To Binary Function", () => {
        const str1 = decimalToBinary(233);
        expect(str1).toBe("11101001");
    });

    test("Base Converter", () => {
        const str1 = baseConverter(100345, 8);
        expect(str1).toBe("303771");
    });

    test("Parentheses Checker", () => {
        const result1 = parenthesesChecker("{}[]()");
        expect(result1).toBe(true);
        const result2 = parenthesesChecker("{}[()");
        expect(result2).toBe(false);
        const result3 = parenthesesChecker("[");
        expect(result3).toBe(false);
    });
});
