

import { useState } from 'react'
import './App.css'

function App() {
  

  const [inputValue,setInputValue]=useState(null)

  const [allTodo,setAllTodo]=useState([])


  let getInputValue=()=>{
    setAllTodo([...allTodo,inputValue])
    setInputValue('')
  }

  return (
    <>
      <div className='main'>
          <h3> To Do App </h3>

          <div className='row'>
                <input type='text' onChange={(e)=>setInputValue(e.target.value)} value={inputValue}  placeholder='enter your task'  />
                <button onClick={getInputValue} >Add </button>
          </div>

          <div className='row2'>
                <ul>
                  {
                    allTodo.map((v,i)=>{
                     return(
                      <>
                      <MyLi data={v}  index={i}  allTodo={allTodo} setAllTodo={setAllTodo} />
                      </>
                     )
                    })
                  }

                </ul>
          </div>
      </div>
    </>
  )
}

export default App

 
////////////////////////////////////////////////////////////////////////////////////////////////////////
let MyLi=({data,index,allTodo,setAllTodo})=>{

  let [activeLi,setActiveLi]=useState(false)
  let getLi=()=>{
    setActiveLi(!activeLi)
  }

  // FilterData
  let FilterData=()=>{
    let newData=allTodo.filter((v,i)=> i!=index )
    setAllTodo(newData)
  }

  return(
    <li onClick={getLi} className={activeLi==true ? "activeLi" : ""} > {data}   <span onClick={FilterData} > X </span> </li>
  )
}
