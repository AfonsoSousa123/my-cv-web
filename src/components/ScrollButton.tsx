import { Fab } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const prevScrollPos = useRef(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      const currentScrollPos = window.pageYOffset;

      // Button is displayed after scrolling for 500 pixels
      if (currentScrollPos > 500 && currentScrollPos > prevScrollPos.current) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <Fab
          onClick={scrollToTop}
          className="btn-scroll btn-hover-scale"
          size="large"
          aria-label="scroll back to top"
        >
          <i className={"bi-arrow-up fs-3"}></i>
        </Fab>
      )}
    </>
  );
};
export default ScrollButton;
