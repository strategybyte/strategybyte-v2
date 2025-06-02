/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { TextAnimation } from "./common";

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
            <TextAnimation delay={500}>Unlock Your</TextAnimation>
            <br />
            <span className="text-secondary">
              <TextAnimation delay={800}>Digital Potential</TextAnimation>
            </span>
          </h1>
        </div>
      </div>

      {/* Play Button */}
      <PlayButton />
    </section>
  );
};

export default Hero;
