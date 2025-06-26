"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { send } from "@emailjs/browser";
import { sendFBPixelEvent } from "@/components/global/analytics/FacebookPixel";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    service: "",
    message: "",
    saveInfo: false,
  });

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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      // Prepare the template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        contact: `Contact Number: ${formData.phone}`,
        website: formData.website || "N/A",
        service: formData.service || "N/A",
        message: formData.message,
      };

      // Track form submission with Facebook Pixel
      sendFBPixelEvent("Lead", {
        content_name: "contact_form_submission",
        content_category: "lead",
        service: formData.service,
      });

      // Track Google Ads conversion
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-16759601889/tzEICNbkoscaEOH1zLc-",
        });
      }

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
        website: "",
        service: "",
        message: "",
        saveInfo: false,
      });
      setIsSubmitted(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <div className="container mx-auto p-4">
        <div
          className="text-center mb-16"
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
            <form
              className="contact-form style-two z-1 rel"
              onSubmit={handleSubmit}
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Get Started Today
              </h3>
              <p className="text-gray-300 mb-6">
                Fill out the form below and we&apos;ll get back to you with a
                custom strategy tailored to your business needs.
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
                <div className="w-full sm:w-1/2 sm:pr-3">
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
                <div className="w-full sm:w-1/2 sm:pl-3">
                  <div className="form-group mb-4">
                    <input
                      type="url"
                      id="website"
                      name="website"
                      className="form-control w-full"
                      placeholder="Website URL (Optional)"
                      value={formData.website}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="form-group mb-4">
                    <select
                      id="service"
                      name="service"
                      className="form-control w-full"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      <option className="text-black" value="" disabled>
                        Select Service
                      </option>
                      <option
                        className="text-black"
                        value="Web Development & Management"
                      >
                        Web Development & Management
                      </option>
                      <option
                        className="text-black"
                        value="SEO & Digital Marketing"
                      >
                        SEO & Digital Marketing
                      </option>
                      <option className="text-black" value="Content Marketing">
                        Content Marketing
                      </option>
                      <option
                        className="text-black"
                        value="Brand Development & Management"
                      >
                        Brand Development & Management
                      </option>
                    </select>
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
                    <button
                      type="submit"
                      disabled={isSubmitted}
                      className="theme-btn group relative inline-flex items-center justify-center bg-secondary hover:bg-white text-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 overflow-hidden mt-6 outline-none"
                    >
                      <span className="relative z-10 transition-all duration-300 group-hover:-skew-x-6 group-hover:tracking-wider">
                        {isSubmitted ? "Sending..." : "Contact Us"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
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
                  Whether you&apos;re looking to boost your online presence,z
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
                  Quick Response Guarantee
                </h4>
                <p className="text-black">
                  We&apos;ll respond within 1-2 business days and provide a
                  custom strategy for your business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
