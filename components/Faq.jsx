"use client";

import { useState, useEffect } from "react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(1);

  const faqData = [
    {
      question: "1. What is a marketing agency and what does it do?",
      answer:
        "A marketing agency helps businesses grow by promoting their products or services online and offline. From running social media campaigns to managing paid ads, SEO, content, and branding—we handle the strategy and execution so you get more leads, visibility, and sales.",
    },
    {
      question:
        "2. How do I choose the right marketing agency for my business?",
      answer:
        "Look for an agency that understands your goals, communicates clearly, and shows proven results. At StrategyByte, we take time to understand your business, industry, and customers—so every campaign we build is tailored and effective.",
    },
    {
      question: "3. What services does StrategyByte offer?",
      answer:
        "We offer a full suite of digital marketing services including SEO, paid ads, social media, content marketing, branding, web development, and analytics. Whether you need a full digital strategy or help with a single campaign—we’re here to help.",
    },
    {
      question: "4. How much do marketing agency services cost?",
      answer:
        "It depends on your goals and the channels you want to use. Pricing can vary from basic packages for small businesses to full-service retainers for larger campaigns. We offer transparent pricing and free consultations to help you plan smart and spend wisely.",
    },
    {
      question: "5. Can you help both local and national businesses?",
      answer:
        "Yes. Whether you're a Sydney-based startup or an established business across Australia, we craft marketing strategies tailored to your market and growth stage. We also offer scalable solutions as your business expands.",
    },
    {
      question: "6. Do you only focus on digital marketing?",
      answer:
        "Digital is our strength—but we also understand brand positioning, messaging, and customer experience. Every digital campaign is supported by strong brand strategy and data insights to make sure your business message is clear and compelling.",
    },
    {
      question:
        "7. What’s the difference between digital marketing and traditional marketing?",
      answer:
        "Digital marketing uses online platforms like Google, Facebook, Instagram, and email to reach your audience. It’s measurable, scalable, and cost-effective—unlike traditional marketing (TV, print, billboards), which often costs more and is harder to track.",
    },
    {
      question: "8. How long before I see results from digital marketing?",
      answer:
        "Some strategies like paid ads can bring results in days, while SEO and content marketing take longer to build momentum. We focus on both short-term wins and long-term growth, and share regular reports so you always know what’s working.",
    },
    {
      question:
        "9. Do I need a marketing agency if I already have social media accounts?",
      answer:
        "Yes—having accounts is just the start. A marketing agency builds strategy, consistency, and campaigns that drive real engagement and conversions. We help you move beyond posts and turn social media into a growth channel.",
    },
    {
      question: "10. How do I get started with StrategyByte?",
      answer:
        "Just reach out for a free strategy session. We’ll review where your business stands and show you exactly how we can help you grow—online and beyond. ",
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

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-area bgc-black text-white relative z-10">
      <div className="container mx-auto px-4 bordered-x py-10">
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
  );
}
