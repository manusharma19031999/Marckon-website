import { useEffect, useRef, useState } from "react";
import "./Reveal.css";

function Reveal({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Stop observing once revealed
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      },
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${isVisible ? "active" : ""}`}>
      {children}
    </div>
  );
}

export default Reveal;
