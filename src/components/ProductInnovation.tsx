// import React from "react";
import LayersThree from "../assets/images/layers-three.svg";
import ProgressiveOpacityEffect from "./animations/ProgressiveOpacityEffect";

const ProductInnovation = () => {
  const cards = [
    {
      title: "Experience",
      description:
        "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
      icon: LayersThree,
    },
    {
      title: "Quick Support",
      description:
        "We are your reliable partner, ensuring smooth operations at every stage of your growth.",
      icon: LayersThree,
    },
    {
      title: "Cost Savings",
      description:
        "Maximizing impact, minimizing costs. We provide cost-effective solutions without compromising quality.",
      icon: LayersThree,
    },
  ];

  return (
    <section className="xl:px-28 lg:px-14 md:px-10 px-5 bg-gradient-to-b from-[#030516] to-[#0c2645] via-[#030516] ">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <ProgressiveOpacityEffect delay={150} duration={1000}>
            <h2 className="text-2xl sm:text-[2.2rem] lg:text-[2.6rem] leading-tight sm:leading-tight lg:leading-tight text-accent2">
              Your best call for
              <span className="capitalize">B2B/B2C</span>
              product innovation
            </h2>
          </ProgressiveOpacityEffect>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8 hide-scrollbar">
          {cards.map((card, index) => (
            <div key={index} className="relative border-none">
              <div className="relative z-10 bg-[#030516] min-h-[21rem] p-8 sm:p-10 rounded-2xl hover:shadow-darkGrey">
                <div className="icon-wrapper w-fit bg-[#60A6E7] bg-opacity-60 rounded-md p-2 mb-5">
                  <img
                    src={card.icon}
                    alt={card.title}
                    width="30px"
                    height="30px"
                    loading="lazy"
                  />
                </div>
                <ProgressiveOpacityEffect delay={150} duration={1000}>
                  <h4 className="text-2xl font-medium mb-5">{card.title}</h4>
                </ProgressiveOpacityEffect>
                <ProgressiveOpacityEffect delay={150} duration={1000}>
                  <p className="text-[17.5px] text-darkGrey">
                    {card.description}
                  </p>
                </ProgressiveOpacityEffect>
              </div>

              <div className="border-animation"></div>

              <div className="card-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductInnovation;
