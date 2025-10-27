
import React, { Suspense, useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Environment, ContactShadows, OrbitControls, useGLTF, Preload } from "@react-three/drei";
import * as THREE from "three";
import HeroScreen from "../HeroScreen";
import LazyCanvas from "../LazyCanvas";
import { MemoryRouter } from "react-router-dom";

const Model = React.memo((props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("./apple/mac-draco.glb");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!group.current) return;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.08);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.08);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.08);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.08);
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes["Cube008"]?.geometry} />
          <mesh material={materials["matte.001"]} geometry={nodes["Cube008_1"]?.geometry} />
          <mesh geometry={nodes["Cube008_2"]?.geometry}>
            <Html
              rotation-x={-Math.PI / 2}
              position={[0, .05, -0.09]}
              transform
              occlude
              className="w-[335px] h-[216px] overflow-y-auto overflow-x-auto contentt"
            >
              <MemoryRouter>
                <div className="relative scale-[.5] w-[668px] h-[fit-content] bg-primary wrapperr"
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  <HeroScreen />
                </div>
              </MemoryRouter>
            </Html>
          </mesh>
        </group>
      </group>
      {nodes.keyboard && <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />}
      <group position={[0, -0.1, 3.39]}>
        {nodes["Cube002"] && <mesh material={materials.aluminium} geometry={nodes["Cube002"].geometry} />}
        {nodes["Cube002_1"] && <mesh material={materials.trackpad} geometry={nodes["Cube002_1"].geometry} />}
      </group>
      {nodes.touchbar && <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />}
    </group>
  );
});

const MacbookCanvas = () => {
  const camera = useMemo(() => ({ position: [-5, 0, -15], fov: 55 }), []);
  const [isMobile, setIsMobile] = useState(false);
  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 500);
      setIsMedium(width > 500 && width <= 820);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full h-full">
      <LazyCanvas rootMargin="300px">
        <Suspense fallback={<div style={{ width: "100%", height: 420 }}></div>}>
          <Canvas
            className="!z-0"
            camera={camera}
            frameloop="demand"
            dpr={[1, 1.5]}
            gl={{ antialias: true }}
            style={{ width: "100%", height: "100%" }}
          >
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1.2} />
            <group 
            scale={isMobile ? .6 : isMedium ? .79 : .9}
            rotation={
              isMobile ? 
              [0, Math.PI * -.99, 0] 
              :
              isMedium ?
              [0, Math.PI * -.97, 0]
              :
              [0, Math.PI * -1.12, 0]} 
            position={
              isMobile ? 
              [0, -1.4, 0] 
              : 
              isMedium ? 
              [0, -1.6, 0]  
              :
              [-7.5, -1.2, 0]}
            >
              <Model />
            </group>

            <Environment preset="city" />

            <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />

            <OrbitControls
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2.2}
              maxPolarAngle={Math.PI / 2.2}
            />

            <Preload all />
          </Canvas>
        </Suspense>
      </LazyCanvas>
    </div>
  );
};

export default React.memo(MacbookCanvas);
