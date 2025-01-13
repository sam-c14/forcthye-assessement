// import React from 'react'
import StarksLogo from "../assets/images/starks.svg";
import ExecutiveProsLogo from "../assets/images/executivepros-logo.svg";
import StacaiLogo from "../assets/images/stacai.svg";
import IwariaLogo from "../assets/images/iwaria.svg";
import Beaupreneur from "../assets/images/beaupreneur.svg";
import ProgressiveOpacityEffect from "./animations/ProgressiveOpacityEffect";

const DiscoverCrew = () => {
  const logos = [
    {
      alt: "Starks Associate",
      src: StarksLogo,
      className: "w-full",
      label: "Starks",
    },
    {
      alt: "ExecutivePros",
      src: ExecutiveProsLogo,
      className: "w-full",
      label: null,
    },
    {
      alt: "Stac AI",
      src: StacaiLogo,
      className: "w-full",
      label: null,
      extraClass: "bg-accent3",
    },
    {
      alt: "Iwaria",
      src: IwariaLogo,
      className: "w-20",
      label: null,
    },
    {
      alt: "Beaupreneur",
      src: Beaupreneur,
      className: "w-36",
      label: null,
    },
  ];

  return (
    <div>
      <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mb-12 max-w-4xl mx-auto text-center mt-5">
        <ProgressiveOpacityEffect delay={150} duration={1000}>
          <p>
            Discover the transformative stories
            <span className="opacity-1 text-[#60a6e7]"> transformative </span>
            of startups that scaled new heights with us
          </p>
        </ProgressiveOpacityEffect>
      </h2>

      <div className="px-40">
        <div className="w-full overflow-x-scroll hide-scrollbar">
          <div className="w-full border-[1px] border-[#06438C] rounded-full grid grid-cols-5 min-w-[750px]">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`w-full p-[1.1rem] cursor-pointer transition-all duration-300 ${
                  index === 0 ? "rounded-s-full" : ""
                } ${index === logos.length - 1 ? "rounded-e-full" : ""} ${
                  logo.extraClass || ""
                }`}
              >
                <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                  <img
                    alt={logo.alt}
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    src={logo.src}
                    className={logo.className}
                    style={{ color: "transparent" }}
                  />
                  {logo.label && <span>{logo.label}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCrew;
