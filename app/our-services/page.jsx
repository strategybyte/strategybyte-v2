import Image from "next/image";
import banner1 from "@/public/assets/service/banner-1.png";
import banner2 from "@/public/assets/service/banner-2.png";
import banner3 from "@/public/assets/service/banner-3.png";
import Link from "next/link";

const services = [
  {
    title: "Digital Marketing",
    description:
      "End-to-end digital marketing to increase brand visibility, generate leads, and drive measurable growth.",
    icon: (
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9Z" />
    ),
  },
  {
    title: "Search Engine Optimization",
    description:
      "Improve your search rankings and attract high-quality traffic with targeted SEO content and technical fixes.",
    icon: (
      <path d="M7 14C5.9 14 5 13.1 5 12S5.9 10 7 10 9 10.9 9 12 8.1 14 7 14M12.6 10C11.8 7.7 9.6 6 7 6C3.7 6 1 8.7 1 12S3.7 18 7 18C9.6 18 11.8 16.3 12.6 14H16V18H20V14H23V10H12.6Z" />
    ),
  },
  {
    title: "Website Development",
    description:
      "Custom, fast-loading websites built for performance, user experience, and SEO success.",
    icon: (
      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM19 6H5V5H19V6Z" />
    ),
  },
  {
    title: "Participant Portal Development",
    description:
      "User-friendly, NDIS-compliant portals that centralize support, access, service tracking, and communication.",
    icon: (
      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" />
    ),
  },
  {
    title: "Business Process Setup",
    description:
      "Automate workflows and connect your tools: CRM, scheduling, and more—to save time and scale.",
    icon: (
      <path d="M16 4C16.6 4 17 4.4 17 5S16.6 6 16 6 15 5.6 15 5 15.4 4 16 4M13 2C13.6 2 14 2.4 14 3S13.6 4 13 4 12 3.6 12 3 12.4 2 13 2M16 8C16.6 8 17 8.4 17 9S16.6 10 16 10 15 9.6 15 9 15.4 8 16 8M9 12C9.6 12 10 12.4 10 13S9.6 14 9 14 8 13.6 8 13 8.4 12 9 12M13 12C13.6 12 14 12.4 14 13S13.6 14 13 14 12 13.6 12 13 12.4 12 13 12M16 12C16.6 12 17 12.4 17 13S16.6 14 16 14 15 13.6 15 13 15.4 12 16 12Z" />
    ),
  },
  {
    title: "Analytics & Reporting",
    description:
      "Track key metrics with custom dashboards and reports to make informed, data-driven marketing decisions.",
    icon: (
      <path d="M5 9.2H7V19H5V9.2ZM10.6 5H12.4V19H10.6V5ZM16.2 13H18V19H16.2V13ZM2 21H22V19H2V21Z" />
    ),
  },
];

const OurServicesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Our Services Section */}
      <section>
        <div className="bg-white/15 pt-16">
          <div className="container mx-auto px-4">
            {/* Services Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-secondary">Services</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                We deliver tailored digital marketing, SEO, and web development
                solutions - designed to accelerate business growth and deliver
                real results.
              </p>
            </div>
            {/* Service Illustrations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-end">
              <div className="bg-white rounded-t-2xl py-8 flex items-center justify-center h-96">
                <Image src={banner1} alt="banner" />
              </div>
              <div className="bg-white rounded-t-2xl py-8 flex items-center justify-center h-80">
                <Image src={banner2} alt="banner" />
              </div>
              <div className="bg-white rounded-t-2xl py-8 flex items-center justify-center h-96">
                <Image src={banner3} alt="banner" />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                // className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-300"
                className="relative group bg-black border border-gray-800 rounded-lg p-6 overflow-hidden transition-all duration-500 hover:bg-secondary hover:border-secondary-500"
                data-aos="flip-up"
              >
                <div
                  className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4  group-hover:text-black group-hover:bg-white"
                  // className="text-secondary text-5xl leading-none mb-5 transition-all duration-500 group-hover:text-black"
                >
                  <svg
                    className="w-6 h-6 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {service.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed group-hover:text-gray-100">
                  {service.description}
                </p>
                <button className="text-secondary group-hover:text-primary font-medium text-sm flex items-center gap-2 transition-colors">
                  Learn more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Process Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-secondary">Process</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We follow a proven, collaborative workflow to deliver high-quality
              digital solutions—from discovery to deployment—with precision and
              impact.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gray-700"></div>

            {/* Process Steps */}
            <div className="space-y-16">
              {/* Discovery */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold mb-4">Discovery</h3>
                  <p className="text-gray-300">
                    We start by identifying your business goals, audience, and
                    challenges to define a clear digital strategy.
                  </p>
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                    1
                  </div>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Planning */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                    2
                  </div>
                </div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold mb-4">Planning</h3>
                  <p className="text-gray-300">
                    Our team develops a structured project roadmap with
                    milestones, timelines, and resource allocation to guide
                    execution.
                  </p>
                </div>
              </div>

              {/* Design */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold mb-4">Design</h3>
                  <p className="text-gray-300">
                    Then we begin creating responsive, user-centric interfaces
                    optimized for performance, accessibility, and brand
                    alignment.
                  </p>
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                    3
                  </div>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Development */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                    4
                  </div>
                </div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold mb-4">Development</h3>
                  <p className="text-gray-300">
                    Using the latest technologies, we build secure, scalable
                    websites and custom digital platforms designed for long-term
                    growth.
                  </p>
                </div>
              </div>

              {/* Testing */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold mb-4">Testing</h3>
                  <p className="text-gray-300">
                    We conduct comprehensive QA to ensure site speed,
                    cross-device compatibility, and SEO readiness.
                  </p>
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                    5
                  </div>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Deployment */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                    6
                  </div>
                </div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold mb-4">Deployment</h3>
                  <p className="text-gray-300">
                    Once ready, we launch your solution with full
                    support—ensuring smooth operation, ongoing optimization, and
                    measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to transform your digital presence?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve your business goals
            with our expert services.
          </p>
          <button className="bg-secondary hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors">
            Get a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurServicesPage;
