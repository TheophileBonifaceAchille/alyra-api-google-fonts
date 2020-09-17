import React, { createContext, useState } from "react";

export const PreviewContext = createContext();

const PreviewContextProvider = ({ children }) => {
  const [previewText, setPreviewText] = useState(
    `Portez ce vieux whisky au juge blond qui fume !? 0123456789`
  );
  return (
    <PreviewContext.Provider value={{ previewText, setPreviewText }}>
      {children}
    </PreviewContext.Provider>
  );
};

export default PreviewContextProvider;
