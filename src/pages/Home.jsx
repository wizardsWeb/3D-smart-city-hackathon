import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import City from '../components/City';
import Navbar from '../components/Navbar';


const Home = () => {
  return (
    <>
      <OrbitControls 
        target={[0, 0.35, 0]}
        maxPolarAngle={1.45}
        enableZoom={false}
      />
      
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      {/* Environment lighting for daylight */}
      <Environment preset="sunset" />

      {/* The City Model */}
      <City />
    </>
    
  );
}

export default Home


