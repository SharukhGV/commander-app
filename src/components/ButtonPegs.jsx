
import CommanderDamage from "./CommanderDamage"
import BioHazard from "./BioHazard"

function ButtonPegs(){




return(
    <div style={{border:"solid", borderRadius:"10px", borderColor:"black"}}>
    <input type="text" placeholder="Opponent's Name"/>
<div style={{backgroundColor:"lightgreen", padding:"20px"}}>
    <h2 style={{color:"black"}}>Poison Counters</h2>
<div><BioHazard /> <BioHazard /> <BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /></div>
<div><BioHazard /> <BioHazard /> <BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /></div>
<div><BioHazard /> <BioHazard /> <BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /><BioHazard /></div>
</div>

<div style={{backgroundColor:"purple", padding:"20px"}}>
<h2 style={{color:"white"}}>Commander Damage</h2>
<div><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/></div>
<div><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/></div>
<div><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/><CommanderDamage/></div>

</div>

</div>
)

}

export default ButtonPegs