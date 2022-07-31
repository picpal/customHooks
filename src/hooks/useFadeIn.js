import { useRef, useEffect } from "react";

// 설정한 태그에 fadein 효과 적용
const useFadeIn = (duration = 1 , delay = 0) => {
  const elementRef = useRef();

  useEffect(() => {
    if (elementRef.current) {
      const { current } = elementRef;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, [duration,delay]);

  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }

  return { ref: elementRef, style: { opacity: 0 } };
};

export default useFadeIn;
