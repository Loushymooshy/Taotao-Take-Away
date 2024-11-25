import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2024 Taotao Take-Away. All rights reserved.</p>
      <p>Follow us on <a href="#">Social Media</a></p>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  backgroundColor: '#222',
  color: '#fff',
  textAlign: 'center',
  padding: '10px 0',
  marginTop: '20px',
};

export default Footer;
