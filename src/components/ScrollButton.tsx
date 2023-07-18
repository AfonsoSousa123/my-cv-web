import { Fab } from "@mui/material";
import { useEffect, useState } from "react";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    // Toggle visibility on scroll event from scroll event listener to prevent scrolling
    window.addEventListener("scroll", toggleVisibility);

    // Scroll to bottom position of button
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

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
