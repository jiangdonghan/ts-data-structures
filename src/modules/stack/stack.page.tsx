import React, {useEffect} from 'react'
import {ArrayStack, decimalToBinary} from "../../data-structure/stack";

export const StackPage = () => {
  const createStackArray = () => {
    const stackArray = new ArrayStack()
    console.log(stackArray.isEmpty())
    stackArray.push(12)
    console.log(stackArray.peak())
  }

  useEffect(()=>{
    createStackArray()
    const binaryStr = decimalToBinary(23)
    console.log(binaryStr)
  },[])
  return (<div className="text-xl">stack</div>)
}
