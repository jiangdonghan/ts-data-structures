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

/*
通过指针（引用）来表示节点之间的关系，一个指向左侧子节点，一个指向右侧字节点
 */
export default class BinarySearchTree{
    compareFn:(a:number,b:number)=>Compare
    root:Node | null
    constructor(compareFn = defaultCompare){
        this.compareFn = compareFn
        this.root = null
    }

    insert(key:number){
        if(this.root == null){
            this.root = new Node(key)
        }else{
            this.insertNode(this.root,key)
        }
    }
    insertNode(node:Node,key:number){
        if(this.compareFn(key,node.key) === Compare.LESS_THAN){
            if(node.left == null){
                node.left = new Node(key)
            }else{
                this.insertNode(node.left,key)
            }
        }else{
            if(node.right == null){
                node.right = new Node(key)
            }else{
                this.insertNode(node.right,key)
            }
        }
    }
    inOrderTraverse(callback:Function){
        this.inOrderTraverseNode(this.root,callback)
    }
    inOrderTraverseNode(node:Node | null,callback:Function){
        if(node!==null){
            this.inOrderTraverseNode(node.left,callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right,callback)
        }
    }
    preOrderTraverse(callback:Function){
        this.preOrderTraverseNode(this.root,callback)
    }
    preOrderTraverseNode(node:Node | null,callback:Function){
        if(node!==null){
            callback(node.key)
            this.preOrderTraverseNode(node.left,callback)
            this.preOrderTraverseNode(node.right,callback)
        }
    }
    postOrderTraverse(callback:Function){
        this.postOrderTraverseNode(this.root,callback)
    }
    postOrderTraverseNode(node:Node | null,callback:Function){
        if(node!==null){
            callback(node.key)
            this.inOrderTraverseNode(node.left,callback)
            this.inOrderTraverseNode(node.right,callback)
        }
    }
    min(){
        return this.minNode(this.root)
    }
    minNode(node:Node | null){
        let current = node
        while(current!==null && current.left !==null){
            current = current.left
        }
        return current
    }
    max(){
        return this.maxNode(this.root)
    }
    maxNode(node:Node | null){
        let current = node
        while(current!==null && current.right !==null){
            current = current.right
        }
        return current
    }

    search(key:number){
       return this.searchNode(this.root,key)
    }

    searchNode(node:Node | null,key:number):boolean{
        if(node===null){
            return false
        }
        if(this.compareFn(key,node.key) === Compare.LESS_THAN){
            return this.searchNode(node.left,key)
        }else if(this.compareFn(key,node.key) === Compare.BIGGER_THAN){
            return this.searchNode(node.right,key)
        }else{
            return true
        }
    }
    remove(key:number){

    }
    removeNode(node:Node | null,key:number){
        if(node === null){
            return null
        }
        if(this.compareFn(key,node.key) === Compare.LESS_THAN){
            node.left = this.removeNode(node.left,key)
            return node
        }else if(this.compareFn(key,node.key) === Compare.BIGGER_THAN){
            node.right = this.removeNode(node.right,key)
            return node
        }else{
            //key = node.key
            //第一种情况两边都是需要remove的节点两边都是null
            if(node.left === null && node.right === null){
                node = null
                return node
            }
            //第二种情况有一边是null
            if(node.left === null){
                node = node.right
                return node
            }else if(node.right === null){
                node = node.left
                return node
            }
            //第三种情况，两边都有
            const aux = this.minNode(node.right)
            node.key = aux!.key as number
            node.right = this.removeNode(node.right,aux!.key)
            return node
        }
    }
}
