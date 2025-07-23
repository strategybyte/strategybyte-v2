/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/common";
import Image from "next/image";
import { useState, useEffect } from "react";
import serviceDetails from "./resources/service-data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import client from "@/lib/contnetful";
import Link from "next/link";

const ServiceDetailsPage = ({ params: { slug } }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);

    try {
      const newsEntries = await client.getEntries({
        // content_type: "news",
        // order: "-sys.createdAt",
        // limit: 3,
        // select:
        //   "fields.title,fields.slug,fields.thumbnail,sys.id,fields.blogCategory",
        content_type: "news",
        order: "-sys.createdAt",
        "fields.blogCategory.sys.contentType.sys.id": "blogCategory",
        "fields.blogCategory.fields.slug": slug,
        limit: 3,
      });

      setContent(newsEntries?.items || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  if (loading) {
    return;
  }

  const blogPosts = content?.map((item) => {
    return {
      id: item.sys.id,
      image: `https:${item.fields.thumbnail.fields.file.url}`,
      title: item.fields.title,
      slug: item.fields.slug,
      category: item.fields.blogCategory?.fields.title || "Marketing",
    };
  });

  console.log(blogPosts);

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
              {serviceDetails[slug].service.title.initial}{" "}
              <br className="hidden lg:block" />
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

        {/* Industry Expertise Carousel Section */}
        <section className="container px-4 pt-16 mx-auto">
          <div>
            {/* Header */}
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                {serviceDetails[slug].experts.title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {serviceDetails[slug].experts.description}
              </p>
            </div>

            {/* Carousel */}
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={3}
                navigation={{
                  prevEl: ".swiper-button-prev-custom",
                  nextEl: ".swiper-button-next-custom",
                }}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet-custom",
                  bulletActiveClass: "swiper-pagination-bullet-active-custom",
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                speed={800}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
                className="industry-expertise-swiper"
              >
                {serviceDetails[slug].experts.cards.map((card, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="relative w-full h-96 rounded-2xl overflow-hidden border border-gray-600 mx-auto"
                      style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      {/* Content - always visible */}
                      <div className="absolute inset-0 py-14 px-16 flex flex-col justify-center text-white">
                        {/* Top content */}
                        <div>
                          <h3 className="text-white text-2xl font-bold mb-4">
                            {card.title}
                          </h3>
                          <p className="text-gray-200 text-base leading-relaxed">
                            {card.description}
                          </p>
                        </div>

                        {/* Key features */}
                        <div>
                          <ul className="text-gray-300 mt-4 list-disc list-inside">
                            {card.keyFeatures.map((item, index) => (
                              <li key={index} className="list-inside">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-secondary hover:bg-secondary/80 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg">
                <ChevronLeft className="w-6 h-6 text-black" />
              </button>

              <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-secondary hover:bg-secondary/80 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg">
                <ChevronRight className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>
        </section>

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

        <div className="flex items-center gap-8 mt-20 px-4 container mx-auto">
          {blogPosts.map((post, i) => (
            <div
              key={i}
              className="w-full xl:w-1/3 md:w-1/2 px-4"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="50"
              data-aos-delay={i * 50}
            >
              <div className="blog-item-style-two group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-700 mb-30 transition-all duration-500 hover:border-secondary-500 hover:shadow-2xl hover:shadow-secondary-500/20">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt="Case Study"
                    className="w-full h-64 object-cover transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Tag */}
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center px-3 py-1 bg-secondary-500/20 border border-secondary-500 text-secondary-500 text-xs font-bold uppercase tracking-wider rounded-full">
                      <svg
                        className="w-3 h-3 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="pt-0.5">{post.category}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h5 className="text-xl font-bold mb-4 leading-tight">
                    <Link
                      href={post.slug}
                      className="text-white hover:text-secondary-500 transition-colors duration-300 line-clamp-2"
                    >
                      {post.title}
                    </Link>
                  </h5>

                  {/* Read More Button */}
                  <Link
                    href={`/news/${post.slug}`}
                    className="inline-flex items-center gap-2 text-secondary-500 font-semibold group/btn transition-all duration-300 hover:text-secondary-400"
                  >
                    <span>Read More</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Hover Effect Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary-500/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
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
