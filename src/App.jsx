import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
function App() {
  const [count, setCount] = useState(0)
  let [playerAmount, setPlayerAmount] = useState(1)


  function PlayerIncrease() {
    if (playerAmount > 8) {
      setPlayerAmount(8)
    }
    else {
    setPlayerAmount(playerAmount++)
    }
  }
  function PlayerDecrease() {
    if (playerAmount < 1) {
      setPlayerAmount(1)
    }
    else {
      setPlayerAmount(playerAmount--)
    }
  }

  return (
<div>
    <button onClick={PlayerIncrease}>Add A Player</button>
      <button onClick={PlayerDecrease}>Remove A Player</button>


      <div style={{display: "flex",flexWrap: "wrap"}} className='flex-container'>

      {playerAmount === 1 ? <div>  <Counter /></div> : null}

     {playerAmount === 2 ? <div>  <Counter /><br></br><Counter /></div> : null}
 {playerAmount === 3 ? <div>  <Counter /><br></br><Counter /><br></br><Counter /></div> : null}
      {playerAmount === 4 ? <div>  <Counter /><br></br><Counter /><br></br><Counter /><br></br><Counter /></div> : null}
      {playerAmount === 5 ? <div>  <Counter /><br></br><Counter /><br></br><Counter /><br></br><Counter /><br></br><Counter /></div> : null}
      {playerAmount === 6 ? <div>  <Counter /><br></br><Counter /><br></br><Counter /><br></br><Counter /><br></br><Counter /><br></br><Counter /></div> : null}
       {playerAmount === 7 ? <div>  <Counter /><br></br><Counter /><br></br><Counter /><br></br><Counter /><br></br><Counter /><br></br><Counter /><br></br><Counter /></div> : null}
       {playerAmount === 8 ? <div>  <Counter /><br></br><Counter /><br></br><Counter /><br></br><Counter /><br></br><Counter /><br></br><Counter /><br></br><Counter /><br></br><Counter /></div> : null}
</div>



    </div>
  )
}

export default App
