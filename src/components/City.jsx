import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';

function City() {
  const gltf = useLoader(GLTFLoader, "/src/assets/3d/la_night_city/scene.gltf");

  useEffect(() => {
    gltf.scene.scale.set(0.4, 0.4, 0.4);
    gltf.scene.position.set(0, -0.035, 0); // Corrected position setting
    
    gltf.scene.traverse((node) => {
      if (node.isMesh) {
        // node.material.color = new THREE.Color(0x555555); // Set base color
        node.material.emissiveIntensity = 0.3; // Adjust emissive intensity
        node.material.roughness = 0.7; // Reduce roughness for smoother reflections
      }
    });
  }, [gltf]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    gltf.scene.rotation.y = t * 0.10;
  });

  return (
    <>
      {/* Ambient light for overall illumination */}
      <ambientLight color={0xfffff} intensity={1} />

      {/* Directional light to simulate sunlight */}
      <directionalLight 
        position={[5, 10, 5]} 
        intensity={1.5} 
        castShadow
        shadow-mapSize-width={1024} // For better shadow quality
        shadow-mapSize-height={1024}
      />

      {/* The City Model */}
      <primitive object={gltf.scene} />
    </>
  );
}

export default City;
