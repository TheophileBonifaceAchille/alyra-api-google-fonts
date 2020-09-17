import React, { useEffect, useState, useContext } from "react";
import GoogleFontLoader from "./GoogleFontLoader";
import { SizeContext } from "./../context/SizeContext";
import { PreviewContext } from "./../context/PreviewContext";


const MostRecent = () => {
  const [recentFonts, setrecentFonts] = useState([]);
  const { size } = useContext(SizeContext);
  const { previewText } = useContext(PreviewContext);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_GOOGLE_FONTS;
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?sort=date&key=${API_KEY}`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Pas de fonts");
      })
      .then((data) => {
        setrecentFonts(data.items.slice(0, 10));
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  console.log(recentFonts);

  return (
    <section className="row mb-5">
      <hr />
      <h2 className="mb-3">
        <span className="badge bg-danger m-3">Les plus récents</span>
      </h2>
      {recentFonts.map((el) => {
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
                  fontSize: `${size}px`,
                }}
              >
                {previewText}
              </p>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="text-danger"
                href={`https://fonts.google.com/specimen/${el.family}`}
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

export default MostRecent;
