import React from 'react';
import { FadeIn } from '../UI';
import { servicesList } from '../../data/content';

export const Services = () => (
  <section id="services" className="services-section">
    <FadeIn>
      <div className="section-header">
        <h2>How We Support You</h2>
        <div className="header-line"></div>
        <p className="header-desc">Practical, evidence-based therapy tailored to your unique dynamic.</p>
      </div>
    </FadeIn>
    <div className="services-grid">
      {servicesList.map((service, index) => (
        <FadeIn key={service.title} delay={index * 0.1} className="service-card-wrapper">
          <div className="service-card glass-card">
            <div className="icon-wrapper">{service.icon}</div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);