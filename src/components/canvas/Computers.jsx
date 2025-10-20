import React, { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../Loader";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Computers = React.memo(({ isMobile, isMedium }) => {
  // const computer = useGLTF("./desktop_pc/scene.gltf");
  const computer = useGLTF("./desktop_pc/scene_compressed.glb");


  // scale & position based on screen size
  const scale = isMobile ? 0.7 : isMedium ? 0.73 : 0.82;
  const position = isMobile
    ? [0, -3, -2.2]
    : isMedium
    ? [0, -2, -2.4]
    : [0, -2.5, -5.2];
 const spotLightPosition = isMobile
    ? [2, 25, 8] // slightly to the right for mobile
    : isMedium
    ? [3, 35, 12] // further back and higher for medium
    : [0, 45, 30]; //  for desktop 

  const spotLightTarget = isMobile
    ? [0, -3, 0]
    : isMedium
    ? [0, -3, -2]
    : [0, -2.8, -5]; // roughly center of your model at desktop scale

  return (
    <>
      {/* <axesHelper args={[5]} />  */}
      <mesh>
        <hemisphereLight intensity={4} groundColor="black" />
        <spotLight
          position={spotLightPosition}
          target-position={spotLightTarget}
          angle={0.22}
          penumbra={.9}
          intensity={1.3}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={10} />
        <primitive
          object={computer.scene}
          scale={scale}
          position={position}
          rotation={[-0.01, -0.6, -0.12]}
        />
      </mesh>
    </>
  );
});

const ComputersCanvas = React.memo (() => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    //for mobile screens (≤500px)
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    //for medium screens (501px - 820px)
    const mediumQuery = window.matchMedia("(max-width: 820px)");

    const updateScreenSize = () => {
      setIsMobile(mobileQuery.matches);
      setIsMedium(!mobileQuery.matches && mediumQuery.matches);
    };

    updateScreenSize();

    // Listen for changes
    mobileQuery.addEventListener("change", updateScreenSize);
    mediumQuery.addEventListener("change", updateScreenSize);

    return () => {
      mobileQuery.removeEventListener("change", updateScreenSize);
      mediumQuery.removeEventListener("change", updateScreenSize);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} isMedium={isMedium} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
});

export default ComputersCanvas;
