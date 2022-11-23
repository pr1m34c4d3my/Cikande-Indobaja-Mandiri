import React from "react";
import VideoPlayer from "./VideoPlayer";

function About() {
  return (
    <div className="flex flex-row items-center max-w-full overflow-hidden mt-20">
      <div className="w-8/12 h-[400px] bg-white border-2 px-5 pt-10 pr-28">
        <h2 className="font-bold text-[50px] ml-20">Tentang Kami</h2>
        <p className="font-light mt-10 ml-20">
          Tahun 1990 adalah tahun dimana awal mula perusahaan kami mengukir
          sejarah dengan nama PD. Cikande Indah. Dengan Modal pengalaman lebih
          dari 30 tahun ini kami terus berinovasi & berusaha memberikan
          pelayanan terbaik dengan mengutamakan kualitas produk terbaik di
          bidang penyedia bahan-bahan bangunan. Seiring dengan pertumbuhan
          jumlah pelanggan dan bisnis kami, pada tahun 2017 PD. Cikande Indah
          berganti nama menjadi PT. Cikande Indobaja Mandiri.
        </p>
      </div>
      <div className="w-full bg-[#ba0707] h-[600px] rounded-2xl shadow-xl -mr-20 overflow-hidden">
        <VideoPlayer />
      </div>
    </div>
  );
}

export default About;
