import { useState,useEffect } from "react";

function Counter(){
const [damageType, setDamageType]=useState(true)

function DamageTYPE(){
    setDamageType(!damageType)
}


const [total, setTotal] = useState(0)
let [value, setValue] = useState(40) //40 to Win
let [valueCommander, setValueCommander] = useState(0) //21 to Win


// Normal
function Increment(){
    setValue(value++)
}

function Decrement(){
    setValue(value--)
}


function DecrementCommander(){
    setValue(value--)
    setValueCommander(valueCommander++)
}



return(
<div style= {{border:"solid", borderColor:"black"}}>

<input placeholder="Your Name..." type="text"></input>

{damageType ? <button onClick={DamageTYPE}>Commander Damage</button> : <button onClick={DamageTYPE}>Normal Damage</button>}


{damageType ? 
<div>
<div>Commander Damage</div>
<button  onClick={Increment}>+</button>
<button onClick={DecrementCommander}>-</button>
</div>
:
<div>
<div>Normal Damage</div>
<button onClick={Increment}>+</button>
<button onClick={Decrement}>-</button>
</div>
}


<div>LIFE TOTAL: {value}</div>
<div>Commander Damage {valueCommander}/21</div>
</div>

)



}

export default Counter