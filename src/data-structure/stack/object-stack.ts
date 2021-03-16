export class ObjectStack{
  count: number
  items: { [p:number]:any }
  constructor() {
    this.count = 0
    this.items = {}
  }
  push(element:any){
    this.items[this.count] = element
    this.count++
  }
  pop(){
    if(this.isEmpty()){
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
  peak(){
    if(this.isEmpty()){
      return undefined
    }
    return this.items[this.count-1]
  }
  isEmpty(){
    return this.count === 0
  }
  clear(){
    this.items = {}
    this.count = 0
  }
  size(){
    return this.count
  }
}
