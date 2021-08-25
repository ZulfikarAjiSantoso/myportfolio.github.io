import React from 'react'
import bgg from "../img/about.jpeg";

const About = () => {
    return (
        <div style={{
            background: "#262626"
        
        }}
        className="w-full h-screen box-border flex items-center justify-evenly relative px-20 py-20 " id="about">
            <div className="hidden md:flex">
                <img src={bgg} className="border-l-8 border-b-8">
                </img>
        
            </div>
        
            <div className="font-cabria md:ml-20 text-center">
            <h1 className="font-dosis font-semibold text-6xl text-green-400 mb-4">About US</h1>
            <h2 className="text-3xl text-white font-extralight font-sans mb-4">FrontEnd And Youtuber</h2> 
            <p className="text-gray-300 text-center md:px-10">Enjoy the ultimate web design editor. Divi is like Photoshop or Sketch for the web. It brings an advanced design interface to WordPress that both beginners and experts will fall in love with. It's incredibly smart, super flexible, amazingly powerful and visual by nature. This is how designing for the web is meant to be done.</p>
            <button btnLink="/about" className="  hover:bg-white hover:text-black h-10 bg-green-400 w-40 rounded-full transition duration-800 animate-pulse mt-4 " > View More Details </button>
            </div>
            <div className="ml-4 flex flex-col bottom-20 ">
            <p className="text-white absolute transform -translate-x-10 rotate-90">Scroll Down</p>
            <svg className="mt-20" width="8" height="44" viewBox="0 0 8 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.64645 43.3536C3.84171 43.5488 4.15829 43.5488 4.35356 43.3536L7.53554 40.1716C7.7308 39.9763 7.7308 39.6597 7.53554 39.4645C7.34027 39.2692 7.02369 39.2692 6.82843 39.4645L4 42.2929L1.17157 39.4645C0.976312 39.2692 0.65973 39.2692 0.464468 39.4645C0.269206 39.6597 0.269206 39.9763 0.464468 40.1716L3.64645 43.3536ZM3.5 2.18557e-08L3.5 43L4.5 43L4.5 -2.18557e-08L3.5 2.18557e-08Z" fill="white" fill-opacity="0.61"/>
            </svg>
          
            </div>
   

        </div>
    )
}

export default About
