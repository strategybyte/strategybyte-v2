"use client";

import PropTypes from "prop-types";

const Container = ({
  children,
  className = "",
  bordered = false,
  padding = "py-100",
  maxWidth = "container mx-auto",
  px = "px-4",
}) => {
  const borderedClass = bordered ? "bordered-x" : "";

  return (
    <div
      className={`${maxWidth} ${borderedClass} ${padding} ${px} ${className}`}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  bordered: PropTypes.bool,
  padding: PropTypes.string,
  maxWidth: PropTypes.string,
  px: PropTypes.string,
};

export default Container;
