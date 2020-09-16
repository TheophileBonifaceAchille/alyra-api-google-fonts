import React from "react";
import Header from "./components/Header";
import Recherche from "./components/Recherche";
import RechercheSlide from "./components/RechercheSlide";
import MostRecent from "./components/MostRecent";
import TrandingFonts from "./components/TrendingFonts";
import MostPopular from "./components/MostPopular";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="container mb-5">
        <div className="container min-vh-100">
          <div className="row my-5 ">
            <div className="col-lg-3">
              <Recherche />
              <RechercheSlide />
            </div>
            <div className="col-lg-9">
              <section className="row mb-5">
                <MostRecent />
                <TrandingFonts />
                <MostPopular />
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
