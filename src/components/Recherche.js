import React from "react";

const style = { position: sticky, top: "0px" };

const Recherche = () => {
  return (
    <div style={"position: sticky, top: 0px"}>
      <div class="mb-3">
        <label for="text" class="form-label font-weight-bold mb-3">
          Tapez votre text
        </label>
        <textarea id="text" class="form-control">
          Portez ce vieux whisky au juge blond qui fume !? 0123456789
        </textarea>
      </div>
    </div>
  );
};

export default Recherche;
