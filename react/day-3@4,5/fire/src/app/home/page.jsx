"use client"
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, set , onValue} from "firebase/database";
import { app } from "../FireConfig"
import { v4 as uuidv4 } from 'uuid';

export default function page() {


  let userForm = (e) => {
    e.preventDefault()
    let userObj = {
      name: e.target.Uname.value,
      email: e.target.Uemail.value,
      number: e.target.Unumber.value,
      password: e.target.Upassword.value,
    }

    const db = getDatabase(app);
    let userId = uuidv4()
    console.log(userId)

    set(ref(db, 'BCA-1/' + userId), userObj)

    e.target.reset()
  }

  const [fData,setFData]=useState([])
  
  let showData = () => {
    const db = getDatabase(app);
    const starCountRef = ref(db, 'BCA-1/' );

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      
      let newArr=[]
      for(let v in data){
        newArr.push(data[v])
      }

      setFData(newArr)

      updateStarCount(postElement, data);
    });
  }

  useEffect(()=>{
    showData()
  },[])

  return (
    <div>
      <div className="max-w-[800px] mx-auto ">
        <form onSubmit={userForm} >
          <input name='Uname' className=' text-black p-[10px] w-[800px] m-[10px] ' type='text' placeholder='enter name' />
          <br />
          <input name='Uemail' className=' text-black p-[10px] w-[800px] m-[10px] ' type='email' placeholder='enter email' />
          <br />
          <input name='Unumber' className=' text-black p-[10px] w-[800px] m-[10px] ' type='number' placeholder='enter number' />
          <br />
          <input name='Upassword' className=' text-black p-[10px] w-[800px] m-[10px] ' type='password' placeholder='enter password' />
          <br />

          <button className='p-[10px_30px] bg-[red] text-white ' > Save </button>
        </form>
      </div>

      <div className='max-w-[800px] mx-auto '>


        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Sr.
                </th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Number
                </th>
                <th scope="col" class="px-6 py-3">
                  Password
                </th>
              </tr>
            </thead>
            <tbody>

            {fData.length>0 ? 
              fData.map((v,i)=>{
                return(
                  <>
                  <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {i+1}
                </th>
                <td class="px-6 py-4">
                  {v.name}
                </td>
                <td class="px-6 py-4">
                  {v.email}
                </td>
                <td class="px-6 py-4">
                  {v.number}
                </td>
                <td class="px-6 py-4">
                  {v.password}
                </td>
              </tr>
                  </>
                )
              })
            :
             "No Record Found"
             }

              

            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
