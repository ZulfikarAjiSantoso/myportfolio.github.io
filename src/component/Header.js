import React from 'react'
import data from '../data'
import Typical from 'react-typical'
import { ImProfile } from 'react-icons/im'
import {AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare, AiFillFacebook, AiFillYoutube} from 'react-icons/ai'

const Header = () => {
    return (
        <div className="min-h-screen flex items-center justify-evenly"
        style={{
            background:"#262626"
        }}>
      
            <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-evenly">
                <div className=" flex justify-center flex-col" >
                
                <img className=" rounded-r-full" src={data.header.img}></img>
                </div>  
                <div className="text-white font-dosis text-center md:text-left ">
                    <h2 className="text-3xl font-bold md:text-4xl">
                        <span className="italic text-xl">{data.header.text[0]}</span>
                        <br/>
                        {data.header.text[1]}
                    </h2>
                    <h1 className="text-2xl text-gray-500">
                        {data.header.text[2]} <span className="font-semibold text-green-400">
                        <Typical 
                            steps={data.header.typical}
                            loop={Infinity}
                            className="inline-block"
                    />
                    </span>
                    </h1>
                    <br />
                    <button className="bg-green-400 px-10 py-3 uppercase rounded-full  
                    transition duration-300 ease-in-out animate-bounce
                    ">{data.header.btnText}
                    <ImProfile className="ml-5 inline-block " />
                    </button>
                    </div >
                    <div className="flex text-white mt-2 space-x-6 md:space-x-0 md:space-y-6 md:mr-10 md:flex-col md:mr-30 ">
                    
                        <a href="" className=""><AiFillLinkedin /></a>
                    
                        <a href=""><AiFillInstagram /></a>
                        <a href=""><AiFillTwitterSquare /></a>
                        <a href=""><AiFillFacebook /></a>
                        <a href=""><AiFillYoutube /></a>
                      
                    </div>
                
            </div>
        </div>
    )
}

export default Header
