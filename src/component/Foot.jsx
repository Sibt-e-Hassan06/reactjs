import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Foot() {
  return (
    <>
        <div className='h-[50vh] w-[100%] bg-black flex justify-around pt-[40px] '>
    
            <div className='text-white'>
              <h1 className=''>SMS Alert for Showtimes</h1>
              <p className='pt-[10px] text-[10px]'>Please enter your mobile number for SMS alert in the text box.</p>
              <input className='mt-[20px] pl-[40px]' type="text" placeholder='03XX XXXX XXX' />
              <div className='pt-[10px] gap-[20px] flex'>
                <button className=' h-[60px] w-[100px] rounded-[30px] bg-gray-500 hover:text-red-500'>Subscribe</button>
                <button className=' h-[60px] w-[100px] rounded-[30px] bg-gray-500 hover:text-red-500'>Unsubscribe</button>
              </div>
              <p className='pt-[10px] text-[10px] text-slate-700'>Enter correct phone number. (eg: 03XX XXX XXX)</p>
    
    
            </div>
    
            <div className='text-white'>
              <h1>Get in Touch
              </h1>
              <p className='pt-[10px]'>You are always welcome to contact us.</p>
              <div className='flex gap-[20px]'>
                <div className='flex flex-col gap-[20px]'>
                  <FaFacebookF />
                  <FaTwitter />
                  <FaInstagramSquare />
                  <FaYoutube />
    
                </div>
    
                <div className='text-white flex flex-col gap-[10px]'>
                  <a href="#">Facebook</a>
                  <a href="#">Twitter</a>
                  <a href="#">Instagram</a>
                  <a href="#">Youtube</a>
                </div>
              </div>
            </div>
    
            <div className='text-white'>
              <h1>Arena Everywhere</h1>
              <p className='pt-[10px]'>Download our mobile app today to get Show-times & tickets on <br /> the go !</p>
              <div className='flex gap-[40px] pt-[20px]'>
                <img className='h-[70px] w-[150px]' src="./img/google_play.png" alt="" />
                <img className='h-[70px] w-[150px]' src="./img/app_store.png" alt="" />
              </div>
            </div>
    
    
          </div>
    
          <div className='h-[2px] w-[100%] bg-slate-600 mt-[-40px]'></div>
          <h1 className='text-center mt-[8px] text-slate-600'>Developed by TotalSoft</h1>
    
    
    
    
    
    
    </>
  )
}

export default Foot