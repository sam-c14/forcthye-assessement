import { useEffect, useRef } from "react";
import { navItems } from "../data/navbar";

const MobileNav = ({ onClose }: { onClose: () => void }) => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={navRef}
      className="flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone z-[999999999] bg-primaryBackground w-60 rounded-[2rem] fixed md:hidden right-5 top-28"
    >
      <div className="text-white z-10 bg-transparent rounded-[inherit] w-full">
        <div
          className="w-full p-5 py-8 rounded-[2rem]"
          style={{
            background:
              "linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgb(7, 22, 38) 85%)",
          }}
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href} className="w-full py-2.5">
                <a className="w-full text-base py-3" href={item.href}>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(17.4661% 43.7011% at 83.7822% 36.3044%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      ></div>

      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]"></div>
    </div>
  );
};

export default MobileNav;
