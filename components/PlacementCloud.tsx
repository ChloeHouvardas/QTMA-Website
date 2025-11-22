// components/PlacementCloud.jsx
import React from "react";
import { Cloud } from "react-icon-cloud";

// Use logos from the `public/assets/Placement Logos` folder
const logos = [
  { src: "/assets/Placement Logos/amazon.png", alt: "Amazon" },
  { src: "/assets/Placement Logos/aritzia.png", alt: "Aritzia" },
  { src: "/assets/Placement Logos/barclays.png", alt: "Barclays" },
  { src: "/assets/Placement Logos/bcg.png", alt: "BCG" },
  { src: "/assets/Placement Logos/cohere.png", alt: "Cohere" },
  { src: "/assets/Placement Logos/dior.png", alt: "Dior" },
  { src: "/assets/Placement Logos/dropbox.png", alt: "Dropbox" },
  { src: "/assets/Placement Logos/evercore.png", alt: "Evercore" },
  { src: "/assets/Placement Logos/financialtimes.png", alt: "Financial Times" },
  { src: "/assets/Placement Logos/google.png", alt: "Google" },
  { src: "/assets/Placement Logos/harvard.png", alt: "Harvard" },
  { src: "/assets/Placement Logos/jpmorgan.png", alt: "JPMorgan" },
  { src: "/assets/Placement Logos/mckinsey.png", alt: "McKinsey" },
  { src: "/assets/Placement Logos/meta.png", alt: "Meta" },
  { src: "/assets/Placement Logos/microsoft.png", alt: "Microsoft" },
  { src: "/assets/Placement Logos/moelis.png", alt: "Moelis" },
  { src: "/assets/Placement Logos/morganstanley.png", alt: "Morgan Stanley" },
  { src: "/assets/Placement Logos/next36.png", alt: "Next36" },
  { src: "/assets/Placement Logos/ontarioteachers.png", alt: "Ontario Teachers" },
  { src: "/assets/Placement Logos/palantir.png", alt: "Palantir" },
  { src: "/assets/Placement Logos/paypal.png", alt: "PayPal" },
  { src: "/assets/Placement Logos/shopify.png", alt: "Shopify" },
  { src: "/assets/Placement Logos/stanford.png", alt: "Stanford" },
  { src: "/assets/Placement Logos/tesla.png", alt: "Tesla" },
  { src: "/assets/Placement Logos/uber.png", alt: "Uber" },
  { src: "/assets/Placement Logos/wealthsimple.png", alt: "Wealthsimple" },
  { src: "/assets/Placement Logos/wharton.png", alt: "Wharton" },
  { src: "/assets/Placement Logos/youtube.png", alt: "YouTube" },
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
        {logos.map(({ src, alt }, i) => (
          <a
            key={i}
            href="#"
            title={alt}
            onClick={(e) => e.preventDefault()}
          >
            <img
              src={src}
              alt={alt}
              // Let images render at their natural resolution while keeping
              // a reasonable cap so the cloud layout stays tidy.
              style={{
                width: "auto",
                height: "auto",
                maxWidth: 160,
                maxHeight: 160,
                objectFit: "contain",
              }}
            />
          </a>
        ))}
      </Cloud>
    </div>
  );
}