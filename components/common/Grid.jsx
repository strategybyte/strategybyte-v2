"use client";

import PropTypes from "prop-types";

const Grid = ({
  children,
  columns = {
    default: 1,
    md: 2,
    lg: 3,
  },
  gap = "gap-6",
  className = "",
}) => {
  const gridClasses = `grid grid-cols-${columns.default} ${
    columns.md ? `md:grid-cols-${columns.md}` : ""
  } ${columns.lg ? `lg:grid-cols-${columns.lg}` : ""} ${gap} ${className}`;

  return <div className={gridClasses}>{children}</div>;
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.shape({
    default: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
  }),
  gap: PropTypes.string,
  className: PropTypes.string,
};

export default Grid;
