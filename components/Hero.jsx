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
          <h1 className="text-white font-semibold mb-6 text-4xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight tracking-tight">
            <TextAnimation delay={500}>Unlock Your</TextAnimation>
            <br />
            <span className="text-secondary font-bold">
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
            <button className="relative group">
              {/* Main button */}
              <span className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-secondary rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:text-black z-10">
                <span className="relative z-10">Book a Consultation</span>

                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-secondary to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Multiple glowing layers */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-secondary to-yellow-400 rounded-full blur-sm transition-all duration-500 group-hover:blur-md group-hover:scale-105"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-300 via-secondary to-yellow-300 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500 animate-pulse"></div>

                {/* Moving shine effect */}
                <div className="absolute inset-0 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </span>

              {/* Outer glow rings */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-secondary to-yellow-400 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
              <div className="absolute -inset-3 bg-gradient-to-r from-secondary via-yellow-400 to-secondary rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 animate-pulse"></div>
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
