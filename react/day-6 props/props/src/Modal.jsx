import React, { useState } from 'react'
import './App.css'

export default function Modal() {

    let [modal,setModal]=useState(false)

    let myModal=()=>{
        setModal(!modal)
    }

  return (
    <>
        <button onClick={myModal} >  {modal==true ? "hide" : "show"}  </button>

        <div className={modal==true ? "activeModal" : "modal" }></div>
    </>
  )
}
