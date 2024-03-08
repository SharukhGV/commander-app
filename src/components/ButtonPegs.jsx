
import CommanderDamage from "./CommanderDamage"
import BioHazard from "./BioHazard"
import biohazardYellow from "./biohazardYellow1.png"
import comDamage from"./comDamage.png"
import { useState } from "react";
function ButtonPegs(){
    let [commander,setCommander]=useState(0)

    function IncreaseCommander(){
        setCommander(commander++)
        setCommander(commander++)

    }
    function DecreaseCommander(){
        if(commander<=0){setCommander(0)}
        else{setCommander(commander--);setCommander(commander--)}
    }
let [poison,setPoison]=useState(0)

function IncreasePoison(){
    setPoison(poison++)
    setPoison(poison++)
}
function DecreasePoison(){
    if(poison<=0){setPoison(0)}
    else{setPoison(poison--);setPoison(poison--)}
}

        const [currentColor, setCurrentColor] = useState("white");
      
        const colors = {
          red: { backgroundColor: "rgba(255, 0, 0, 0.50)",border:"solid", borderRadius:"10px", borderColor:"black", paddingBottom:"20px" },
          purple: { backgroundColor: "rgba(162, 0, 255, 0.50)",border:"solid", borderRadius:"10px", borderColor:"black", paddingBottom:"20px" },
          green: { backgroundColor: "rgba(0, 255, 0, 0.50)",border:"solid", borderRadius:"10px", borderColor:"black", paddingBottom:"20px" },
          orange: { backgroundColor: "rgba(255, 187, 0, 0.50)",border:"solid", borderRadius:"10px", borderColor:"black", paddingBottom:"20px" },
          blue: { backgroundColor: "rgba(0, 0, 255, 0.50)",border:"solid", borderRadius:"10px", borderColor:"black", paddingBottom:"20px" },
          gray: { backgroundColor: "rgba(161, 161, 161, 0.50)",border:"solid", borderRadius:"10px", borderColor:"black", paddingBottom:"20px" },
        };
      function Red(){
        setCurrentColor("red")
      }
      function Purple(){
        setCurrentColor("purple")
      }  function Green(){
        setCurrentColor("green")
      }  function Orange(){
        setCurrentColor("orange")
      }  function Blue(){
        setCurrentColor("blue")
      }  function Grey(){
        setCurrentColor("gray")
      }

return(
    <div>
        <button style={{borderRadius:"10px",backgroundColor:"red"}} onClick={Red}></button>
        <button style={{borderRadius:"10px",backgroundColor:"purple"}} onClick={Purple}></button>
        <button style={{borderRadius:"10px",backgroundColor:"Green"}} onClick={Green}></button>
        <button style={{borderRadius:"10px",backgroundColor:"Orange"}} onClick={Orange}></button>
        <button style={{borderRadius:"10px",backgroundColor:"Blue"}} onClick={Blue}></button>
        <button style={{borderRadius:"10px",backgroundColor:"Gray"}} onClick={Grey}></button>   
         <input type="text" placeholder="Opponent's Name"/>

<div style={colors[`${currentColor}`]}>
<h2 style={{color:"white"}}>Commander Damage</h2>
{/* <div><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/></div>
<div><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/></div>
<div><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/></div> */}
<div><img style={{width:"50px", height:"50px"}} src={comDamage}></img></div>
<button onClick={IncreaseCommander}>+</button><span style={{fontSize:"30px"}}>  {commander}  </span>
<button onClick={DecreaseCommander}>-</button>
</div>
<div style={colors[`${currentColor}`]}>
    <h2 style={{color:"white"}}>Poison Counters</h2>
{/* <div><BioHazard /> <BioHazard /> <BioHazard /><BioHazard /><BioHazard /></div>
<div><BioHazard /> <BioHazard /> <BioHazard /><BioHazard /><BioHazard /></div>
<div><BioHazard /> <BioHazard /> <BioHazard /><BioHazard /><BioHazard /></div>
<div><BioHazard /> <BioHazard /> <BioHazard /><BioHazard /><BioHazard /></div>
<div><BioHazard /> <BioHazard /> <BioHazard /><BioHazard /><BioHazard /></div>
<div><BioHazard /> <BioHazard /> <BioHazard /><BioHazard /><BioHazard /></div> */}
<div><img style={{width:"50px", height:"50px"}} src={biohazardYellow}></img></div>
<button onClick={IncreasePoison}>+</button><span style={{fontSize:"30px"}}>  {poison}  </span>
<button onClick={DecreasePoison}>-</button>
</div>



</div>
)

}

export default ButtonPegs