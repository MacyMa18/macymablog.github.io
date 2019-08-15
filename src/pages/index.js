import React, { useState } from 'react';
import SEO from '../components/Seo';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import './index.scss';

function IndexPage() {
  return (
    <div className="homepage-wrapper">
      <div className="homepage-main-wrapper">
        <SEO title="MacyMa Blog" />
        <div className="blog-title">Macy Ma</div>
        <Menu />
      </div>
    </div>
  );
}

export default IndexPage;
