import React from 'react'
import Top from './Top'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Prom() {
  return (
    <>
    
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img className='img4' src="./img/movie16.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img className='img4' src="./img/movie17.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img className='img4' src="./img/movie18.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className='h-[160vh]'>
        <h1 className='text-[20px] font-bold text-red-600 pl-[50px] pt-[20px]'>Latest Promotions</h1>

        <div className='flex gap-[40px] pt-[50px] '>
          <img className='h-[200px] w-[450px]' src="./img/movie16.jpg" alt="" />
          <div className='pt-[30px]'>
            <h1 className='text-[20px] font-bold'>Bank Alfalah offers 20% off</h1>
            <p className='text-[15px]'>Good news for Bank Alfalah customers! Get tickets and <br /> concession items at 20% off on all sites of The Arena. <br /> Rush to the nearest cinema to avail this offer on your Bank Alfalah card.</p>
          </div>
        </div>

        <div className='flex gap-[40px] pt-[50px] '>
          <img className='h-[200px] w-[450px]' src="./img/movie20.png" alt="" />
          <div className='pt-[30px]'>
            <h1 className='text-[20px] font-bold'>Wednesday Festive</h1>
            <p className='text-[15px]'>Buy tickets and get one free</p>
          </div>
        </div>

        <div className='flex gap-[40px] pt-[50px] '>
          <img className='h-[200px] w-[450px]' src="./img/movie21.png" alt="" />
          <div className='pt-[30px]'>
            <h1 className='text-[20px] font-bold'>Ladies Offer</h1>
            <p className='text-[15px]'>Girls Day.</p>
          </div>
        </div>

        <div className=' absolute w-[100%] mt-[-670px] nav1'>
          
        </div>


        <div className='flex gap-[40px] pt-[50px] '>
          <img className='h-[200px] w-[450px]' src="./img/movie22.png" alt="" />
          <div className='pt-[30px]'>
            <h1 className='text-[20px] font-bold'>Student Offer</h1>
            <p className='text-[15px]'>Time For An Exciting Break!! 🎉 The Arena Cinema is offering <br /> an amazing Buy 1 Get 1 Free Ticket offer exclusively for all students <br /> Monday to Thursday. Bring your friends, grab your <br /> popcorn buckets, and visit us for a blockbuster treat today! 🍿</p>
          </div>
        </div>


     


      </div>
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
      <div className='mt-[-2070px] w-[100%] nav1 absolute'>
            <Top />

            </div>

    </>
  )
}

export default Prom