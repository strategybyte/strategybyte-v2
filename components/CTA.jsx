"use client";

import { useEffect, useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="cta-two-area rel z-10">
      <div className="container mx-auto px-sm-0 bordered-x pb-100">
        <div
          className="cta-two-wrap bgc-primary br-10"
          style={{
            backgroundImage: "url(/assets/images/background/hero-bg-dots.png)",
          }}
        >
          <div className="row items-center">
            <div className="w-full lg:w-6/12">
              <div
                className="cta-content-two rmb-55"
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-offset="50"
              >
                <div className="section-title text-white mb-25">
                  <span className="subtitle mt-10 mb-15">
                    Let&apos;s Boost Website
                  </span>
                  <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    We Are Ready to Boost Your Website &amp; Grow Sales
                  </h2>
                  <p className="text-white mt-4">
                    Join Us to get more updates and tips
                  </p>
                </div>
                <form className="newsletter-form" onSubmit={handleSubmit}>
                  <label htmlFor="news-email">
                    <i className="fas fa-envelope" />
                  </label>
                  <input
                    id="news-email"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="theme-btn bgc-secondary hover-secondary"
                    data-hover="Subscribe"
                  >
                    <span>Subscribe</span>
                  </button>
                </form>
              </div>
            </div>
            <div className="w-full lg:w-6/12 text-xl-end">
              <div
                className="cta-two-image-part"
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-offset="50"
              >
                <img src="/assets/images/cta/cta.png" alt="CTA" />
                <div className="shape logo">
                  <img
                    src="/assets/images/logos/logo-two-white.png"
                    alt="Logo"
                  />
                </div>
                <div className="shape one">
                  <i className="fas fa-envelope" />
                </div>
                <div className="shape two">
                  <i className="fas fa-shield-alt" />
                </div>
                <div className="shape three">
                  <i className="fas fa-paper-plane" />
                </div>
                <div className="shape four">
                  <i className="fas fa-rocket" />
                </div>
                <div className="abs-headings">
                  <h6 className="shape five bgc-primary text-white">
                    10m+ Satisfied Clients
                  </h6>
                  <h6 className="shape six bgc-green">99% Positive Reviews</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
