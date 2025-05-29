"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Services({ extraClass = "pb-70" }) {
  const services = [
    {
      icon: "flaticon-seo",
      title: "Technical SEO Audits",
      description:
        "Our comprehensive technical SEO audits identify and address underlying issues that may hinder your website&apos;s performance in search results, ensuring optimal crawlability, indexability, and user experience successful SEO strategy is data-driven",
    },
    {
      icon: "flaticon-keywords",
      title: "Keyword Research",
      description:
        "We conduct in-depth keyword research uncover valuable opportunities optimize your website&apos;s relevant keywords",
    },
    {
      icon: "flaticon-search-engine",
      title: "On-Page Optimization",
      description:
        "Our on-page optimization strategies focus on optimizing key elements of your website, including meta tags, headings",
    },
    {
      icon: "flaticon-link-building",
      title: "Link Building & Outreach",
      description:
        "Through strategic link building a outreach efforts, we enhance to website&apos;s authority and credibility, earning high-quality",
    },
    {
      icon: "flaticon-www",
      title: "Local SEO Solutions",
      description:
        "For businesses targeting local audiences, our local SEO solutions optimize your they online presence for location-based",
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
              <span className="text-primary-500 text-sm font-medium uppercase tracking-wider mb-4 block">
                Our Services
              </span>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                Explore Popular Services
              </h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              From local businesses to global enterprises, we&apos;ve helped
              countless brands achieve success online through customized SEO
              solutions tailored to their unique needs and goals
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center -mx-4">
          {services.map(({ icon, title, description }, i) => (
            <div
              key={i}
              className={`${
                i === 0
                  ? "w-full xl:w-2/3 px-4"
                  : "w-full xl:w-1/3 md:w-1/2 px-4"
              }`}
              data-aos="flip-up"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <div className="service-two-item relative group bg-black border border-gray-800 rounded-lg p-10 lg:p-12 xl:p-16 mb-8 overflow-hidden transition-all duration-500 hover:bg-secondary-500 hover:border-secondary-500">
                {/* Icon */}
                <div className="text-primary-500 text-5xl leading-none mb-5 transition-all duration-500 group-hover:text-black">
                  <i className={icon}></i>
                </div>

                {/* Title */}
                <h4 className="text-white text-xl lg:text-2xl font-bold mb-4 transition-all duration-500 group-hover:text-black">
                  <Link
                    href="/service-details"
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
                  href="/service-details"
                  className="inline-flex items-center text-primary-500 font-medium hover:text-secondary-500 transition-all duration-500 group-hover:text-black"
                >
                  Read More
                  <i className="far fa-arrow-right ml-2"></i>
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
