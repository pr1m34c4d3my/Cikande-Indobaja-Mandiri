import React from "react";
import foto from "../assets/wisnu.jpg";

function Testimonials() {
  return (
    <div className="h-[50vh] mt-40 overflow-hidden">
      <div className="font-bold text-[25px] mx-40">
        <h1>Apa Kata Pelanggan</h1>
      </div>
      <div className="flex flex-row gap-10 justify-between">
        <div className="mt-36 w-[120px] h-[100px] rounded-2xl bg-black -ml-20 flex justify-end items-center text-[40px] font-bold transition-all text-white hover:border-4 hover:bg-white hover:text-black cursor-pointer">
          <h1 className="mb-2 mr-1">{"<"}</h1>
        </div>
        <div className="w-[600px] border-2 p-10 rounded-2xl mt-20 bg-white">
          <div className="relative flex flex-col justify-center items-center">
            <h2 className="text-center font-semibold text-[16px]">
              "Cikande Indobaja Mandiri sangat terpercaya, melayani dengan baik
              dan ramah. Barang nya juga bagus, sesuai spesifikasi dan ketepatan
              yang akurat"
            </h2>
            <p className="text-[#a9a9a9] font-semibold mt-10">
              Wisnu Budi Laksono - CEO
            </p>
            <div className="absolute bg-slate-500 w-[70px] h-[70px] rounded-full top-36 overflow-hidden">
              <img className="object-cover" src={foto} alt="foto" />
            </div>
          </div>
        </div>
        <div className="w-[600px] border-2 p-10 rounded-2xl mt-20 bg-white">
          <div className="relative flex flex-col justify-center items-center">
            <h2 className="text-center font-semibold text-[16px]">
              "Cikande Indobaja Mandiri sangat terpercaya, melayani dengan baik
              dan ramah. Barang nya juga bagus, sesuai spesifikasi dan ketepatan
              yang akurat"
            </h2>
            <p className="text-[#a9a9a9] font-semibold mt-10">
              Wisnu Budi Laksono - CEO
            </p>
            <div className="absolute bg-slate-500 w-[70px] h-[70px] rounded-full top-36 overflow-hidden">
              <img className="object-cover" src={foto} alt="foto" />
            </div>
          </div>
        </div>
        <div className="w-[600px] border-2 p-10 rounded-2xl mt-20 bg-white">
          <div className="relative flex flex-col justify-center items-center">
            <h2 className="text-center font-semibold text-[16px]">
              "Cikande Indobaja Mandiri sangat terpercaya, melayani dengan baik
              dan ramah. Barang nya juga bagus, sesuai spesifikasi dan ketepatan
              yang akurat"
            </h2>
            <p className="text-[#a9a9a9] font-semibold mt-10">
              Wisnu Budi Laksono - CEO
            </p>
            <div className="absolute bg-slate-500 w-[70px] h-[70px] rounded-full top-36 overflow-hidden">
              <img className="object-cover" src={foto} alt="foto" />
            </div>
          </div>
        </div>
        <div className="mt-36 w-[120px] h-[100px] rounded-2xl bg-black -mr-20 flex justify-start items-center text-[40px] font-bold transition-all text-white hover:border-4 hover:bg-white hover:text-black cursor-pointer">
          <h1 className="mb-2 ml-1">{">"}</h1>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
