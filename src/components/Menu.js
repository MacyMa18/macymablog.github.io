import React from 'react';
import '../style/style.scss';
import './menu.scss';

function Menu() {
  return (
    <div className="menu-wrapper">
      <div className="blog-title">Macy Ma</div>
      <div className="menu-item-wrapper">
        <div className="menu-item">Photography</div>
        <div className="menu-item">About Me</div>
        <div className="menu-item">CV</div>
      </div>
    </div>
  );
}

export default Menu;
