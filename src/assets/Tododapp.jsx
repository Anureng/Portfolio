import React from 'react'
import { BsGithub } from 'react-icons/bs';
function Tododapp() {
    return (
        <div className='  to-transparent text-black flex flex-col items-center 
        justify-center p-2 space-x-7 sm:justify-self-end float-right 
         space-y-8 border border-white sm:max-w-sm  rounded-2xl mb-4
        '>
            {/* <img src="./venmo/venmo_1.png" alt="" /> */}
            <div>

                <img src="/tododapp.png" alt="" className='h-76 w-96 sm:max-w-sm p-2' />
            </div>
            <div className='flex flex-col space-y-4  text-2xl'>
                <p>  This is dapp project which add the todo and delete the todo through georli ether .  Transaction can be seen on etherscan.</p>
                <a href="https://tododapp2.netlify.app/" target="_blank">
                    <p className='border border-black w-fit px-3 rounded-xl text-white py-2' >REVIEW</p>
                </a>
                <a href="https://github.com/Anureng/Todo_dapp" target="_blank">
                    <BsGithub className='bg-white text-2xl rounded-xl' />
                </a>
            </div>
        </div>
    )
}

export default Tododapp