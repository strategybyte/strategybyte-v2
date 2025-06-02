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
      className={`blog-item-style-three ${className}`}
      {...(aos ? aosProps : {})}
    >
      <div className="image">
        <img src={image} alt="Blog" className="w-full" />
      </div>
      <div className="content">
        {category && (
          <ul className="blog-meta list-none p-0 m-0">
            <li>
              <span className="text-secondary text-xs font-bold">
                {category}
              </span>
            </li>
          </ul>
        )}
        <h5 className="text-lg font-bold mb-3 leading-tight">
          <Link
            href={slug}
            className="text-white hover:text-secondary transition-colors duration-300"
          >
            {title}
          </Link>
        </h5>
        <Link
          href={slug}
          className="theme-btn-style-two text-secondary font-semibold inline-flex items-center"
        >
          <span>Read More</span>
        </Link>
      </div>
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
