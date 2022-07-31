import React from "react";

/**
 * 창닫을 때 한번더 물어보는 경고창을 띄움.
 * @returns 
 */
const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
  };

  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
  };

  return { enablePrevent, disablePrevent };
};

export default usePreventLeave;
