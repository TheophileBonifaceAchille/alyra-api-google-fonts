import React, { useContext } from "react";
import { SlideContext } from "../context/SlideContext";

const RechercheSlide = () => {
  const { setSlide } = useContext(SlideContext);
  const slideHandleChange = (event) => {
    setSlide(event.target.value);
  };
  return (
    <>
      <label htmlFor="range" className="form-label font-weight-bold mb-3">
        La taille de police
      </label>
      <input
        type="range"
        className="form-range"
        id="range"
        onChange={slideHandleChange}
        min="8"
        max="48"
        step="1"
        defaultValue=""

      ></input>
    </>
  );
};

export default RechercheSlide;
