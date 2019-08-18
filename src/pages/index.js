import React, { useState } from 'react';
import SEO from '../components/Seo';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import './index.scss';

function IndexPage() {
  return (
    <div className="homepage-wrapper">
      <div className="homepage-main-wrapper">
        <div className="homepage-main-section">
          <SEO title="MacyMa" />
          <div className="blog-title">Macy Ma</div>
          <Menu />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default IndexPage;
