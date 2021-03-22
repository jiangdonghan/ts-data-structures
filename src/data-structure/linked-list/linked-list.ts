import { defaultEquals } from "../utils";

export class Node {
  element: any;
  next: Node | undefined;
  constructor(element: any) {
    this.element = element;
    this.next = undefined;
  }
}

export class LinkedList {
  count: number;
  head: Node | undefined;
  equalsFn: (a: any, b: any) => boolean;

  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element: any) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      //向链表尾部添加一个元素，首先需要找到最后一个元素，因为我们只有第一个元素的引用，因此需要循环访问列表，直到找到最后一项
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  insert(element: any, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1) as Node;
        const current = previous.next;
        previous.next = node;
        node.next = current;
      }
      this.count++;
      return true;
    }
    return false;
  }

  remove(element: any) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  indexOf(element: any) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current!.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous!.next;
        //将 previous 与 current 的下一项链接起来，跳过 current
        if (previous) {
          previous.next = current!.next;
        }
      }
      this.count--;
      return current!.element;
    }
    return undefined;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  private getElementAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }
}
