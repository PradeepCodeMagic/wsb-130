
import axios from 'axios'
import './App.css'
import Header from './comman/Header'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function App() {

  const [loading,setLoading]=useState(true)

  // cat-work
  const [catData,setCatData]=useState([])
  let showCategory=()=>{
    axios.get("https://dummyjson.com/products/categories")
    .then((catItem)=>{
      setCatData(catItem.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  // show-product
  const [pData,setPData]=useState([])

  let displayProdcut=(url)=>{
    let myApi;

    if(url==undefined){
      myApi="https://dummyjson.com/products?limit=200"
    }
    else{
      myApi=url
    }

    
    axios.get(myApi)
    .then((ress)=>{
      setPData(ress.data.products)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  // getSingelCat
  let getSingelCat=(url)=>{
    displayProdcut(url)
  }


  useEffect(()=>{
    showCategory()
    displayProdcut()
  },[])

  return (
    <>
    

      <div className='w-[1200px] mx-auto  '>
        <div className='grid grid-cols-[20%_auto]'>
            
          <div className='left'>
            <h2 className='text-[20px] font-bold py-[20px] ' > All Category </h2>

            <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {catData.map((v)=>{
                return(
                  <>
                  <li className="w-full px-4 py-2 rounded-b-lg" onClick={()=>getSingelCat(v.url)} > {v.name} </li>

                  </>
                )
              })}
              
            </ul>

          </div>

          <div className='right'>
            <h2 className='text-[20px] font-bold py-[20px] ' > All Product </h2>

            <div className='grid grid-cols-4 gap-4  h-[900px]   rightDiv  '>

            {loading==true ? 
              <>
              <Loading/>
              <Loading/>
              <Loading/>
              <Loading/>
              <Loading/>
              <Loading/>
              <Loading/>
              <Loading/>
              
              </>
              
             : 
             pData.map((v)=>{
                return(
                 <>
                  <Box data={v} />
                 </>
                )
              })
             }
                
               
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App

let Box=({data})=>{

  let {thumbnail,title,brand,id}=data


  return(
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-lg" src={thumbnail} alt="" />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {title} </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      <Link to={`/detail-page/${id}`} >
      <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          
          {id}
         
        
      </button>
      </Link>
    </div>
  </div>

  )
}


let Loading=()=>{
  return(
    

<div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
</div>

  )
}