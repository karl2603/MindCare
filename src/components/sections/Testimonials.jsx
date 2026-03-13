import React, { useRef, useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { FadeIn, RatingStars } from '../UI';
import { testimonialsList } from '../../data/content';

export const Testimonials = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Duplicate the list multiple times to create a long, seamless infinite loop
  const extendedList = [...testimonialsList, ...testimonialsList, ...testimonialsList, ...testimonialsList];

  // Auto-Scroll Logic
  useEffect(() => {
    let animationId;
    
    const play = () => {
      if (sliderRef.current && !isDragging && !isPaused) {
        sliderRef.current.scrollLeft += 1; // Speed of the auto-scroll
        
        // Seamless Loop Trick: When it scrolls halfway, silently snap it back
        const maxScroll = sliderRef.current.scrollWidth / 2;
        if (sliderRef.current.scrollLeft >= maxScroll) {
          sliderRef.current.scrollLeft -= sliderRef.current.scrollWidth / 4;
        }
      }
      animationId = requestAnimationFrame(play);
    };

    animationId = requestAnimationFrame(play);
    return () => cancelAnimationFrame(animationId);
  }, [isDragging, isPaused]);

  // Mouse Drag Logic for Desktop
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <FadeIn>
        <div className="section-header">
          <h2>Client Experiences</h2>
          <div className="header-line"></div>
          <p className="header-desc">Real stories from individuals and families who have navigated their toughest challenges with our guidance.</p>
        </div>
      </FadeIn>
      
      {/* Interactive Auto-Scrolling Draggable Slider */}
      <div 
        className={`testimonials-slider ${isDragging ? 'active' : ''}`}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsPaused(true)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {extendedList.map((test, index) => (
          <div key={index} className="testimonial-card glass-card">
            <Quote className="quote-icon" size={32} />
            <RatingStars rating={test.rating} />
            <p>"{test.text}"</p>
            <h4>— {test.names}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};