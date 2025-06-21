"use client";

import Image from "next/image";

import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/common";
import { useState } from "react";

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

const faqData = [
  {
    question: "1. What is a marketing agency and how can it help my business?",
    answer:
      "A marketing agency is a team that helps businesses grow by promoting them through websites, social media, ads, and smart strategies. At Strategybyte, we help businesses of all sizes get noticed, attract new customers, and improve their online presence. Whether you’re launching something new or looking to scale, we create plans tailored just for you.",
  },
  {
    question: "2. How do I choose the right marketing agency in Australia?",
    answer:
      "Start by thinking about your goals and budget. Then look for an agency that understands your industry and market. At Strategybyte, we work closely with Australian businesses, especially in healthcare, NDIS, and services to deliver real, trackable results using local knowledge and proven strategies.",
  },
  {
    question: "3. What services does a full service marketing agency offer?",
    answer:
      "We handle everything you need to market your business online and offline. This includes branding, website design, SEO, social media, ads, and content creation. At Strategybyte, our process takes you from planning to launch with full transparency along the way.",
  },
  {
    question: "4. What does a marketing agency do each day?",
    answer:
      " We’re always working behind the scenes running campaigns, updating content, managing ads, and checking performance. Our team makes sure everything is on track and getting results. We’re not just about running ads we help your business grow in a smart and sustainable way.",
  },
  {
    question: "5. Can a marketing agency help me get more leads?",
    answer:
      "Yes, getting you more leads is one of our main goals. We use targeted ads, SEO, landing pages, and smart design to help people find their business and act. Everything we do is focused on bringing you the right customers, not just more clicks.",
  },
  {
    question: "6. Why should I choose Strategybyte over other agencies?",
    answer:
      "We’re not just another agency. We’re based in Australia, and we understand what local businesses need. Our strategies are clear, honest, and focused on real resultsnot just buzzwords. Whether you’re a solo operator or a growing brand, we make your goals our priority.",
  },
  {
    question: "7. How do I get started with Strategybyte?",
    answer:
      "It’s simple. Click “Get Started” on our website to book a free marketing audit. We’ll take a look at your current setup and suggest ways to improveno pressure, just helpful advice to get you moving in the right direction.",
  },
];

const OurServicesPage = () => {
  const router = useRouter();

  const [activeIndex, setActiveIndex] = useState(1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Our Services Section */}
      <section>
        <div className="bg-white/15 pt-16">
          <div className="container mx-auto p-4 flex items-center justify-between flex-col md:flex-row">
            {/* Services Header */}
            <div className="mb-12 w-full">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-secondary">Marketing Agency</span>{" "}
                Services
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                We deliver tailored digital marketing, SEO, and web development
                solutions - designed to accelerate business growth and deliver
                real results.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Image
                  src="/assets/images/services/icon-one.png"
                  alt="banner"
                  width={50}
                  height={50}
                />
                <Image
                  src="/assets/images/services/icon-two.png"
                  alt="banner"
                  width={50}
                  height={50}
                />
                <Image
                  src="/assets/images/services/icon-three.png"
                  alt="banner"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            {/* Service Illustrations */}
            <div className="w-full flex justify-center md:justify-end">
              <Image
                src="/assets/images/services/service-page-banner.png"
                alt="banner"
                className="h-[500px]"
                width={500}
                height={400}
                quality={100}
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-24">
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

          <Button size="small" href="/contact">
            Get a Free Consultation
          </Button>
        </div>
      </section>

      <section className="faq-area bgc-black text-white relative z-10">
        <div className="container mx-auto bordered-x pb-90">
          <div className="row mx-xl-4 justify-center">
            <div className="w-full xl:w-3/4 lg:w-11/12">
              <div
                className="section-title mb-50 text-center"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-offset="50"
              >
                <span className="subtitle text-secondary font-bold mt-10 mb-15">
                  FAQs
                </span>
                <h2 className="text-white text-4xl font-bold leading-tight">
                  Frequently Asked Questions
                </h2>
              </div>

              {/* Accordion */}
              <div className="accordion-one" id="faq-accordion">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-offset="50"
                  >
                    <h6 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          activeIndex === index ? "" : "collapsed"
                        }`}
                        onClick={() => toggleAccordion(index)}
                        type="button"
                      >
                        {faq.question}
                      </button>
                    </h6>
                    <div
                      className={`accordion-collapse ${
                        activeIndex === index ? "show" : ""
                      }`}
                    >
                      {activeIndex === index && (
                        <div className="accordion-body">
                          <p className="text-gray-300">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Shapes */}
        <div className="faq-shapes">
          <div
            className="shape one absolute left-[11%] bottom-[25%] animate-zoom-in-out"
            style={{ zIndex: -2, maxWidth: "5%" }}
          >
            <img src="/assets/images/shapes/faq1.png" alt="Shape" />
          </div>
          <div
            className="shape two absolute top-[10%] left-[14%] animate-zoom-in-out"
            style={{
              zIndex: -2,
              maxWidth: "5%",
              animationDelay: "1s",
            }}
          >
            <img src="/assets/images/shapes/faq2.png" alt="Shape" />
          </div>
          <div
            className="shape three absolute top-[10%] right-[20%] animate-zoom-in-out"
            style={{
              zIndex: -2,
              maxWidth: "5%",
              animationDelay: "2s",
            }}
          >
            <img src="/assets/images/shapes/faq3.png" alt="Shape" />
          </div>
          <div
            className="shape four absolute top-[25%] right-[9%] animate-zoom-in-out"
            style={{
              zIndex: -2,
              maxWidth: "5%",
              animationDelay: "3s",
            }}
          >
            <img src="/assets/images/shapes/faq4.png" alt="Shape" />
          </div>
          <div
            className="shape five absolute right-[14%] bottom-[20%] animate-zoom-in-out"
            style={{
              zIndex: -2,
              maxWidth: "5%",
              animationDelay: "4s",
            }}
          >
            <img src="/assets/images/shapes/faq5.png" alt="Shape" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServicesPage;
