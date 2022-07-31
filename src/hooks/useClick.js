import React, { useRef, useEffect } from "react";

const useClick = (onClick) => {
  const elementRef = useRef();

  useEffect(() => {
    if(typeof onClick != "function"){
      return;
    }

    if (elementRef.current) {
      elementRef.current.addEventListener("click",onClick);
    }

    return () => {
      if (elementRef.current) {
        elementRef.current.removeEventListener("click",onClick);
      }
    };
  }, []);

  return elementRef;
};

export default useClick;
