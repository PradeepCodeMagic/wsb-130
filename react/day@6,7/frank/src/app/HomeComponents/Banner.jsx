import React from 'react'
import bannerImg from "../../../public/images/Partners_Factories_-_NAV_600x.jpg"
import Image from 'next/image'

export default function Banner() {
  return (
    <div className='w-full h-[100vh]  ' >
        <Image src={bannerImg} className='w-full h-[100vh]'/>
    </div>
  )
}
