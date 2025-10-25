import React, {  lazy, Suspense, useState } from "react";
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
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl h-[100vh]'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          className='mt-4 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Name</span>
            <input
              type='text'
              name='name'
              value={''}
              placeholder="What's your name?"
              className='bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your email</span>
            <input
              type='email'
              name='email'
              value={''}
              placeholder="What's your email?"
              className='bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Message</span>
            <textarea
              rows={3}
              name='message'
              value={''}
              placeholder="What's your message?"
              className='bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-2 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
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
