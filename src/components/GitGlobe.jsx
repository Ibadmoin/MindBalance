"use client";

import React from "react";
import { motion } from "framer-motion";
import { World } from "./ui/globe";



export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

  const sampleArcs = [
    {
      startLat: 28.6139,
      startLng: 77.2090,
      endLat: 40.7128,
      endLng: -74.0060,
      arcAlt: 0.3,
      color: colors[0],
    },
    {
      startLat: 35.6895,
      startLng: 139.6917,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.4,
      color: colors[1],
    },
    {
      startLat: 51.5074,
      startLng: -0.1278,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[2],
    },
  ];

  return (
    <motion.div
      className="relative h-[40rem] w-full overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 0.3,
      }}
    >
      <World data={sampleArcs} globeConfig={globeConfig} />
    </motion.div>
  );
}
