import React from 'react'

function Skills() {
    return (
        <div className='text-white bg-gray-800 flex flex-col
        lg:flex-row md:space-x-20
        p-8 border
         justify-evenly items-center'>
            <div className=' p-5 space-y-8 max-w-md'>
                <h1 className='text-3xl lg:text-5xl'>SKILLS<hr /> </h1>
                <p className=' text-xl lg:text-2xl space-y-2'>I am a web Developer and blockchain developer . I made so many project based on these skill . Interested to work as a freelancer and also looking for some internship . <br /> <br />
                    <a className='border border-white rounded-xl px-3 py-2 text-xl' href='https://drive.google.com/file/d/1Dc-pXB2zT0qT0yPRgx-ovZSafplubPhw/view?usp=share_link' download target="_blank">Download Portfolio</a>
                </p>
            </div>
            <div>
                <img className=' h-3/5 w-96  mt-8 object-cover' src="skills.png" alt="" />
            </div>
        </div>
    )
}

export default Skills