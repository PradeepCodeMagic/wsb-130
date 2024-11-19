import React, { useEffect, useState } from "react";
import Header from "./comman/Header";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetailsPage() {
    let uId = useParams().id;
    const [data, setData] = useState(null)

    const [smallImg, setSmallImg] = useState([])

    

    let getSingleData = () => {
        axios.get(`https://dummyjson.com/products/${uId}`)
            .then((ress) => {
                setData(ress.data)
                setSmallImg(ress.data.images)
                setBigImg(ress.data.thumbnail)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const [bigImg,setBigImg]=useState("")
    let getSrc=(mySrc)=>{
        setBigImg(mySrc.target.src)
    }
    useEffect(() => {
        getSingleData()
    }, [])



    return (
        <>
           
            <div className="mt-[40px] p-[20px] ">
                {data == null ? "Please Wait" :
                    <div className="grid grid-cols-[6%_40%_auto]">

                        <div className="">
                            {smallImg.map((v) => {
                                return (
                                    <>
                                        <div className="my-[5px]">
                                            <img className="w-[100%] bg-slate-300 " src={v} onMouseOver={getSrc} />
                                        </div>
                                    </>
                                )
                            })}





                        </div>
                        {/* Product Image Section */}
                        <div className="md:flex-1 px-4">
                            <div>
                                <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                                    <img src={bigImg} />
                                </div>
                            </div>
                        </div>

                        {/* Product Details Section */}
                        <div className="md:flex-1 px-4">
                            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                                {data.title}
                            </h2>
                            <p className="text-gray-500 text-sm">
                                By{" "}
                                <a href="#" className="text-indigo-600 hover:underline">
                                    {data.brand}
                                </a>
                            </p>

                            <div className="flex items-center space-x-4 my-4">
                                <div>
                                    <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                                        <span className="text-indigo-400 mr-1 mt-1">$</span>
                                        <span className="font-bold text-indigo-600 text-3xl">{data.price}</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-green-500 text-xl font-semibold">Save 12%</p>
                                    <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                                </div>
                            </div>

                            <p className="text-gray-500">
                                {data.description}
                            </p>

                            <div className="flex py-4 space-x-4">
                                <div className="relative">
                                    <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                                        Qty
                                    </div>
                                    <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>

                                    <svg
                                        className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                        />
                                    </svg>
                                </div>

                                <button
                                    type="button"
                                    className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>

                    </div>
                }

            </div>
        </>
    );
}
