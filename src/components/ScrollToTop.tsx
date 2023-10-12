import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "./icon.css";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollListener = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <div className="flex justify-center items-center mb-4">
      <div
        className={`scroll-to-top ${isVisible ? "visible" : "hidden"}`}
        onClick={scrollToTop}
      >
        <FaArrowAltCircleUp className="icon" />
        <span>Scroll To Top</span>
      </div>
    </div>
  );
};

export default ScrollToTop;
