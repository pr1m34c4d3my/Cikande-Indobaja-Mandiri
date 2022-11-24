import React from "react";

function Topmenu() {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex py-3">
        <div className="flex justify-between items-start w-4/12 cursor-pointer">
          <h3 className="text-[#ff9191] hover:text-[#e70302] transition-all">
            Chat With Us
          </h3>
          <h3>+62 811-1260-555</h3>
          <h3>info@cikandeindobaja.co.id</h3>
        </div>
        <div className="w-6/12"></div>
        <div className="flex justify-between w-2/12 cursor-pointer">
          <h3 className="text-[#ff9191] hover:text-[#e70302] transition-all">
            Blog
          </h3>
          <h3 className="text-[#ff9191] hover:text-[#e70302] transition-all">
            About Us
          </h3>
          <h3 className="text-[#ff9191] hover:text-[#e70302] transition-all">
            Careers
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Topmenu;
