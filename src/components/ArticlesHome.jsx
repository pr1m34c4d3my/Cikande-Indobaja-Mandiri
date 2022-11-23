import React from "react";
import foto from "../assets/wisnu.jpg";
import fotoImport from "../assets/import.jpg";
import artikel3 from "../assets/artikel3.jpg";

function ArticlesHome() {
  return (
    <div className="mx-40 mt-28 h-[60vh]">
      <div className="flex row justify-between items-center">
        <h2 className="font-semibold text-[30px]">Baca Artikel Kami</h2>
        <h3 className="font-bold text-[20px] cursor-pointer hover:text-[#e70302] transition-all">
          Lebih Banyak Artikel{" "}
          <span className="text-[#ba0707] font-black">{">"}</span>
        </h3>
      </div>
      <div className="flex flex-row justify-between mt-10">
        <div className="flex flex-col justify-end bg-artikelSatu w-[620px] h-[370px] p-5 rounded-3xl cursor-pointer shadow-xl">
          <div className="bg-[#000000a2] rounded-xl">
            <h1 className="font-bold text-[25px] text-white">
              Mengetahui Pipa Baja Terbaik
            </h1>
            <div className="flex flex-row gap-5 items-center mt-3">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                <img className="object-cover w-full" src={foto} />
              </div>
              <p className="font-light text-white">17.6.2022</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col cursor-pointer h-[400px] bg-white p-3 rounded-xl shadow-xl">
          <div className="h-[200px] w-[300px] rounded-xl overflow-hidden">
            <img src={fotoImport} />
          </div>
          <div className="w-[200px] mt-10">
            <h1 className=" font-bold text-[20px]">
              Ekspor Besi Dan Baja Mancanegara
            </h1>
            <p className="font-light mt-2">17.6.2022</p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-row gap-20 cursor-pointer bg-white shadow-xl p-3 rounded-xl">
            <div className="flex flex-col  w-[210px]">
              <h1 className=" font-semibold">
                Perbedaan Besi Dan Baja, Apa Saja Fungsinya
              </h1>
              <p className="font-light mt-2">17.6.2022</p>
            </div>
            <div className="w-[180px] h-[100px] rounded-xl overflow-hidden">
              <img className="w-full object-cover" src={artikel3} alt="" />
            </div>
          </div>
          <div className="flex flex-row gap-20 cursor-pointer bg-white shadow-xl p-3 rounded-xl">
            <div className="flex flex-col w-[210px]">
              <h1 className=" font-semibold">
                Perbedaan Besi Dan Baja, Apa Saja Fungsinya
              </h1>
              <p className="font-light mt-2">17.6.2022</p>
            </div>
            <div className="w-[180px] h-[100px] rounded-xl overflow-hidden">
              <img className="w-full object-cover" src={artikel3} alt="" />
            </div>
          </div>
          <div className="flex flex-row gap-20 cursor-pointer bg-white shadow-xl p-3 rounded-xl">
            <div className="flex flex-col  w-[210px]">
              <h1 className=" font-semibold">
                Perbedaan Besi Dan Baja, Apa Saja Fungsinya
              </h1>
              <p className="font-light mt-2">17.6.2022</p>
            </div>
            <div className="w-[180px] h-[100px] rounded-xl overflow-hidden">
              <img className="w-full object-cover" src={artikel3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlesHome;
