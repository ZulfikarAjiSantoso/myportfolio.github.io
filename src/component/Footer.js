 import React from 'react'
import { Link } from 'react-router-dom'
import Footercol from './Footercol'


const Footer = () => {
    return (
        <div className="
         py-32 px-36
        " style={{ background: "#262626"}}>
            <div className="container md:flex">
                <div className=" text-gray-300 flex flex-col py-10 ">
                    <h1 className=" text-2xl font-mono font-bold" >Zulfikar Aji Santoso</h1>
                    <p className=" font-mono mt-3">
                        Saya adalah seorang web developer from Tana Toraja, Indonesia.
                        Saya selalu membuat website unik dan juga memiliki tampilan yang
                        baik
                    </p>
                </div>
                <div className=" text-gray-300 py-5 md:px-20 ">
                    <h2 className="font-mono text-2xl">Contact Info</h2>
                    <ul className="flex">
                        <li className="flex-col flex gap-2 text-lg mt-3">
                            <Link to="" >+6282292990294</Link>
                            <Link to="https://mail.google.com/" >zulfikarajisan@gmail.com</Link>
                            <Link >Tana Toraja, Sulawesi Selatan, Indonesia</Link>
                        </li>
                    </ul>

                </div>
                <div  className=" text-gray-300 py-5 md:px-20">
                    <h2 className="  font-mono text-2xl">Social media</h2>
                    <ul className="flex"> 
                        <li className="flex flex-col gap-2 text-lg mt-3">
                            <Link to="https://www.instagram.com/" >Instagram</Link>
                            <Link to="https://id-id.facebook.com/" >Facebook</Link>
                            <Link to="https://twitter.com/twitter" >Twitter</Link>
                        </li>
                    </ul>

                </div>       
            </div>
            <div className="">
                <div className="flex justify-center transform translate-y-32">
                    <p className="text-white ">  © 2021 - Zulfikar Aji S | Create with React
                        <a></a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
