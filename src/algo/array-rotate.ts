/**
 * @description Array rotate
 */

// pop + unshift
export function arrayRotate1(arr: number[], k: number): number[] {
  const length = arr.length;
  if (!k || length === 0) {
    return arr;
  }
  const step = Math.abs(k % length); // if k longer than length

  for (let i = 0; i < step; i++) {
    const lastNumber = arr.pop();
    if (lastNumber) {
      arr.unshift(lastNumber);
    }
  }
  return arr;
}

// use concat
export function arrayRotate2(arr: number[], k: number) {
  const length = arr.length;
  if (!k || length === 0) {
    return arr;
  }
  const step = Math.abs(k % length); // if k longer than length

  const part1 = arr.slice(-step);
  const part2 = arr.slice(0, length - step);
  return part1.concat(part2);
}
