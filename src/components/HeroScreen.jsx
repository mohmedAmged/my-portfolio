// src/components/HeroPage.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const HeroPage = () => {
  return (
    <div className="bg-primary text-white w-full h-auto overflow-y-auto overflow-y-scroll p-6 flex flex-col space-y-10">
      
      <section className="flex flex-col items-center text-center">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-secondary`}>
            Welcome to my portfolio
          </p>
          <h1 className={`${styles.heroHeadText} text-white text-3xl`}>
            Hi, I'm <span className="text-[#915EFF]">Mohamed Amged</span>
          </h1>
          <p className="text-sm text-gray-400 mt-3 max-w-md mx-auto">
            A full-stack developer passionate about interactive 3D experiences and crafting creative web applications.
          </p>
        </motion.div>
      </section>
      <motion.section
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="bg-tertiary rounded-xl p-4 shadow-card"
      >
        <h2 className={`${styles.sectionHeadText} text-lg mb-3`}>
          About Me
        </h2>
        <p className="text-secondary text-sm leading-relaxed">
          I'm a developer with a strong passion for building immersive 3D and interactive web applications using modern frameworks like React, Three.js, and TailwindCSS.
        </p>
      </motion.section>

      <motion.section
        variants={fadeIn("up", "spring", 0.4, 0.75)}
        className="bg-tertiary rounded-xl p-4 shadow-card"
      >
        <h2 className={`${styles.sectionHeadText} text-lg mb-3`}>
          Featured Projects
        </h2>
        <div className="space-y-3">
          {[
            { name: "3D Portfolio", desc: "Interactive developer portfolio built with React Three Fiber." },
            { name: "Valkii App", desc: "Multi-platform business app built for real-time communication." },
          ].map((project, idx) => (
            <div
              key={idx}
              className="bg-black-100 p-3 rounded-lg hover:bg-black-200 transition"
            >
              <h3 className="text-white font-medium text-sm">{project.name}</h3>
              <p className="text-secondary text-xs">{project.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>
      <motion.section
        variants={fadeIn("up", "spring", 0.4, 0.75)}
        className="bg-tertiary rounded-xl p-4 shadow-card"
      >
        <h2 className={`${styles.sectionHeadText} text-lg mb-3`}>
          Featured Projects
        </h2>
        <div className="space-y-3">
          {[
            { name: "3D Portfolio", desc: "Interactive developer portfolio built with React Three Fiber." },
            { name: "Valkii App", desc: "Multi-platform business app built for real-time communication." },
          ].map((project, idx) => (
            <div
              key={idx}
              className="bg-black-100 p-3 rounded-lg hover:bg-black-200 transition"
            >
              <h3 className="text-white font-medium text-sm">{project.name}</h3>
              <p className="text-secondary text-xs">{project.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={fadeIn("up", "spring", 0.6, 0.75)}
        className="text-center"
      >
        <h2 className={`${styles.sectionHeadText} text-lg mb-2`}>
          Let's Connect
        </h2>
        <p className="text-secondary text-sm mb-4">
          Feel free to reach out for collaborations or project ideas.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#915EFF] hover:bg-[#7b4cd8] text-white px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          Contact Me
        </a>
      </motion.section>
    </div>
  );
};

export default HeroPage;
