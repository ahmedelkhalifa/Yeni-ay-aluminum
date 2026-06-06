import { useEffect } from "react";
import { useLocation } from "react-router-dom";

 export function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
      if (!hash) return;

      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 100);
    }, [hash]);

    return null;
  }