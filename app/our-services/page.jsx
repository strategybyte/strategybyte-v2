"use client";

import Image from "next/image";
import banner1 from "@/public/assets/service/banner-1.png";
import banner2 from "@/public/assets/service/banner-2.png";
import banner3 from "@/public/assets/service/banner-3.png";
import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Digital Marketing",
    description:
      "End-to-end digital marketing to increase brand visibility, generate leads, and drive measurable growth.",
    image: "/assets/service/yellow-digital-marketing.svg",
    link: "/our-services/digital-marketing",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Improve your search rankings and attract high-quality traffic with targeted SEO content and technical fixes.",
    image: "/assets/service/yellow-search-engine-optimization.svg",
    link: "/our-services/seo",
  },
  {
    title: "Website Development",
    description:
      "Custom, fast-loading websites built for performance, user experience, and SEO success.",
    image: "/assets/service/yellow-website-development.svg",
    link: "/our-services/website-development",
  },
  {
    title: "Participant Portal Development",
    description:
      "User-friendly, NDIS-compliant portals that centralize support, access, service tracking, and communication.",
    image: "/assets/service/yellow-participant-portal-development.svg",
    link: "/our-services/participant-portal-development",
  },
  {
    title: "Business Process Setup",
    description:
      "Automate workflows and connect your tools: CRM, scheduling, and more—to save time and scale.",
    image: "/assets/service/yellow-business-process-setup.svg",
    link: "/our-services/business-process-setup",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Track key metrics with custom dashboards and reports to make informed, data-driven marketing decisions.",
    image: "/assets/service/yellow-business-process-setup.svg",
    link: "/our-services/analytics-and-reporting",
  },
];

const OurServicesPage = () => {
  const router = useRouter();
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Our Services Section */}
      <section>
        <div className="bg-white/15 pt-16">
          <div className="container mx-auto px-4">
            {/* Services Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-secondary">Services</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                We deliver tailored digital marketing, SEO, and web development
                solutions - designed to accelerate business growth and deliver
                real results.
              </p>
            </div>
            {/* Service Illustrations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-end">
              <div className="bg-white rounded-t-2xl py-8 flex items-center justify-center h-96">
                <Image src={banner1} alt="banner" />
              </div>
              <div className="bg-white rounded-t-2xl py-8 flex items-center justify-center h-80">
                <Image src={banner2} alt="banner" />
              </div>
              <div className="bg-white rounded-t-2xl py-8 flex items-center justify-center h-96">
                <Image src={banner3} alt="banner" />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/15 backdrop-blur-md border border-white/20 rounded-lg p-6 lg:p-8 xl:p-10 transition-all duration-500 hover:bg-white/20 hover:border-white/30 group shadow-lg"
              >
                <div className="size-16 p-4 rounded-md bg-[#2F3F61]/50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={100}
                    height={100}
                  />
                </div>
                <h3 className="text-xl font-semibold my-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed group-hover:text-gray-100">
                  {service.description}
                </p>
                <button
                  className="text-secondary group-hover:text-white font-medium text-sm flex items-center gap-2 transition-colors"
                  onClick={() => router.push(service.link)}
                >
                  Learn more
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Process Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-secondary">Process</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We follow a proven, collaborative workflow to deliver high-quality
              digital solutions—from discovery to deployment—with precision and
              impact.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Vertical Line - adjusted for mobile */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gray-700"></div>

            {/* Process Steps */}
            <div className="space-y-16">
              {/* Discovery */}
              <div className="flex items-center">
                {/* Mobile: Number on left, Desktop: Text on left for odd items */}
                <div className="w-12 md:w-1/2 md:pr-8 md:text-right flex md:block justify-start md:justify-end">
                  <div className="md:hidden relative z-10">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                      1
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <h3 className="text-2xl font-bold mb-4">Discovery</h3>
                    <p className="text-gray-300">
                      We start by identifying your business goals, audience, and
                      challenges to define a clear digital strategy.
                    </p>
                  </div>
                </div>

                {/* Desktop: Center number - perfectly centered on line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                    1
                  </div>
                </div>

                {/* Mobile: Text on right, Desktop: Empty space */}
                <div className="flex-1 pl-6 md:w-1/2 md:pl-8 md:flex-none">
                  <div className="md:hidden">
                    <h3 className="text-2xl font-bold mb-4">Discovery</h3>
                    <p className="text-gray-300">
                      We start by identifying your business goals, audience, and
                      challenges to define a clear digital strategy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Planning */}
              <div className="flex items-center">
                {/* Mobile: Number on left, Desktop: Empty space */}
                <div className="w-12 md:w-1/2 md:pr-8 flex md:block justify-start">
                  <div className="md:hidden relative z-10">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                      2
                    </div>
                  </div>
                </div>

                {/* Desktop: Center number - perfectly centered on line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                    2
                  </div>
                </div>

                {/* Mobile: Text on right, Desktop: Text on right */}
                <div className="flex-1 pl-6 md:w-1/2 md:pl-8 md:flex-none">
                  <h3 className="text-2xl font-bold mb-4">Planning</h3>
                  <p className="text-gray-300">
                    Our team develops a structured project roadmap with
                    milestones, timelines, and resource allocation to guide
                    execution.
                  </p>
                </div>
              </div>

              {/* Design */}
              <div className="flex items-center">
                {/* Mobile: Number on left, Desktop: Text on left for odd items */}
                <div className="w-12 md:w-1/2 md:pr-8 md:text-right flex md:block justify-start md:justify-end">
                  <div className="md:hidden relative z-10">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                      3
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <h3 className="text-2xl font-bold mb-4">Design</h3>
                    <p className="text-gray-300">
                      Then we begin creating responsive, user-centric interfaces
                      optimized for performance, accessibility, and brand
                      alignment.
                    </p>
                  </div>
                </div>

                {/* Desktop: Center number - perfectly centered on line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                    3
                  </div>
                </div>

                {/* Mobile: Text on right, Desktop: Empty space */}
                <div className="flex-1 pl-6 md:w-1/2 md:pl-8 md:flex-none">
                  <div className="md:hidden">
                    <h3 className="text-2xl font-bold mb-4">Design</h3>
                    <p className="text-gray-300">
                      Then we begin creating responsive, user-centric interfaces
                      optimized for performance, accessibility, and brand
                      alignment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Development */}
              <div className="flex items-center">
                {/* Mobile: Number on left, Desktop: Empty space */}
                <div className="w-12 md:w-1/2 md:pr-8 flex md:block justify-start">
                  <div className="md:hidden relative z-10">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                      4
                    </div>
                  </div>
                </div>

                {/* Desktop: Center number - perfectly centered on line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                    4
                  </div>
                </div>

                {/* Mobile: Text on right, Desktop: Text on right */}
                <div className="flex-1 pl-6 md:w-1/2 md:pl-8 md:flex-none">
                  <h3 className="text-2xl font-bold mb-4">Development</h3>
                  <p className="text-gray-300">
                    Using the latest technologies, we build secure, scalable
                    websites and custom digital platforms designed for long-term
                    growth.
                  </p>
                </div>
              </div>

              {/* Testing */}
              <div className="flex items-center">
                {/* Mobile: Number on left, Desktop: Text on left for odd items */}
                <div className="w-12 md:w-1/2 md:pr-8 md:text-right flex md:block justify-start md:justify-end">
                  <div className="md:hidden relative z-10">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                      5
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <h3 className="text-2xl font-bold mb-4">Testing</h3>
                    <p className="text-gray-300">
                      We conduct comprehensive QA to ensure site speed,
                      cross-device compatibility, and SEO readiness.
                    </p>
                  </div>
                </div>

                {/* Desktop: Center number - perfectly centered on line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                    5
                  </div>
                </div>

                {/* Mobile: Text on right, Desktop: Empty space */}
                <div className="flex-1 pl-6 md:w-1/2 md:pl-8 md:flex-none">
                  <div className="md:hidden">
                    <h3 className="text-2xl font-bold mb-4">Testing</h3>
                    <p className="text-gray-300">
                      We conduct comprehensive QA to ensure site speed,
                      cross-device compatibility, and SEO readiness.
                    </p>
                  </div>
                </div>
              </div>

              {/* Deployment */}
              <div className="flex items-center">
                {/* Mobile: Number on left, Desktop: Empty space */}
                <div className="w-12 md:w-1/2 md:pr-8 flex md:block justify-start">
                  <div className="md:hidden relative z-10">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                      6
                    </div>
                  </div>
                </div>

                {/* Desktop: Center number - perfectly centered on line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                    6
                  </div>
                </div>

                {/* Mobile: Text on right, Desktop: Text on right */}
                <div className="flex-1 pl-6 md:w-1/2 md:pl-8 md:flex-none">
                  <h3 className="text-2xl font-bold mb-4">Deployment</h3>
                  <p className="text-gray-300">
                    Once ready, we launch your solution with full
                    support—ensuring smooth operation, ongoing optimization, and
                    measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to transform your digital presence?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve your business goals
            with our expert services.
          </p>
          <button className="bg-secondary hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors">
            Get a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurServicesPage;
