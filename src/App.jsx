import React, { useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import './App.css';

// Section Components
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Editorial } from './components/sections/Editorial';
import { Services } from './components/sections/Services';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Booking } from './components/sections/Booking';
import { Footer } from './components/sections/Footer';

// Utility / Modals
import { LegalModal } from './components/LegalModal';
import { WhatsAppIcon } from './components/Icons';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState(null); 
  
  // Default WhatsApp Message
  const message = encodeURIComponent(
    "Hello, I came across your mental health and therapy clinic in Chennai. I would like to know more about booking a counseling session. Could you please share the details and available timings?"
  );

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 250]);

  // Navbar Scroll Listener
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Scroll Controller
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
      
      <Hero scrollTo={scrollTo} heroY={heroY} />
      <Editorial />
      <Services />
      <Testimonials />
      <FAQ />
      <Booking />
      
      <Footer scrollTo={scrollTo} setActiveModal={setActiveModal} />

      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/919840022830?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-simple"
      >
        <WhatsAppIcon />
      </a>

      {/* Global Privacy & Terms Modals */}
      <LegalModal activeModal={activeModal} setActiveModal={setActiveModal} />
    </div>
  );
}

export default App;