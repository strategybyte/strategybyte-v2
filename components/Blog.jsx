"use client";

import Link from "next/link";
import { Section, SectionTitle } from "./common";
import { useEffect, useState } from "react";
import client from "@/lib/contnetful";

const ITEMS_PER_PAGE = 8;

export default function Blog() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);

    try {
      const newsEntries = await client.getEntries({
        content_type: "news",
        order: "-sys.createdAt",
        limit: 3,
        select:
          "fields.title,fields.slug,fields.thumbnail,sys.id,fields.blogCategory",
      });

      setContent(newsEntries?.items || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return;
  }

  const blogPosts = content?.map((item) => {
    return {
      id: item.sys.id,
      image: `https:${item.fields.thumbnail.fields.file.url}`,
      title: item.fields.title,
      slug: item.fields.slug,
      category: item.fields.blogCategory?.fields.title || "Marketing",
    };
  });

  return (
    <Section
      id="blog"
      containerProps={{
        bordered: true,
        px: "px-4",
      }}
    >
      <div className="row justify-center">
        <div className="w-full xl:w-7/12 lg:w-9/12">
          <SectionTitle
            subtitle="Blog & News"
            title="Boost Your Brand: Essential Marketing Insights"
            className="mb-50"
          />
        </div>
      </div>

      <div className="row justify-center px-4">
        {blogPosts.map((post, i) => (
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
                  href={`/news/${post.slug}`}
                  className="inline-flex items-center gap-2 text-secondary-500 font-semibold group/btn transition-all duration-300 hover:text-secondary-400"
                >
                  <span>Read More</span>
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
