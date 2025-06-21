"use client";

import PropTypes from "prop-types";
import Link from "next/link";

const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "medium",
  className = "",
  disabled = false,
  ...props
}) => {
  const baseClasses =
    "theme-btn group relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 overflow-hidden outline-none";

  const variants = {
    primary: "bg-secondary hover:bg-white text-white hover:text-primary",
    secondary:
      "bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-white",
    ghost: "bg-transparent text-white hover:bg-white hover:text-primary",
  };

  const sizes = {
    small: "px-6 py-3 text-sm",
    medium: "px-8 py-4 text-lg",
    large: "px-10 py-5 text-xl",
  };

  const classes = `${baseClasses} ${variants[variant]} ${
    sizes[size]
  } ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  const content = (
    <span className="relative z-10 transition-all duration-300 group-hover:-skew-x-6">
      {children}
    </span>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "ghost"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
