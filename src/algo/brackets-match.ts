/**
 * @description check if all the brackets are matched
 */

// left bracket push to stack, right brackets pop from stack
function isMatch(left: string, right: string): boolean {
  if (left === "[" && right === "]") {
    return true;
  }
  if (left === "(" && right === ")") {
    return true;
  }
  return left === "{" && right === "}";
}

export function checkBracketsMatch(str: string): boolean {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const leftBrackets = ["{", "[", "("];
    const rightBrackets = ["}", "]", ")"];
    if (leftBrackets.includes(char)) {
      arr.push(char);
    } else if (rightBrackets.includes(char)) {
      //todo 判断匹配
      const lastChar = arr.pop();
      if (lastChar && !isMatch(lastChar, char)) {
        return false;
      }
    }
  }
  return arr.length === 0;
}
