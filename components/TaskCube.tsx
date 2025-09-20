// components/TaskCube.tsx
"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTasks } from "@/context/TaskContext";
import { Mesh } from "three";

function Cube() {
  const meshRef = useRef<Mesh>(null);
  const { tasks } = useTasks();

  const completedCount = tasks.filter((task) => task.completed).length;
  const totalCount = tasks.length;
  const completionRatio = totalCount > 0 ? completedCount / totalCount : 0;

  // Calculate color based on completion (red to green gradient)
  const r = 1 - completionRatio;
  const g = completionRatio;
  const b = 0.2;

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate based on completion (faster when more complete)
      meshRef.current.rotation.x += delta * (0.5 + completionRatio);
      meshRef.current.rotation.y += delta * (0.5 + completionRatio);

      // Pulse animation based on completion
      const scale =
        1 + Math.sin(state.clock.elapsedTime * 2) * 0.05 * completionRatio;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={[r, g, b]} />
    </mesh>
  );
}

export default function TaskCube() {
  const { tasks } = useTasks();
  const completedCount = tasks.filter((task) => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-xl p-5 text-white shadow-lg">
      <h3 className="text-lg font-semibold mb-3 text-center">
        Task Progress Cube
      </h3>
      <div className="h-64 w-full relative mb-4">
        <Canvas
          camera={{ position: [3, 3, 3], fov: 50 }}
          className="rounded-lg bg-gradient-to-br from-blue-800 to-purple-900"
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Cube />
        </Canvas>
      </div>
      <div className="text-center">
        <p className="text-sm mb-2">
          Completed: {completedCount} / {totalCount}
        </p>
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
          <div
            className="bg-gradient-to-r from-blue-400 to-green-400 h-2.5 rounded-full transition-all duration-500"
            style={{
              width: `${
                totalCount > 0 ? (completedCount / totalCount) * 100 : 0
              }%`,
            }}
          ></div>
        </div>
        <p className="text-xs text-gray-300">
          The cube changes color and spins faster as you complete tasks
        </p>
      </div>
    </div>
  );
}
