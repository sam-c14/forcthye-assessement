import React from "react";
import Stac1 from "../assets/images/stac-1.svg";
import Activity from "../assets/images/activity-1.svg";
import AfricaFund from "../assets/images/africaFund-1.svg";
import Phone1 from "../assets/images/phone-1.svg";
import ExecPro from "../assets/images/exec-pro-1.svg";
import Starks from "../assets/images/starks-1.svg";

const HeroCarousel = () => {
  const carouselImages = [Stac1, Activity, AfricaFund, Phone1, ExecPro, Starks];

  return (
    <div
      className="flex flex-col gap-5"
      style={{
        background:
          "linear-gradient(0deg, rgba(3, 5, 22, 0) 20%, rgb(3, 5, 22) 80%)",
      }}
    >
      {/* Top Carousel: Right to Left */}
      <div className="rfm-marquee-container">
        <div className="rfm-marquee right-to-left">
          {carouselImages.concat(carouselImages).map((src, index) => (
            <div
              key={`top-${index}`}
              className="relative w-auto h-[340px] shrink-0"
            >
              <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
              <img
                alt={`project-image-${index}`}
                src={src}
                className="overflow-hidden w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Carousel: Left to Right */}
      <div className="rfm-marquee-container">
        <div className="rfm-marquee left-to-right">
          {carouselImages.concat(carouselImages).map((src, index) => (
            <div
              key={`bottom-${index}`}
              className="relative w-auto h-[340px] shrink-0"
            >
              <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
              <img
                alt={`project-image-${index}`}
                src={src}
                className="overflow-hidden w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
