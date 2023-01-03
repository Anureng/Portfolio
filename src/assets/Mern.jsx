import React from 'react'
import { BsGithub } from 'react-icons/bs';
function Mern() {
    return (
        <>
            <div className='   to-transparent text-black flex flex-col items-center 
        justify-center p-4 space-x-7 space-y-8 border border-white rounded-2xl sm:max-w-sm
        '>
                {/* <img src="./venmo/venmo_1.png" alt="" /> */}
                <div>

                    <img src="/Workout/workoutFirst.png" alt="" className='h-76  w-96 sm:max-w-sm p-2' />
                </div>
                <div className='flex flex-col space-y-4  text-2xl'>
                    <p className='text-white'>  This project is MERN based project and workout data add to add to backend. The added
                        workout will be fetched from backend and displayed the data on frontend.</p>
                    <a href="https://workouts-j1em.onrender.com/" target="_blank">
                        <p className='border border-black w-fit px-3 rounded-xl text-white py-2' >REVIEW</p>
                    </a>
                    <a href="https://github.com/Anureng/Workout_frontend" target="_blank">
                        <BsGithub className='bg-white text-2xl rounded-xl' />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Mern