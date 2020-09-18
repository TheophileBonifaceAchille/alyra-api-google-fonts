import React, { useContext } from "react";
import { PreviewContext } from "../context/PreviewContext";


//const style = {position: sticky, top: "0px" };

const Recherche = () => {
  const { previewText, setPreviewText } = useContext(PreviewContext);
  const textHandleChange = (event) => {
    setPreviewText(event.target.value)
  };
  

  return (
    <div className="mb-3">
      <label htmlFor="text" className="form-label font-weight-bold mb-3">
        Tapez votre text
        <textarea
          id="text"
          className="form-control"
          defaultValue={previewText}
          rows="4"
          cols="50"
          onChange={textHandleChange}
        ></textarea>
      </label>
    </div>
  );
};

export default Recherche;
