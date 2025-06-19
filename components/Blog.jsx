"use client";

import Link from "next/link";
import { Section, SectionTitle, BlogCard } from "./common";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      image:
        "https://images.ctfassets.net/3upqc2v7tlyy/3PF7o4IPne1jBOUdIHeDYP/e97cb56dfdfb6b2605884fc25f364bf4/Want_to_Win_inB2B_Marketing_Here-s_Everything_You_Should_Know_.webp",
      category: "SEO Services",
      title:
        "How Can an SEO Optimization Agency Boost Your Organic Traffic & Visibility?",
      slug: "/news/how-can-an-seo-optimization-agency-boost-your-organic-traffic-and-visibility",
    },
    {
      id: 2,
      image:
        "https://images.ctfassets.net/3upqc2v7tlyy/t6wIoqQtIB28qZwWPApnK/c8bb91e4e57598cccc09fd7b5096872e/Want_to_Win_inB2B_Marketing_Here-s_Everything_You_Should_Know_.webp",
      category: "Social Media Marketing",
      title:
        "How to Market NDIS Services in Australia: SEO, Lead Generation, and Digital Strategies for Providers",
      slug: "/news/how-to-market-ndis-services-in-australia-seo-lead-generation-and-digital",
    },
    {
      id: 3,
      image:
        "https://images.ctfassets.net/3upqc2v7tlyy/2erEpJGipbra4TpgadUWgc/2facb45d15f72a0cc05d6e49e28c3dc5/Want_to_Win_inB2B_Marketing_Here-s_Everything_You_Should_Know_.webp",
      category: "Marketing",
      title:
        "Digital Marketing Services in Australia: A Step-by-Step Guide to Increasing Your Website Authority Score",
      slug: "/news/digital-marketing-services-in-australia-a-step-by-step-guide-to-increasing",
    },
  ];

  return (
    <Section
      id="blog"
      containerProps={{
        bordered: true,
        padding: "pt-110 pb-70",
        px: "px-sm-0",
      }}
    >
      <div className="row justify-center">
        <div className="w-full xl:w-7/12 lg:w-9/12">
          <SectionTitle
            subtitle="Blog & News"
            title="Ultimate Guide to Boosting Engagement on Social Media"
            className="mb-50"
          />
        </div>
      </div>

      <div className="row justify-center px-4">
        {blogPosts.map((post, i) => (
          // <div key={post.id} className="w-full xl:w-4/12 md:w-6/12">
          //   <BlogCard
          //     image={post.image}
          //     title={post.title}
          //     category={post.category}
          //     slug={post.slug}
          //     aosProps={{
          //       "data-aos": "fade-up",
          //       "data-aos-duration": "1500",
          //       "data-aos-offset": "50",
          //       "data-aos-delay": index * 50,
          //     }}
          //   />
          // </div>
          <div
            key={i}
            className="w-full xl:w-1/3 md:w-1/2 px-4"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-offset="50"
            data-aos-delay={i * 50}
          >
            <div className="blog-item-style-two group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-700 mb-30 transition-all duration-500 hover:border-secondary-500 hover:shadow-2xl hover:shadow-secondary-500/20">
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt="Case Study"
                  className="w-full h-64 object-cover transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Tag */}
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center px-3 py-1 bg-secondary-500/20 border border-secondary-500 text-secondary-500 text-xs font-bold uppercase tracking-wider rounded-full">
                    <svg
                      className="w-3 h-3 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="pt-0.5">{post.category}</span>
                  </div>
                </div>

                {/* Title */}
                <h5 className="text-xl font-bold mb-4 leading-tight">
                  <Link
                    href={post.slug}
                    className="text-white hover:text-secondary-500 transition-colors duration-300 line-clamp-2"
                  >
                    {post.title}
                  </Link>
                </h5>

                {/* Read More Button */}
                <Link
                  href={post.slug}
                  className="inline-flex items-center gap-2 text-secondary-500 font-semibold group/btn transition-all duration-300 hover:text-secondary-400"
                >
                  <span>Case Details</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>

              {/* Hover Effect Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary-500/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
