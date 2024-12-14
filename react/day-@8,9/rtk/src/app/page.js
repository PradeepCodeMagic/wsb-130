"use client"
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/Feacher/Counter/CounterSlice";

export default function Home() {
  const myCountData=useSelector((state)=>state.wsCounter.ws)
  const myDispatch=useDispatch()

  return (
   <div className="flex w-[600px] mx-auto ">
    <button className="border-2 p-[20px_30px] bg-slate-400 " onClick={()=>myDispatch(decrement())} > - </button>

    <h2> {myCountData}  </h2>

    <button className="border-2 p-[20px_30px] bg-slate-400 " onClick={()=>myDispatch(increment())} > + </button>
   </div>
  );
}
