import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from '../Icons';

export const Navbar = ({ isScrolled, scrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Link Click Navigation Handler
  const handleNavClick = (section) => {
    scrollTo(section);
    setIsOpen(false); // Closes the menu automatically after clicking a link
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        
        <div className="logo-container" onClick={() => handleNavClick('hero')}>
          <BrandLogo className="logo-img" />
          <span className="logo-text">Happy MindCare</span>
        </div>
        
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {['about', 'services', 'testimonials', 'faq'].map(link => (
            <button key={link} onClick={() => handleNavClick(link)}>{link.toUpperCase()}</button>
          ))}
          <button className="nav-cta hover-sweep-btn" onClick={() => handleNavClick('booking')}>Book Session</button>
        </div>

        {/* Hamburger Toggle Button (Visible only on mobile) */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        
      </div>
    </nav>
  );
};