import { useState,useEffect } from "react";
import heart from "./heart.gif"
function Counter({name, setName, command}){
const [damageType, setDamageType]=useState(true)

function DamageTYPE(){
    setDamageType(!damageType)
}


const [total, setTotal] = useState(0)
let [value, setValue] = useState(40) //40 to Win
let [valueCommander, setValueCommander] = useState(0) //21 to Win
let [poisonCounter,setPoisonCounter]=useState(0)

// Normal
function Increment(){
    setValue(value++)
}

function Decrement(){
    setValue(value--)
}

function IncrementPoison(){
    setPoisonCounter(poisonCounter++)
}

function DecremenPoison(){
    setPoisonCounter(poisonCounter--)
}

function DecrementCommander(){
    setValue(value--)
    setValueCommander(valueCommander++)
}

// const [inputValue, setInputValue] = useState('');

// // Event handler for the onChange event
// const handleInputChange = (event) => {
//   // Update the state with the new value
//   setInputValue(event.target.value);
//   console.log(inputValue)
// };

// function SubmitInput(event){
//     event.preventDefault()
//     name.push(inputValue)
// }
return(
<div style= {{border:"solid", backgroundColor:"black", borderColor:"white", borderRadius:"10px", flexFlow:"row"}}>

{/* <form onSubmit={SubmitInput}>
<input placeholder="Your Name..." type="text" onChange={handleInputChange} value={inputValue} ></input>
</form> */}
<input placeholder="Your Name..." type="text"  ></input>


<div style={{color:"red"}}>
{/* <div>Normal Damage</div> */}
<button onClick={Increment}>+</button><span style={{color:"red", fontSize:"30px"}}><strong>  {value}  </strong></span><button onClick={Decrement}>-</button>
</div>


{/* <div style={{backgroundColor:"#00ff2a4d", padding:"10px"}}>
<div style={{color:"green"}}>Poison Counters</div>
<button  style={{color:"green"}} onClick={IncrementPoison}>+</button>
<button  style={{color:"green"}} onClick={DecremenPoison}>-</button>
</div> */}
<img style={{width:"70px", height:"70px"}} src={heart}></img>
<br></br>
<br></br>

{/* <span style={{color:"red", fontSize:"30px"}}><strong>{value}</strong></span> */}
{/* {command ===1 ?<div style={{color:"purple"}}>Commander Damage P1 {valueCommander}/21</div> : null}
<div style={{color:"green"}}>Poison Counters {poisonCounter}/30</div> */}
</div>

)



}

export default Counter