import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Nav() {
    return (
        <>
            {/* <div className=' absolute pos'> */}
            <div >

                <nav className=' w-[100%] bg-black opacity-60 flex justify-center text-white gap-[70px] '>
                    <img className=' h-[90px] w-[150px]' src="./img/logo.png" alt="" />
                    <div className='text-white flex justify-around gap-[20px] pt-[30px]'>
                        <div className='flex flex-row'>
                            <FaHome className='mt-[5px]' />
                            <div className='bg-red-600 h-[2px] w-[40px] mt-[30px] ml-[-30px]'></div>
                        </div>
                        <div className='flex justify-center gap-9 '>
                            <p className='lil'>
                                Food & Drinks</p>
                            <p className='lil'>Promotions</p>
                            <p className='lil'>Privacy Policy</p>
                        </div>
                        <div className='flex gap-8'>
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagramSquare />
                            <FaYoutube />
                        </div>
                    </div>


                </nav>
            </div>
        </>
    )
}

export default Nav