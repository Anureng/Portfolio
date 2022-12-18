import React from 'react'

function Navbar() {
    return (
        <div >
            <ul className='flex space-x-5 md:space-x-24 
            border border-black p-2 bg-gray-900 text-white
            justify-center font-Normal text-xl xsm:invisible '>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>contact</li>
            </ul>
        </div>
    )
}

export default Navbar