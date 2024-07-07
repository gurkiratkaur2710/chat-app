import React from 'react'

const Task2 = () => {
    const add = (a,b)=>{
        let sum = a+b;
        return sum;
    }
    const sub = (a,b)=>{
        let subtract = a-b;
        return subtract
    }
    const mult = (a,b)=>{
        let multiply=a*b;
        return multiply
    }
    const div = (a,b)=>{
        let divide=a/b;
        return divide
    }
  return (
    <div>
        <>
      <h1>add 2 no {add(30, 6)}</h1>
      <h1>subtract 2 no {sub(30, 6)}</h1>
      <h1>multiply 2 no {mult(30, 6)}</h1>
      <h1>divide 2 no {div(30, 6)}</h1>
      </>
    </div>
  )
}

export default Task2
