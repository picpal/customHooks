import React, { useState } from "react";

const useTabs = (initTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default useTabs;
