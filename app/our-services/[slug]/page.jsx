/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/common";
import Image from "next/image";
import { useState, useEffect } from "react";
import serviceDetails from "./resources/service-data";

const ServiceDetailsPage = ({ params: { slug } }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    // Initialize AOS dynamically on client side only
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 1500,
        offset: 50,
        once: true,
      });
    };

    initAOS();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <section>
        <div className="bg-white/15 py-16">
          <div className="container mx-auto px-4 flex items-center justify-between flex-col md:flex-row">
            {/* Services Header */}
            <div
              className="text-left mb-12 w-full"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                {serviceDetails[slug].title.initial}{" "}
                <span className="text-secondary">
                  {serviceDetails[slug].title.highlight}
                </span>{" "}
                {serviceDetails[slug].title.end}
              </h1>
              <p className="text-gray-300 text-lg max-w-xl leading-10 mb-5">
                {serviceDetails[slug].description}
              </p>

              <Button
                href={serviceDetails[slug].button.link}
                className="mt-4 !text-black"
                size="small"
              >
                {serviceDetails[slug].button.text}
              </Button>
            </div>
            {/* Service Illustrations */}
            <div
              className="w-full"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="50"
              data-aos-delay="200"
            >
              <Image
                src={serviceDetails[slug].image}
                alt="banner"
                width={783}
                height={519}
              />
            </div>
          </div>
        </div>

        <div className="bg-[#2F3F61]/15 py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceDetails[slug].stats.map((stat, index) => (
              <div
                className="text-center"
                key={index}
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-offset="50"
                data-aos-delay={index * 100}
              >
                <h3 className={`text-4xl font-bold mb-3 ${stat.color}`}>
                  {stat.value}
                </h3>
                <h3 className={`${stat.color} text-xl`}>{stat.label}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="container px-4 pt-16 mx-auto space-y-10">
          <div className="flex items-center justify-between gap-10">
            <div className="w-[40%]">
              <Image
                src={serviceDetails[slug].about.image}
                alt="about"
                width={1000}
                height={1000}
              />
            </div>
            <div className="w-[60%]">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 md:max-w-7xl mx-auto !leading-tight">
                {serviceDetails[slug].about.title}
              </h2>
              <p className="text-gray-300 text-lg max-w-xl leading-10 mb-5">
                {serviceDetails[slug].about.description}
              </p>
              <Button
                href={serviceDetails[slug].about.link}
                className="mt-4 !text-black"
                size="small"
              >
                {serviceDetails[slug].about.button}
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between gap-10">
            <div className="w-[60%]">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 md:max-w-7xl mx-auto !leading-tight">
                {serviceDetails[slug].why.title}
              </h2>
              <p className="text-gray-300 text-lg max-w-xl leading-10 mb-5">
                {serviceDetails[slug].why.description}
              </p>
              <Button
                href={serviceDetails[slug].why.link}
                className="mt-4 !text-black"
                size="small"
              >
                {serviceDetails[slug].why.button}
              </Button>
            </div>
            <div className="w-[40%]">
              <Image
                src={serviceDetails[slug].why.image}
                alt="about"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>

        <div className="container px-4 pt-16 mx-auto">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-offset="50"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:max-w-7xl mx-auto !leading-tight">
              {serviceDetails[slug].service.title.initial} <br />
              <span className="text-secondary">
                {serviceDetails[slug].service.title.highlight}
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
              {serviceDetails[slug].service.cards.map((card, index) => (
                <div
                  className="bg-white/15 backdrop-blur-md border border-white/20 rounded-lg transition-all duration-500 hover:bg-white/20 hover:border-white/30 group shadow-lg"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-offset="50"
                  data-aos-delay={index * 100}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={1000}
                    height={1000}
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mt-4">{card.title}</h3>
                    <p className="text-gray-300 mt-4">{card.description}</p>
                    <ul className="text-gray-300 mt-4 list-disc list-inside">
                      {card.list.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process section */}
        <div className="bg-black pt-16">
          <div className="container mx-auto px-4">
            <div
              className="text-center mb-16"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 md:max-w-2xl mx-auto !leading-tight">
                {serviceDetails[slug].process.title.initial}{" "}
                <span className="text-secondary">
                  {serviceDetails[slug].process.title.highlight}
                </span>{" "}
                {serviceDetails[slug].process.title.end}
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                {serviceDetails[slug].process.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {serviceDetails[slug].process.steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center max-w-xs"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-offset="50"
                data-aos-delay={index * 100}
              >
                {/* Step Number Circle */}
                <div
                  className={`
                    size-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 leading-none
                    ${
                      step.isActive
                        ? "bg-secondary text-gray-900"
                        : "bg-white text-primary border-2 border-primary"
                    }
                  `}
                >
                  {step.number}
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs section */}
        {serviceDetails[slug].faqs ? (
          <section className="faq-area bgc-black text-white relative z-10 pt-16">
            <div className="container mx-auto px-4 bordered-x">
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
                    {serviceDetails[slug].faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="accordion-item"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-offset="50"
                        data-aos-delay={index * 50}
                      >
                        <h6 className="accordion-header">
                          <button
                            className={`accordion-button ${
                              activeIndex === index + 1 ? "" : "collapsed"
                            }`}
                            onClick={() => toggleAccordion(index + 1)}
                            type="button"
                          >
                            {faq.question}
                          </button>
                        </h6>
                        <div
                          className={`accordion-collapse ${
                            activeIndex === index + 1 ? "show" : ""
                          }`}
                        >
                          {activeIndex === index + 1 && (
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
        ) : null}
      </section>
    </div>
  );
};

export default ServiceDetailsPage;
