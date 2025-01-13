import Play from "../assets/icons/Play";
import TypingEffect from "./animations/TypingEffect";
import ProgressiveOpacityEffect from "./animations/ProgressiveOpacityEffect";

const HeroHeader = () => {
  return (
    <div className="md:min-h-[70dvh] bg-[url('https://forcythe.com/images/header-background.svg')] bg-no-repeat bg-top">
      <div className="xl:px-28 lg:px-14 md:px-10 px-5 mt-40">
        <div className="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">
          <div className="max-w-[56rem]">
            <div className="min-h-[180px]">
              <TypingEffect
                children={
                  <h1 className="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7">
                    We build <span className="text-accent">products</span> that
                    shape a better future
                  </h1>
                }
              />
            </div>
            <div className="mb-8 max-w-3xl">
              <div>
                <ProgressiveOpacityEffect delay={150} duration={800}>
                  <p className="text-[#aea9b1] text-base md:text-lg mb-8 leading-10 font-normal">
                    <span>
                      We’re the architects of digital excellence across
                      industries. We redefine business with cutting-edge digital
                      strategies that invoke sector-wide transformation.
                    </span>
                  </p>
                </ProgressiveOpacityEffect>
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
