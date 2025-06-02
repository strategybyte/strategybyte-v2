"use client";

import { Section } from "./common";

export default function Marquee() {
  const brands = [
    "Digital Marketing",
    "Business Process Setup",
    "Search Engine Optimization",
    "Participant Portal Development",
    "Website Development",
    "Analytics & Reporting",
  ];

  return (
    <Section
      className="marquee-area bg-secondary"
      containerProps={{
        padding: "py-8",
      }}
    >
      <div className="marquee-wrapper overflow-hidden">
        <div className="marquee-content flex animate-marquee">
          {/* First set of brands */}
          {brands.map((brand, index) => (
            <div
              key={index}
              className="marquee-item flex-shrink-0 mx-8 text-white font-bold text-xl"
            >
              {brand}
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`duplicate-${index}`}
              className="marquee-item flex-shrink-0 mx-8 text-white font-bold text-xl"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
