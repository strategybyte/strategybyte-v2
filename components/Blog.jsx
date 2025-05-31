"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      image:
        "https://images.ctfassets.net/3upqc2v7tlyy/3PF7o4IPne1jBOUdIHeDYP/e97cb56dfdfb6b2605884fc25f364bf4/Want_to_Win_inB2B_Marketing_Here-s_Everything_You_Should_Know_.webp",
      category: "SEO Services",
      title:
        "How Can an SEO Optimization Agency Boost Your Organic Traffic & Visibility?",
      slug: "blog-details",
    },
    {
      id: 2,
      image:
        "https://images.ctfassets.net/3upqc2v7tlyy/t6wIoqQtIB28qZwWPApnK/c8bb91e4e57598cccc09fd7b5096872e/Want_to_Win_inB2B_Marketing_Here-s_Everything_You_Should_Know_.webp",
      category: "Social Media Marketing",
      title:
        "How to Market NDIS Services in Australia: SEO, Lead Generation, and Digital Strategies for Providers",
      slug: "blog-details",
    },
    {
      id: 3,
      image:
        "https://images.ctfassets.net/3upqc2v7tlyy/2erEpJGipbra4TpgadUWgc/2facb45d15f72a0cc05d6e49e28c3dc5/Want_to_Win_inB2B_Marketing_Here-s_Everything_You_Should_Know_.webp",
      category: "Marketing",
      title:
        "Digital Marketing Services in Australia: A Step-by-Step Guide to Increasing Your Website Authority Score",
      slug: "blog-details",
    },
  ];

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

  return (
    <section id="blog" className="blog-area rel z-10">
      <div className="container mx-auto bordered-x pt-110 pb-70 px-sm-0">
        <div className="row justify-center">
          <div className="w-full xl:w-7/12 lg:w-9/12">
            <div
              className="section-title text-center mb-50"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <span className="subtitle text-secondary font-bold mb-15">
                Blog & News
              </span>
              <h2 className="text-white text-4xl  font-bold leading-tight">
                Ultimate Guide to Boosting Engagement on Social Media
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-center px-4">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="w-full xl:w-4/12 md:w-6/12">
              <div
                className="blog-item-style-three"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-offset="50"
                data-aos-delay={index * 50}
              >
                <div className="image">
                  <img src={post.image} alt="Blog" className="w-full" />
                </div>
                <div className="content">
                  <ul className="blog-meta list-none p-0 m-0">
                    {/* <li>
                      <a href="#" className="text-secondary text-xs font-bold">
                        {post.category}
                      </a>
                    </li> */}
                  </ul>
                  <h5 className="text-lg font-bold mb-3 leading-tight">
                    <Link
                      href={post.slug}
                      className="text-white hover:text-secondary transition-colors duration-300"
                    >
                      {post.title}
                    </Link>
                  </h5>
                  <Link
                    href={post.slug}
                    className="theme-btn-style-two text-secondary font-semibold inline-flex items-center"
                  >
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
