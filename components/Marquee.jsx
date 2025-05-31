"use client";

const Marquee = () => {
  // Services data similar to your original HTML
  const services = [
    "Digital Marketing",
    "Business Process Setup",
    "Search Engine Optimization",
    "Participant Portal Development",
    "Website Development",
    "Analytics & Reporting",
  ];

  // Create the marquee content
  const MarqueeContent = () => (
    <>
      {services.map((service, serviceIndex) => (
        <div
          key={serviceIndex}
          className="flex items-center flex-shrink-0 mx-8 md:mx-12 lg:mx-16"
        >
          {/* Star icon */}
          <div className="w-4 h-4 md:w-5 md:h-5 mr-4 md:mr-2 flex-shrink-0 pb-1">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full text-secondary"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          {/* Service text */}
          <span className="text-white font-bold text-lg md:text-xl lg:text-2xl tracking-wide whitespace-nowrap">
            {service}
          </span>
        </div>
      ))}
    </>
  );

  return (
    <div className="relative overflow-hidden -rotate-3 my-20">
      {/* Background lines similar to original */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 w-px h-full bg-black/10"></div>
        <div className="absolute left-2/4 top-0 w-px h-full bg-black/10"></div>
        <div className="absolute left-3/4 top-0 w-px h-full bg-black/10"></div>
        <div className="absolute right-1/4 top-0 w-px h-full bg-black/10"></div>
      </div>

      {/* Marquee Container */}
      <div className="relative z-10">
        <div className="bg-primary py-4 md:py-6">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee">
              <div className="flex flex-shrink-0">
                <MarqueeContent />
              </div>
              <div className="flex flex-shrink-0">
                <MarqueeContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
