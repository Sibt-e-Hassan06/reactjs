import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { IoStarSharp } from "react-icons/io5";

function Home() {
  return (
    <>
      <div>
      
        <div className=' relative top-0'>
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img className='h-[600px]' src="./img/movie10.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img className='h-[600px]' src="./img/movie11.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img className='h-[600px]' src="./img/movie12.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className='h-[10vh]'>
        <h1 className='text-center font-extrabold text-[20px] pt-[30px]'>Now Showing</h1>
      </div>
      <hr />




      {/* ////////////////////////////////// */}



      <div className='w-[100%] pt-[80px]'>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className='w-[96rem]'>
              <img className='img1 w-[14%]' src="./img/movie2.jpg" alt="" />
              <div className='flex text-yellow-500'>
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <p>PSYCHO</p>
              <button className='p-[10px] rounded-[30px] bg-slate-600'>Book TIcket</button>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[96rem]'>
              <img className='img1 w-[14%]' src="./img/movie.jpg" alt="" />
              <div className='flex text-yellow-500'>
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <p>Sprider man</p>
              <button className='p-[10px] rounded-[30px] bg-slate-600'>Book TIcket</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[96rem]'>
              <img className='img1 w-[14%]' src="./img/movie3.jpg" alt="" />
              <div className='flex text-yellow-500'>
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <p>ARCHER</p>
              <button className='p-[10px] rounded-[30px] bg-slate-600'>Book TIcket</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[96rem]'>
              <img className='img1 w-[14%]' src="./img/movie4.jpg" alt="" />
              <div className='flex text-yellow-500'>
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <p>JOKER</p>
              <button className='p-[10px] rounded-[30px] bg-slate-600'>Book TIcket</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[96rem]'>
              <img className='img1 w-[14%]' src="./img/movie5.jpg" alt="" />
              <div className='flex text-yellow-500'>
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <p>THE BATMAN</p>
              <button className='p-[10px] rounded-[30px] bg-slate-600'>Book TIcket</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[96rem]'>
              <img className='img1 w-[14%]' src="./img/movie6.jpg" alt="" />
              <div className='flex text-yellow-500'>
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <p>HOME ALONE</p>
              <button className='p-[10px] rounded-[30px] bg-slate-600'>Book TIcket</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[96rem]'>
              <img className='img1 w-[14%]' src="./img/movie7.jpg" alt="" />
              <div className='flex text-yellow-500'>
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <p>WHY SO SERIOUS</p>
              <button className='p-[10px] rounded-[30px] bg-slate-600'>Book TIcket</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[96rem]'>
              <img className='img1 w-[14%]' src="./img/movie8.jpg" alt="" />
              <div className='flex text-yellow-500'>
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <p>THE GODFATHER</p>
              <button className='p-[10px] rounded-[30px] bg-slate-600'>Book TIcket</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[96rem]'>
              <img className='img1 w-[14%]' src="./img/movie9.jpg" alt="" />
              <div className='flex text-yellow-500'>
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <p>MATRIX</p>
              <button className='p-[10px] rounded-[30px] bg-slate-600'>Book TIcket</button>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
      <div className='w-[80%] h-[2px] ml-[100px] mt-[10px] bg-black'></div>


      {/* //////////////////////////// */}


      <div className='text-center mt-[30px]'>
        <h1 className=' font-bold text-[20px]'>Weekly Schedule</h1>
        <div className='flex justify-center gap-[20px] mt-[20px]'>
          <button className='p-[10px] bg-slate-600 rounded-[20px] text-white'>Area Islambad</button>
          <button className='p-[10px] bg-slate-600 rounded-[20px] text-white'>Area Lahore</button>
          <button className='p-[10px] bg-slate-600 rounded-[20px] text-white'>Area Karachi</button>
        </div>
      </div>
      <div className='w-[80%] h-[2px] ml-[100px] mt-[10px] bg-black'></div>


      <div className='h-auto w-[100%]'>
        <h1 className='text-center font-bold text-[20px] mt-[20px]'>Upcoming Movies</h1>
        <div className='flex justify-center items-center pt-4'>
          <div className='grid grid-cols-3 grid-rows-2 gap-x-[50px] gap-y-[40px]'>
            <img className='h-[400px] w-[260px]' src="./img/movie9.jpg" alt="" />
            <img className='h-[400px] w-[260px]' src="./img/movie4.jpg" alt="" />
            <img className='h-[400px] w-[260px]' src="./img/movie5.jpg" alt="" />
            <img className='h-[400px] w-[260px]' src="./img/movie6.jpg" alt="" />
            <img className='h-[400px] w-[260px]' src="./img/movie7.jpg" alt="" />
            <img className='h-[400px] w-[260px]' src="./img/movie8.jpg" alt="" />
          </div>
        </div>
      </div>
    <div className='pt-[50px]'>
      <marquee className="bg-slate-300 text-[18px] font-semibold">[Movie Title] is a [genre] masterpiece that captivates with its [adjective] storytelling and [adjective] performances. Directed by [Director’s Name], the film explores [theme] with [emotion]-inducing depth. The visuals are [adjective], and the soundtrack enhances every moment. [Lead Actor/Actress] delivers a [adjective] performance, leaving a lasting impression. While some scenes feel [critique], the overall experience is [adjective]. A must-watch for fans of [related genre/style].</marquee>
    </div>

    </>

  )
}

export default Home