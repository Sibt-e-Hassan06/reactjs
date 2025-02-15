import React from 'react'
import { FaFacebook } from "react-icons/fa";

function Log() {
    return (
        <>
            <div className='relative '>
                <div className='h-[100vh] w-[100%]'>
                    <img className='w-[100%]  im' src="./img/img6.jpeg" alt="" />

                </div>
                <div className=' absolute h-[70vh] w-[40%]  mt-[-600px] ml-[400px] border-[3px] text-white text-center h'>
                    <h1 className='pt-[20px] text-[30px] font-bold'>Log in</h1>
                    <div className='mt-[70px]'>

                        <div className='flex flex-col gap-4 w-[400px] h-[320px] justify-center ml-[70px] mt-[-25px]'>
                            <input className='h-[35px] text-black p-3 rounded-xl' type="text" placeholder='phone number,username or email' />
                            <input className='h-[35px] text-black p-3 rounded-xl' type="password" placeholder='password' />
                            <button className='w-[400px] h-[100px] bg-blue-600 rounded-[30px]'>Log in</button>
                            <div className='flex gap-[40px] mt-[30px] '>
                                <div className='h-[2px] w-[150px] bg-black'></div>
                                <h1 className='mt-[-10px]'>or</h1>
                                <div className='h-[2px] w-[150px] bg-black'></div>
                            </div>
                            <div className='flex gap-[20px] ml-[100px]'>
                                <div className='mt-[5px] text-blue-800'>
                                    <FaFacebook />
                                </div>
                                <a className='text-blue-700 font-bold' href="https://www.instagram.com/accounts/login/?hl=en">Log in With Facebook</a>
                            </div>
                        <h1 className='font-bold'>Forget Password?</h1>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Log