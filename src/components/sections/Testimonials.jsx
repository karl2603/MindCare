import React from 'react';
import Marquee from 'react-fast-marquee';
import { Quote } from 'lucide-react';
import { FadeIn, RatingStars } from '../UI';
import { testimonialsList } from '../../data/content';

export const Testimonials = () => (
  <section id="testimonials" className="testimonials-section">
    <FadeIn>
      <div className="section-header">
        <h2>Client Experiences</h2>
        <div className="header-line"></div>
        <p className="header-desc">Real stories from couples who have navigated their toughest challenges with our guidance.</p>
      </div>
    </FadeIn>
    <div className="marquee-container">
      <Marquee speed={45} pauseOnHover={true} gradient={true} gradientColor={[253, 252, 248]} gradientWidth={100}>
        {testimonialsList.map((test, index) => (
          <div key={index} className="testimonial-card glass-card marquee-item">
            <Quote className="quote-icon" size={32} />
            <RatingStars rating={test.rating} />
            <p>"{test.text}"</p>
            <h4>— {test.names}</h4>
          </div>
        ))}
      </Marquee>
    </div>
  </section>
);