import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import MobileNav from "./MobileNav";
import { navItems } from "../data/navbar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`xl:px-28 lg:px-14 md:px-10 px-5 navbar w-full fixed top-0 left-0 py-[1.8rem] flex justify-between gap-10 items-center z-30 ${
        isScrolled ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="flex items-center gap-20">
        <a href="/">
          <img
            alt="Forcythe logo"
            fetchPriority="high"
            width="150"
            height="10"
            decoding="async"
            className="w-28 sm:w-32 md:w-auto"
            src={Logo}
            style={{ color: "transparent" }}
          />
        </a>
        <div className="hidden md:flex items-center gap-4 text-base">
          {navItems.map((item) => (
            <a href={item.href}>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <div className="relative w-fit group">
          <button
            data-cal-namespace=""
            data-cal-link="forcythe/discovery"
            data-cal-config='{"layout":"month_view"}'
            className="action-button custom-animate w-w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full 
                     bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md"
          >
            Book a Call
          </button>
          <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
        </div>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="bg-white bg-opacity-10 rounded-md p-3 cursor-pointer"
        >
          <HiOutlineMenuAlt2 />
        </button>
        {isMobileNavOpen && (
          <MobileNav onClose={() => setIsMobileNavOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
