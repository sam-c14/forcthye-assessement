import { useState, useEffect } from "react";
import { logos, testimonials } from "../data/testimonials";
import TestimonialCard from "./TestimonialCard";
import ProgressiveOpacityEffect from "./animations/ProgressiveOpacityEffect";

const Testimonials = () => {
  const [activeTestimonyIndex, setActiveTestimonyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonyIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, [activeTestimonyIndex]);

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

      <div className="xl:px-40 lg:px-28 md:px-14 px-5">
        <div className="w-full overflow-x-scroll hide-scrollbar">
          <div className="w-full border-[1px] border-[#06438C] rounded-full grid grid-cols-5 min-w-[750px]">
            {logos.map((logo, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonyIndex(index)}
                className={`w-full p-[1.1rem] cursor-pointer transition-all duration-300 ${
                  index === 0 ? "rounded-s-full" : ""
                } ${index === logos.length - 1 ? "rounded-e-full" : ""} ${
                  logo.extraClass || ""
                } ${index === activeTestimonyIndex && "bg-[#0C2645] text-[]"}`}
              >
                <span className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
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
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Card */}
        <div>
          <TestimonialCard
            company={testimonials[activeTestimonyIndex].company}
            img={testimonials[activeTestimonyIndex].src}
            testifier={testimonials[activeTestimonyIndex].testifier}
            testimony={testimonials[activeTestimonyIndex].testimony}
            activeIndex={activeTestimonyIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
