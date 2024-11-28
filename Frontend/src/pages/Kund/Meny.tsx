// import { useState } from 'react'
import React, { useEffect } from "react";
import axios from 'axios';
import Header from "../../components/button/Header";
import Footer from "../../components/button/Footer";

const Meny: React.FC = () => {
  return (
    <>
      <Header />
      <main style={mainStyle}>
        <img></img>
        <h1>Populärara rätter</h1>
        <section>
          <article>
            <h2>Maträtt 1</h2>
            <h2>100kr</h2>
          </article>
          <article>
            <h2>Maträtt 2</h2>
            <h2>100kr</h2>
          </article>
        </section>
        <h1>MENY</h1>
        <h2>MAIN</h2>
        <main>
          <section>
            <h3>Maträtt 1</h3>
            <h3>_________________</h3>
            <h3>100kr</h3>
            <button>+</button>
          </section>
          <section>
            <h3>Maträtt 2</h3>
            <h3>_________________</h3>
            <h3>100kr</h3>
            <button>+</button>
          </section>
        </main>
      </main>
      <Footer />
    </>
  );
};

const mainStyle: React.CSSProperties = {
  padding: "20px",
  textAlign: "center",
};

export default Meny;
