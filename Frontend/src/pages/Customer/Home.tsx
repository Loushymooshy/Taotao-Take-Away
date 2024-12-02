// import { useState } from 'react'
// import React, { useEffect } from "react";
// import axios from 'axios';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <img></img>
        <h1>Popular dishes</h1>
        <section>
          <article>
            <h2>Item 1</h2>
            <h2>100kr</h2>
          </article>
          <article>
            <h2>Item 2</h2>
            <h2>100kr</h2>
          </article>
        </section>
        <h1>MENU</h1>
        <h2>MAIN</h2>
        <main>
          <section>
            <h3>Item 1</h3>
            <h3>_________________</h3>
            <h3>100kr</h3>
            <button>+</button>
          </section>
          <section>
            <h3>Item 2</h3>
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

export default Home;
