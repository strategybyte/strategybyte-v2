"use client";

import PropTypes from "prop-types";
import Link from "next/link";

const Card = ({
  children,
  className = "",
  hover = true,
  background = "bg-black",
  border = "border border-gray-800",
  padding = "p-10 lg:p-12 xl:p-16",
  rounded = "rounded-lg",
  aos = false,
  aosProps = {},
}) => {
  const hoverClass = hover
    ? "transition-all duration-500 hover:bg-secondary hover:border-secondary-500"
    : "";

  return (
    <div
      className={`${background} ${border} ${rounded} ${padding} ${hoverClass} ${className}`}
      {...(aos ? aosProps : {})}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
  background: PropTypes.string,
  border: PropTypes.string,
  padding: PropTypes.string,
  rounded: PropTypes.string,
  aos: PropTypes.bool,
  aosProps: PropTypes.object,
};

export default Card;
