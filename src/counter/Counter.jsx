import React from "react";

export default function Counter(color) {
  const[counter,setCounter]=React.useState(0);
  const add=()=>{
    setCounter(counter+1);
  }
  const dec=()=>{
    setCounter(counter-1);
  }
  let a=counter%2===0?"Red":"Blue";
  console.log(a);
  return (
   <>
   <h1>Counter</h1>
   <h1 style={{color:a}}>{counter}</h1>
   <button onClick={add}>+</button>
   <button onClick={dec}>-</button>
 </>
  );
}
