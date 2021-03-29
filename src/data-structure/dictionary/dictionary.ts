import {defaultToString} from "../utils";


class ValuePair {
    key:string
    value:any
    constructor(key:string,value:any) {
        this.key = key,
        this.value = value
    }
    toString() {
        return `${this.key}: ${this.value}`
    }
}
export default class Dictionary{
    toStrFn:(item:any) => string
    table:{[p:string]:{key:string,value:any}}
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        this.table = {}
    }

    set(key:any, value:any){
        if(key!= null && value != null){
            const tableKey = this.toStrFn(key)
            this.table[tableKey] = new ValuePair(tableKey,value)
            return true
        }
        return false
    }

    remove(key:any){
        if(this.hasKey(key)){
            delete this.table[this.toStrFn(key)]
            return true
        }
        return false
    }

    hasKey(key:any){
        return this.table[this.toStrFn(key)] != null
    }

    get(key:any){
        const valuePair = this.table[this.toStrFn(key)]
        return valuePair === null ? undefined : valuePair.value
    }
    clear(){
        this.table = {}
    }

    size(){
        return Object.keys(this.table).length
    }

    isEmpty(){
        return this.size() === 0
    }
    keys(){
        return this.keyValue().map(valuePair=>valuePair.key)
    }
    values(){
        return this.keyValue().map(valuePair=>valuePair.value)
    }
    keyValue(){
        return Object.values(this.table)
    }
    forEach(callbackFn:Function){
        const valuePairs= this.keyValue()
        for(const valuePair of valuePairs){
            const result= callbackFn(valuePair.key, valuePair.value)
            if(result === false){
                break
            }
        }
    }
}
