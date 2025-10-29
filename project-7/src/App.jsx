import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(1)


  function increaseNum() {
    setNum(num+1)
    }


  function decreaseNum() {
    setNum(num-1)
    }
  return (
    <div >
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
    </div>
  )
}

export default App