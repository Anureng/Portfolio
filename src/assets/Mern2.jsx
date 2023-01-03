import React from 'react'
import { BsGithub } from 'react-icons/bs';
function Mern2() {
    return (
        <>
            <div className='   to-transparent text-black flex flex-col items-center 
justify-center p-4 space-x-7 space-y-8 border border-white rounded-2xl sm:max-w-sm float-right 
'>
                {/* <img src="./venmo/venmo_1.png" alt="" /> */}
                <div>

                    <img src="/anurag.png" alt="" className='h-76  w-96 sm:max-w-sm p-2' />
                </div>
                <div className='flex flex-col space-y-4  text-2xl'>
                    <p className='text-white'>  This project will login the account and signup . Redirect the pages with cookie.</p>
                    <a href="https://monumental-salmiakki-5c6b2c.netlify.app/" target="_blank">
                        <p className='border border-black w-fit px-3 rounded-xl text-white py-2' >REVIEW</p>
                    </a>
                    <a href="https://github.com/Anureng/mern_last_tut" target="_blank">
                        <BsGithub className='bg-white text-2xl rounded-xl' />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Mern2