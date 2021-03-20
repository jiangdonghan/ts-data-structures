export class Deque {
  count: number;
  lowestCount: number;
  items: { [p: string]: any };

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  addBack(element: any) {
    this.items[this.count] = element;
    this.count++;
  }
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    const temp = this.items[this.count];
    delete this.items[this.count];
    this.count--;
    return temp;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }
  size() {
    return this.count - this.lowestCount;
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  addFront(element: any) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }
}
