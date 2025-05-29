"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";

export default function Testimonials() {
  const [isClient, setIsClient] = useState(false);

  const testimonials = [
    {
      author: "/assets/images/testimonials/author1.jpg",
      text: "Working with StrategyByte has been game-changer for our social media presence. Their strategic approach and attention to detail have helped us reach new heights",
      name: "Randall J. Ferguson",
      designation: "CEO & Founder",
    },
    {
      author: "/assets/images/testimonials/author2.jpg",
      text: "Working with StrategyByte has been game-changer for our social media presence. Their strategic approach and attention to detail have helped us reach new heights",
      name: "Sarah Johnson",
      designation: "Marketing Director",
    },
    {
      author: "/assets/images/testimonials/author1.jpg",
      text: "Working with StrategyByte has been game-changer for our social media presence. Their strategic approach and attention to detail have helped us reach new heights",
      name: "Michael Chen",
      designation: "Business Owner",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    appendDots: (dots) => (
      <div className="testimonial-dots pt-25">
        <ul className="slick-dots flex justify-start"> {dots} </ul>
      </div>
    ),
  };

  useEffect(() => {
    setIsClient(true);
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

  if (!isClient) {
    return <div className="h-[600px]"></div>; // Placeholder height
  }

  return (
    <section id="testimonials" className="testimonials-two-area relative z-10">
      <div
        className="container mx-auto px-xl-5 bordered-x py-100"
        style={{
          backgroundImage: "url(/assets/images/background/cta-bg-dots.png)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 pl-6 items-center justify-between">
          {/* Testimonials Content */}
          <div>
            <div
              className="testimonials-content-two rmb-55"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <div className="section-title mb-50">
                <span className="subtitle mt-10 text-secondary mb-15">
                  Our Testimonials
                </span>
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  What Our Clients Say Us
                </h2>
              </div>

              {/* Testimonials Slider */}
              <div className="testimonials-two-active max-w-[630px] ml-auto">
                <Slider {...sliderSettings}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-item style-three">
                      <div className="author-logo mb-6">
                        <div className="quote">
                          <i className="flaticon-quotation-mark text-4xl text-primary-500"></i>
                        </div>
                      </div>
                      <div className="text text-white text-lg leading-relaxed mb-8">
                        {testimonial.text}
                      </div>
                      <div className="quote-title flex items-center">
                        <div className="author mr-4">
                          <img
                            src={testimonial.author}
                            alt="Author"
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <h6 className="text-white font-bold text-lg mb-1">
                            {testimonial.name}
                          </h6>
                          <span className="designation text-gray-400 text-sm">
                            /{testimonial.designation}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          {/* Image Part */}
          <div className="text-center lg:text-right">
            <div
              className="testimonials-four-image-part relative inline-block"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              {/* Main Image */}
              <img
                src="/assets/images/testimonials/testimonials-white.png"
                alt="Testimonials"
                className="w-full max-w-lg"
              />

              {/* Quote Icon */}
              <div className="shape icon absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-[2.5%]">
                <i className="flaticon-quotation-mark text-8xl text-black w-[150px] h-[150px] bg-secondary-500 leading-[150px] rounded-full text-center"></i>
              </div>

              {/* Floating Shape Images */}
              <div className="shape one absolute top-[5%] left-[15%] p-2 max-w-[20%] bg-white rounded-full animate-zoom-in-out border border-gray-200">
                <img
                  src="/assets/images/shapes/testi-four1.jpg"
                  alt="Shape"
                  className="rounded-full w-full"
                />
              </div>

              <div
                className="shape two absolute top-[4%] right-[6%] p-2 max-w-[20%] bg-white rounded-full border border-gray-200"
                style={{
                  animationDelay: "3s",
                  animation: "zoomInOut 4s infinite",
                }}
              >
                <img
                  src="/assets/images/shapes/testi-four2.jpg"
                  alt="Shape"
                  className="rounded-full w-full"
                />
              </div>

              <div
                className="shape three absolute bottom-[5%] left-[13%] p-2 max-w-[20%] bg-white rounded-full border border-gray-200"
                style={{
                  animationDelay: "1s",
                  animation: "zoomInOut 4s infinite",
                }}
              >
                <img
                  src="/assets/images/shapes/testi-four3.jpg"
                  alt="Shape"
                  className="rounded-full w-full"
                />
              </div>

              <div
                className="shape four absolute right-[7%] bottom-[4%] p-2 max-w-[20%] bg-white rounded-full border border-gray-200"
                style={{
                  animationDelay: "2s",
                  animation: "zoomInOut 4s infinite",
                }}
              >
                <img
                  src="/assets/images/shapes/testi-four4.jpg"
                  alt="Shape"
                  className="rounded-full w-full"
                />
              </div>

              {/* Animated Badges */}
              <div className="abs-headings">
                <h6 className="shape five absolute left-0 top-[40%] bgc-primary text-white px-4 py-2 rounded-lg font-bold text-sm animate-down-up-one">
                  10m+ Satisfied Clients
                </h6>
                <h6 className="shape six absolute right-0 bottom-[40%] bgc-green px-4 py-2 rounded-lg font-bold text-sm text-white animate-up-down-left">
                  99% Positive Reviews
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
