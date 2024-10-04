"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.3 } // Trigger when 20% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-transform duration-1000 ease-out transform ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
