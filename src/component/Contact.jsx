import React from 'react'
import Top from './Top'
import { FaHome } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Foot from './Foot';

function Contact() {
  return (
    <>



      <div>

        <div className=' relative'>
          <img className='w-[100%]  img5 ' src="./img/movie19.png" alt="" />
          <div className=' absolute w-[100%] mt-[-670px] nav1'>
            <Top />
          </div>
        </div>
        <div className='text-center mt-[-350px] absolute text-white ml-[200px]'>
          <h1 className='text-[30px] font-bold'>Get in Touch</h1>
          <p className='font-bold'>Interested in working with us? Let us know a bit about yourself and your project.Â Weâ€™ll review and get in touch to schedule a time to <br /> chat.</p>
        </div>
        <div>
          <div className=' flex gap-2 pt-[50px] pl-[30px]'>
            <h1 className='text-red-600 text-[25px] font-bold'>Choose</h1>
            <h1 className='text-[25px] '> Cinema</h1>

          </div>
          <div className='flex gap-4 pl-[50px] text-[15px] h-[10vh] pt-[30px]'>
            <p className='lil1'>Lahore</p>
            <p className='lil1'>Islamabad</p>
            <p className='lil1'>Karachi</p>
          </div>
          <div className='h-[80vh] flex gap-2 pl-[40px] pt-[20px]'>
            <div className='flex'>
              <div className='flex flex-col gap-[20px] text-red-600'>
                <FaHome />
                <BiWorld />
                <CiMail />
                <CiMail />
                <CiMail />
                <FaPhoneAlt />
                <FaPhoneAlt />
              </div>

            </div>
            <div className='flex flex-col gap-[16px] text-gray-600'>
              <h1>The Arena-Road A, Phase IV, Bahria Town, Islamabad, Pakistan</h1>
              <h1>www.thearena.com.pk</h1>
              <h1>Info@thearena.com.pk</h1>
              <h1>membership@thearena.com.pk</h1>
              <h1>career@thearena.com.pk</h1>
              <h1>+92 51 5731901-2-3</h1>
              <h1> +92 51 1111-(ARENA) (27362)</h1>

            </div>

            <iframe className='w-[60%] h-[70vh] pl-[20px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54508.46905099748!2d74.13979617017982!3d31.36506851677445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff9a30fa362d%3A0x528615a7981ce611!2sBahria%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1737273430194!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <hr />
      {/* ////////////////// */}

      <div className='flex '>
        <div className='h-[80vh]'>
          <div className='flex gap-[10px] pt-[30px] pl-[40px]'>
            <h1 className='text-[30px] text-red-600 font-bold'>Follow </h1>
            <h1 className='text-[30px]  font-bold'> Us</h1>
            <div className='flex pl-[300px]'>
              <h1 className='text-[30px] text-red-600 font-bold'>Feed</h1>
              <h1 className='text-[30px]  font-bold'>back</h1>
            </div>
          </div>
          <div className='flex gap-4'>

            <div className='flex gap-8 mt-[5px] flex-col pt-[30px] pl-[50px]  '>
              <FaFacebookF className=' text-white bg-blue-600 h-[30px] w-[30px] rounded-[50px]' />
              <FaTwitter className='text-white bg-blue-600 h-[30px] w-[30px] rounded-[50px]' />
              <FaInstagramSquare className=' text-white bg-red-600 h-[30px] w-[30px] rounded-[50px]' />
              <FaYoutube className='text-white bg-red-600 h-[30px] w-[30px] rounded-[50px]' />
            </div>
            <div className='flex flex-col pt-[30px] gap-10'>

              <a href="">Facebook</a>
              <a href="">Twitter</a>
              <a href="">Instagram</a>
              <a href="">Youtube</a>
            </div>
          </div>
        </div>
        <div className=' ml-[-130px]'>
          <div className='flex gap-4'>
            <input className=' h-[20px] mt-[100px] p-[20px] w-[300px] border-[2px]' type="Hello" placeholder='Name:' />
            <input className=' h-[20px] mt-[100px] p-[20px] w-[300px] border-[2px]' type="Hello" placeholder='E-mail:' />
          </div>
          <div className='flex gap-4 mt-[-50px]'>
            <input className=' h-[20px] mt-[100px] p-[20px] w-[300px] border-[2px]' type="Hello" placeholder='Phone:' />
            <input className=' h-[20px] mt-[100px] p-[20px] w-[300px] border-[2px]' type="Hello" placeholder='Subject:' />
          </div>
          <input className='  mt-[40px] h-[150px] w-[630px] border-[2px] ' type="text" placeholder='Message:' />
        </div>

        <button className='p-[15px] bg-red-600 font-bold rounded-[40px] h-[40px] mt-[450px] ml-[-350px] pt-[5px] text-white'>Submit</button>
        

      </div>
<Foot />


    </>
  )
}

export default Contact