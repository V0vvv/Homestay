import React from 'react';
import logo from './f.svg'; // your local SVG file

const MenuBar = () => {
  const styles = {
    menuBar: {
      position: 'fixed',
      top: 0,
      left: 0,       // ensure it's above all others
      height: '10vh',          // responsive height
      width: '100vw',          // full screen width
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#1c1c1c',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '0 20px',
      boxSizing: 'border-box',
      overflow: 'visible',
    },
    logoSlot: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    logoImage: {
      height: '10vh',
      width: '10vh',
      objectFit: 'contain',
    },

    menuItems: {
      display: 'flex',
      gap: '30px',
    },
    menuItem: {
      cursor: 'pointer',
    },
  };

  return React.createElement(
    'div',
    { style: styles.menuBar },
    React.createElement(
      'div',
      { style: styles.logoSlot },
      React.createElement('img', { src: logo, alt: 'Logo', style: styles.logoImage }),
      React.createElement('span', null, 'Homestay') // optional label
    ),
    React.createElement(
      'div',
      { style: styles.menuItems },
      ['Home', 'About', 'Services', 'Contact'].map((item, index) =>
        React.createElement('span', { key: index, style: styles.menuItem }, item)
      )
    )
  );
};

export default MenuBar;
