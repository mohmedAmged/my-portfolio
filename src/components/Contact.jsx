import React, { lazy, Suspense, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import LazyCanvas from "./LazyCanvas";
const EarthCanvas = lazy(() => import("./canvas/Earth"));

// eslint-disable-next-line react-refresh/only-export-components
const Contact = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);



  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl h-[100vh] flex flex-col justify-center'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-8 flex flex-col gap-6 text-white text-lg">
          <a
            href="mailto:mohamedamgad.dev@gmail.com"
            // target="_blank"
            className="flex items-center gap-4 hover:text-[#b291fb] transition"
          >
            <i className="fa-solid fa-envelope text-2xl"></i>
            <span className="links_size">mohamedamgad.dev@gmail.com</span>
          </a>

          <a
            href="https://wa.me/201005322028"
            target="_blank"
            className="flex items-center gap-4 hover:text-[#b291fb] transition"
          >
            <i className="fa-brands fa-whatsapp text-2xl"></i>
            <span className="links_size">+20 100 5322028</span>
          </a>

          <a
            href="https://github.com/mohmedAmged"
            target="_blank"
            className="flex items-center gap-4 hover:text-[#b291fb] transition"
          >
            <i className="fa-brands fa-github text-2xl"></i>
            <span className="links_size">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/mohamedamged"
            target="_blank"
            className="flex items-center gap-4 hover:text-[#b291fb] transition"
          >
            <i className="fa-brands fa-linkedin text-2xl"></i>
            <span className="links_size">LinkedIn</span>
          </a>

          <a
            href="https://www.tiktok.com/@harry.dev7"
            target="_blank"
            className="flex items-center gap-4 hover:text-[#b291fb] transition"
          >
            <i className="fa-brands fa-tiktok text-2xl"></i>
            <span className="links_size">TikTok</span>
          </a>

        </div>
      </motion.div>


      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <LazyCanvas rootMargin="300px">
          <Suspense
            fallback={
              <div className="w-full h-full flex justify-center items-center text-white text-sm">
                Loading Earth...
              </div>
            }
          >
            <EarthCanvas />
          </Suspense>
        </LazyCanvas>
      </motion.div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Contact, "contact");
