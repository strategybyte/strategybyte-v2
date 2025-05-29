"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      image: "/assets/images/blog/blog-two1.jpg",
      category: "SEO Services",
      title: "How to Craft they Winning Socials Media Strategy from Scratch",
      slug: "blog-details",
    },
    {
      id: 2,
      image: "/assets/images/blog/blog-two2.jpg",
      category: "Social Media Marketing",
      title: "Unlocking the Power of Paid Ads A Social Media Marketing",
      slug: "blog-details",
    },
    {
      id: 3,
      image: "/assets/images/blog/blog-two3.jpg",
      category: "Marketing",
      title: "How to Improve Your Website's Loading Speed Performance",
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
                    <li>
                      <a href="#" className="text-secondary text-xs font-bold">
                        {post.category}
                      </a>
                    </li>
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
