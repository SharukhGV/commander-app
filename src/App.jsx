import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import ButtonPegs from './components/ButtonPegs'

function App() {
    const [count, setCount] = useState(0)
    let [playerAmount, setPlayerAmount] = useState(1)
    const [name, setName] = useState([]);



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

    // let [command, setCommand] = useState(1)

    // function CommandIncrease() {
    //     if (command > 8) {
    //         setCommand(8)
    //     }
    //     else {
    //         setCommand(command++)
    //     }
    // }
    // function CommandDecrease() {
    //     if (command < 1) {
    //         setCommand(1)
    //     }
    //     else {
    //         setCommand(command--)
    //     }
    // }

    return (
        <div>
            <button onClick={PlayerIncrease }>Add A Player</button>
            <button onClick={PlayerDecrease}>Remove A Player</button>

            <div >
                <div>
                    <Counter /></div>
                <div>
                    {playerAmount === 1 ? <div>  <ButtonPegs /></div> : null}

                    {playerAmount === 2 ? <div>  <ButtonPegs /><br></br><ButtonPegs /></div> : null}
                    {playerAmount === 3 ? <div>  <ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /></div> : null}
                    {playerAmount === 4 ? <div>  <ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /></div> : null}
                    {playerAmount === 5 ? <div>  <ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /></div> : null}
                    {playerAmount === 6 ? <div>  <ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /></div> : null}
                    {playerAmount === 7 ? <div>  <ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /></div> : null}
                    {playerAmount === 8 ? <div>  <ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /><br></br><ButtonPegs /></div> : null}
                </div></div>





        </div>
    )
}

export default App
