"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF, Html } from "@react-three/drei";
import { Suspense, useState } from "react";
import { 
  PauseIcon, 
  PlayIcon,
  MapPinIcon 
} from "@heroicons/react/24/outline";

const pointsOfInterest = [
  { 
    label: "MDF", 
    description: "Structured Cabling Hub",
    position: [0, 1.0, -0.2] as [number, number, number] 
  },

];

function Model(props: any) {
  const { scene } = useGLTF("/models/building.glb");
  return <primitive object={scene} {...props} />;
}

// A reusable component for the floating labels
function Annotation({ point }: { point: typeof pointsOfInterest[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Html position={point.position} center distanceFactor={10}>
      <div className="relative flex flex-col items-center group">
        {/* UPDATED: Made the marker smaller (w-6 h-6) and icon smaller */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
            isOpen ? "bg-blue-600 text-white scale-110" : "bg-white text-blue-600 hover:scale-110"
          }`}
        >
          <MapPinIcon className="w-3.5 h-3.5" />
        </button>

        {/* The Pop-up Card */}
        <div 
          className={`absolute bottom-8 min-w-[140px] bg-white p-2.5 rounded-lg shadow-xl text-center transition-all duration-300 origin-bottom z-50 ${
            isOpen 
              ? "opacity-100 scale-100 translate-y-0" 
              : "opacity-0 scale-90 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
          }`}
        >
          <h4 className="font-bold text-slate-900 text-xs">{point.label}</h4>
          <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">{point.description}</p>
          
          {/* Arrow */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-white"></div>
        </div>
      </div>
    </Html>
  );
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
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <section className="w-full py-20 bg-slate-50 border-t border-slate-100 relative">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 relative inline-block">
          Our Integrated Campus
          <span className="block h-1 w-20 bg-blue-600 mt-2 rounded-full mx-auto"></span>
        </h2>
        <p className="text-lg text-slate-700 max-w-2xl mx-auto">
          Explore a digital twin of our work. Click the markers to see specific integrations.
        </p>
      </div>

      <div className="h-[700px] w-full bg-white rounded-xl shadow-inner overflow-hidden border border-slate-200 relative">
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 45, position: [4, 4, 4] }}>
          <Suspense fallback={<Loader />}>
            <Stage environment="city" intensity={0.5} adjustCamera={false}>
              <Model scale={2} />
              
              {pointsOfInterest.map((point, idx) => (
                <Annotation key={idx} point={point} />
              ))}
            </Stage>
          </Suspense>
          
          <OrbitControls 
            makeDefault
            autoRotate={autoRotate}
            autoRotateSpeed={1.0}
            enableZoom={true} 
            minDistance={0.2}
            maxDistance={4}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2} 
          />
        </Canvas>
        
        {/* UI Overlay Controls */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
          <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm border border-slate-200 text-xs font-medium text-slate-600">
            Drag to rotate • Scroll to zoom • Click pins for details
          </div>

          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className="pointer-events-auto bg-white hover:bg-slate-50 text-slate-700 p-3 rounded-full shadow-lg border border-slate-200 transition-all active:scale-95 flex items-center gap-2 group"
            title={autoRotate ? "Pause Rotation" : "Resume Rotation"}
          >
            {autoRotate ? (
              <>
                <PauseIcon className="w-5 h-5 text-blue-600" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs font-medium text-blue-600">
                  Pause
                </span>
              </>
            ) : (
              <>
                <PlayIcon className="w-5 h-5 text-slate-400" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs font-medium text-slate-500">
                  Resume
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}