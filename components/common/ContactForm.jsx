"use client";

import { useState } from "react";
import { send } from "@emailjs/browser";
import { toast } from "sonner";
import { sendFBPixelEvent } from "@/components/global/analytics/FacebookPixel";

const ContactForm = () => {
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
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        contact: `Contact Number: ${formData.phone}`,
        website: formData.website || "N/A",
        service: formData.service || "N/A",
        message: formData.message,
      };

      sendFBPixelEvent("Lead", {
        content_name: "contact_form_submission",
        content_category: "lead",
        service: formData.service || "N/A",
      });

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-16759601889/tzEICNbkoscaEOH1zLc-",
        });
      }

      await send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send message");
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
        Fill out the form below and we&apos;ll get back to you with a custom
        strategy tailored to your business needs.
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
              <option className="text-black" value="SEO & Digital Marketing">
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
  );
};

export default ContactForm;
