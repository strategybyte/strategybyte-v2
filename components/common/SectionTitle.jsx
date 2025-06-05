"use client";

import PropTypes from "prop-types";

const SectionTitle = ({
  subtitle,
  title,
  description,
  textAlign = "center",
  subtitleColor = "text-secondary",
  titleColor = "text-white",
  descriptionColor = "text-gray-300",
  className = "",
  aos = true,
  aosProps = {
    "data-aos": "zoom-in",
    "data-aos-duration": "1500",
    "data-aos-offset": "50",
  },
}) => {
  const alignmentClasses = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  return (
    <div
      className={`section-title ${alignmentClasses[textAlign]} ${className}`}
      {...(aos ? aosProps : {})}
    >
      {subtitle && (
        <span
          className={`${subtitleColor} text-sm font-medium uppercase tracking-wider mb-4 inline-block px-4 py-2 pb-1.5 rounded-md bg-white/10 backdrop-blur-md border border-white/20 shadow-lg`}
        >
          {subtitle}
        </span>
      )}
      {title && (
        <h2
          className={`${titleColor} text-3xl md:text-4xl font-bold leading-tight mb-6`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p className={`${descriptionColor} leading-relaxed`}>{description}</p>
      )}
    </div>
  );
};

SectionTitle.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  textAlign: PropTypes.oneOf(["center", "left", "right"]),
  subtitleColor: PropTypes.string,
  titleColor: PropTypes.string,
  descriptionColor: PropTypes.string,
  className: PropTypes.string,
  aos: PropTypes.bool,
  aosProps: PropTypes.object,
};

export default SectionTitle;
