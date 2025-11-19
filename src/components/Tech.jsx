import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import Tilt from "react-parallax-tilt";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

// eslint-disable-next-line react-refresh/only-export-components
const TechCard = ({ index, title, icon }) => (
  <Tilt
    className="w-full sm:w-[200px] md:w-[220px] lg:w-[250px] inline-flex justify-center"
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1.05}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-6 min-h-[220px] flex justify-evenly items-center flex-col">
        <img
          src={icon ? icon : ''}
          alt={title}
          loading="lazy"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[18px] font-semibold text-center mt-3">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// eslint-disable-next-line react-refresh/only-export-components
const Tech = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I use</p>
        <h2 className={styles.sectionHeadText}>My Tech Stack.</h2>
      </motion.div>
    <div className="mt-20 flex flex-wrap justify-center gap-8">
      {technologies.map((tech, index) => (
        <TechCard key={tech.name} index={index} title={tech.name} icon={tech?.icon} />
      ))}
    </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Tech, "skills");
