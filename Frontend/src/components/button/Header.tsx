import React from "react";

const Header: React.FC = () => {
    return (
      <header style={headerStyle}>
        <h1>Taotao</h1>
        <nav>
          <ul style={navStyle}>
            <li><a href="/">MENY</a></li>
            <li><a href="/om-oss">OM OSS</a></li>
            <li><a href="/kontakt">KONTAKT</a></li>
            <button><a href="/login">LOGGA IN</a></button>
            <li><a href="/varukorg">VARUKORG</a></li>

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