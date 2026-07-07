import { useEffect, useRef, forwardRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  ({ children, className = "", delay = 0 }, _forwardedRef) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add("revealed"), delay);
            observer.unobserve(el);
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, [delay]);

    return (
      <div ref={ref} className={`scroll-reveal ${className}`}>
        {children}
      </div>
    );
  }
);

ScrollReveal.displayName = "ScrollReveal";

export default ScrollReveal;
