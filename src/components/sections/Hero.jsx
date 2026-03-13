import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../UI';

export const Hero = ({ heroY, scrollTo }) => (
  <section id="hero" className="hero-section">
    <motion.div className="hero-content" style={{ y: heroY }}>
      
      <FadeIn>
        <span className="hero-badge">
          <span className="pulse-dot"></span>
          Chennai's Trusted Therapy Clinic
        </span>
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <h1 className="hero-title">Therapy that heals. <br /><span className="italic-text">Guidance that empowers.</span></h1>
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <p className="hero-subtitle">Take the first step toward a healthier mind. Our licensed clinical psychologists provide expert individual, couples, and family counseling. Experience a deeply confidential, judgment-free space to overcome anxiety, process trauma, and rediscover your peace.</p>
      </FadeIn>
      
      <FadeIn delay={0.3}>
        <div className="hero-buttons">
          <button className="primary-btn hover-sweep-btn" onClick={() => scrollTo('booking')}>
            <span className="btn-text">Book Your First Session</span>
            <div className="btn-icon"><ArrowUpRight size={22} /></div>
          </button>
          <button className="secondary-btn" onClick={() => scrollTo('services')}>
            Explore Services
          </button>
        </div>
      </FadeIn>
      
    </motion.div>
  </section>
);