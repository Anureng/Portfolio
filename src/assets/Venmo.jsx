import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { BsGithub } from 'react-icons/bs';
function Venmo() {
    const images = [
        { url: '../Workout/workoutFirst.png' },
        { url: '../Workout/workoutSecond.png' },
        { url: '../Workout/workoutThird.png' },

    ];
    return (
        <div className='  to-transparent text-black flex flex-col items-center 
        justify-center p-2 space-x-7 sm:justify-self-end float-right 
         space-y-8 border border-white rounded-2xl sm:max-w-sm 
        '>
            {/* <img src="./venmo/venmo_1.png" alt="" /> */}
            <div>

                <img src="/venmo.png" alt="" className='h-76 w-96 sm:max-w-sm p-2 ' />
            </div>
            <div className='flex flex-col space-y-4  text-2xl'>
                <p>  This is dapp project which send the georli ether through metamask . Transaction can be seen on etherscan.</p>
                <a href="https://venmodaap.netlify.app/" target="_blank">
                    <p className='border border-black w-fit px-3 rounded-xl text-white py-2' >REVIEW</p>
                </a>
                <a href="https://github.com/Anureng/venmo" target="_blank">
                    <BsGithub className='bg-white text-2xl rounded-xl' />
                </a>
            </div>
        </div>
    )
}

export default Venmo