import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "instant" en vez de "smooth" para que no se vea el scroll
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;