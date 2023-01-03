import React from 'react'

import Mern from '../assets/Mern';
import Mern2 from '../assets/Mern2';
import Tododapp from '../assets/Tododapp';
import Venmo from '../assets/Venmo';
import background from '../images/Home1.jpg'


function Projects() {
    const images = [
        { url: "images/1.jpg" },
        { url: "images/2.jpg" },
        { url: "images/3.jpg" },
        { url: "images/4.jpg" },
        { url: "images/5.jpg" },
        { url: "images/6.jpg" },
        { url: "images/7.jpg" },
    ];
    return (
        <div className='text-white  bg-fixed  bg-contain  bg-no-repeat' style={{ backgroundImage: `url(${background}) `, backgroundPosition: "center", backgroundSize: "cover", minHeight: "100vh" }}>
            <div className='flex justify-center items-center'>
                <h1 className='text-xl font-bold mt-8'>PROJECTS</h1>
            </div>
            <div className='  flex flex-wrap justify-around font-bold  items-center space-y-8 '>
                <div className=''>
                    <Venmo />
                </div>
                <div className=''>
                    <Mern />
                </div>
                <div className=''>
                    <Mern2 />
                </div>
                <div className=''>
                    <Tododapp />
                </div>
            </div>
        </div>
    )
}

export default Projects