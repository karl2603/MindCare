import React, { useState } from 'react';
import { FadeIn, FAQItem } from '../UI';
import { faqs } from '../../data/content';

export const FAQ = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <section id="faq" className="faq-section">
      <FadeIn>
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <div className="header-line"></div>
          <p className="header-desc">Straightforward answers about our counseling sessions, therapeutic methods, and clinic policies.</p>
        </div>
      </FadeIn>
      
      {/* Interactive FAQ Accordion */}
      <div className="faq-container" itemScope itemType="https://schema.org/FAQPage">
        {faqs.map((faq, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <FAQItem 
              faq={faq} 
              isOpen={openFaqIndex === index} 
              onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} 
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};