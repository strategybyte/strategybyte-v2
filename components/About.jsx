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
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <img
                  src="/assets/images/strategy-byte-logo-color.svg"
                  alt="Shape"
                  className="rounded-full w-full border pt-1"
                />
              </div>

              <div className="absolute top-[10%] left-[25%] animate-left-right-one">
                <h6 className="bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg mb-2 whitespace-nowrap max-w-max ml-auto">
                  Digital Marketing
                </h6>
              </div>

              <div className="absolute top-[30%] right-[10%] animate-zoom-in-out">
                <h6 className="bg-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-lg mb-2 whitespace-nowrap max-w-max ml-auto">
                  Business Process Setup
                </h6>
              </div>

              <div className="absolute bottom-[10%] left-[15%] animate-zoom-in-out-delayed">
                <h6 className="bg-teal-500 text-white text-sm font-semibold px-4 py-2 rounded-lg mb-2 whitespace-nowrap max-w-max ml-auto">
                  Web Development
                </h6>
              </div>

              <div className="absolute bottom-[30%] right-[5%] animate-left-right-two">
                <h6 className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-lg mb-2 whitespace-nowrap max-w-max ml-auto">
                  Participant Portal Development
                </h6>
              </div>

              <div className="absolute bottom-[45%] left-[10%] animate-zoom-in-out-delayed">
                <h6 className="bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg mb-2 whitespace-nowrap max-w-max ml-auto">
                  SEO
                </h6>
              </div>

              <div className="absolute right-0 bottom-[10%] animate-left-right-two">
                <h6 className="bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-lg mb-2 whitespace-nowrap max-w-max ml-auto">
                  Analytics & Reporting
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
                <span className="text-secondary text-sm font-medium uppercase tracking-wider mt-2 mb-4 block">
                  About Agency
                </span>
                <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-6">
                  Empowering Brands with Data-Driven Strategies
                </h2>
              </div>
              <p className="text-gray-300  leading-relaxed mb-8">
                We provide a comprehensive and holistic solution to amplify your
                brand’s visibility, engagement, and impact across digital
                platforms. Through strategic marketing and data-driven insights,
                we help you connect with your audience, strengthen your online
                presence, and drive meaningful interactions.
              </p>
              {/* <Link
                href="/about"
                className="theme-btn group relative inline-flex items-center justify-center bg-secondary hover:bg-white text-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 overflow-hidden mt-6"
                data-hover="Learn More Us"
              >
                <span className="relative z-10">Learn More Us</span>
                <div className="absolute inset-0 bg-secondary-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </Link> */}
              <Link
                href="/about"
                className="theme-btn group relative inline-flex items-center justify-center bg-secondary hover:bg-white text-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 overflow-hidden mt-6 outline-none"
              >
                <span className="relative z-10 transition-all duration-300 group-hover:-skew-x-6 group-hover:tracking-wider">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
