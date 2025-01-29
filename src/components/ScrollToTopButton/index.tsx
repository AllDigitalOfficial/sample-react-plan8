import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ArrowUp } from "react-bootstrap-icons";

const ScrollUpButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: showScroll ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "rgb(25, 35, 55)", // Updated background color
        border: "none",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
      }}
    >
      <ArrowUp size={24} color="#FFFFFF" /> {/* Added white color for better contrast */}
    </Button>
  );
};

export default ScrollUpButton;