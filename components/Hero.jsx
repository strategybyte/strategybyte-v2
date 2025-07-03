/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { TextAnimation } from "./common";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

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
          <h1 className="text-white font-bold mb-6 text-4xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight tracking-tight">
            <TextAnimation delay={500}>Unlock Your</TextAnimation>
            <br />
            <span className="text-secondary font-extrabold">
              <TypeAnimation
                sequence={[
                  "Digital Success",
                  2000,
                  "Marketing Edge",
                  2000,
                  "Brand Potential",
                  2000,
                  "Online Growth",
                  2000,
                  "Creative Spark",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-base md:text-2xl max-w-3xl mb-8 leading-relaxed">
            Strategybyte helps Australian businesses grow with smart websites,
            targeted ads, and results-driven digital marketing.
          </p>

          {/* CTA Button */}
          <Link href="/contact" className="inline-block">
            <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-secondary rounded-full overflow-hidden transition-all duration-300 hover:scale-105 group">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-yellow-500 to-secondary opacity-75 group-hover:opacity-100 blur-lg transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-yellow-500"></div>
            </button>
          </Link>
        </div>
      </div>

      {/* Play Button */}
      <PlayButton />
    </section>
  );
};

export default Hero;
