import React from "react";
import arrow from "../assets/downArrow.svg";

function Categorymenu() {
  return (
    <div className="bg-[#8b8b8b] shadow-2xl sticky top-0 z-20">
      <nav className="mx-auto py-5">
        <ul className="flex mx-auto justify-center gap-20">
          <li className="flex items-center gap-3">
            <p className=" font-semibold cursor-pointer text-white hover:text-[#e70302] transition-all">
              Pipa Besi
            </p>
            <img className="w-[12px]" src={arrow} alt="arrow" />
          </li>
          <li className="flex items-center gap-3">
            <p className=" font-semibold cursor-pointer text-white hover:text-[#e70302] transition-all">
              Plat Hitam
            </p>
            <img className="w-[12px]" src={arrow} alt="arrow" />
          </li>
          <li className="flex items-center gap-3">
            <p className=" font-semibold cursor-pointer text-white hover:text-[#e70302] transition-all">
              Besi Baja
            </p>
            <img className="w-[12px]" src={arrow} alt="arrow" />
          </li>
          <li className="flex items-center gap-3">
            <p className=" font-semibold cursor-pointer text-white hover:text-[#e70302] transition-all">
              Plat Stainless Steel
            </p>
            <img className="w-[12px]" src={arrow} alt="arrow" />
          </li>
          <li className="flex items-center gap-3">
            <p className=" font-semibold cursor-pointer text-white hover:text-[#e70302] transition-all">
              Triplek
            </p>
            <img className="w-[12px]" src={arrow} alt="arrow" />
          </li>
          <li className="flex items-center gap-3">
            <p className=" font-semibold cursor-pointer text-white hover:text-[#e70302] transition-all">
              Baja Ringan
            </p>
            <img className="w-[12px]" src={arrow} alt="arrow" />
          </li>
          <li className="flex items-center gap-3">
            <p className=" font-semibold cursor-pointer text-white hover:text-[#e70302] transition-all">
              Tangki Air
            </p>
            <img className="w-[12px]" src={arrow} alt="arrow" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Categorymenu;
