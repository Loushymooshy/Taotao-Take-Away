import React from "react";

const Header: React.FC = () => {
    return (
      <header style={headerStyle}>
        <h1>Taotao Take-Away</h1>
        <nav>
          <ul style={navStyle}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  const headerStyle: React.CSSProperties = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  
  const navStyle: React.CSSProperties = {
    listStyleType: 'none',
    display: 'flex',
    gap: '15px',
    margin: 0,
    padding: 0,
  };
  
  export default Header;