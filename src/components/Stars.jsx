'use client'
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

const Stars = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => {
      const randomNumbers = Array.from({ length: 5000 }, () => Math.random() * 2 - 1.2);
      return new Float32Array(randomNumbers);
    });
    
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    });
    
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          />
      </Points>
    </group>
  );

};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;