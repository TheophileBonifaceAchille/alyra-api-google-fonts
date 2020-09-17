import React from "react";
import Header from "./components/Header";
import Recherche from "./components/Recherche";
import RechercheSlide from "./components/RechercheSlide";
import MostRecent from "./components/MostRecent";
import TrandingFonts from "./components/TrendingFonts";
import MostPopular from "./components/MostPopular";
import Footer from "./components/Footer";
import SlideContextProvider from "./context/SlideContext";
import ModeContextProvider from "./context/PreviewContext";

function App() {
  return (
    <>
      <Header />
      <main className="container mb-5">
        <div className="min-vh-100">
          <div className="row my-5 ">
            <SlideContextProvider>
              <ModeContextProvider>
                <div className="col-lg-3">
                  <div style={{ position: "sticky", top: 0 }}>
                    <Recherche />
                    <RechercheSlide />
                  </div>
                </div>
                <div className="col-lg-9">
                  <MostRecent />
                  <TrandingFonts />
                  <MostPopular />
                </div>
              </ModeContextProvider>
            </SlideContextProvider>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
