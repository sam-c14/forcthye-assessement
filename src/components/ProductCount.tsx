import React from "react";
import Stats from "./Stats";
import ProgressiveOpacityEffect from "./animations/ProgressiveOpacityEffect";

const ProductCount: React.FC = () => {
  return (
    <div className="max-w-[52rem] mx-auto bg-[url(https://forcythe.com/images/arc-L.svg)] lg:bg-[https://forcythe.com/images/arc-L.svg)] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
      <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
        <div className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto">
          <div>
            <ProgressiveOpacityEffect delay={150} duration={1000}>
              <p className="text-xl md:text-2xl lg:text-3xl font-light">
                <span>
                  We build solutions that help
                  <span className="text-[#60a6e7]"> businesses </span>
                  of all sizes to
                  <span className="text-[#60a6e7]"> scale</span>
                </span>
              </p>
            </ProgressiveOpacityEffect>
          </div>
        </div>
        <Stats />
      </div>
    </div>
  );
};

export default ProductCount;
