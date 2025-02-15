import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Home from './Home';
import { FaCartShopping } from "react-icons/fa6";

function Top() {
    return (
        <>
        
            {/* <div className=' absolute pos'> */}
            <div >

                <nav className=' w-[100%] bg-black opacity-100 flex justify-center text-white gap-[100px] '>
                    <img className=' h-[90px] w-[150px]' src="./img/logo.png" alt="" />
                    <div className='text-white flex justify-around gap-[20px] pt-[30px]'>
                        <div className='flex flex-row'>
                            <Link to='/'>
                            <FaHome className='mt-[5px]' />
                            </Link>
                            <div className='bg-red-600 h-[2px] w-[40px] mt-[30px] ml-[-30px]'></div>
                        </div>
                        <div className='flex justify-center gap-9 '>
                            <Link to='/Food'>
                            <p className='lil'>
                                Food & Drinks</p>
                                </Link>
                                
                                <Link to='/Prom'>
                            <p className='lil'>Promotions</p>
                            </Link>
                            <Link to='/Contact'>
                            <p className='lil'>contact-us</p>
                            </Link>
                           

                        </div>
                        <div className='flex gap-8 mt-[5px]'>
                            <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"><FaFacebookF className=' hover:text-blue-700' /></a>

                            <a href="https://twitter.com/x/migrate?tok=7b2265223a222f3f6c616e673d656e222c2274223a313733373237363730387d40f9586556a714aed5e1642ab8b6db1e"><FaTwitter className=' hover:text-blue-700' /></a>
                            <a href="https://www.instagram.com/"><FaInstagramSquare className=' hover:text-red-700' /></a>
                            
                            <a href="https://www.youtube.com/"><FaYoutube className=' hover:text-red-700' /></a>
                            
                        </div>
                        <div className='flex gap-[50px] mt-[-40px]'>
                          <Link to="/Log">
                            <button  className='ml-[20px] w-[130px] bg-red-600 rounded-[30px] h-[50px] mt-[30px]'>Log in</button>
                            </Link>
                        </div>
                        <div className='ml-[20px] text-[30px] mt-[1px]'>
                            <Link to="/Cart">
                        <FaCartShopping />
                        </Link>
                        </div>
                    </div>


                </nav>
            </div>

            {/* <Home /> */}
        </>
    )
}

export default Top