import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(16); // Default offset from the bottom

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const adjustButtonPosition = () => {
      const footer = document.querySelector("footer"); // Adjust based on your footer tag
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (footerRect.top < windowHeight) {
          setBottomOffset(windowHeight - footerRect.top + 16); // Adjust offset dynamically
        } else {
          setBottomOffset(16); // Default offset
        }
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("scroll", adjustButtonPosition);
    window.addEventListener("resize", adjustButtonPosition);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("scroll", adjustButtonPosition);
      window.removeEventListener("resize", adjustButtonPosition);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{ bottom: `${bottomOffset}px` }} // Dynamically adjust bottom position
        className="fixed right-4 bg-teal-600 bg-opacity-50 text-white w-12 h-12 rounded-full shadow-lg hover:bg-opacity-100 hover:shadow-xl focus:outline-none font-bold text-xl flex items-center justify-center transition-all duration-300"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;