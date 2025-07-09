/* eslint-disable jsx-a11y/alt-text */
"use client";

import { TextAnimation } from "./common";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative pb-10 lg:pb-0 lg:h-screen bg-gray-600 overflow-hidden">
      {/* Background GIF */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/stvideo.gif"
          alt="Strategy Byte background animation"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center flex-col z-20 pt-24">
        <div className="container mx-auto px-4">
          {/* Main Title */}
          <h1 className="text-white font-semibold mb-6 text-[36px] md:text-7xl lg:text-8xl xl:text-9xl leading-tight tracking-tight">
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
                speed={15}
                repeat={Infinity}
              />
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-base md:text-2xl max-w-4xl mb-8 hidden md:block">
            Strategybyte helps Australian businesses grow with smart websites,
            <span className="block mt-4">
              targeted ads, and results-driven digital marketing.
            </span>
          </p>

          {/* Subheading */}
          <p className="text-white/90 text-base md:text-2xl max-w-4xl mb-8 md:hidden">
            Strategybyte helps Australian businesses grow with smart websites,
            targeted ads, and results-driven digital marketing.
          </p>

          {/* CTA Button */}
          <Link href="/contact" className="inline-block">
            <button className="relative group">
              {/* Main button */}
              <span className="relative inline-flex items-center justify-center px-4 py-2 md:px-8 md:py-4 text-base md:text-lg font-bold text-black bg-secondary rounded-full overflow-hidden transition-all duration-500 hover:scale-105 z-10">
                <span className="relative z-10">Book a Consultation</span>

                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Multiple glowing layers */}
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-secondary to-secondary rounded-full blur-sm transition-all duration-500 group-hover:blur-md group-hover:scale-105"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-secondary via-secondary to-secondary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500 animate-pulse"></div>

                {/* Moving shine effect */}
                <div className="absolute inset-0 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </span>

              {/* Outer glow rings */}
              <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-secondary via-secondary to-secondary rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
              <div className="absolute -inset-2 md:-inset-3 bg-gradient-to-r from-secondary via-secondary to-secondary rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 animate-pulse"></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
