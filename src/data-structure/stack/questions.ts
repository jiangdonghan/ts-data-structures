import { ObjectStack } from "./object-stack";
import { ArrayStack } from "./array-stack";

/**
 * 十进制转化为二进制
 * @param decimalNumber
 */

export const decimalToBinary = (decimalNumber: number) => {
  const remStack = new ObjectStack();
  while (decimalNumber !== 0) {
    remStack.push(Math.floor(decimalNumber % 2));
    decimalNumber = Math.floor(decimalNumber / 2);
  }
  let binaryStr = "";
  while (!remStack.isEmpty()) {
    binaryStr += String(remStack.pop());
  }
  return binaryStr;
};

/**
 * 进制转换
 * @param decNumber
 * @param base
 */
export const baseConverter = (decimalNumber: number, base: number) => {
  const remStack = new ArrayStack();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (!(base >= 2 && base <= 36)) {
    return "";
  }

  while (decimalNumber !== 0) {
    remStack.push(Math.floor(decimalNumber % base));
    decimalNumber = Math.floor(decimalNumber / base);
  }
  let baseStr = "";
  while (!remStack.isEmpty()) {
    baseStr += digits[remStack.pop()];
  }
  return baseStr;
};
/**
 * 检验括号对称
 * @param symbols
 */
export const parenthesesChecker = (symbols: string) => {
  const stack = new ArrayStack();
  const open = "([{";
  const closers = ")]}";
  for (const symbol of symbols) {
    if (open.includes(symbol)) {
      stack.push(symbol);
    } else {
      if (stack.isEmpty()) {
        return false;
      } else {
        const top = stack.pop();
        if (!(open.indexOf(top) === closers.indexOf(symbol))) {
          return false;
        }
      }
    }
  }
  return true && stack.isEmpty();
};
