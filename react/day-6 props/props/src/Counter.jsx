import React, { useState } from 'react'

export default function Counter() {

    let [myCounter,setMyCounter]=useState( 1 )

    let myDeValue=()=>{
        if(myCounter>1){
            setMyCounter(myCounter-1)
        }
       
    }
    
  return (
    <div>

        <button onClick={myDeValue} >-</button>
        <span> {myCounter} </span>
        <button onClick={()=> setMyCounter(myCounter+1) } >+</button>

    </div>
  )
}
