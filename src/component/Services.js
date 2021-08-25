import React from 'react'
import { MdCode, MdPhonelinkSetup } from 'react-icons/md';
import {IoVideocam} from 'react-icons/io5';

const Services = () => {
    return (
        <div style={{
            background: "#262626"
        }} className='w-full h-screen  box-border flex justify-between relative px-20 py-20 top-0'>
            <div className="container">
                <h1 className="text-green-400 font-dosis text-6xl font-semibold justify-center flex">Services</h1>
                <p className="flex justify-center text-gray-300 italic">"What i will do for you"</p>
                <div className="flex flex-col justify-between items-center mt-10 md:mt-0  md:flex-row">
                    <div className="flex flex-col justify-center text-center">
                     <div className="justify-center flex text-white text-4xl"><IoVideocam /></div> 

                    <h6 className=" text-white font-dosis text-3xl font-semibold mb-4 tracking-wider">Video Editor</h6> 
                    <p className="text-gray-100 text">Keahlian saya selain menjadi web developer  adalah menjadi video editor,
                        saya bisa mengedit video memakai aplikasi edit video handphone maupun 
                        aplikasi editor video di laptop atau PC 
                    </p>
                    </div> 
                    <div className=" flex flex-col justify-center text-center mt-8 md:mt-80">
                    <div className= "justify-center flex text-white text-4xl"><MdCode /></div> 
                    <h6 className=" text-white font-dosis text-3xl font-semibold mb-4 ">Web Developer</h6>
                    <p className="text-gray-100 ">
                        Saya adalah seorang web developer yang dapat menggunakan html, css,
                        dan react. [saifaf asfasihfafbafasf0[etisaaoffa0s'[fy]]]
                    </p>
                    </div>
                    <div className=" flex flex-col justify-center text-center mt-8 md:mt-0 ">
                    <div className= "justify-center flex text-white text-4xl" > <MdPhonelinkSetup /></div> 
                    <h6 className=" text-white font-dosis text-3xl font-semibold mb-4 " > App Developer</h6>
                    <p className="text-gray-100 text" >
                    With Divi, every part of your website is customizable. You have complete freedom to create the perfect website for you or your clients. Easily change colors, fonts and text styles. Apply stunning animations.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
