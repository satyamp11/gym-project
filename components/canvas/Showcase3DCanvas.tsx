'use client';

import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';
import WebGLFallback from './WebGLFallback';

function ProceduralKettlebell() {
  const meshGroup = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (meshGroup.current) {
      meshGroup.current.rotation.y += delta * 0.5;
      meshGroup.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.1;
    }
  });

  return (
    <group ref={meshGroup} position={[0, -0.2, 0]} scale={[1.2, 1.2, 1.2]}>
      {/* Kettlebell Sphere Base (Cast Iron Texture) */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.3, 48, 48]} />
        <meshStandardMaterial
          color="#18181b"
          metalness={0.85}
          roughness={0.35}
          envMapIntensity={1.2}
        />
      </mesh>

      {/* Flat Bottom Ring Base */}
      <mesh position={[0, -1.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.2, 32]} />
        <meshStandardMaterial color="#0f0f12" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* Handle Loop (Curved Torus Arc) */}
      <mesh position={[0, 1.2, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.7, 0.18, 24, 48, Math.PI]} />
        <meshStandardMaterial
          color="#27272a"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Handle Stems */}
      {[-0.7, 0.7].map((x, idx) => (
        <mesh key={`stem-${idx}`} position={[x, 0.75, 0]}>
          <cylinderGeometry args={[0.18, 0.18, 0.9, 24]} />
          <meshStandardMaterial color="#27272a" metalness={0.9} roughness={0.2} />
        </mesh>
      ))}

      {/* Teal Accent Weight Inscribed Ring */}
      <mesh position={[0, 0.1, 1.22]}>
        <ringGeometry args={[0.45, 0.55, 32]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export default function Showcase3DCanvas() {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return <WebGLFallback title="3D KETTLEBELL SHOWCASE" subtitle="Biomechanical Cast-Iron Precision" />;
  }

  return (
    <div className="w-full h-full min-h-[400px] relative">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={2.2} color="#ffffff" castShadow />
        <pointLight position={[-5, -2, -2]} intensity={2} color="#38bdf8" />

        <Suspense fallback={null}>
          <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.5}>
            <ProceduralKettlebell />
          </Float>

          <ContactShadows
            position={[0, -2, 0]}
            opacity={0.6}
            scale={8}
            blur={2.5}
            far={4}
            color="#38bdf8"
          />

          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
