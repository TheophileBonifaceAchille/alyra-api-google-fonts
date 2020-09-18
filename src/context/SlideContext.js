import React, { createContext, useState } from "react";


export const SlideContext = createContext();

const SlideContextProvider = ({ children }) => {
  const [slide, setSlide] = useState(20);
  return (
    <SlideContext.Provider value={{ slide, setSlide }}>
      {children}
    </SlideContext.Provider>
  );
};

export default SlideContextProvider;
