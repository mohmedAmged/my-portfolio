/* eslint-disable no-unused-vars */
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "motion/react"

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// eslint-disable-next-line react-refresh/only-export-components
const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className='w-full sm:w-[250px] inline-flex justify-center'
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a dedicated front-end developer with strong experience in TypeScript and JavaScript, specializing in React, GSAP animations, and Three.js for immersive web experiences. I build modern, scalable interfaces and integrate real-time features through APIs and event-driven architecture.<br/>
        I'm a fast learner who enjoys collaborating closely with teams and clients to create smooth, high-performance, user-focused digital products. I’m always pushing to learn more, experiment, and bring ideas to life with clean, efficient code.<br/>
        Let’s build something exceptional together!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 aboutCards'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");
