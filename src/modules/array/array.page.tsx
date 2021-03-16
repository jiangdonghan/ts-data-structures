import React, {useEffect} from 'react'

interface person {
  name:string
  age:number
}
export const ArrayPage = () => {
  const friends:person[] = [
    {
    name:'jimmy',age:30
    },
    {
      name:'jay',age:10
    },
    {
      name:'tom',age:40
    },
  ]
  function comparePerson(a:person,b:person){
    if(a.age < b.age){
      return -1
    }
    if(a.age < b.age){
      return 1
    }
    return 0
  }
  useEffect(()=>{
    console.log(friends.sort(comparePerson))
  },[])
  return (<div className="text-xl">array</div>)
}
