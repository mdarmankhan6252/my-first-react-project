import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './count'
import Team from './Team'
import Counter2 from './Count2'
import Users from './user'
import Friends from './Friends'

function App() {

  function handleClick(){
    alert('Button Clicked');
  }
  const handleClick2 = () =>{
    alert('Button 2 is clicked')
  }
  const addToFive = (num) =>{
    alert(num + 5);

  }



  return (
    <>
      <h2>React Project 2024</h2>
      <Friends></Friends>
      <Users></Users>

      <Counter2></Counter2>

      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() =>{alert('Third Clicked')}}>Third Click</button>
      <button onClick={() =>{addToFive(3)}}>Four</button>
    </>
  )
}

export default App
