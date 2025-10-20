
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import  Navbar  from "./components/Navbar";
import { lazy, Suspense } from 'react';
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars")); 

function App() {


  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center lazy-bg'>
          <Navbar />
          <Hero />
        </div>
       <Suspense fallback={<div className="text-center text-white p-10">Loading…</div>}>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App
