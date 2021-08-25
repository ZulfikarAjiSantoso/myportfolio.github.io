import React,{ useState } from 'react'
import {Link} from 'react-router-dom'

import {FaBars, FaTimes} from "react-icons/fa"

function Navbar () {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
 
    return (
        <nav className="relative flex justify-between items-center h-16 text-black bg-red
            font-none py-7 " role="navigation">

            <Link to="/" className="pl-8 font-semibold">ZULFIKAR AJI S</Link>

            <div className="px-4 cursor-pointer  md:hidden " onClick={handleClick} >
            {click ? <FaTimes /> : <FaBars/>}
            </div>
            <div className= {click ? "flex" : "md:flex-col hidden" }>
                <ul className="flex  space-x-5 mr-10">
                    <li><a className="">Home</a></li>
                    <li><a className="">About</a></li>
                    <li><a className="">Services</a></li>
                    <li><a className="">Project</a></li>
                    
                </ul>
                
        
            </div>
   

        </nav>
    )
}

export default Navbar
 