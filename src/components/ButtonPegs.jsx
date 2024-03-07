
import CommanderDamage from "./CommanderDamage"
import BioHazard from "./BioHazard"
import { useState } from "react";
function ButtonPegs(){




        const [currentColor, setCurrentColor] = useState("purple");
      
        const colors = {
          red: { backgroundColor: "red",border:"solid", borderRadius:"10px", borderColor:"black" },
          purple: { backgroundColor: "purple",border:"solid", borderRadius:"10px", borderColor:"black" },
          green: { backgroundColor: "green",border:"solid", borderRadius:"10px", borderColor:"black" },
          orange: { backgroundColor: "orange",border:"solid", borderRadius:"10px", borderColor:"black" },
          blue: { backgroundColor: "blue",border:"solid", borderRadius:"10px", borderColor:"black" },
          gray: { backgroundColor: "grey",border:"solid", borderRadius:"10px", borderColor:"black" },
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
    <h2 style={{color:"white"}}>Poison Counters</h2>
<div><BioHazard /> <BioHazard /> <BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /></div>
<div><BioHazard /> <BioHazard /> <BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /></div>
<div><BioHazard /> <BioHazard /> <BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /></div>
</div>

<div style={colors[`${currentColor}`]}>
<h2 style={{color:"white"}}>Commander Damage</h2>
<div><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/></div>
<div><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/></div>
<div><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/></div>

</div>

</div>
)

}

export default ButtonPegs