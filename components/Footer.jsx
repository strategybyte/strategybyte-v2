"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    saveInfo: false,
  });

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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
      saveInfo: false,
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="main-footer bgc-black text-white ">
      <div className="container mx-auto px-4 bordered-x py-100">
        <div className="row items-center justify-between">
          <div className="w-full xl:w-5/12 lg:w-1/2">
            <div
              className="contact-info-content rmb-55"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <div className="section-title mb-30">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Ready To Take Your SEO to the Next Level?
                </h2>
                <p className="text-gray-300 mt-4">
                  Contact us today to schedule a consultation or learn more
                  about our services
                </p>
              </div>

              <div className="contact-info-two-item">
                <div className="icon">
                  <i className="flaticon-world-map" />
                </div>
                <div className="text">
                  Main Location
                  <span className="h6 block text-white font-semibold text-lg mt-1">
                    57 Main Street, Melbourne, Australia
                  </span>
                </div>
              </div>

              <div className="contact-info-two-item">
                <div className="icon">
                  <i className="flaticon-email" />
                </div>
                <div className="text">
                  Email Address
                  <span className="h6 block text-white font-semibold text-lg mt-1">
                    <a
                      href="mailto:support@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      support@gmail.com
                    </a>
                  </span>
                </div>
              </div>

              <div className="contact-info-two-item">
                <div className="icon">
                  <i className="flaticon-call" />
                </div>
                <div className="text">
                  Need Helps
                  <span className="h6 block text-white font-semibold text-lg mt-1">
                    <a
                      href="tel:+00012345688"
                      className="hover:text-primary transition-colors"
                    >
                      +000 (123) 456 88
                    </a>
                  </span>
                </div>
              </div>

              <div className="logo mt-60 rmt-35">
                <Link href="/">
                  <img
                    src="/assets/images/logos/logo-footer.png"
                    alt="Logo"
                    className="max-w-[200px]"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-white">
            <form
              className="contact-form style-two z-1 rel"
              onSubmit={handleSubmit}
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Get In Touch
              </h3>
              <p className="text-gray-300 mb-6">
                Contact us today to schedule consultation to expert team
              </p>

              <div className="row mt-30">
                <div className="w-full sm:w-1/2 sm:pr-3">
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control w-full"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/2 sm:pl-3">
                  <div className="form-group mb-4">
                    <input
                      type="tel"
                      id="phone_number"
                      name="phone"
                      className="form-control w-full"
                      placeholder="Phone No"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="form-group mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control w-full"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="form-group mb-4">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control w-full"
                      rows={4}
                      placeholder="Write Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="form-group mb-0">
                    <ul className="radio-filter mb-25">
                      <li>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="saveInfo"
                          id="activity1"
                          checked={formData.saveInfo}
                          onChange={handleInputChange}
                        />
                        <label
                          htmlFor="activity1"
                          className="text-gray-300 text-sm"
                        >
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </li>
                    </ul>
                    <button
                      type="submit"
                      className="theme-btn bgc-secondary hover:bg-orange-600 transition-colors"
                    >
                      <span>Send Us Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container mx-auto px-sm-0 bordered-x bordered-top pt-30 pb-15">
          <div className="row">
            <div className="w-full lg:w-5/12">
              <div className="copyright-text text-center lg:text-left">
                <p className="text-gray-400">
                  Copyright ©{" "}
                  <Link
                    href="/"
                    className="text-primary font-semibold hover:text-orange-400 transition-colors"
                  >
                    Strategybyte
                  </Link>
                  , all rights reserved.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-7/12 text-center lg:text-right">
              <ul className="footer-bottom-nav">
                <li>
                  <Link
                    href="/refund"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Refund
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Scroll Top Button */}
          <button
            className="scroll-top scroll-to-target"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <i className="far fa-arrow-up" />
          </button>
        </div>
      </div>
    </footer>
  );
}
