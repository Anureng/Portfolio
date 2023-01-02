import React from 'react'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
// , 
function Contact() {
    return (
        <div className='flex flex-col items-center bg-gray-900 text-white
        justify-center p-4 text-2xl space-y-10'>
            <div className='flex flex-col items-center justify-center space-y-10'>
                <p>Contact Us</p>
                <p>If you'r  interested to work with me email me ❤️ </p>
            </div>
            <div className='flex space-x-5 text-2xl'>
                <a href="https://github.com/Anureng" target="_blank">
                    <BsGithub />
                </a>
                <a href="https://www.linkedin.com/in/anurag-sidhu-4b518521b/" target="_blank">
                    <BsLinkedin />
                </a>
                <a href="https://twitter.com/anurag_sidhu8" target="_blank">
                    <BsTwitter />
                </a>
                <a href="mailto:anuragsidhu72@gmail.com">
                    <MdEmail />
                </a>
            </div>
        </div>
    )
}

export default Contact