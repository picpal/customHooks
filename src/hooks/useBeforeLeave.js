import { useEffect } from "react";

// 마우스 벗어남 감지
const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    // 위로 벗어남 감지 
    if(event.clientY <= 0){
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);

  if (typeof onBefore !== "function") {
    return;
  }
};

export default useBeforeLeave;
