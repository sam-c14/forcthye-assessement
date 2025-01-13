import { FC, ReactNode, useEffect, useRef, useState } from "react";

interface SlideInFromLeftProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

const SlideInFromLeft: FC<SlideInFromLeftProps> = ({
  children,
  className = "",
  duration = 1000,
  delay = 0,
}) => {
  const [inView, setInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${className} transition-opacity transform ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`}
      style={{
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default SlideInFromLeft;
