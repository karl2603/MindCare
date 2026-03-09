import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, StarHalf, Plus } from 'lucide-react';

export const AnimatedText = ({ text, delayOffset = 0 }) => {
  const words = text.split(" ");
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="animated-text-container">
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            variants={{ hidden: { y: "120%", opacity: 0, rotateZ: 5 }, visible: { y: 0, opacity: 1, rotateZ: 0 } }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: delayOffset + (index * 0.08) }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

export const FadeIn = ({ children, delay = 0, direction = 'up', className = "" }) => {
  const directions = { 
    up: { y: 60, opacity: 0, scale: 0.98 }, 
    down: { y: -60, opacity: 0, scale: 0.98 }, 
    left: { x: 60, opacity: 0, scale: 0.98 }, 
    right: { x: -60, opacity: 0, scale: 0.98 } 
  };
  return (
    <motion.div initial={directions[direction]} whileInView={{ y: 0, x: 0, opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  );
};

export const RatingStars = ({ rating }) => (
  <div className="stars">
    {[...Array(5)].map((_, i) => (
      <React.Fragment key={i}>
        {i + 1 <= rating ? <Star fill="currentColor" size={18} /> : i + 0.5 === rating ? <StarHalf fill="currentColor" size={18} /> : <Star color="currentColor" size={18} />}
      </React.Fragment>
    ))}
  </div>
);

export const FAQItem = ({ faq, isOpen, onClick }) => (
  <div className={`faq-item glass-card ${isOpen ? 'open' : ''}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
    <button className="faq-question" onClick={onClick} aria-expanded={isOpen}>
      <h3 itemProp="name">{faq.question}</h3>
      <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }} className="faq-icon"><Plus size={20} /></motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="faq-answer-wrapper">
          <div className="faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">{faq.answer}</p></div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);