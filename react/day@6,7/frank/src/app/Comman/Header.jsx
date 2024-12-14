"use client"
import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Header.css"
import { IoIosArrowDown } from "react-icons/io";
import { FaAngleUp } from "react-icons/fa";

export default function Header() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:true,
  };


  const [flag,setFlag]=useState(false)
  let changeFlag=()=>{
    setFlag(!flag)
  }
  return (
    <div className='' >
      {/* top */}
      <div className='w-full bg-black  py-[10px] flex '>
        <div className='text-white w-[80%] mx-auto  '>
          <Slider {...settings}>
            <div>
              <p className='text-center text-[14px]' >Let's share the magic! Frank And Oak's Holiday Shop is here. Explore now</p>
            </div>
            
            <div>
              <p className='text-center text-[14px]' >Let's share the magic! Frank And Oak's Holiday Shop is here. Explore now</p>
            </div>
            <div>
              <p className='text-center text-[14px]' >Let's share the magic! Frank And Oak's Holiday Shop is here. Explore now</p>
            </div>
            <div>
              <p className='text-center text-[14px]' >Let's share the magic! Frank And Oak's Holiday Shop is here. Explore now</p>
            </div>
            <div>
              <p className='text-center text-[14px]' >Let's share the magic! Frank And Oak's Holiday Shop is here. Explore now</p>
            </div>
          </Slider>
        </div>

        <div onClick={changeFlag} className=' hidden md:block flex items-center w-[20%] text-white text-center relative '> $ USD  {flag ? <FaAngleUp /> :<IoIosArrowDown />  }  </div>
        
          
            <div className={`w-[120px] p-[10px] bg-[#ccc]  absolute top-[7%] right-[5%] ${flag==true ? "block" : "hidden"} `}>
                    <ul>
                            <li>$ CAD</li>
                            <li> $ USD</li>
                    </ul>
            </div>

      </div>



    </div>
  )
}
