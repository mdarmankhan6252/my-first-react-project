import { useState } from "react"

export default function Counter(){
   const [Counter, setCounter] = useState(0);

   const handleAdding = () =>{
      const newCounter = Counter + 1;
      setCounter(newCounter)

   }
   const handleRemoving = () =>{
      const newCounter = Counter - 1;
         setCounter(newCounter)
   }


   


   const CounterStyle = {
      border : '2px solid green',
      padding: '20px',
      borderRadius: '20px',

   }
   return(
      <div style={CounterStyle}>
         <h3>Adding: {Counter}</h3>
         <button onClick={handleAdding} style={{border:'2px solid green'}}>Click Me to Add</button>
         <button onClick={handleRemoving} style={{border:'2px solid green'}}>Click Me to Remove</button>
      </div>

   )
}