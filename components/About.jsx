"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    // Initialize AOS if available
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 1500,
          offset: 50,
          once: true,
        });
      });
    }
  }, []);

  return (
    <section id="about" className="relative z-10">
      <div className="container mx-auto bordered-x py-100">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-100">
          {/* Image Section */}
          <div
            className="w-full lg:w-1/2 order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-offset="50"
          >
            <div className="relative max-w-[570px] mx-auto text-center px-[10%] rmb-55">
              {/* Main About Image */}
              <img
                src="/assets/images/about/about-two-white.png"
                alt="About"
                className="w-full"
              />

              {/* Floating Shape Images */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[30%]">
                <img
                  src="/assets/images/shapes/about-two1.jpg"
                  alt="Shape"
                  className="rounded-full w-full"
                />
              </div>

              <div className="absolute left-[12%] bottom-[2%] max-w-[20%] animate-zoom-in-out-delayed sm:left-[5%]">
                <img
                  src="/assets/images/shapes/about-two2.jpg"
                  alt="Shape"
                  className="rounded-full w-full"
                />
              </div>

              <div className="absolute top-[5%] right-[12%] max-w-[20%] animate-zoom-in-out sm:right-[5%]">
                <img
                  src="/assets/images/shapes/about-two3.jpg"
                  alt="Shape"
                  className="rounded-full w-full"
                />
              </div>

              {/* Floating Badges - abs-headings */}
              <div className="absolute left-0 top-[15%] animate-left-right-one">
                <h6 className="bg-primary-500 text-white text-sm font-semibold px-4 py-2 rounded-lg mb-2 whitespace-nowrap max-w-max ml-auto">
                  10m+ Satisfied Clients
                </h6>
              </div>

              <div className="absolute right-[18%] bottom-[35%] animate-left-right-two sm:right-0">
                <h6 className="bg-green-400 text-black text-sm font-semibold px-4 py-2 rounded-lg mb-2 whitespace-nowrap max-w-max ml-auto">
                  CEO &amp; Founder
                </h6>
              </div>

              <div className="absolute right-0 bottom-[10%] animate-left-right-two">
                <h6 className="bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-lg mb-2 whitespace-nowrap max-w-max ml-auto">
                  25+ Years Of Experience
                </h6>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className="w-full lg:w-1/2 order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-offset="50"
          >
            <div className="lg:pl-12 xl:pl-16 xl:ml-1">
              <div className="mb-10">
                <span className="text-primary-500 text-sm font-medium uppercase tracking-wider mt-2 mb-4 block">
                  About Agency
                </span>
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                  Boost Your Rankings Expert SEO Solutions for Maximum
                  Visibility
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Our team of dedicated SEO experts combines extensive industry
                knowledge with strategies to deliver tangible results for
                clients innovative our.
              </p>
              <Link
                href="/about"
                className="theme-btn group relative inline-flex items-center justify-center bg-primary-500 hover:bg-secondary-500 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 overflow-hidden mt-6"
                data-hover="Learn More Us"
              >
                <span className="relative z-10">Learn More Us</span>
                <div className="absolute inset-0 bg-secondary-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
