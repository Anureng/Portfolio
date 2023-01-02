import React from 'react'
import { BrowserRouter, redirect, Route, Router } from "react-router-dom";
import Header from './Header';

function Navbar() {

    return (
        <div >
            <ul className='flex space-x-0 sm:space-x-5 md:space-x-24 
             p-2 bg-gray-900 text-white
            justify-center font-Normal text-xl xsm:invisible '>
                <li>Home</li>
                <li className="cursor-pointer">Skills</li>
                <li>Projects</li>
                <li>contact</li>

            </ul>
        </div>
    )
}

export default Navbar