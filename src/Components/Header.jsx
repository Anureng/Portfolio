import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
function Header() {
    return (
        <>
            <div className=' border border-black bg-gray-800 max-h-full flex space-y-6
            flex-col lg:flex-row items-center p-6 lg:justify-center  font-mono'>

                <div className=' border border-black flex flex-col items-center mt-8 justify-center p-2'>
                    <img className='animate-bounce h-64  cursor-pointer mt-8 ' src="person.png" alt="" />
                </div>
                <div className='flex flex-col text-3xl px-2 border border-black max-w-lg space-y-8'>
                    <p className='text-3xl mt-3'>Hello, Myself Anurag Sidhu</p>
                    <div className='flex'>

                        <p className='flex flex-col'>I am&nbsp; </p>
                        <Typewriter
                            words={['Web Developer', 'Blockchain Developer']}
                            loop={1000}
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