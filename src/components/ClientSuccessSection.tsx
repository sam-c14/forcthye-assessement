import ProgressiveOpacityEffect from "./animations/ProgressiveOpacityEffect";

const ClientSuccessSection = () => {
  return (
    <div className="py-10">
      <div className="min-h-[60px]">
        <div className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] lg:text-[2.6rem] mb-12 max-w-[90%] mx-auto text-center">
          <ProgressiveOpacityEffect delay={150} duration={1000}>
            <div>
              Success in
              <span className="text-[#60a6e7] capitalize">Motion</span>
              <span> – </span>
              <span className="capitalize">Our</span>
              clients’ journey
            </div>
          </ProgressiveOpacityEffect>
        </div>
      </div>
    </div>
  );
};

export default ClientSuccessSection;
