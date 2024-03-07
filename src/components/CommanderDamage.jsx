import { useState } from "react";
import comDamageDone from "./comDamageDone.png"
import comDamage from "./comDamage.png"
function CommanderDamage(){

    const [biohazard0, setbioHazard0]=useState()
    // const [biohazard1, setbioHazard1]=useState(true)
    // const [biohazard2, setbioHazard2]=useState(true)
    // const [biohazard3, setbioHazard3]=useState(true)
    // const [biohazard4, setbioHazard4]=useState(true)
    // const [biohazard5, setbioHazard5]=useState(true)
    // const [biohazard6, setbioHazard6]=useState(true)
    // const [biohazard7, setbioHazard7]=useState(true)
    // const [biohazard8, setbioHazard8]=useState(true)
    // const [biohazard9, setbioHazard9]=useState(true)
    // const [biohazard10, setbioHazard10]=useState(true)
    // const [biohazard11, setbioHazard11]=useState(true)
    // const [biohazard12, setbioHazard12]=useState(true)
    // const [biohazard13, setbioHazard13]=useState(true)
    // const [biohazard14, setbioHazard14]=useState(true)
    // const [biohazard15, setbioHazard15]=useState(true)
    // const [biohazard16, setbioHazard16]=useState(true)
    // const [biohazard17, setbioHazard17]=useState(true)
    // const [biohazard18, setbioHazard18]=useState(true)
    // const [biohazard19, setbioHazard19]=useState(true)
    // const [biohazard20, setbioHazard20]=useState(true)
    // const [biohazard21, setbioHazard21]=useState(true)
    // const [biohazard22, setbioHazard22]=useState(true)
    // const [biohazard23, setbioHazard23]=useState(true)
    // const [biohazard24, setbioHazard24]=useState(true)
    // const [biohazard25, setbioHazard25]=useState(true)
    // const [biohazard26, setbioHazard26]=useState(true)
    // const [biohazard27, setbioHazard27]=useState(true)
    // const [biohazard28, setbioHazard28]=useState(true)
    // const [biohazard29, setbioHazard29]=useState(true)
    // const [biohazard30, setbioHazard30]=useState(true)



function BioHazardSetting0(){
    setbioHazard0(!biohazard0)
}


 




    return(

<>

{biohazard0 ?  <img onClick={BioHazardSetting0} style={{width:"40px",height:"40px"}} src={comDamageDone}></img> :<img onClick={BioHazardSetting0} style={{width:"40px",height:"40px"}} src={comDamage}></img>}

</>

    )


}

export default CommanderDamage