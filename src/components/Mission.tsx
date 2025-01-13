import { useState } from "react";
import Play from "../assets/icons/Play";
import { missions, missionDetails } from "../data/mission";
import ProgressiveOpacityEffect from "./animations/ProgressiveOpacityEffect";

const Mission = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="xl:px-40 lg:px-28 md:px-14 px-5">
      <div className=" py-20">
        <div className="mb-12 xl:mb-0 max-w-[45rem]">
          <div>
            <ProgressiveOpacityEffect delay={150} duration={1000}>
              <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem]">
                <div>
                  From <span className="text-[#60a6e7] capitalize">Spark </span>
                  to
                  <span className="text-[#60a6e7] capitalize">
                    {" "}
                    Spotlight:{" "}
                  </span>
                  we take you every step of the way to success.
                </div>
              </p>
            </ProgressiveOpacityEffect>
          </div>
        </div>
      </div>

      {/* Feature */}
      <div className="flex lg:items-end flex-col md:flex-row">
        <div className="flex mb-8 md:mb-0 sm:flex-nowrap flex-wrap">
          <div className="sm:w-1/2 w-full md:pr-10">
            <div className="border-2 border-accent2 mb-12 rounded-full grid gap-1 grid-cols-4 p-3">
              {missions.map((mission, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-sm font-light cursor-pointer transition-all duration-300 ${
                    activeIndex !== index
                      ? " text-white"
                      : "bg-accent2 text-black"
                  }`}
                >
                  {mission}
                </button>
              ))}
            </div>
            <div>
              <ProgressiveOpacityEffect
                delay={150}
                duration={1000}
                triggerAnimation={activeIndex}
              >
                <p className="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12">
                  {missionDetails[activeIndex].title}
                </p>
              </ProgressiveOpacityEffect>
            </div>
            <div>
              <ProgressiveOpacityEffect
                delay={150}
                duration={1000}
                triggerAnimation={activeIndex}
              >
                <p className="text-darkGrey text-base md:text-lg mb-8 leading-7">
                  {missionDetails[activeIndex].details}
                </p>
              </ProgressiveOpacityEffect>
            </div>
            <div className="mb-5">
              <div className="relative w-fit group">
                <button
                  data-cal-namespace=""
                  data-cal-link="forcythe/discovery"
                  data-cal-config='{"layout":"month_view"}'
                  className="action-button custom-animate w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full bg-white text-black text-base relative z-10 font-normal group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md"
                >
                  <span> Book a Call</span>

                  <Play />
                </button>
                <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
              </div>
            </div>
          </div>

          <div className="sm:w-1/2 w-full relative flex justify-start md:justify-end mt-6 md:mt-0">
            <img
              alt="plan-img"
              loading="lazy"
              width="200"
              height="200"
              decoding="async"
              data-nimg="1"
              className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]"
              src={missionDetails[activeIndex].src}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
