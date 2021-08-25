import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, {Navigation} from 'swiper';
import {Link} from 'react-router-dom'
import dataproject from '../dataproject';
import style from "./style.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

SwiperCore.use([Navigation]);


const Project = () => {
    return (
        <div style={{
            background:"#262626"
        }} className="w-full h-screen  box-border flex justify-between relative px-20 py-20 top-0">
           <div className="container">
                <h1 className="text-green-400 font-mono text-6xl font-semibold justify-center flex">Projects</h1>
                <p className="flex justify-center mt-1 text-gray-300 italic">"some of my recent works"</p>
                <div className="flex justify-center  wx-auto h-full items-center">
                <Swiper spaceBetween={30}
                    slidesPerView={1}
                    navigation 
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={swiper => console.log(swiper)}
               
                    breakpoints={{
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 1200px
                    1200: {
                        slidesPerView: 3,
                    },
                }}>
                {dataproject.map((project,index) =>{
                    
                    return(
                        <SwiperSlide key={project.id}>
                            <Link to="" className=" w-full  overflow-hidden">
                            <img src={project.img} className="  rounded-2xl w-full h-80"></img>
                            </Link>
                            <div style={{
                                background:"#262626",
                            }} className="mt-10 text-center ">
                                <Link to="#">
                                <h3 className="text-gray-300 font-sans font-bold text-2xl ">{project.title}</h3>
                                </Link>
                                <p className="text-gray-300 ">{project.desc}</p>
                                <button className="mt-4 font-semibold bottom-12 bg-green-400 w-40 h-10 rounded-full hover:bg-white ">Demo</button>
                            </div>

                        </SwiperSlide>
                   
                    )
                })}
                </Swiper>
                </div>
           </div>

        </div>
    )
}

export default Project
