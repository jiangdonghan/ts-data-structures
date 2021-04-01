import BinarySearchTree from "./tree";
import {Compare, defaultCompare} from "../utils";

class Node{
    key:number
    left:Node | null
    right:Node | null
    constructor(key:number) {
        this.key = key
        this.left = null
        this.right = null
    }
}

enum BalanceFactor{
    UNBALANCED_RIGHT=1,
    SLIGHTLY_UNBALANCED_RIGHT=2,
    BALANCED=3,
    UNBALANCED_LEFT=4,
    SLIGHTLY_UNBALANCED_LEFT=5,
}

class AVLTree extends BinarySearchTree{
    compareFn:(a:number,b:number)=>Compare
    root:Node | null
    constructor(compareFn=defaultCompare) {
        //这个super相当于把 BinarySearchTree 中的 constructor 给执行了
        //调用 父对象/父类 的构造函数
        //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super
        super(compareFn);
        this.compareFn = compareFn
        this.root = null
    }

    private getNodeHeight(node:Node | null): number{
        if(node === null){
            return -1
        }
        return Math.max(this.getNodeHeight(node.left),this.getNodeHeight(node.right)) + 1
    }
    getBalanceFactor(node:Node | null){
        const heightDifference = this.getNodeHeight(node!.left) - this.getNodeHeight(node!.right)
        switch (heightDifference) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
            case 2:
                return BalanceFactor.UNBALANCED_LEFT
            default:
                return BalanceFactor.BALANCED
        }
    }
}
