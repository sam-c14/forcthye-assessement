import React, { useEffect, useRef, useState } from "react";

interface ProgressiveOpacityEffectProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  triggerAnimation?: boolean | number;
}

const ProgressiveOpacityEffect: React.FC<ProgressiveOpacityEffectProps> = ({
  children,
  delay = 150,
  duration = 1000,
  triggerAnimation = false,
}) => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  const resetAnimation = () => {
    if (textRef.current) {
      const words = Array.from(textRef.current.querySelectorAll("span"));
      words.forEach((word) => {
        word.style.opacity = "0";
        word.style.transition = "none";
      });
    }
  };

  useEffect(() => {
    resetAnimation();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isInView || triggerAnimation) {
      const timeoutId = setTimeout(() => {
        if (textRef.current) {
          const words = Array.from(textRef.current.querySelectorAll("span"));
          words.forEach((word, index) => {
            word.style.transition = `opacity ${duration}ms ease-in-out ${
              index * delay
            }ms`;
            setTimeout(() => {
              word.style.opacity = "1";
            }, index * delay);
          });
        }
      }, 100);

      // Cleanup timeout
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isInView, triggerAnimation, delay, duration]);

  const wrapTextInSpans = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === "string") {
      return node.split(" ").map((word, index) => (
        <span key={index} className="inline-block px-1">
          {word}{" "}
        </span>
      ));
    } else if (React.isValidElement(node)) {
      return React.cloneElement(
        node,
        {},
        React.Children.map(node.props.children, wrapTextInSpans)
      );
    }
    return node;
  };

  return (
    <div ref={textRef} className="overflow-hidden">
      {wrapTextInSpans(children)}
    </div>
  );
};

export default ProgressiveOpacityEffect;
