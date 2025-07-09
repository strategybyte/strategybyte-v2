"use client";

export default function Marquee() {
  const brands = [
    "Digital Marketing",
    "Product Design",
    "Mobile Apps Design",
    "Branding Identity",
    "Web Optimizations",
    "Email Marketing",
  ];

  return (
    <div className="relative w-full overflow-hidden h-28 xs:h-40 lg:h-80 flex items-center justify-center">
      <div className="bg-secondary -rotate-[4deg] transform-gpu scale-110 -mx-8 ">
        <div className="marquee-wrapper py-6">
          <div className="marquee-content">
            {/* First set of brands */}
            {brands.map((brand, index) => (
              <span key={index} className="marquee-item">
                ✱ {brand}
              </span>
            ))}
            {/* Second set for seamless loop */}
            {brands.map((brand, index) => (
              <span key={`duplicate-${index}`} className="marquee-item">
                ✱ {brand}
              </span>
            ))}
            {/* Third set to ensure no gaps */}
            {brands.map((brand, index) => (
              <span key={`duplicate2-${index}`} className="marquee-item">
                ✱ {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-wrapper {
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-content {
          display: inline-block;
          animation: marquee-scroll 25s linear infinite;
          white-space: nowrap;
        }

        .marquee-item {
          display: inline-block;
          margin-right: 4rem;
          color: black;
          font-weight: bold;
          font-size: 1.25rem;
          line-height: 1;
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        /* Hardware acceleration for smooth animation */
        .marquee-content {
          transform-style: preserve-3d;
          backface-visibility: hidden;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
