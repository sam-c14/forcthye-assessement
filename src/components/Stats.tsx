import { useEffect, useRef, useState } from "react";

const statsData = [
  { count: 50, label: "Clients" },
  { count: 120, label: "Projects" },
  { count: 10, label: "Team Leads" },
  { count: 10, label: "Glorious Years" },
];

const Stats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const statsRef = useRef<HTMLDivElement>(null);

  const isInView = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const animateCount = () => {
    if (!statsRef.current || hasAnimated) return;
    if (isInView(statsRef.current)) {
      setHasAnimated(true);
      statsData.forEach((item, index) => {
        const interval = setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < item.count) {
              newCounts[index] += 1;
            } else {
              clearInterval(interval);
            }
            return newCounts;
          });
        }, 30);
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", animateCount);
    return () => {
      window.removeEventListener("scroll", animateCount);
    };
  }, [hasAnimated]);

  return (
    <div
      className="flex justify-evenly sm:justify-between items-center gap-3"
      ref={statsRef}
    >
      {statsData.map((stat, index) => (
        <div key={stat.label} className="flex flex-col gap-3 text-left w-fit">
          <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-light">
            {counts[index]}+
          </div>
          <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
