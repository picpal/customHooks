import { useState, useEffect } from "react";

// sessionStorage에 해당 키값으로 저장된 값이 있는지 확인. 없으면 initValue 반환
const getSavedValue = (key, initValue) => {
  // const savedValue = sessionStorage.getItem(key);
  const savedValue = JSON.parse(sessionStorage.getItem(key));

  if (savedValue) return savedValue;

  if (initValue instanceof Function) {
    return initValue();
  }
  return initValue;
};

// 상태와 세션스토리지를 동일한 값으로 유지하기 위한 hook
const useSessionStorage = (key, initValue) => {
  // 함수형으로 호출하는 이유는 sessionStorage는 불러오는데 매우 느리다.
  // 그래서 초기 랜더링때 한번만 불러오고, 다른 랜더링에서는 상태값을 이용하기 위해서 사용함
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initValue);
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useSessionStorage;
