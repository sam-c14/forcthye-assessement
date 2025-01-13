// import React from "react";
import BlogGrid from "./BlogGrid";
import Play from "../assets/icons/Play";
import ProgressiveOpacityEffect from "./animations/ProgressiveOpacityEffect";

const Blogs = () => {
  return (
    <div className="xl:px-32 lg:px-28 md:px-14 px-5">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
        <ProgressiveOpacityEffect delay={150} duration={1000}>
          <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-0">
            Read our articles, news and product blog
          </p>
        </ProgressiveOpacityEffect>

        <button className="relative w-fit group">
          <a href="/blog" aria-label="Visit Blog">
            <span className="action-button custom-animate w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full bg-white text-black text-base relative z-10 font-normal group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md">
              <span>Visit Blog</span>
              <Play />
            </span>
          </a>
          <span className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]" />
        </button>
      </div>

      <BlogGrid />

      <div className="flex flex-col gap-y-10 items-center py-28">
        <h2 className="text-4xl text-center">
          <p className="text-[#60a6e7]">Ready to Scale? </p>
          <p>Join successful brands that chose us as their </p>
          <p className="text-[#60a6e7]">growth accelerator</p>
        </h2>

        <button className="relative w-fit group">
          <a href="/blog" aria-label="Visit Blog">
            <span className="action-button custom-animate w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full bg-white text-black text-base relative z-10 font-normal group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md">
              <span>Book a Call</span>
              {/* <Play /> */}
            </span>
          </a>
          <span className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]" />
        </button>
      </div>
    </div>
  );
};

export default Blogs;
