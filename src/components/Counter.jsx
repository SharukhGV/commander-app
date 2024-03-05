import { useState,useEffect } from "react";

function Counter(){
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



return(
<div style= {{border:"solid", borderColor:"black"}}>

<input placeholder="Your Name..." type="text"></input>

{damageType ? <button style={{color:"purple"}} onClick={DamageTYPE}>Commander Damage</button> : <button onClick={DamageTYPE}>Normal Damage</button>}


{damageType ? 
<div style={{backgroundColor:"rgba(128, 0, 128, 0.39)", padding:"10px"}}>
<div style={{color:"purple"}}>Commander Damage</div>
<button style={{color:"purple"}} onClick={Increment}>+</button>
<button style={{color:"purple"}} onClick={DecrementCommander}>-</button>
</div>
:
<div>
<div>Normal Damage</div>
<button onClick={Increment}>+</button>
<button onClick={Decrement}>-</button>
</div>
}

<div style={{backgroundColor:"#00ff2a4d", padding:"10px"}}>
<div style={{color:"green"}}>Poison Counters</div>
<button  style={{color:"green"}} onClick={IncrementPoison}>+</button>
<button  style={{color:"green"}} onClick={DecremenPoison}>-</button>
</div>

<div><strong>LIFE TOTAL: {value}</strong></div>
<div style={{color:"purple"}}>Commander Damage {valueCommander}/21</div>
<div style={{color:"green"}}>Poison Counters {poisonCounter}/30</div>
</div>

)



}

export default Counter