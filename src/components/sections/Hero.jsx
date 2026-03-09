import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../UI';

export const Hero = ({ heroY, scrollTo }) => (
  <section id="hero" className="hero-section">
    <motion.div className="hero-content" style={{ y: heroY }}>
      <FadeIn>
        <span className="hero-badge"><span className="pulse-dot"></span>Expert Marriage & Relationship Counseling</span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h1 className="hero-title">Break the cycle. <br /><span className="italic-text">Rediscover each other.</span></h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="hero-subtitle">You don't have to navigate the distance alone. Experience Chennai's premier co-therapy approach—two expert perspectives working in harmony to help you heal deep wounds, improve communication, and rebuild lasting trust.</p>
      </FadeIn>
      <FadeIn delay={0.3}>
        <div className="hero-buttons">
          <button className="primary-btn hover-sweep-btn" onClick={() => scrollTo('booking')}>
            <span className="btn-text">Book Your First Session</span>
            <div className="btn-icon"><ArrowUpRight size={22} /></div>
          </button>
          <button className="secondary-btn" onClick={() => scrollTo('services')}>Explore Services</button>
        </div>
      </FadeIn>
    </motion.div>
  </section>
);