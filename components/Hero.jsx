"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const PlayButton = () => (
    <button className="absolute bottom-16 w-16 h-16 z-30 group right-10">
      {/* Outer Circle */}
      <div className="absolute inset-0 border border-white rounded-full group-hover:scale-110 transition-transform duration-300">
        {/* Animated Wave */}
        <div className="absolute -inset-2.5 border border-white/30 rounded-full animate-ping"></div>
      </div>

      <img
        src="/assets/images/strategy-byte-logo-color.svg"
        className="size-20 pb-1.5"
      />
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
            <TextSplitAnimation delay={500}>Unlock Your</TextSplitAnimation>
            <br />
            <span className="text-secondary">
              <TextSplitAnimation delay={800}>
                Digital Potential
              </TextSplitAnimation>
            </span>
          </h1>

          {/* Subtitle */}
          {/* <div className="ml-0 lg:ml-[710px] max-w-full lg:max-w-[560px]">
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
          </div> */}
        </div>
      </div>

      {/* Play Button */}
      <PlayButton />
    </section>
  );
};

export default Hero;
