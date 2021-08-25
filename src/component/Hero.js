import React from 'react';
import bg from "../img/a.jpg";

import { Link } from 'react-router-dom';
import {ImProfile} from"react-icons/im";


const Hero = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="py-40 flex flex-col lg:justify-center lg:items-center  "> 
                <h6 className=" relative italic px-2 md:px-4  md:text-1xl sm:px-1  lg:text-2xl "> Hello, my name is</h6>
                <h1 className="text-4xl px-2 lg:5xl  sm:1xl font-bold md:px-4  tracking-wider"> Zulfikar Aji Santoso</h1>
                <div className="py-1 px-2  md:px-4"> And I'm a <span> Web <b className="text-indigo-800"> Developer</b> </span> </div>
               <br/>
                <Link className=" md:flex-none text-white py-4 lg:px-10 bg-gray-700 rounded-full text-1xl hover:bg-transparent hover:text-black transition duration-300
                ease-in-out flex items-center animate-bounce ">
                     Download CV
                    <ImProfile className="ml-5" />
                </Link>
      
            </div>
      
        </div>
    )
}

export default Hero
