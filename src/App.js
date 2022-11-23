import React from "react";
import About from "./components/About";
import ArticlesHome from "./components/ArticlesHome";
import Categorymenu from "./components/Categorymenu";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeProducts from "./components/HomeProducts";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";
import Testimonials from "./components/Testimonials";
import Topmenu from "./components/Topmenu";

function App() {
  return (
    <div className="scroll-smooth bg-mainBg transition-all">
      <section id="atas">
        <Topmenu />
      </section>
      <Header />
      <Categorymenu />
      <Slider />
      <div className="flex flex-row justify-center mt-10 h-[120vh] gap-20 bg-white">
        <Sidebar />
        <HomeProducts />
      </div>
      <Testimonials />
      <About />
      <ArticlesHome />
      <Footer />
    </div>
  );
}

export default App;
