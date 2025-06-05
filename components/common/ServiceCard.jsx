/* eslint-disable @next/next/no-img-element */
"use client";

import PropTypes from "prop-types";
import Link from "next/link";

const ServiceCard = ({
  icon,
  title,
  description,
  link = "#",
  className = "",
  iconColor = "text-primary-500",
  aos = true,
  aosProps = {
    "data-aos": "flip-up",
    "data-aos-duration": "1500",
    "data-aos-offset": "50",
  },
}) => {
  return (
    <div className={className} {...(aos ? aosProps : {})}>
      <div className="service-two-item relative group bg-black border border-gray-800 rounded-lg p-10 lg:p-12 xl:p-16 mb-8 overflow-hidden transition-all duration-500 hover:bg-secondary hover:border-secondary-500">
        {/* Icon */}
        <div
          className={`${iconColor} text-5xl leading-none mb-5 transition-all duration-500 group-hover:text-black`}
        >
          <i className={icon}></i>
        </div>

        {/* Title */}
        <h4 className="text-white text-xl lg:text-2xl font-bold mb-4 transition-all duration-500 group-hover:text-black">
          <Link
            href={link}
            className="hover:text-primary-500 group-hover:text-black transition-colors duration-300"
          >
            {title}
          </Link>
        </h4>

        {/* Description */}
        <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-2xl transition-all duration-500 group-hover:text-black">
          {description}
        </p>

        {/* Read More */}
        <Link
          href={link}
          className="inline-flex items-center text-primary-500 font-medium hover:text-secondary-500 transition-all duration-500 group-hover:text-black hover:underline"
        >
          Read More
        </Link>

        {/* Background Circle - Only visible on hover */}
        <div className="absolute -right-[30%] -bottom-[30%] opacity-0 z-[-1] max-w-[50%] transition-all duration-500 group-hover:opacity-100 group-hover:right-0 group-hover:bottom-0">
          <img
            src="/assets/images/shapes/service-circle.png"
            alt="Circle"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  className: PropTypes.string,
  iconColor: PropTypes.string,
  aos: PropTypes.bool,
  aosProps: PropTypes.object,
};

export default ServiceCard;
