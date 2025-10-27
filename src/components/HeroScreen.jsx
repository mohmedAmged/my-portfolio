import React from "react";
import { styles } from "../styles";

const HeroPage = () => {
  return (
    <div className="bg-primary text-white w-full h-[auto] p-6 ">
      <section className="flex flex-col justify-center items-center text-center">
        {/* Name */}
        <div>
          <h1 className={`${styles.heroCanvasHeadText} text-white`}>
            <span className="text-[#915EFF]">Mohamed Amged</span>
          </h1>
          <p className="text-sm text-gray-400 mt-3 max-w-md mx-auto"> A full-stack developer passionate about interactive 3D experiences and crafting creative web applications. </p>
        </div>
        <div
          className="flex gap-8 mt-4 text-3xl"
        >
          <a href="mailto:mohamedamgad.dev@gmail.com" className="hover:text-[#b291fb] transition">
            <i className="fa-solid fa-envelope"></i>
          </a>

          <a href="https://wa.me/201005322028" target="_blank" className="hover:text-[#b291fb] transition">
            <i className="fa-brands fa-whatsapp"></i>
          </a>

          <a href="https://github.com/mohmedAmged" target="_blank" className="hover:text-[#b291fb] transition">
            <i className="fa-brands fa-github"></i>
          </a>

          <a href="https://www.linkedin.com/in/mohamedamged" target="_blank" className="hover:text-[#b291fb] transition">
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a href="https://www.tiktok.com/@harry.dev7" target="_blank" className="hover:text-[#b291fb] transition">
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>
        <a
          href="/mohamed-amgad-cv.pdf"
          download
          className="mt-10 bg-[#915EFF] hover:bg-[#7b4cd8] px-8 py-3 rounded-lg text-sm font-medium transition"
        >
          Download CV
        </a>
      </section>
    </div>
  );
};

export default HeroPage;
