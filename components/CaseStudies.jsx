"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function CaseStudies() {
  const caseStudies = [
    {
      image: "/assets/images/blog/case-study1.jpg",
      meta: "SEO Strategy",
      title: "How to Improve Your Website's Loading Speed Performance",
      link: "/service-details",
    },
    {
      image: "/assets/images/blog/case-study2.jpg",
      meta: "Keyword",
      title: "Unlocking the Power of Paid Ads A Social Media Marketing",
      link: "/service-details",
    },
    {
      image: "/assets/images/blog/case-study1.jpg",
      meta: "Link Building",
      title: "Boosting Local Visibility a Client Dominated Market with SEO",
      link: "/service-details",
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
    <section
      id="case-study"
      className="case-studies-area bgc-lighter relative z-10"
    >
      <div className="container mx-auto bordered-x bordered-top pt-110 pb-70 sm:px-0">
        <div className="flex justify-center">
          <div className="w-full xl:w-7/12 lg:w-9/12">
            <div
              className="section-title text-center mb-50"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <span className="subtitle mb-15 inline-block px-4 py-1 bg-white bg-opacity-10 text-primary-500 text-xs font-medium uppercase tracking-wider rounded">
                Case Studies
              </span>
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Explore Success Stories
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center -mx-4">
          {caseStudies.map((study, i) => (
            <div
              key={i}
              className="w-full xl:w-1/3 md:w-1/2 px-4"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="50"
              data-aos-delay={i * 50}
            >
              <div className="blog-item-style-two mb-30">
                <div className="image">
                  <img src={study.image} alt="Case Study" className="w-full" />
                </div>
                <div className="content">
                  <ul className="blog-meta list-none p-0">
                    <li className="inline-flex items-center">
                      <i className="fas fa-tags mr-1"></i>
                      <a
                        href="#"
                        className="text-primary-500 hover:text-primary-600 transition-colors"
                      >
                        {study.meta}
                      </a>
                    </li>
                  </ul>
                  <h5>
                    <a
                      href={study.link}
                      className="hover:text-primary-500 transition-colors"
                    >
                      {study.title}
                    </a>
                  </h5>
                  <Link href={study.link} className="read-more group">
                    Case Details{" "}
                    <i className="far fa-arrow-right group-hover:translate-x-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
