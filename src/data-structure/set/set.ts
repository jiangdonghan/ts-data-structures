
export class MySet{
    items:any
    constructor() {
        this.items = {}
    }
    add(element:any){
        if(!this.has(element)){
            this.items[element] = element
            return true
        }
        return false
    }
    delete(element:any){
        if(!this.has(element)){
            delete this.items[element]
            return true
        }
        return false
    }
    has(element:any){
        // return element in this.items 原形链上
        // hasOwnProperty 表明对象是否有特定属性的布尔值
        return Object.prototype.hasOwnProperty.call(this.items,element)
    }
    clear(){
        this.items = {}
    }
    size(){
        return Object.keys(this.items).length
    }

    sizeLegacy(){
        let count = 0
        for(let key in this.items){
            if(this.items.hasOwnProperty(key)){
                count++
            }
        }
        return count
    }

    values(){
        return Object.values(this.items)
    }

    /*
    并集
     */
    union(otherSet: MySet){
        const unionSet = new MySet()
        this.values().forEach(value=>unionSet.add(value))
        otherSet.values().forEach(value=>unionSet.add(value))
        return unionSet
    }

    /*
    交集
     */
    intersection(otherSet: MySet){
        const intersectionSet = new MySet()
        const values = this.values()
        for(let i = 0; i< values.length;i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }

    /*
    差集
     */
    difference(otherSet: MySet){
        const differenceSet = new MySet()
        this.values().forEach(value => {
            if(!otherSet.has(value)){
                differenceSet.add(value)
            }
        })
        return differenceSet
    }
    /*
    子集
     */
    isSubset(otherSet: MySet): boolean{
        if(this.size() > otherSet.size()) return false
        let isSubset = true
        this.values().every(value => {
            if(!otherSet.has(value)){
                isSubset = false
                return false
            }
            return true
        })
        return isSubset
    }
}