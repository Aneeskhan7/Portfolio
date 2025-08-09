import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import * as THREE from "three";

// Realistic Earth with actual satellite textures
const Earth = () => {
  const earthRef = useRef();
  
  // Load real Earth textures from NASA/public sources
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(THREE.TextureLoader, [
    'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/planets/earth_atmos_2048.jpg', // Earth color
    'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/planets/earth_normal_2048.jpg', // Surface bumps
    'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/planets/earth_specular_2048.jpg', // Water reflection
    'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/planets/earth_clouds_1024.png' // Cloud layer
  ]);

  useEffect(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y = Math.PI; // Rotate to show proper orientation
    }
  }, []);

  return (
    <group>
      {/* Main Earth sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[3, 128, 128]} />
        <meshPhongMaterial
          map={colorMap}
          normalMap={normalMap}
          specularMap={specularMap}
          shininess={100}
          transparent={false}
          color="#ffffff"
        />
      </mesh>
      
      {/* Cloud layer */}
      <mesh>
        <sphereGeometry args={[3.01, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          transparent={true}
          opacity={0.4}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Atmosphere glow effect */}
      <mesh>
        <sphereGeometry args={[3.1, 64, 64]} />
        <meshBasicMaterial
          color={0x87ceeb}
          transparent={true}
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={null}>
        {/* Much brighter lighting to show Earth surface clearly */}
        <ambientLight intensity={0.8} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={3.5} 
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <directionalLight 
          position={[-5, -5, -5]} 
          intensity={2.0} 
        />
        <pointLight position={[-10, -5, -10]} intensity={1.2} color="#ffffff" />
        <pointLight position={[10, -5, 10]} intensity={1.0} color="#ffffff" />
        <pointLight position={[0, 10, 0]} intensity={0.8} color="#ffffff" />
        
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
};

export default EarthCanvas;