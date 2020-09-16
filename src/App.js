import React from "react";
import Header from "./components/Header";
import Recherche from "./components/Recherche";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Recherche />
      </main>
      <Footer />
    </>
  );
}

export default App;
