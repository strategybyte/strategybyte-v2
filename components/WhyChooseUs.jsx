"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function WhyChooseUs({ bg = "bg-gray-900" }) {
  const services = [
    {
      icon: "fas fa-tools",
      title: "Expertise and Experience",
      text: "With over 10+ years of experience in the industry team seasoned SEO professionals brings knowledge",
    },
    {
      icon: "fas fa-anchor",
      title: "Customized Solutions",
      text: "We understand that every business is unique. That&apos;s why we take a tailored approach to SEO",
    },
    {
      icon: "fas fa-comments",
      title: "Transparency & Communication",
      text: "We believe in open and transparent communication with our clients every step of the way.",
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
    <section className={`why-choose-us relative z-10 ${bg}`}>
      <div className="container mx-auto bordered-x py-100">
        <div className="grid grid-cols-1 px-2 lg:grid-cols-2 gap-3 lg:items-center">
          {/* Left Column - Image & Title */}
          <div
            // className="w-full lg:w-2/5"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-offset="50"
          >
            <div className="section-title mb-12">
              <span className="text-secondary text-sm font-medium uppercase tracking-wider mt-2 mb-4 block">
                Why Choose Us?
              </span>
              <h2 className="text-white text-3xl md:text-4xl  font-bold leading-tight">
                SEO Strategies Tailored to Your Business Needs
              </h2>
            </div>
            <img
              className="rounded-md w-full"
              src="/assets/images/services/why-choose-us.jpg"
              alt="Why Choose Us"
            />
          </div>

          {/* Right Column - Service Items */}
          <div
            // className="w-full lg:w-2/5"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-offset="50"
          >
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`service-item-style-two bg-white rounded-lg p-6 lg:p-8 xl:p-10 sm:flex transition-all duration-500 hover:bg-secondary hover:text-white group ${
                  index !== services.length - 1 ? "mb-5" : ""
                }`}
              >
                {/* Icon */}
                <div className="flex-none w-14 h-14 mt-1 text-2xl leading-[3.4rem] text-center mr-8 mb-5 sm:mb-0 text-black bg-primary-500 rounded transition-all duration-500 group-hover:border-gray-200 group-hover:border group-hover:border-opacity-10">
                  <i className={service.icon}></i>
                </div>

                {/* Content */}
                <div className="content flex-1">
                  <h6 className="text-black text-lg sm:text-xl font-bold mb-3 group-hover:text-white transition-all duration-500">
                    <Link
                      href="/service-details"
                      className="transition-colors duration-300 hover:text-primary-500 group-hover:text-white"
                    >
                      {service.title}
                    </Link>
                  </h6>
                  <p className="text-gray-600 text-base leading-relaxed transition-all duration-500 group-hover:text-white">
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
