import { FC, useState, useEffect } from "react";
import ProgressiveOpacityEffect from "./animations/ProgressiveOpacityEffect";

interface TestimonialsCardProps {
  company: string;
  testimony: string;
  testifier: string;
  img: any;
  activeIndex: number;
}

const TestimonialCard: FC<TestimonialsCardProps> = ({
  company,
  img,
  testifier,
  testimony,
  activeIndex,
}) => {
  useEffect(() => {
    handleNextSlide();
  }, [activeIndex]);

  const [trigger, setTrigger] = useState(false);

  const handleNextSlide = () => {
    setTrigger(true);
    setTimeout(() => setTrigger(false), 100);
  };

  const getLeft = () => {
    switch (activeIndex) {
      case 0:
        return "0%";
      case 1:
        return "20%";
      case 2:
        return "40%";
      case 3:
        return "30%";
      case 4:
        return "50%";
    }
  };

  return (
    <div
      className="mt-5 w-full md:w-[70%] lg:w-[50%] rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 bg-[#0C2645] lg:relative"
      style={{ left: getLeft() }}
    >
      <div className="sm:basis-[58%] pr-3">
        <div>
          <ProgressiveOpacityEffect
            delay={150}
            duration={1000}
            triggerAnimation={trigger}
          >
            <h4 className="text-base font-bold mb-4">{company}</h4>
          </ProgressiveOpacityEffect>
        </div>

        {/* Testimonial Content */}
        <div>
          <ProgressiveOpacityEffect delay={150} duration={1000}>
            <p className="text-base leading-7 mb-3">{testimony}</p>
          </ProgressiveOpacityEffect>
        </div>

        <div>
          <ProgressiveOpacityEffect delay={150} duration={1000}>
            <p className="text-[15px] font-semibold mb-4">{testifier}</p>
          </ProgressiveOpacityEffect>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full h-[24rem] sm:w-auto sm:h-auto sm:basis-[42%] relative object-top mt-3 sm:mt-0">
        <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-xl"></div>
        <img
          alt="ceo"
          loading="lazy"
          decoding="async"
          className="rounded-xl relative object-top"
          src={img}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: 0,
            objectFit: "cover",
            color: "transparent",
          }}
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
