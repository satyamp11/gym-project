'use client';

import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';
import WebGLFallback from './WebGLFallback';

function ProceduralDumbbell({ mousePos }: { mousePos: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    
    // Base continuous rotation
    groupRef.current.rotation.y += delta * 0.4;

    // Mouse parallax tracking (subtle & cinematic)
    targetRotation.current.x = mousePos.y * 0.3;
    targetRotation.current.y = mousePos.x * 0.4;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotation.current.x, 0.05);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, -targetRotation.current.y * 0.2, 0.05);
  });

  return (
    <group ref={groupRef} scale={[1.1, 1.1, 1.1]} position={[0, 0, 0]}>
      {/* Central Handle Barbell (Chromed Steel with knurling grooves) */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.18, 0.18, 4.2, 32]} />
        <meshStandardMaterial
          color="#e4e4e7"
          metalness={0.95}
          roughness={0.12}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Cyan/Teal Accent Lock Collars */}
      {[-1.4, 1.4].map((x, idx) => (
        <mesh key={`collar-${idx}`} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
          <meshStandardMaterial
            color="#38bdf8"
            metalness={0.8}
            roughness={0.2}
            emissive="#38bdf8"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}

      {/* Heavy Outer Weight Plates (Dark Charcoal Machined Steel) */}
      {[-1.75, -1.6, 1.6, 1.75].map((x, idx) => (
        <group key={`plate-${idx}`} position={[x, 0, 0]}>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[1.35, 1.35, 0.14, 48]} />
            <meshStandardMaterial
              color="#18181b"
              metalness={0.9}
              roughness={0.2}
              envMapIntensity={1.2}
            />
          </mesh>
          {/* Beveled Outer Plate Ring */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[1.3, 0.05, 16, 48]} />
            <meshStandardMaterial color="#27272a" metalness={0.85} roughness={0.25} />
          </mesh>
        </group>
      ))}

      {/* Inner Medium Weight Plates */}
      {[-1.45, 1.45].map((x, idx) => (
        <mesh key={`inner-plate-${idx}`} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[1.15, 1.15, 0.12, 48]} />
          <meshStandardMaterial
            color="#27272a"
            metalness={0.85}
            roughness={0.3}
          />
        </mesh>
      ))}

      {/* End Caps with Embossed Branding Accent */}
      {[-1.85, 1.85].map((x, idx) => (
        <mesh key={`endcap-${idx}`} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.4, 0.4, 0.06, 32]} />
          <meshStandardMaterial
            color="#38bdf8"
            metalness={0.9}
            roughness={0.1}
            emissive="#38bdf8"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Hero3DCanvas() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // WebGL support check
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!hasWebGL) {
    return <WebGLFallback title="3D METALLIC DUMBBELL" subtitle="Realistic gym hardware showcase" />;
  }

  return (
    <div className="w-full h-full min-h-[450px] relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={2.2} color="#ffffff" castShadow />
        <directionalLight position={[-10, -10, -5]} intensity={1.2} color="#38bdf8" />
        <pointLight position={[0, 4, 2]} intensity={2} color="#ffffff" />
        
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
            <ProceduralDumbbell mousePos={mousePos} />
          </Float>

          <ContactShadows
            position={[0, -2.2, 0]}
            opacity={0.5}
            scale={10}
            blur={2}
            far={4}
            color="#38bdf8"
          />

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
