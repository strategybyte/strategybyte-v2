"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { send } from "@emailjs/browser";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare the template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        contact: "Contact Number: N/A",
        // website: "N/A",
        // service: "N/A",
        message: formData.message,
      };

      // Track form submission with Facebook Pixel
      // sendFBPixelEvent("Lead", {
      //   content_name: "contact_form_submission",
      //   content_category: "lead",
      //   service: values.service,
      // });

      // Track Google Ads conversion
      // if (typeof window !== "undefined" && window.gtag) {
      //   window.gtag("event", "conversion", {
      //     send_to: "AW-16759601889/tzEICNbkoscaEOH1zLc-",
      //   });
      // }

      // Send email using EmailJS
      await send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
      );

      // toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
      // toast.error("Failed to send message");
    } finally {
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        saveInfo: false,
      });
    }
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
                <div className="logo mt-60 rmt-35">
                  <Link href="/" className="flex items-center gap-2">
                    <img
                      src="/assets/images/strategy-byte-logo-color.svg"
                      alt="Logo"
                      className="max-w-[200px]"
                    />
                    <span className="text-2xl font-bold text-white">
                      StrategyByte
                    </span>
                  </Link>
                </div>
                <p className="text-gray-300 mt-4">
                  We offer a comprehensive suite of digital marketing services
                  that cover all aspects of our online presence. From SEO and
                  social media marketing to content creation and PPC
                  advertising, they have the expertise and resources to handle
                  our diverse marketing needs.
                </p>
              </div>

              <div className="contact-info-two-item">
                <div className="icon">
                  <i className="flaticon-world-map" />
                </div>
                <div className="text">
                  Main Location
                  <Link
                    href="https://g.co/kgs/bLqi26B"
                    className="h6 block text-white hover:!text-white hover:underline font-semibold text-lg mt-1"
                  >
                    30 Campbell St, Blacktown NSW 2148, Australia
                  </Link>
                </div>
              </div>

              <div className="contact-info-two-item">
                <div className="icon">
                  <i className="flaticon-email" />
                </div>
                <div className="text">
                  Email Address
                  <span className="h6 block text-white font-semibold text-lg mt-1">
                    <Link
                      href="mailto:info@strategybyte.com.au"
                      className="hover:text-primary transition-colors"
                    >
                      info@strategybyte.com.au
                    </Link>
                  </span>
                </div>
              </div>

              <div className="contact-info-two-item">
                <div className="icon">
                  <i className="flaticon-call" />
                </div>
                <div className="text">
                  Need Help
                  <span className="h6 block text-white font-semibold text-lg mt-1">
                    <Link
                      href="tel:0410 745 998"
                      className="hover:text-primary transition-colors"
                    >
                      0410 745 998
                    </Link>
                  </span>
                </div>
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
                    <button className="theme-btn group relative inline-flex items-center justify-center bg-secondary hover:bg-white text-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 overflow-hidden mt-6 outline-none">
                      <span className="relative z-10 transition-all duration-300 group-hover:-skew-x-6 group-hover:tracking-wider">
                        Contact Us
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container mx-auto px-4 bordered-x bordered-top pt-30 pb-15">
          <div className="row">
            <div className="w-full lg:w-5/12">
              <div className="copyright-text text-center lg:text-left">
                <p className="text-gray-400">
                  Copyright ©{" "}
                  <Link href="/" className="font-semibold !text-secondary">
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
                    href="/about"
                    className="text-gray-400 hover:!text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-gray-400 hover:!text-white transition-colors"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:!text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Scroll Top Button
          <button
            className="scroll-top scroll-to-target"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <i className="far fa-arrow-up" />
          </button> */}
        </div>
      </div>
    </footer>
  );
}
