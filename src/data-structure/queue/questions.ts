/**
 * 击鼓传花
 * @param elementsList
 * @param num
 */
import { Queue } from "./queue";
import { Deque } from "./deque";
import deque from "../../../../../algorithms/src/ts/data-structures/deque";

export const hotPotato = (elementsList: any[], num: number) => {
  const queue = new Queue();
  const eliminatedList: any[] = [];
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminatedList.push(queue.dequeue());
  }
  return {
    elimitated: eliminatedList,
    winner: queue.dequeue(),
  };
};

/**
 * 回文检查
 * @param str
 */
export const palindromeChecker = (str: string) => {
  const queue = new Deque();
  //remove all spaces and lower the case
  const lowerStr = str.toLocaleLowerCase().split(" ").join("");
  let isEqual = true;
  let firstChar, lastChar;
  for (let i = 0; i < lowerStr.length; i++) {
    queue.addBack(lowerStr.charAt(i));
  }
  while (queue.size() > 1 && isEqual) {
    firstChar = queue.removeFront();
    lastChar = queue.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }
  return isEqual;
};
