"use client";

import { useEffect } from "react";
import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon, ClockIcon } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamic import of ContactForm
const ContactForm = dynamic(() => import("@/components/common/ContactForm"), {
  ssr: false,
});

const ContactPage = () => {
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

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <div className="container mx-auto p-4">
        <div
          className="text-center my-16"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="50"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Connect and{" "}
            <span className="text-secondary">Grow Your Business</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Ready to transform your digital presence? Our team of digital
            marketing experts in Sydney is here to help you reach new heights
            and achieve measurable results.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto p-4">
        <div className="row items-start justify-between">
          <div className="w-full lg:w-1/2 text-white">
            <ContactForm />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.574663546761!2d150.90716177645714!3d-33.77165541403503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1298ff87b49877%3A0x8f2a26c79bdd7633!2s30%20Campbell%20St%2C%20Blacktown%20NSW%202148%2C%20Australia!5e0!3m2!1sen!2sbd!4v1750915775052!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: 10, marginTop: 20 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full xl:w-5/12 lg:w-1/2">
            <div
              className="contact-info-content rmb-55"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <div className="section-title mb-30">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                  Get In Touch
                </h3>
                <p className="text-gray-300">
                  Whether you&apos;re looking to boost your online presence,
                  increase conversions, or scale your business, we&apos;re here
                  to help.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white/15 backdrop-blur-md border border-white/20 rounded-lg p-6 transition-all duration-500 hover:bg-white/20 hover:border-white/30 group shadow-lg">
                  <div className="bg-secondary rounded-md p-2 text-black">
                    <MapPinIcon className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-xl font-semibold text-white">
                    Our Office
                    <br />
                    <Link
                      href="https://g.co/kgs/bLqi26B"
                      className="font-normal text-[#D1D5DB] pt-1"
                    >
                      30 Campbell St
                      <br />
                      Blacktown NSW 2148
                      <br />
                      Australia
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/15 backdrop-blur-md border border-white/20 rounded-lg p-6 transition-all duration-500 hover:bg-white/20 hover:border-white/30 group shadow-lg">
                  <div className="bg-secondary rounded-md p-2 text-black">
                    <MailIcon className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-xl font-semibold text-white">
                    Email Us
                    <span className="font-normal text-[#D1D5DB]">
                      <Link
                        href="mailto:info@strategybyte.com.au"
                        className="font-normal text-[#D1D5DB] block pt-1"
                      >
                        info@strategybyte.com.au
                      </Link>
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/15 backdrop-blur-md border border-white/20 rounded-lg p-6 transition-all duration-500 hover:bg-white/20 hover:border-white/30 group shadow-lg">
                  <div className="bg-secondary rounded-md p-2 text-black">
                    <PhoneIcon className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-xl font-semibold text-white">
                    Call Us
                    <span className="font-normal text-[#D1D5DB]">
                      <Link
                        href="tel:0401 193 958"
                        className="font-normal text-[#D1D5DB] block pt-1"
                      >
                        0401 193 958
                      </Link>
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Response Guarantee */}
              <div className="bg-secondary p-6 rounded-lg mt-8">
                <h4 className="text-black font-bold text-lg mb-2">
                  Quick Responses
                </h4>
                <p className="text-black">
                  We&apos;ll get back to you at our earliest convenience and
                  provide a custom strategy tailored to your business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Accelerate Your Growth Section */}
      <div className="container mx-auto p-4 mt-20">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="50"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-8">
            Join hundreds of businesses that trust StrategyByte to deliver
            results. Let&apos;s discuss how we
            <br />
            can help you achieve your digital marketing goals.
          </p>

          {/* Status Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-6 py-3 pb-2.5">
              <div className="w-3 h-3 bg-green-500 rounded-md"></div>
              <span className="text-white font-medium">
                Available for new projects
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-6 py-3 pb-2.5">
              <div className="w-3 h-3 bg-yellow-500 rounded-md"></div>
              <span className="text-white font-medium">
                Based in Sydney, Australia
              </span>
            </div>
          </div>
        </div>

        {/* Contact Info and Business Hours */}
        <div className="border-t border-white/20 pt-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="50"
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center mr-3">
                  <PhoneIcon className="w-4 h-4 text-black" />
                </span>
                Contact Info
              </h3>
              <div className="space-y-6">
                <div className="transform hover:translate-x-2 transition-transform duration-300">
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                    Address:
                  </p>
                  <p className="text-white font-medium">
                    30 Campbell St
                    <br />
                    Blacktown NSW 2148
                    <br />
                    Australia
                  </p>
                </div>
                <div className="transform hover:translate-x-2 transition-transform duration-300">
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                    Email:
                  </p>
                  <Link
                    href="mailto:info@strategybyte.com.au"
                    className="text-secondary hover:text-yellow-400 transition-colors font-medium flex items-center gap-2"
                  >
                    <MailIcon className="w-4 h-4" />
                    info@strategybyte.com.au
                  </Link>
                </div>
                <div className="transform hover:translate-x-2 transition-transform duration-300">
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                    Phone:
                  </p>
                  <Link
                    href="tel:0401193958"
                    className="text-secondary hover:text-yellow-400 transition-colors font-medium flex items-center gap-2"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    0401 193 958
                  </Link>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="50"
              data-aos-delay="200"
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center mr-3">
                  <ClockIcon className="w-4 h-4 text-black" />
                </span>
                Business Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10 hover:bg-white/5 px-3 rounded-lg transition-colors">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-secondary">9:00 AM - 5:00 AM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10 hover:bg-white/5 px-3 rounded-lg transition-colors">
                  <span className="font-medium">Saturday & Sunday</span>
                  <span className="text-red-400">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-16 pt-8 border-t border-white/20">
            <p className="text-gray-400">
              © {new Date().getFullYear()} StrategyByte. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
