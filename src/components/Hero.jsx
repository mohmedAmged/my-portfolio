// eslint-disable-next-line no-unused-vars
// import { motion } from "motion/react"
import { styles } from "../styles";
import { lazy, Suspense } from "react";
import LazyCanvas from "./LazyCanvas";
const MacbookCanvas = lazy(() => import("./canvas/MacbookCanvas"));

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Mohamed</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I craft dynamic web experiences, <br className='sm:block hidden' />
            3D visuals, and interactive interfaces <br className='sm:block hidden' />
            using React.js, Next.js, and Three.js
          </p>
        </div>
      </div>
      <LazyCanvas>
        <Suspense fallback={<div className="w-full h-[500px] flex justify-center items-center text-white">Loading 3D Scene...</div>}>
            <>
              <MacbookCanvas />
            </>
        </Suspense>
      </LazyCanvas>

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
