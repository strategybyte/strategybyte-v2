"use client";

import PropTypes from "prop-types";

const TextAnimation = ({
  children,
  delay = 0,
  className = "",
  animationType = "fade-in-up",
  specialWord = null,
  specialIcon = null,
}) => {
  const words = children.split(" ");

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block animate-${animationType} opacity-0`}
          style={{
            animationDelay: `${delay + index * 100}ms`,
            animationFillMode: "forwards",
          }}
        >
          {word === specialWord && specialIcon ? (
            <>
              {word}
              <span className="inline-block ml-4 relative top-0 w-8 h-8 align-middle">
                <span
                  className="absolute inset-0 bg-no-repeat bg-center bg-contain"
                  style={{
                    backgroundImage: `url(${specialIcon})`,
                  }}
                ></span>
              </span>
            </>
          ) : (
            word
          )}
          {index < words.length - 1 && <span className="mr-2"></span>}
        </span>
      ))}
    </span>
  );
};

TextAnimation.propTypes = {
  children: PropTypes.string.isRequired,
  delay: PropTypes.number,
  className: PropTypes.string,
  animationType: PropTypes.string,
  specialWord: PropTypes.string,
  specialIcon: PropTypes.string,
};

export default TextAnimation;
