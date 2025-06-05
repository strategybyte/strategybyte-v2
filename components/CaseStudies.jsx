/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function CaseStudies() {
  const caseStudies = [
    {
      image: "/assets/images/blog/case-study1.jpg",
      meta: "SEO Strategy",
      title: "How to Improve Your Website's Loading Speed Performance",
      link: "/service-details",
    },
    {
      image: "/assets/images/blog/case-study2.jpg",
      meta: "Keyword",
      title: "Unlocking the Power of Paid Ads A Social Media Marketing",
      link: "/service-details",
    },
    {
      image: "/assets/images/blog/case-study1.jpg",
      meta: "Link Building",
      title: "Boosting Local Visibility a Client Dominated Market with SEO",
      link: "/service-details",
    },
  ];

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
    <section
      id="case-study"
      className="case-studies-area bgc-lighter relative z-10"
    >
      <div className="container mx-auto bordered-x bordered-top pt-110 pb-70 sm:px-0">
        <div className="flex justify-center">
          <div className="w-full xl:w-7/12 lg:w-9/12">
            <div
              className="section-title text-center mb-50"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <span className="subtitle mb-15 inline-block px-4 py-1 bg-white bg-opacity-10 text-primary-500 text-xs font-medium uppercase tracking-wider rounded">
                Case Studies
              </span>
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Explore Success Stories
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center -mx-4">
          {caseStudies.map((study, i) => (
            <div
              key={i}
              className="w-full xl:w-1/3 md:w-1/2 px-4"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="50"
              data-aos-delay={i * 50}
            >
              <div className="blog-item-style-two group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-700 mb-30 transition-all duration-500 hover:border-secondary-500 hover:shadow-2xl hover:shadow-secondary-500/20">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt="Case Study"
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Tag */}
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center px-3 py-1 bg-secondary-500/20 border border-secondary-500 text-secondary-500 text-xs font-bold uppercase tracking-wider rounded-full">
                      <svg
                        className="w-3 h-3 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="pt-0.5">{study.meta}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h5 className="text-xl font-bold mb-4 leading-tight">
                    <Link
                      href={study.link}
                      className="text-white hover:text-secondary-500 transition-colors duration-300"
                    >
                      {study.title}
                    </Link>
                  </h5>

                  {/* Read More Button */}
                  <Link
                    href={study.link}
                    className="inline-flex items-center gap-2 text-secondary-500 font-semibold group/btn transition-all duration-300 hover:text-secondary-400"
                  >
                    <span>Case Details</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Hover Effect Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary-500/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
