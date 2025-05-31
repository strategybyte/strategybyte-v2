"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Services({ extraClass = "pb-70" }) {
  const services = [
    {
      icon: "flaticon-seo",
      title: "Website Development",
      description:
        "We design fast, functional, and conversion-driven websites tailored to specific goals",
    },
    {
      icon: "flaticon-keywords",
      title: "Digital Marketing ",
      description:
        "We create targeted campaigns that drive real results and help your brand grow smarter online",
    },
    {
      icon: "flaticon-search-engine",
      title: "Search Engine Optimization",
      description:
        "We boost your website’s visibility with strategic keywords and content to increase traffic and long-term growth",
    },
    {
      icon: "flaticon-link-building",
      title: "Participant Portal Development",
      description:
        "We create smart, secure portals that simplify referrals, track needs, and keep you connected in one place",
    },
    {
      icon: "flaticon-www",
      title: "Business Process Setup",
      description:
        "We streamline your business with efficient workflows and digital tools for smooth operations ",
    },
    {
      icon: "flaticon-www",
      title: "Analytics & Reporting ",
      description:
        "We turn data into actionable insights to help you make smarter, data-driven decisions",
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
    <section className="services-area relative z-10" id="services">
      <div
        className={`container mx-auto bordered-x px-0 sm:px-4 ${extraClass}`}
      >
        {/* Section Header */}
        <div className="flex justify-center pb-8">
          <div
            className="w-full xl:w-7/12 lg:w-9/12 text-center"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-offset="50"
          >
            <div className="section-title mb-8">
              <span className="text-secondary text-sm font-medium uppercase tracking-wider mb-4 block">
                Our Services
              </span>
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-6">
                Partner with StrategyByte to focus on what matters most.
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Our approach is designed to maximize the impact of your marketing
              efforts by delivering measurable ROI. We focus on strategic
              allocation of resources, ensuring every dollar spent contributes
              to meaningful growth and business success.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gird-cols-1 md:grid-cols-2 gap-3 -mx-4 px-2">
          {services.map(({ icon, title, description }, i) => (
            <div
              key={i}
              data-aos="flip-up"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <div className="service-two-item relative group bg-black border border-gray-800 rounded-lg p-10 lg:p-12 xl:p-16 mb-8 overflow-hidden transition-all duration-500 hover:bg-secondary hover:border-secondary-500">
                {/* Icon */}
                <div className="text-primary-500 text-5xl leading-none mb-5 transition-all duration-500 group-hover:text-black">
                  <i className={icon}></i>
                </div>

                {/* Title */}
                <h4 className="text-white text-xl lg:text-2xl font-bold mb-4 transition-all duration-500 group-hover:text-black">
                  <Link
                    href="#"
                    className="hover:text-primary-500 group-hover:text-black transition-colors duration-300"
                  >
                    {title}
                  </Link>
                </h4>

                {/* Description */}
                <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-2xl transition-all duration-500 group-hover:text-black">
                  {description}
                </p>

                {/* Read More */}
                <Link
                  href="#"
                  className="inline-flex items-center text-primary-500 font-medium hover:text-secondary-500 transition-all duration-500 group-hover:text-black hover:underline"
                >
                  Read More
                </Link>

                {/* Background Circle - Only visible on hover */}
                <div className="absolute -right-[30%] -bottom-[30%] opacity-0 z-[-1] max-w-[50%] transition-all duration-500 group-hover:opacity-100 group-hover:right-0 group-hover:bottom-0">
                  <img
                    src="/assets/images/shapes/service-circle.png"
                    alt="Circle"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
