"use client";

import { Section, SectionTitle, ServiceCard } from "./common";

export default function Services({ extraClass = "pb-70" }) {
  const services = [
    {
      icon: "flaticon-seo",
      title: "Website Development",
      description:
        "We design fast, functional, and conversion-driven websites tailored to specific goals",
      link: "/our-services/website-development",
    },
    {
      icon: "flaticon-keywords",
      title: "Digital Marketing ",
      description:
        "We create targeted campaigns that drive real results and help your brand grow smarter online",
      link: "/our-services/digital-marketing",
    },
    {
      icon: "flaticon-search-engine",
      title: "Search Engine Optimization",
      description:
        "We boost your website's visibility with strategic keywords and content to increase traffic and long-term growth",
      link: "/our-services/seo",
    },
    {
      icon: "flaticon-link-building",
      title: "Participant Portal Development",
      description:
        "We create smart, secure portals that simplify referrals, track needs, and keep you connected in one place",
      link: "/our-services/participant-portal-development",
    },
    {
      icon: "flaticon-www",
      title: "Business Process Setup",
      description:
        "We streamline your business with efficient workflows and digital tools for smooth operations ",
      link: "/our-services/business-process-setup",
    },
    {
      icon: "flaticon-performance",
      title: "Analytics & Reporting ",
      description:
        "We turn data into actionable insights to help you make smarter, data-driven decisions",
      link: "/our-services/analytics-and-reporting",
    },
  ];

  return (
    <Section
      id="services"
      containerProps={{
        bordered: true,
        padding: extraClass,
        px: "px-0 sm:px-4",
      }}
    >
      {/* Section Header */}
      <div className="flex justify-center pb-8">
        <div className="w-full xl:w-7/12 lg:w-9/12">
          <SectionTitle
            subtitle="Our Services"
            title="Partner with StrategyByte to focus on what matters most."
            description="Our approach is designed to maximize the impact of your marketing efforts by delivering measurable ROI. We focus on strategic allocation of resources, ensuring every dollar spent contributes to meaningful growth and business success."
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid gird-cols-1 md:grid-cols-2 gap-3 -mx-4 px-2">
        {services.map(({ icon, title, description, link }, i) => (
          <ServiceCard
            key={i}
            icon={icon}
            title={title}
            description={description}
            link={link}
          />
        ))}
      </div>
    </Section>
  );
}
