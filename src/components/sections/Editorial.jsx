import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../UI';
import { therapists } from '../../data/content';

export const Editorial = () => (
  <section id="about" className="team-section">
    <FadeIn>
      <div className="section-header">
        <h2>Two Experts. One Goal: Your Relationship.</h2>
        <div className="header-line"></div>
        <p className="header-desc">Traditional therapy often leaves one partner feeling misunderstood. Our dual-therapist model ensures total balance, empathy, and objective clarity.</p>
      </div>
    </FadeIn>
    <div className="team-editorial-container">
      {therapists.map((therapist, index) => (
        <FadeIn key={therapist.name} delay={index * 0.1} className={`editorial-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
          <div className="editorial-image-col">
            <img src={therapist.image} alt={`${therapist.name} - Couple Therapist in Chennai`} />
          </div>
          <div className="editorial-content-col">
            <div className="editorial-content-inner">
              <Quote className="editorial-quote-mark" size={100} />
              <h3 className="editorial-name">{therapist.name}</h3>
              <p className="editorial-title">{therapist.title}</p>
              <p className="editorial-bio">{therapist.bio}</p>
              <ul className="editorial-tags">
                {therapist.tags.map((tag, i) => (
                  <li key={i}><CheckCircle2 size={16} className="editorial-tag-icon" /> {tag}</li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);