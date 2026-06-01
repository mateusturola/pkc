"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Environment } from "@react-three/drei";
import * as THREE from "three";
import type { DeviceTier } from "@/hooks/useDeviceTier";

const PALETTE = ["#9B72F2", "#2BA9E0", "#FF6B5C", "#FFC83D", "#3FCB8E", "#B79BFF"];

type ShapeDef = {
  kind: "sphere" | "box" | "torus" | "ico" | "capsule";
  position: [number, number, number];
  scale: number;
  color: string;
  rotation: [number, number, number];
  floatSpeed: number;
  floatIntensity: number;
};

// Curated anchor positions. The hero text/logo lives in the LEFT-center band,
// so shapes are biased to the right and to the far top/bottom to keep that
// band clear. The first few (used on mobile) sit top/bottom, away from the
// vertically-centered text.
const ANCHORS: [number, number, number][] = [
  [3.0, 3.4, -3.2],
  [5.8, 2.5, -3.0],
  [6.3, -0.5, -3.8],
  [3.4, -2.8, -2.6],
  [4.7, 0.7, -2.0],
  [5.6, -2.9, -4.4],
  [2.7, 1.7, -5.2],
  [4.6, 3.1, -5.4],
  [6.5, 1.1, -2.4],
  [3.1, -1.0, -5.6],
];

function buildShapes(count: number): ShapeDef[] {
  const kinds: ShapeDef["kind"][] = [
    "sphere",
    "box",
    "torus",
    "ico",
    "capsule",
  ];
  const out: ShapeDef[] = [];
  // Deterministic pseudo-random so SSR/CSR match and layout feels designed.
  let seed = 7;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const n = Math.min(count, ANCHORS.length);
  for (let i = 0; i < n; i++) {
    out.push({
      kind: kinds[i % kinds.length],
      position: ANCHORS[i],
      scale: 0.55 + rand() * 0.55,
      color: PALETTE[i % PALETTE.length],
      rotation: [rand() * Math.PI, rand() * Math.PI, rand() * Math.PI],
      floatSpeed: 0.7 + rand() * 1.0,
      floatIntensity: 0.45 + rand() * 0.65,
    });
  }
  return out;
}

function Shape({ def, lowPoly }: { def: ShapeDef; lowPoly: boolean }) {
  const material = (
    <meshStandardMaterial
      color={def.color}
      roughness={0.35}
      metalness={0.05}
    />
  );

  const geo = () => {
    switch (def.kind) {
      case "sphere":
        return (
          <mesh castShadow>
            <sphereGeometry args={[0.7, lowPoly ? 16 : 48, lowPoly ? 16 : 48]} />
            {material}
          </mesh>
        );
      case "box":
        return (
          <RoundedBox args={[1.1, 1.1, 1.1]} radius={0.22} smoothness={lowPoly ? 2 : 4}>
            {material}
          </RoundedBox>
        );
      case "torus":
        return (
          <mesh>
            <torusGeometry args={[0.6, 0.26, lowPoly ? 10 : 20, lowPoly ? 24 : 48]} />
            {material}
          </mesh>
        );
      case "ico":
        return (
          <mesh>
            <icosahedronGeometry args={[0.8, 0]} />
            {material}
          </mesh>
        );
      case "capsule":
        return (
          <mesh>
            <capsuleGeometry args={[0.4, 0.7, lowPoly ? 4 : 8, lowPoly ? 10 : 18]} />
            {material}
          </mesh>
        );
    }
  };

  return (
    <Float
      speed={def.floatSpeed}
      rotationIntensity={def.floatIntensity * 0.5}
      floatIntensity={def.floatIntensity}
    >
      <group
        position={def.position}
        rotation={def.rotation}
        scale={def.scale}
      >
        {geo()}
      </group>
    </Float>
  );
}

function ParallaxRig({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  const target = useRef(new THREE.Vector2());
  const mouse = useRef(new THREE.Vector2());

  // Track the pointer at window level so the canvas can keep
  // pointer-events:none (HTML stays clickable) while parallax still works.
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.set(
        (e.clientX / window.innerWidth) * 2 - 1,
        -((e.clientY / window.innerHeight) * 2 - 1)
      );
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    target.current.lerp(mouse.current, 0.05);
    ref.current.rotation.y = target.current.x * 0.18;
    ref.current.rotation.x = -target.current.y * 0.12;
  });

  return <group ref={ref}>{children}</group>;
}

export default function HeroCanvas({ tier }: { tier: DeviceTier }) {
  const lowPoly = tier === "low";
  const shapes = useMemo(() => buildShapes(lowPoly ? 5 : 9), [lowPoly]);

  // Pause the render loop when the hero scrolls out of view.
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0 z-0">
      <Canvas
        frameloop={active ? "always" : "never"}
        dpr={lowPoly ? [1, 1.3] : [1, 1.8]}
        camera={{ position: [0, 0, 9], fov: 45 }}
        gl={{
          antialias: !lowPoly,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ pointerEvents: "none" }}
      >
        <ambientLight intensity={0.85} />
        <directionalLight position={[5, 8, 5]} intensity={1.6} />
        <directionalLight position={[-6, -3, 2]} intensity={0.5} color="#5DC1EC" />
        {!lowPoly && <Environment preset="city" />}
        <ParallaxRig>
          {shapes.map((def, i) => (
            <Shape key={i} def={def} lowPoly={lowPoly} />
          ))}
        </ParallaxRig>
      </Canvas>
    </div>
  );
}
