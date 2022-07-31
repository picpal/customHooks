import React, { useState } from "react";

/**
 * 검증 기능을 가진 input hook
 */
const useInput = (initValue, validator) => {
  const [value, setValue] = useState(initValue);

  const onChange = (event) => {
    console.log(event.target);
    const {
      target: { value },
    } = event;
    
    let willUpdate = true;
    if(typeof validator === "function"){
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

export default useInput;
