import React, {useEffect} from 'react'
import {ArrayStack} from "../../data-structure/stack";


export const StackPage = () => {
  function createStackArray(){
    const stackArray = new ArrayStack()
    console.log(stackArray.isEmpty())
    stackArray.push(12)
    console.log(stackArray.peak())
  }
  useEffect(()=>{
    createStackArray()
  },[])
  return (<div className="text-xl">stack</div>)
}
