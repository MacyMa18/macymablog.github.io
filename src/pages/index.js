import React, { useState } from 'react';
import SEO from '../components/Seo';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import '../style/style.scss';
import './index.scss';

function IndexPage() {
  return (
    <div className="homepage-wrapper">
      <SEO title="MacyMa Blog" />
      <Menu />
      <div className="homepage-main-section">
        <img
          className="homepage-main-image"
          src="https://assets.sapi.work/apps/Macy-Blog/IMG_3413.jpg"
          alt="macyma-blog-img"
        />
      </div>
      <Footer />
    </div>
  );
}

export default IndexPage;
