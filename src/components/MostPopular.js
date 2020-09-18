import React, { useEffect, useState, useContext } from "react";
import GoogleFontLoader from "./GoogleFontLoader";
import { SlideContext } from "../context/SlideContext";
import { PreviewContext } from "./../context/PreviewContext";

const MostPopular = (sort = "data") => {
  const [popularFonts, setPopularFonts] = useState([]);
  const { slide } = useContext(SlideContext);
  const { previewText } = useContext(PreviewContext);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_GOOGLE_FONTS;
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${API_KEY}`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Pas de fonts");
      })
      .then((data) => {
        setPopularFonts(data.items.slice(0, 10));
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [sort]);

  return (
    <section className="row mb-5">
      <hr />
      <h2 className="mb-3">
        <span className="badge bg-danger m-3">Les plus populaires</span>
      </h2>
      {popularFonts.map((el) => {
        return (
          <article className="col-lg-6 mb-3" key={el.family}>
            <div className="shadow p-3">
              <GoogleFontLoader
                fonts={[
                  {
                    font: `${el.family}`,
                    weights: [400],
                  },
                ]}
                subsets={[]}
              />
              <h2 className="h6 d-flex align-items-center justify-content-between">
                <span>{el.family}</span>
                <small>{`${el.variants.length} variant(s)`}</small>
              </h2>
              <p>
                <span className="badge bg-dark">{el.category}</span>
              </p>
              <p
                className="sample"
                style={{
                  fontFamily: `${el.family}, monospaced`,
                  fontSize: `${slide}px`,
                }}
              >
                {previewText}
              </p>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="text-danger"
                href={`https://fonts.google.com/specimen/${el.family
                  .split(" ")
                  .join("+")}`}
              >
                Voir sur Google Fonts (ouvre un nouveau tab)
              </a>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default MostPopular;
