/* eslint-disable @next/next/no-img-element */
"use client";

import PropTypes from "prop-types";
import Link from "next/link";

const BlogCard = ({
  image,
  title,
  category,
  slug,
  className = "",
  aos = true,
  aosProps = {
    "data-aos": "fade-up",
    "data-aos-duration": "1500",
    "data-aos-offset": "50",
  },
}) => {
  return (
    <div
      className={`blog-item-style-three group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-700 transition-all duration-500 hover:border-secondary-500 hover:shadow-2xl hover:shadow-secondary-500/20 ${className}`}
      {...(aos ? aosProps : {})}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt="Blog"
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div>
          {" "}
          {category && (
            <span className="inline-flex items-center px-3 py-1 bg-secondary-500 text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-lg bg-white">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="pt-0.5">{category}</span>
            </span>
          )}
        </div>

        <h5 className="text-xl font-bold mb-4 leading-tight transition-colors duration-300 mt-4">
          <Link
            href={slug}
            className="text-white hover:text-secondary-500 transition-colors duration-300"
          >
            {title}
          </Link>
        </h5>

        <Link
          href={slug}
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

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary-500/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
    </div>
  );
};

BlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  slug: PropTypes.string.isRequired,
  className: PropTypes.string,
  aos: PropTypes.bool,
  aosProps: PropTypes.object,
};

export default BlogCard;
