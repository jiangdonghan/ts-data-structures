import {defaultCompare} from "../utils";

export class MinHeap{
    compareFn:Function
    heap:any[]
    constructor(compareFn= defaultCompare) {
        this.compareFn = compareFn
        this.heap = []
    }
}
