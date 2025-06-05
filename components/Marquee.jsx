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
    <div className="bg-secondary -rotate-[6deg]">
      <Section
        className="overflow-hidden"
        containerProps={{
          padding: "py-8",
        }}
      >
        <div>
          <div className="marquee-content">
            {/* First set of brands */}
            {brands.map((brand, index) => (
              <span key={index} className="marquee-item">
                ✱ {brand}
              </span>
            ))}
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <span key={`duplicate-${index}`} className="marquee-item">
                ✱ {brand}
              </span>
            ))}
          </div>
        </div>

        <style jsx>{`
          .marquee-content {
            display: inline-block;
            animation: marquee-scroll 20s linear infinite;
            white-space: nowrap;
          }

          .marquee-item {
            display: inline-block;
            margin-right: 3rem;
            color: white;
            font-weight: bold;
            font-size: 1.25rem;
            line-height: 1;
          }

          @keyframes marquee-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          /* Ensure perfect straight line */
          .marquee-wrapper,
          .marquee-content,
          .marquee-item {
            transform-style: preserve-3d;
            backface-visibility: hidden;
          }
        `}</style>
      </Section>
    </div>
  );
}
