import React from 'react';
import cartoonHead from '../assets/cartoon_head.png';

const SiteIntro = () => (
  <div className="site-intro-banner">
    <div className="site-intro-text">
      <p className="main-line">💻 Behind the Code: My Tools, Setup & Growth</p>
      <p className="tagline">"The setup doesn't make the developer - but it sure helps."</p>
    </div>
    <img src={cartoonHead} alt="Cassy cartoon" className="site-intro-img" />
  </div>
);

export default SiteIntro;