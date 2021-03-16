export class ArrayStack{
  items:any[]
  constructor() {
    this.items = []
  }
  push(element:any){
    this.items.push(element)
  }
  pop(){
    return this.items.pop()
  }
  peak(){
    return this.items[this.items.length-1]
  }
  isEmpty(){
    return this.items.length === 0
  }
  clear(){
    this.items = []
  }
  size(){
    return this.items.length
  }
}
