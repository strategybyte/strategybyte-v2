"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const ServiceDetailsPage = ({ params: { slug } }) => {
  const router = useRouter();
  console.log(slug);

  const serviceDetails = {
    "digital-marketing": {
      title: {
        initial: "Digital",
        highlight: "Marketing",
        end: "Services",
      },
      description:
        "Grow your business with data-driven digital marketing that connects you to the right audience and turns clicks into customers.",
      image: "/assets/service/digital-marketing/banner.png",
      button: {
        text: "Get a Free Audit",
        link: "/contact",
      },

      stats: [
        {
          value: "92 %",
          label: "Client Retention Rate",
          color: "text-secondary",
        },
        {
          value: "2x",
          label: "Avg. ROI from Paid Ads",
          color: "text-white",
        },
        {
          value: "73 %",
          label: "Improvement in Lead Quality",
          color: "text-secondary",
        },
        {
          value: "150+",
          label: "Businesses Transformed",
          color: "text-white",
        },
      ],

      why: {
        title: {
          initial: "Why",
          highlight: "Digital Marketing",
          end: "Matters",
        },
        description:
          "Reach the right audience, build trust, track performance, and maximize ROI with smart, data-driven marketing.",

        cards: [
          {
            title: "Digital Strategy & Brand Positioning",
            description:
              "Refine your brand, target the right audience, and outpace competitors.",
            image: "/assets/service/digital-marketing/card-1.png",
            list: [
              "Brand messaging & tone",
              "Audience segmentation & journeys",
              "Competitor bench marking",
              "Campaigns with growth goals",
            ],
          },
          {
            title: "Content That Connects",
            description: "Engaging blogs, videos, and graphics that convert.",
            image: "/assets/service/digital-marketing/card-2.png",
            list: [
              "Reels, videos & graphics",
              "Blog & ad content",
              "Content calendars",
              "Storytelling & copy writing",
            ],
          },
          {
            title: "Social Media That Builds Communities",
            description:
              "Grow with organic and paid social campaigns that build engagement and loyalty.",
            image: "/assets/service/digital-marketing/card-3.png",
            list: [
              "Platform strategies",
              "Organic & paid campaigns",
              "Community management",
              "Influencer partnerships",
            ],
          },
          {
            title: "Converting Paid Ads",
            description:
              "Funnel-based Google & Meta Ads that drive real results.",
            image: "/assets/service/digital-marketing/card-4.png",
            list: [
              "Google & Meta Ads",
              "Funnel-based campaigns",
              "Budgeting & A/B testing",
              "Live campaign tracking",
            ],
          },
          {
            title: "Website Experience & Conversion Design",
            description:
              "Fast-loading pages with CTAs and UX built to convert.",
            image: "/assets/service/digital-marketing/card-5.png",
            list: [
              "Mobile-first, fast-loading design",
              "Lead-gen landing pages",
              "Funnels & clear CTAs",
              "Data-driven UX updates",
            ],
          },
          {
            title: "Data-Driven Insights & Growth Tracking",
            description:
              "Dashboards, traffic tracking, and data that drives action.",
            image: "/assets/service/digital-marketing/card-6.png",
            list: [
              "Custom dashboards & reports",
              "Real-time traffic & ROI tracking",
              "Conversion & journey analysis",
              "Actionable next steps",
            ],
          },
        ],
      },

      process: {
        title: {
          initial: "Our",
          highlight: "Digital Marketing",
          end: "Process",
        },
        description:
          "We follow a clear and collaborative process to ensure every project is delivered with quality, precision, and impact.",
        steps: [
          {
            number: "1",
            title: "Discovery & Research",
            description:
              "Understanding your business, competitors, and target audience.",
            isActive: true,
          },
          {
            number: "2",
            title: "Strategy Development",
            description: "Creating a customized digital marketing roadmap.",
            isActive: false,
          },
          {
            number: "3",
            title: "Execution & Optimization",
            description:
              "Launching campaigns, content, and assets while continuously refining based on data.",
            isActive: true,
          },
        ],
      },
    },

    "website-development": {
      title: {
        initial: "",
        highlight: "Website Development",
        end: "Services",
      },
      description:
        "We build fast, secure, SEO-ready websites that reflect your brand, boost engagement, and convert visitors into customers—24/7.",
      image: "/assets/service/website-development/banner.png",
      button: {
        text: "Request a Quote",
        link: "/contact",
      },

      stats: [
        {
          value: "1.2s",
          label: "Average Page Load Time",
          color: "text-secondary",
        },
        {
          value: "94 %",
          label: "Satisfaction Rate",
          color: "text-white",
        },
        {
          value: "82 %",
          label: "Mobile Conversion Lift",
          color: "text-secondary",
        },
        {
          value: "200+",
          label: "Sites Launched",
          color: "text-white",
        },
      ],

      why: {
        title: {
          initial: "Why",
          highlight: "Website Development",
          end: "Matters",
        },
        description:
          "In today’s digital-first world, your website is your first impression, your lead generator, and your most valuable sales tool. ",

        cards: [
          {
            title: "Custom Design That Stands Out ",
            description:
              "Modern, responsive layouts tailored to your brand with visual storytelling.",
            image: "/assets/service/website-development/card-1.png",
            list: [
              "Goal-focused layouts",
              "Fully responsive design",
              "Trust-building visual storytelling",
            ],
          },
          {
            title: "Built to Convert ",
            description:
              "Pages designed to drive action—CTAs, funnels, and CRM integration included.",
            image: "/assets/service/website-development/card-2.png",
            list: [
              "Conversion-driven layouts & UX",
              "Clear CTAs, forms & funnel setup",
              "CRM, booking & payment integration",
            ],
          },
          {
            title: "Optimized for Speed & Performance ",
            description:
              "Fast, mobile-first websites built for long-term performance and SEO.",
            image: "/assets/service/website-development/card-3.png",
            list: [
              "Fast loads with clean code",
              "Mobile-first for on-the-go users",
              "Scalable, long-term performance",
            ],
          },
          {
            title: "SEO-Ready Foundation ",
            description:
              "Structured for visibility with metadata, keyword-rich content, and optimized tags.",
            image: "/assets/service/website-development/card-4.png",
            list: [
              "SEO metadata & crawl-friendly structure",
              "Keyword-rich content blocks",
              "Optimized headings & image tags",
            ],
          },
          {
            title: "Scalable & Easy to Manage ",
            description:
              "User-friendly, modular platforms with training and support built in.",
            image: "/assets/service/website-development/card-5.png",
            list: [
              "User-friendly platforms",
              "Modular, expandable design",
              "Training & ongoing support",
            ],
          },
          {
            title: "Fully Integrated Solutions ",
            description:
              "Connect your site to analytics, bookings, NDIS tools, and more—seamlessly.",
            image: "/assets/service/website-development/card-6.png",
            list: [
              "Integrates with analytics, email & chatbots",
              "Ready for bookings, eCommerce & NDIS",
              "Built to match your workflows",
            ],
          },
        ],
      },

      process: {
        title: {
          initial: "Our",
          highlight: "Website Development",
          end: "Process",
        },
        description:
          "A structured approach to deliver high-performing, secure, and user-friendly websites.",
        steps: [
          {
            number: "1",
            title: "Planning & Discovery",
            description:
              "Understanding your brand, goals, and technical requirements.",
            isActive: true,
          },
          {
            number: "2",
            title: "Wireframing & Design",
            description:
              " Creating user-friendly layouts and visual concepts tailored to your audience.",
            isActive: false,
          },
          {
            number: "3",
            title: "Development & Testing ",
            description:
              "Building a responsive, secure site—tested across devices and browsers.",
            isActive: true,
          },
        ],
      },
    },

    seo: {
      title: {
        initial: "",
        highlight: "Search Engine Optimization",
        end: "Services",
      },
      description:
        "StrategyByte’s SEO services help you rank higher, attract the right traffic, and turn visits into customers—without relying on paid ads.",
      image: "/assets/service/seo/banner.png",
      button: {
        text: "Request an SEO Audit",
        link: "/contact",
      },

      stats: [
        {
          value: "128 %",
          label: "Increase in Organic Traffic",
          color: "text-secondary",
        },
        {
          value: "2.2x",
          label: "Avg. SEO ROI",
          color: "text-white",
        },
        {
          value: "70 %",
          label: "Improvement in Search Rankings",
          color: "text-secondary",
        },
        {
          value: "180+",
          label: "Optimized Pages Delivered",
          color: "text-white",
        },
      ],

      why: {
        title: {
          initial: "Why",
          highlight: "Search Engine Optimization",
          end: "Matters",
        },
        description:
          "In today’s search-driven world, if you’re not visible, you don’t exist. SEO is how your brand gets found—and stays top-of-mind. ",

        cards: [
          {
            title: "Higher Search Rankings",
            description:
              "Boost your search position with targeted keyword strategies.",
            image: "/assets/service/seo/card-1.png",
            list: [
              "Google-first SEO",
              "Business-specific keyword research",
              "Competitor & content gap analysis",
            ],
          },
          {
            title: "Targeted Organic Traffic",
            description:
              "Attract ready-to-convert visitors using intent-driven keywords and local SEO.",
            image: "/assets/service/seo/card-2.png",
            list: [
              "Intent-driven keywords",
              "Local & industry strategies",
              "Reduce ad spend reliance",
            ],
          },
          {
            title: "Long-Term ROI",
            description:
              "SEO that grows over time—more leads, less ad spend, and scalable returns.",
            image: "/assets/service/seo/card-3.png",
            list: [
              "Cost-effective vs. paid media",
              "Sustainable leads & traffic",
              "Scalable strategies",
            ],
          },
          {
            title: "Technical Website Optimization",
            description:
              "Speed up your site and fix SEO issues with mobile-ready, structured backend updates.",
            image: "/assets/service/seo/card-4.png",
            list: [
              "Faster loads & mobile-ready",
              "Structured data & SEO crawlability",
              "Fixes for errors, duplicates & links",
            ],
          },
          {
            title: "Content That Converts",
            description:
              "Create SEO content that ranks and resonates—blogs, landing pages, and service copy.",
            image: "/assets/service/seo/card-5.png",
            list: [
              "Blog, landing & service content",
              "On-page SEO for performance",
              "Intent-driven storytelling",
            ],
          },
          {
            title: "Data-Driven Results",
            description:
              "Track rankings, traffic, and conversions with monthly reports and real-time updates.",
            image: "/assets/service/seo/card-6.png",
            list: [
              "Monthly performance reports",
              "Traffic, ranking & conversions",
              "Real-time, agile strategy updates",
            ],
          },
        ],
      },

      process: {
        title: {
          initial: "Our",
          highlight: "Search Engine Optimization",
          end: "Process",
        },
        description:
          "A structured approach to improve visibility, grow traffic, and deliver lasting results.",
        steps: [
          {
            number: "1",
            title: "SEO Audit & Research",
            description:
              "Analyzing your website, competitors, and target keywords.",
            isActive: true,
          },
          {
            number: "2",
            title: "Strategy Development",
            description:
              "Building a tailored SEO roadmap aligned with your business goals.",
            isActive: false,
          },
          {
            number: "3",
            title: "On-Site Optimization",
            description:
              " Improving technical structure, speed, and content for better rankings.",
            isActive: true,
          },
        ],
      },
    },
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <section>
        <div className="bg-white/15 py-16">
          <div className="container mx-auto px-4 flex items-center justify-between">
            {/* Services Header */}
            <div className="text-left mb-12 max-w-md">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {serviceDetails[slug].title.initial}{" "}
                <span className="text-secondary">
                  {serviceDetails[slug].title.highlight}
                </span>{" "}
                {serviceDetails[slug].title.end}
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                {serviceDetails[slug].description}
              </p>

              <button
                className="bg-secondary hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors mt-4"
                onClick={() => router.push(serviceDetails[slug].button.link)}
              >
                {serviceDetails[slug].button.text}
              </button>
            </div>
            {/* Service Illustrations */}
            <div>
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
              <div className="text-center" key={index}>
                <h3 className={`text-4xl font-bold ${stat.color}`}>
                  {stat.value}
                </h3>
                <p className={`${stat.color}`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container px-4 py-16 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 md:max-w-xl mx-auto !leading-tight">
              {serviceDetails[slug].why.title.initial}{" "}
              <span className="text-secondary">
                {serviceDetails[slug].why.title.highlight}
              </span>{" "}
              {serviceDetails[slug].why.title.end}
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {serviceDetails[slug].why.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
              {serviceDetails[slug].why.cards.map((card, index) => (
                <div
                  className="bg-white/15 backdrop-blur-md border border-white/20 rounded-lg p-6 lg:p-8 xl:p-10 transition-all duration-500 hover:bg-white/20 hover:border-white/30 group shadow-lg"
                  key={index}
                >
                  <div className="size-16 p-4 rounded-full bg-[#2F3F61]/50">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
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

        <div className="bg-black py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
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

                {/* Connecting Line (hidden on last item) */}
                {index < serviceDetails[slug].process.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-16 h-0.5 bg-white/20 transform translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailsPage;
