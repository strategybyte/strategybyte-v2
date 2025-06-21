/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { Section, SectionTitle } from "./common";

export default function WhyChooseUs() {
  const services = [
    {
      image: "/assets/images/why/seasoned.svg",
      title: "Seasoned experts prepared for any scenario ",
      text: "With years of cross-industry experience, we anticipate roadblocks and adapt mid-campaign to keep your marketing on track.",
    },
    {
      image: "/assets/images/why/solutions.svg",
      title: "Comprehensive solutions for every challenge",
      text: "From SEO audits to content creation and ad management, we tailor solutions for low engagement, poor conversions, or declining reach. ",
    },
    {
      image: "/assets/images/why/updates.svg",
      title: "Regular updates to keep you informed on progress",
      text: "Get monthly reports and strategy calls so you always know campaign performance and next steps.",
    },
  ];

  return (
    <Section className="why-choose-us">
      <div className="grid grid-cols-1 px-2 lg:grid-cols-2 gap-3 lg:items-center">
        {/* Left Column - Image & Title */}
        <div data-aos="fade-left" data-aos-duration="1500" data-aos-offset="50">
          <SectionTitle
            subtitle="Why Choose Us?"
            title="Digital Marketing & SEO for Businesses of Every Kind"
            textAlign="left"
            className="mb-12"
          />
          <div className="overflow-hidden ">
            <img
              className="rounded-md w-full shadow-lg hover:scale-110 transition-transform duration-500"
              src="/assets/images/services/why-choose-us.png"
              alt="Why Choose Us"
            />
          </div>
        </div>

        {/* Right Column - Service Items */}
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-offset="50"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-item-style-two rounded-lg p-6 lg:p-8 xl:p-10 sm:flex transition-all duration-500 group shadow-lg items-center bg-black border border-gray-800 hover:bg-secondary hover:border-secondary-500 ${
                index !== services.length - 1 ? "mb-5" : ""
              }`}
            >
              {/* Icon */}
              <div className="flex-none w-14 h-14 mt-1 text-2xl leading-[3.4rem] text-center mr-8 mb-5 sm:mb-0 bg-secondary rounded-md p-2">
                <img src={service.image} alt={service.title} />
              </div>

              {/* Content */}
              <div className="content flex-1">
                <h6 className="text-white text-lg sm:text-xl font-bold mb-3 transition-all duration-500 group-hover:text-black">
                  <h3 className="transition-colors duration-300 group-hover:text-black">
                    {service.title}
                  </h3>
                </h6>
                <p className="text-white/80 text-base leading-relaxed transition-all duration-500 group-hover:text-black">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
