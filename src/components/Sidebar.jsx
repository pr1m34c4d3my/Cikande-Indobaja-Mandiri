import React from "react";
import banner from "../assets/Banner.png";

function Sidebar() {
  return (
    <div className="flex flex-col gap-20 p-7 mt-10">
      <div className="flex flex-col gap-3 bg-white p-4 rounded-xl">
        <h2 className="text-[25px] font-semibold">Produk Paling Laris</h2>
        <a
          className="text-[#e97c7c] hover:text-[#e70302] transition-all text-[15px]"
          href="#"
        >
          Besi CNP {"(Canal -c-)"}
        </a>
        <a
          className="text-[#e97c7c] hover:text-[#e70302] transition-all text-[15px]"
          href="#"
        >
          Alumunium Foil Bubble
        </a>
        <a
          className="text-[#e97c7c] hover:text-[#e70302] transition-all text-[15px]"
          href="#"
        >
          Expanded Metal
        </a>
        <a
          className="text-[#e97c7c] hover:text-[#e70302] transition-all text-[15px]"
          href="#"
        >
          Besi Siku
        </a>
        <a
          className="text-[#e97c7c] hover:text-[#e70302] transition-all text-[15px]"
          href="#"
        >
          Plat Bordes
        </a>
        <button className="bg-[#f5f5f5] w-[250px] mt-10 px-2 py-2 rounded-xl font-bold hover:bg-[#575757] hover:text-white">
          Lihat Produk Lain
        </button>
      </div>
      <div className="mt-20 w-[300px]">
        <img src={banner} alt="iklan" />
      </div>
    </div>
  );
}

export default Sidebar;
