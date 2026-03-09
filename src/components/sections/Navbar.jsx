import React from 'react';
import { BrandLogo } from '../Icons';

export const Navbar = ({ isScrolled, scrollTo }) => (
  <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
    <div className="nav-content">
      <div className="logo-container" onClick={() => scrollTo('hero')}>
        <BrandLogo className="logo-img" />
        <span className="logo-text">Happy MindCare</span>
      </div>
      <div className="nav-links">
        {['about', 'services', 'testimonials', 'faq'].map(link => (
          <button key={link} onClick={() => scrollTo(link)}>{link.toUpperCase()}</button>
        ))}
        <button className="nav-cta hover-sweep-btn" onClick={() => scrollTo('booking')}>Book Session</button>
      </div>
    </div>
  </nav>
);