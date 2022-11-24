import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slidePertama from "../assets/slider1.jpg";

function Slider() {
  return (
    <div className="mx-auto flex flex-col h-[80vh] overflow-hidden">
      <div className="flex justify-between items-center mt-14">
        <div className="w-[120px] h-[100px] rounded-2xl bg-black -ml-20 flex justify-end items-center text-[40px] font-bold transition-all text-white hover:border-4 hover:bg-white hover:text-black cursor-pointer">
          <h1 className="mb-2 mr-1">{"<"}</h1>
        </div>
        <div>
          <div className="rounded-2xl w-[1600px] h-[600px] overflow-hidden relative">
            <img
              className="object-fit w-full h-full mr-5"
              src={slidePertama}
              alt="slider"
            />
            <button className=" absolute z-10 bg-white bottom-20 left-48 py-4 px-4 font-semibold rounded-xl">
              Info Selengkapnya
            </button>
          </div>
        </div>
        <div className="w-[120px] h-[100px] rounded-2xl bg-black -mr-20 flex justify-start items-center text-[40px] font-bold transition-all text-white hover:border-4 hover:bg-white hover:text-black cursor-pointer">
          <h1 className="mb-2 ml-1">{">"}</h1>
        </div>
      </div>
      <div className="flex gap-10 mt-10 items-center justify-center">
        <div className=" w-[12px] rounded-lg h-[12px]  bg-black cursor-pointer hover:scale-150 transition-all"></div>
        <div className=" w-[12px] rounded-lg h-[12px]  bg-black cursor-pointer hover:scale-150 transition-all"></div>
        <div className=" w-[12px] rounded-lg h-[12px]  bg-black cursor-pointer hover:scale-150 transition-all"></div>
      </div>
    </div>
  );
}

export default Slider;
