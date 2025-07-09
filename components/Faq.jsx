"use client";

import { useState, useEffect } from "react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(1);

  const faqData = [
    {
      question: "1. Why is Digital Marketing Important for your business?",
      answer:
        "It helps you reach the right audience, increase brand awareness, and drive sales efficiently.",
    },
    {
      question:
        "2. How can digital marketing help improve my website’s visibility?",
      answer:
        "We use SEO, targeted ads, and content strategies to rank higher on search engines and attract more visitors.",
    },
    {
      question:
        "3. How long does it take to see results from digital marketing efforts?",
      answer:
        "SEO takes months, PPC works instantly, and content marketing builds traction over time—we optimize for the best speed and impact.",
    },
    {
      question:
        "4. How do you measure the success of digital marketing campaigns?",
      answer:
        "We track key metrics like traffic, conversions, engagement, and ROI to ensure maximum performance.",
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
