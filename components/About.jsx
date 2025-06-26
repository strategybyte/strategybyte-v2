/* eslint-disable @next/next/no-img-element */
"use client";

import { Section, SectionTitle, Button } from "./common";

export default function About() {
  return (
    <Section id="about">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-100">
        {/* Image Section */}
        <div
          className="w-full lg:w-1/2 order-2 lg:order-1 hidden lg:block"
          data-aos="fade-up"
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
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="50"
        >
          <div className="lg:pl-12 xl:pl-16 xl:ml-1">
            <SectionTitle
              subtitle="About Agency"
              title="Empowering Brands with Data-Driven Strategies"
              description="We provide a comprehensive and holistic solution to amplify your brand's visibility, engagement, and impact across digital platforms. Through strategic marketing and data-driven insights, we help you connect with your audience, strengthen your online presence, and drive meaningful interactions."
              textAlign="left"
              className="mb-10"
            />

            <Button href="/about" className="mt-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
