"use client";

import PropTypes from "prop-types";
import AOSWrapper from "./AOSWrapper";
import Container from "./Container";

const Section = ({
  children,
  id,
  className = "",
  background = "",
  containerProps = {},
  aosConfig = {},
  fullWidth = false,
}) => {
  const sectionClasses = `relative z-10 ${background} ${className}`;

  const content = fullWidth ? (
    children
  ) : (
    <Container {...containerProps}>{children}</Container>
  );

  return (
    <AOSWrapper aosConfig={aosConfig}>
      <section id={id} className={sectionClasses}>
        {content}
      </section>
    </AOSWrapper>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  background: PropTypes.string,
  containerProps: PropTypes.object,
  aosConfig: PropTypes.object,
  fullWidth: PropTypes.bool,
};

export default Section;
