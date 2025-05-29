"use client";

import { useState, useEffect } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const PlayButton = () => (
    <button className="absolute bottom-16 right-3 w-16 h-16 z-30 group">
      {/* Outer Circle */}
      <div className="absolute inset-0 border border-white rounded-full group-hover:scale-110 transition-transform duration-300">
        {/* Animated Wave */}
        <div className="absolute -inset-2.5 border border-white/30 rounded-full animate-ping"></div>
      </div>

      {/* Play Lines */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4">
        <span className="absolute bottom-0 left-0 w-0.5 h-4 bg-white animate-pulse"></span>
        <span className="absolute bottom-0 left-1 w-0.5 h-3.5 bg-white animate-pulse delay-100"></span>
        <span className="absolute bottom-0 left-2 w-0.5 h-2.5 bg-white animate-pulse delay-200"></span>
        <span className="absolute bottom-0 left-3 w-0.5 h-2 bg-white animate-pulse delay-300"></span>
      </div>
    </button>
  );

  const TextSplitAnimation = ({ children, delay = 0 }) => {
    const words = children.split(" ");

    return (
      <span className="inline-block">
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block animate-fade-in-up opacity-0`}
            style={{
              animationDelay: `${delay + index * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            {word === "Everything" ? (
              <>
                {word}
                <span className="inline-block ml-4 relative top-0 w-8 h-8 align-middle">
                  <span
                    className="absolute inset-0 bg-no-repeat bg-center bg-contain"
                    style={{
                      backgroundImage: "url(/assets/images/title_icon.svg)",
                    }}
                  ></span>
                </span>
              </>
            ) : (
              word
            )}
            {index < words.length - 1 && <span className="mr-2"></span>}
          </span>
        ))}
      </span>
    );
  };

  if (!mounted) {
    return (
      <section className="relative h-screen bg-gray-600">
        <div className="absolute inset-0 bg-black/25"></div>
      </section>
    );
  }

  return (
    <section className="relative h-screen bg-gray-600 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          poster="/assets/images/hero-poster.jpg"
        >
          <source src="/assets/images/stvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center flex-col z-20 pt-24">
        <div className="container mx-auto px-4">
          {/* Main Title */}
          <h1 className="text-white font-medium mb-10 text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none">
            <TextSplitAnimation delay={500}>We Make</TextSplitAnimation>
            <br />
            <TextSplitAnimation delay={800}>Everything</TextSplitAnimation>
          </h1>

          {/* Subtitle */}
          <div className="ml-0 lg:ml-[710px] max-w-full lg:max-w-[560px]">
            <div className="text-white text-2xl md:text-3xl lg:text-[28px] leading-relaxed">
              <TextSplitAnimation delay={1200}>
                Creative studio at the
              </TextSplitAnimation>
              <br />
              <TextSplitAnimation delay={1400}>
                intersection of art, design
              </TextSplitAnimation>
              <br />
              <TextSplitAnimation delay={1600}>
                and technology.
              </TextSplitAnimation>
            </div>
          </div>
        </div>
      </div>

      {/* Play Button */}
      <PlayButton />
    </section>
  );
};

export default Hero;
