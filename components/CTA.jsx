/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Section, SectionTitle } from "./common";

export default function CTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <Section
      className="cta-two-area"
      containerProps={{
        bordered: true,
        padding: "pb-100",
        px: "px-sm-0",
      }}
    >
      <div
        className="cta-two-wrap br-10"
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
              <SectionTitle
                subtitle="Let's Boost Website"
                title="We Are Ready to Boost Your Website & Grow Sales"
                description="Join Us to get more updates and tips"
                textAlign="left"
                titleColor="text-white"
                subtitleColor="text-secondary font-bold"
                descriptionColor="text-white"
                className="mb-25"
                aos={false}
              />

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
                  className="theme-btn"
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
                <img src="/assets/images/sb-logo-primary.svg" alt="Logo" />
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
                  SEO Expertise
                </h6>
                <h6 className="shape six bgc-green">99% Positive Reviews</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
