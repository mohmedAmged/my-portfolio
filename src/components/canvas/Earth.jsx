import React, { memo, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = memo(() => {
  const earth = useGLTF("./planet/scene_compressed.glb");
  return (
    <primitive object={earth.scene} scale={2.2} />
  );
});

const EarthCanvas = memo(() => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
});

export default EarthCanvas;
