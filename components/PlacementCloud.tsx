// components/PlacementCloud.jsx
import React from "react";
import { Cloud } from "react-icon-cloud";

// paths are relative to /public
const logos = [
  "/assets/Club Data/Placements/adaSupport.png",
  "/assets/Club Data/Placements/amazon.png",
  "/assets/Club Data/Placements/bain&co.png",
  "/assets/Club Data/Placements/blend.png",
  "/assets/Club Data/Placements/bostonConsultingGroup.png",
  "/assets/Club Data/Placements/dropbox.png",
  "/assets/Club Data/Placements/evercore.png",
  "/assets/Club Data/Placements/google.png",
  "/assets/Club Data/Placements/instagram.png",
  "/assets/Club Data/Placements/jpmorgan.png",
  "/assets/Club Data/Placements/mckinsey.png",
  "/assets/Club Data/Placements/microsoft.png",
  "/assets/Club Data/Placements/morganstanley.png",
  "/assets/Club Data/Placements/next36.png",
  "/assets/Club Data/Placements/shopify.png",
  "/assets/Club Data/Placements/tenthousandcoffees.png",
  "/assets/Club Data/Placements/tesla.png",
  "/assets/Club Data/Placements/uber.png",
  "/assets/Club Data/Placements/wealthsimple.png",
];

const cloudOptions = {
  wheelZoom: false,
  dragControl: true,
  decel: 0.95,
  initial: [0.1, -0.1],
  outlineColour: "transparent",
};

export default function PlacementCloud() {
  return (
    <div
      className="flex items-center justify-center"
      // bigger canvas → bigger sphere
      style={{ width: 480, height: 480 }}
    >
      <Cloud
        id="placement-cloud"
        options={cloudOptions}
        canvasProps={{
          style: { width: "100%", height: "100%" },
        }}
      >
        {logos.map((src, i) => (
          <a
            key={i}
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              src={src}
              alt=""
              style={{
                width: 96, // 👈 bigger logos
                height: 96,
                objectFit: "fill",
              }}
            />
          </a>
        ))}
      </Cloud>
    </div>
  );
}