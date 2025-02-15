// Import React
import React from "react";

// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles for v8+
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Top from "./Top";

// Component
const Slideimg = () => {
  return (
    <>
  
    <div className="sideimg ml-[50px] text-center w-[90%] ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide className="pl-[60px]">
            <div className=" h-[60vh]">
          <img className="h-[400px] w-[300px] mt-[30px]" src="./img/movie6.jpg" alt="Slide 1" />
          <h1 className="ml-[-70px] font-bold">HOME ALONE</h1>
          <button className="p-[20px] bg-slate-600 font-semibold rounded-[30px] mt-[10px] ml-[-80px] cursor-pointer ">BOOK TICKET </button>


          </div>
        </SwiperSlide>
        <SwiperSlide className="pl-[60px]">
        <div className="h-[200px]">
          <img className="h-[400px] w-[300px] mt-[30px] ml-[-30px]" src="./img/movie7.jpg" alt="Slide 1" />
          <h1 className="ml-[-80px] font-bold">WHY SO SERIOUS</h1>
          <button className="p-[20px] bg-slate-600 font-semibold rounded-[30px] mt-[10px] ml-[-80px] cursor-pointer ">BOOK TICKET </button>


          </div>
        </SwiperSlide>
        <SwiperSlide className="pl-[60px]">
        <div className="">
          <img className="h-[400px] w-[300px] mt-[30px] ml-[10px]" src="./img/movie8.jpg" alt="Slide 1" />
          <h1 className="ml-[-80px] font-bold">THE GODFATHER</h1>
          <button className="p-[20px] bg-slate-600 font-semibold rounded-[30px] mt-[10px] ml-[-80px] cursor-pointer">BOOK TICKET </button>


          </div>
        </SwiperSlide>
        <SwiperSlide className="pl-[60px]">
        <div className="">
          <img className="h-[400px] w-[300px] mt-[30px]" src="./img/movie9.jpg" alt="Slide 1" />
          <h1 className="ml-[-120px] font-bold">MATRIX</h1>
          <button className="p-[20px] bg-slate-600 font-semibold rounded-[30px] mt-[10px] ml-[-100px] cursor-pointer">BOOK TICKET </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pl-[60px]">
        <div className="">
          <img className="h-[400px] w-[300px] mt-[30px]" src="./img/movie4.jpg" alt="Slide 1" />
          <h1 className="ml-[-120px] font-bold text-[20px]">JOKER</h1>
          <button className="p-[20px] bg-slate-600 font-semibold rounded-[30px] mt-[10px] ml-[-100px] cursor-pointer">BOOK TICKET </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pl-[60px]">
        <div className="">
          <img className="h-[400px] w-[300px] mt-[30px]" src="./img/movie5.jpg" alt="Slide 1" />
          <h1 className="ml-[-109px] font-bold">THE BATMAN</h1>
          <button className="p-[20px] bg-slate-600 font-semibold rounded-[30px] mt-[10px] ml-[-80px] h-[100px] cursor-pointer">BOOK TICKET </button>
          </div>
        </SwiperSlide>
      </Swiper>

      <button className="p-[20px] bg-slate-600 font-bold text-[15px] rounded-[30px] text-center cursor-pointer ml-[-10px]">FOR MORE</button>
    </div>
    </>
  );
};

export default Slideimg;
