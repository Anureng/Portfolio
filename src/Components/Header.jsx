import React from 'react'
import image from "../images/Home.jpg";
import { Typewriter } from 'react-simple-typewriter'
function Header() {
    return (
        <>
            <div className='Home'></div>
            <div className=' border bg-gray-800 border-black  max-h-full flex space-y-6 lg:space-x-24
            flex-col lg:flex-row items-center p-6 lg:justify-center lg:h-screen font-mono'>
                <div className=' flex flex-col items-center mt-8 justify-center p-2'>
                    <img className='animate-bounce h-64  cursor-pointer mt-8 ' src="person.png" alt="" />
                </div>
                <div className='flex flex-col text-white text-3xl px-2  max-w-lg space-y-8'>
                    <p className='text-3xl mt-3'>Hello, Myself Anurag Sidhu</p>
                    <div className='flex'>

                        <p className='flex flex-col'>I am&nbsp; </p>
                        <Typewriter
                            words={['Web Developer', 'Blockchain Developer']}
                            loop={Infinity}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        // onLoopDone={handleDone}
                        // onType={handleType}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header