import React, { useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';

// Global Components
import { LegalModal } from './components/LegalModal';
import { WhatsAppIcon } from './components/Icons';
import './App.css';

// Layout Sections
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Editorial } from './components/sections/Editorial';
import { Services } from './components/sections/Services';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Booking } from './components/sections/Booking';
import { Footer } from './components/sections/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 250]);

  const whatsappMessage = encodeURIComponent("Hello, I came across your couple counselling services in Chennai. I would like to know more about booking a session. Could you please share the details and available timings?");

  // Scroll Listener for Navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Scroll Utility
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Background Ambient Orbs */}
      <div className="ambient-orb orb-gold"></div>
      <div className="ambient-orb orb-green"></div>

      <Navbar isScrolled={isScrolled} scrollTo={scrollTo} />
      
      <Hero heroY={heroY} scrollTo={scrollTo} />
      <Editorial />
      <Services />
      <Testimonials />
      <FAQ />
      <Booking />
      
      <Footer scrollTo={scrollTo} setActiveModal={setActiveModal} />

      {/* Floating WhatsApp Button */}
      <a href={`https://wa.me/919840022830?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="whatsapp-simple">
        <WhatsAppIcon />
      </a>

      {/* Global Legal Modal */}
      <LegalModal activeModal={activeModal} setActiveModal={setActiveModal} />
    </div>
  );
}

export default App;