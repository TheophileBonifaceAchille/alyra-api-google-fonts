import React from "react";
import {FilterContext} from "./../context/filter"

const MostRecent = () => {
  return (
    <>
          <h2 className="mb-3">
              <span className="badge bg-danger m-3">Les plus populaires</span>
          </h2>
          <article className="col-lg-6 mb-3">
              <div className="shadow p-3">
                  <h2 className="h6 d-flex aling-items-center justify-content-betwen">
                      <span></span>
                      <small></small>
                  </h2>
                  <p>
                      <span className="badge bg-dark"></span>
                  </p>
                  <p className="sample" /*style="font-family: Syne; font-size: 24px;"*/>
                  </p>
                  <a
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-danger"
                      href="#"
                  >
                  </a>
              </div>
          </article>
    </>
  );
};

export default MostRecent;
