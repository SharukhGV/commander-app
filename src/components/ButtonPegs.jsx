
import CommanderDamage from "./CommanderDamage"
import BioHazard from "./BioHazard"
import { useState } from "react";
function ButtonPegs(){




        const [currentColor, setCurrentColor] = useState("white");
      
        const colors = {
          red: { backgroundColor: "rgba(255, 0, 0, 0.50)",border:"solid", borderRadius:"10px", borderColor:"black", padding:"20px" },
          purple: { backgroundColor: "rgba(162, 0, 255, 0.50)",border:"solid", borderRadius:"10px", borderColor:"black", padding:"20px" },
          green: { backgroundColor: "rgba(0, 255, 0, 0.50)",border:"solid", borderRadius:"10px", borderColor:"black", padding:"20px" },
          orange: { backgroundColor: "rgba(255, 187, 0, 0.50)",border:"solid", borderRadius:"10px", borderColor:"black", padding:"20px" },
          blue: { backgroundColor: "rgba(0, 0, 255, 0.50)",border:"solid", borderRadius:"10px", borderColor:"black", padding:"20px" },
          gray: { backgroundColor: "rgba(161, 161, 161, 0.50)",border:"solid", borderRadius:"10px", borderColor:"black", padding:"20px" },
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
<div><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/></div>
<div><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/></div>
<div><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/></div>

</div>
<div style={colors[`${currentColor}`]}>
    <h2 style={{color:"white"}}>Poison Counters</h2>
<div><BioHazard /> <BioHazard /> <BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /></div>
<div><BioHazard /> <BioHazard /> <BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /></div>
<div><BioHazard /> <BioHazard /> <BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /></div>
</div>



</div>
)

}

export default ButtonPegs