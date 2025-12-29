import React, { useEffect }  from "react";

export default function Apicalltwo(){
    const handle =( ) =>{
        console.log("calinggggggggggg")
    }
    useEffect(()=>{
        handle()
    })
    return(
        <div>
            {/* //Mounting > updating > unmounted */}
            <h1>Useeffect</h1>
        </div>
    )
}