import React from 'react';
import { Link } from 'gatsby';
import '../style/style.scss';
import './menu.scss';

function Menu() {
  return (
    <div className="menu-wrapper">
      <div className="menu-item">
        <Link to="/comingsoon">Photography</Link>
      </div>
      <div className="menu-item">
        <Link to="/comingsoon">About Me</Link>
      </div>
      <div className="menu-item">
        <a href="http://cv.macyma.me/">CV</a>
      </div>
    </div>
  );
}

export default Menu;
