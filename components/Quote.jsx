import React from "react";
import { Section, SectionTitle } from "./common";

const images1 = [
  "/images/quote/alexander_rodriguez.webp",
  "/images/quote/care_around_you.webp",
  "/images/quote/disacare_solution.webp",
  "/images/quote/ecs.webp",
];

const images2 = [
  "/images/quote/ford.webp",
  "/images/quote/gelatissimo.webp",
  "/images/quote/jeep.webp",
  "/images/quote/peugeot.webp",
];

const images3 = [
  "/images/quote/red_bull.webp",
  "/images/quote/slu_softball.webp",
  "/images/quote/the_daily_star.webp",
];

export default function Quote() {
  return (
    <Section
      id="quote"
      containerProps={{
        bordered: true,
        px: "px-4",
      }}
    >
      <div className="row justify-center">
        <div className="w-full xl:w-7/12 lg:w-9/12">
          <SectionTitle
            subtitle="Brands"
            title="Brands our team has worked with"
            className="mb-50"
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 items-center justify-center">
        <MarqueeRow images={images1} direction="left" className={"-mt-10"} />
        <MarqueeRow images={images2} direction="right" className={"-mt-14"} />
        <MarqueeRow images={images3} direction="left" className={"-mt-14"} />
      </div>
    </Section>
  );
}

const MarqueeRow = ({ images, direction, className }) => {
  const duplicatedImages = [...images, ...images, ...images, ...images];

  return (
    <div
      className={`w-full overflow-hidden relative [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] ${
        className || ""
      }`}
    >
      <div
        className={`flex items-center w-max ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        {duplicatedImages.map((image, index) => (
          <div key={index} className={`flex items-center justify-center`}>
            <img
              width={1000}
              height={1000}
              quality={100}
              src={image || "/placeholder.svg"}
              alt={`${image} ${index + 1}`}
              className="object-contain h-40 w-fit"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
