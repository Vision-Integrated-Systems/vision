"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF, Html } from "@react-three/drei";
import { Suspense } from "react";

function Model(props: any) {
  // ⚠️ Verify this path matches exactly where you put the file in /public
  const { scene } = useGLTF("/models/building.glb");
  return <primitive object={scene} {...props} />;
}

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <div className="text-slate-500 font-semibold text-sm">Loading Model...</div>
      </div>
    </Html>
  );
}

export default function BuildingShowcase() {
  return (
    <section className="w-full py-20 bg-slate-50 border-t border-slate-100 relative">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 relative inline-block">
          Our Integrated Campus
          <span className="block h-1 w-20 bg-blue-600 mt-2 rounded-full mx-auto"></span>
        </h2>
        <p className="text-lg text-slate-700 max-w-2xl mx-auto">
          Explore a digital twin of our work. Drag to rotate and zoom to see how we integrate cabling, A/V, and security systems.
        </p>
      </div>

      <div className="h-[700px] w-full bg-white rounded-xl shadow-inner overflow-hidden border border-slate-200 relative">
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 45, position: [4, 4, 4] }}>
          <Suspense fallback={<Loader />}>
            <Stage environment="city" intensity={0.5} adjustCamera={false}>
              <Model scale={2} />
            </Stage>
          </Suspense>
          
          <OrbitControls 
            makeDefault
            autoRotate 
            autoRotateSpeed={1.0}
            enableZoom={true} 
            minDistance={0.5} /* <--- UPDATED: Allows you to zoom in much closer */
            maxDistance={20}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2} 
          />
        </Canvas>
        
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-medium text-slate-600 shadow-sm pointer-events-none border border-slate-200">
          Drag to rotate • Scroll to zoom
        </div>
      </div>
    </section>
  );
}