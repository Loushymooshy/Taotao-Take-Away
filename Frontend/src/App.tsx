// import { useState } from 'react'
import React, { useEffect } from 'react';
import axios from 'axios';
import Header from './components/button/Header';
import Footer from './components/button/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main style={mainStyle}>
        <h1>Welcome to Taotao Take-Away</h1>
        <p>Explore our menu and order your favorite dishes!</p>
      </main>
      <Footer />
    </>
  );
};

const mainStyle: React.CSSProperties = {
  padding: '20px',
  textAlign: 'center',
};

export default App;