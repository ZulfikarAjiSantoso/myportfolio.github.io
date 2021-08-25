import React from 'react'
import { MdEmail,  MdPlace, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div style={{
            background:"#262626"
        }} className="h-screen flex justify-between px-20 py-10">
            <div className="container ">
                <h1 className="text-green-400 font-mono text-6xl font-semibold justify-center flex">Contact</h1>
                <p className="flex justify-center mt-1 w-full text-gray-300 italic">"call me please"</p>
                <div className="wrapper flex relative gap-3 mt-10 justify-center flex-col md:flex-row md:flex md:justify-between">
                    <div className="flex  flex-col md:p-24 md:py-10 md:ml-10  top-0"
                        >
                        <div style={{
                            background:" #1a1a1a"
                        }} className="flex flex-row items-center text-gray-300 mt-3 font-mono px-7 py-4 md:px-8 md:py-7  rounded-lg" ><MdLocalPhone className="text-3xl rounded-full  rounded-full " style={{
                            background:"rgb(140, 140, 140, 0.3)",
                           
                         }} />
                         <p className="ml-3">  +62456163</p>
                     
                        </div>
                        <div className="flex items-center text-gray-300 mt-3 font-mono px-7 py-4 md:px-8 md:py-7  rounded-lg" style={{
                            background:" #1a1a1a"
                        }} ><MdEmail className="text-3xl rounded-full  " style={{
                            background:"rgb(140, 140, 140, 0.3)",
                           
                        }} />
                        <p className="ml-3" >zulfikarajisan@gmail.com</p>
                        </div>
                        <div className="flex items-center text-gray-300 mt-3 font-mono px-7 py-4 md:px-8 md:py-7    rounded-lg" style={{
                            background:" #1a1a1a"
                        }}><MdPlace className="text-3xl rounded-full  " style={{
                            background:"rgb(140, 140, 140, 0.3)",
                           
                        }} />
                        <p className="ml-3">Makale, Tana Toraja</p>
                        </div>
                    
                    </div>
                <div className="border-2 bg-white mt-5"></div>
                <div><ContactForm /> </div>
                </div>
            </div>
        </div>  
    )
}

export default Contact
