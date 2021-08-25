import data from "../data";
import React,{ useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"

const Nav = () => {

const [click, setClick] = useState(false)
    
const handleClick = () => setClick(!click)
    return (
        <div style={{
             background:"#262626"
        }}>
            <div className="relative flex items-center justify-between px-4  py-3 text-white">
                <h1 className=" text-1xl"><span className="w-3 h-3 bg-green-300 inline-block mr-1 rounded-full"></span>Port<b className="text-green-400 text-1xl font-dosis">Folio</b> </h1>
                <div className="px-4 cursor-pointer  md:hidden " onClick={handleClick} >
            {click ? <FaTimes className="ml-20" /> : <FaBars/>}
            </div>
            <div className= {click ? "flex" : "md:block hidden" }>
                <ul className="flex space-x-5 mr-8 ">
                    <li><a className="hover:text-green-300 ">Home</a></li>
                    <li><a className="hover:text-green-300" href="/about">About</a></li>
                    <li><a className=" hover:text-green-300" href="/">Services</a></li>
                    <li><a className="hover:text-green-300">Project</a></li>
                    
                </ul>
        
            </div>
               

            </div>

        </div>
    )
}

export default Nav
