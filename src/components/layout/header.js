import React from 'react';

function Header() {
  return(
    <header style={headerStyle}>
      <h1>Stock Overview</h1>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#ccc',
  padding: '10px',
}

export default Header;