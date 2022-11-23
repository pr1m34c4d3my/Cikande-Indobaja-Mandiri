import React from "react";
import rockwoll from "../assets/rockww.jpg";
import roof from "../assets/roof.jpg";
import platKapal from "../assets/platkapal.jpg";
import grafting from "../assets/grafting.jpg";
import pipaHitam from "../assets/pipahitam.jpg";
import steelRail from "../assets/steelrail.jpg";

function HomeProducts() {
  return (
    <div className="flex flex-wrap gap-10 w-[1200px] p-8">
      <div className="p-3 border-2 w-[350px] h-[450px] bg-white rounded-2xl flex flex-col justify-center overflow-hidden">
        <div className="w-[320px] h-[250px] rounded-2xl bg-slate-200 overflow-hidden shadow-2xl ">
          <img
            className="object-cover w-full h-full"
            src={rockwoll}
            alt="rockwoll"
          />
        </div>
        <div className="flex flex-col justify-start mt-5">
          <h2 className="font-bold text-[20px]">Rock Wool</h2>
          <p className="font-light text-[12px]">
            Insulasi peredam panas , tahan api dan air atau peredam suara yang
            biasa di gunakan dalam suatu ruangan.
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <button className="mt-5 bg-[#db2d2d] w-[120px] text-white py-1 px-2 rounded-xl font-bold hover:border-[#e70302] hover:border-2 hover:bg-white hover:text-[#e70302] hover:text-[18px] transition-all">
            Beli Produk
          </button>
        </div>
      </div>
      <div className="p-3 border-2 w-[350px] h-[450px] bg-white rounded-2xl flex flex-col justify-center overflow-hidden">
        <div className="w-[320px] h-[250px] rounded-2xl bg-slate-200 overflow-hidden shadow-2xl ">
          <img
            className="object-cover w-full h-full"
            src={roof}
            alt="rockwoll"
          />
        </div>
        <div className="flex flex-col justify-start mt-5">
          <h2 className="font-bold text-[20px]">Roof Ventilator</h2>
          <p className="font-light text-[12px]">
            Alat pengatur suhu ruangan ideal dengan diameter 20” tanpa harus
            menggunakan listrik.
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <button className="mt-5 bg-[#db2d2d] w-[120px] text-white py-1 px-2 rounded-xl font-bold hover:border-[#e70302] hover:border-2 hover:bg-white hover:text-[#e70302] hover:text-[18px] transition-all">
            Beli Produk
          </button>
        </div>
      </div>
      <div className="p-3 border-2 w-[350px] h-[450px] bg-white rounded-2xl flex flex-col justify-center overflow-hidden">
        <div className="w-[320px] h-[250px] rounded-2xl bg-slate-200 overflow-hidden shadow-2xl ">
          <img
            className="object-cover w-full h-full"
            src={platKapal}
            alt="rockwoll"
          />
        </div>
        <div className="flex flex-col justify-start mt-5">
          <h2 className="font-bold text-[20px]">Plat Kapal</h2>
          <p className="font-light text-[12px]">
            Plat yang memiliki spesifikasi yang sama persis dengan plat hitam.
            Plat kapal juga sering disebut sebagai marine plate.
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <button className="mt-5 bg-[#db2d2d] w-[120px] text-white py-1 px-2 rounded-xl font-bold hover:border-[#e70302] hover:border-2 hover:bg-white hover:text-[#e70302] hover:text-[18px] transition-all">
            Beli Produk
          </button>
        </div>
      </div>
      <div className="p-3 border-2 w-[350px] h-[450px] bg-white rounded-2xl flex flex-col justify-center overflow-hidden">
        <div className="w-[320px] h-[250px] rounded-2xl bg-slate-200 overflow-hidden shadow-2xl ">
          <img
            className="object-cover w-full h-full"
            src={grafting}
            alt="rockwoll"
          />
        </div>
        <div className="flex flex-col justify-start mt-5">
          <h2 className="font-bold text-[20px]">Grafting Galvanis</h2>
          <p className="font-light text-[12px]">
            Grating adalah bentukan dari besi {"("}atau alumunium atau
            fiberglass{") "}
            yang berbentuk kotak dengan jarak tertentu.
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <button className="mt-5 bg-[#db2d2d] w-[120px] text-white py-1 px-2 rounded-xl font-bold hover:border-[#e70302] hover:border-2 hover:bg-white hover:text-[#e70302] hover:text-[18px] transition-all">
            Beli Produk
          </button>
        </div>
      </div>
      <div className="p-3 border-2 w-[350px] h-[450px] bg-white rounded-2xl flex flex-col justify-center overflow-hidden">
        <div className="w-[320px] h-[250px] rounded-2xl bg-slate-200 overflow-hidden shadow-2xl ">
          <img
            className="object-cover w-full h-full"
            src={pipaHitam}
            alt="rockwoll"
          />
        </div>
        <div className="flex flex-col justify-start mt-5">
          <h2 className="font-bold text-[20px]">Pipa Hitam</h2>
          <p className="font-light text-[12px]">
            Pipa hitam merupakan sebuah rongga berbentuk lingkaran dari bahan
            besi.
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <button className="mt-5 bg-[#db2d2d] w-[120px] text-white py-1 px-2 rounded-xl font-bold hover:border-[#e70302] hover:border-2 hover:bg-white hover:text-[#e70302] hover:text-[18px] transition-all">
            Beli Produk
          </button>
        </div>
      </div>
      <div className="p-3 border-2 w-[350px] h-[450px] bg-white rounded-2xl flex flex-col justify-center overflow-hidden">
        <div className="w-[320px] h-[250px] rounded-2xl bg-slate-200 overflow-hidden shadow-2xl ">
          <img
            className="object-cover w-full h-full"
            src={steelRail}
            alt="rockwoll"
          />
        </div>
        <div className="flex flex-col justify-start mt-5">
          <h2 className="font-bold text-[20px]">Steel Rail</h2>
          <p className="font-light text-[12px]">
            Steel Rail Umumnya terbuat dari baja hot rolling. Biasanya penampang
            tersebut berbentuk I-beam tetapi asimetris terhadap sumbu
            horizontal.
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <button className="mt-5 bg-[#db2d2d] w-[120px] text-white py-1 px-2 rounded-xl font-bold hover:border-[#e70302] hover:border-2 hover:bg-white hover:text-[#e70302] hover:text-[18px] transition-all">
            Beli Produk
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;
