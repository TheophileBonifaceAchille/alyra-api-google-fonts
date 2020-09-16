import React from "react";

//const style = {position: sticky, top: "0px" };

const Recherche = () => {
  return (
    <div className="mb-3">
      <label htmlFor="text" className="form-label font-weight-bold mb-3">
        Tapez votre text
        <textarea
          id="text"
          className="form-control"
          defaultValue="Portez ce vieux whisky au juge blond qui fume !? 0123456789"
          rows="4"
          cols="50"
        ></textarea>
      </label>
    </div>
  );
};

export default Recherche;
