import React from 'react';
import { MapPin, Clock, Phone, Mail, ArrowUpRight, Facebook, Instagram, Linkedin } from 'lucide-react';
import { BrandLogo } from '../Icons';

export const Footer = ({ scrollTo, setActiveModal }) => (
  <footer id="contact" className="premium-footer">
    <div className="footer-top-banner">
      <div className="footer-banner-content">
        <h2>Ready to rewrite your story?</h2>
        <p>Don't wait until the distance feels impossible to cross.</p>
        <button className="footer-cta-btn hover-sweep-btn" onClick={() => scrollTo('booking')}>
          Book Your Session Today <ArrowUpRight size={20} />
        </button>
      </div>
    </div>

    <div className="footer-main-grid">
      <div className="footer-brand-col">
        <div className="footer-logo">
          <BrandLogo className="footer-logo-icon" />
          <h3>Happy MindCare</h3>
        </div>
        <p className="footer-mission">Chennai's premier couple therapy dedicated to helping couples heal, communicate, and build secure emotional attachments.</p>
        <div className="social-pills">
          <a href="https://www.facebook.com/profile.php?id=61578581564154"><Facebook size={18} /></a>
          <a href="https://www.instagram.com/mindcare888"><Instagram size={18} /></a>
          <a href="https://www.linkedin.com/in/mind-care-620009378/"><Linkedin size={18} /></a>
        </div>
      </div>

      <div className="footer-links-col">
        <h4>Explore</h4>
        <ul>
          <li onClick={() => scrollTo('about')}>Our Therapists</li>
          <li onClick={() => scrollTo('services')}>Therapy Services</li>
          <li onClick={() => scrollTo('testimonials')}>Success Stories</li>
          <li onClick={() => scrollTo('faq')}>FAQ & Pricing</li>
        </ul>
      </div>

      <div className="footer-contact-col">
        <h4>Connect</h4>
        <div className="contact-item"><MapPin className="contact-icon" /><div><p><strong>Ayanambakkam</strong></p><p>Chennai, Tamil Nadu 600077</p></div></div>
        <div className="contact-item"><Clock className="contact-icon" /><div><p><strong>Mon - Sat:</strong> 10:00 AM - 10:00 PM</p><p>Online & In-person available.</p></div></div>
        <div className="contact-item"><Phone className="contact-icon" /><p>+91 98400 22830 / +91 70109 70260</p></div>
        <div className="contact-item"><Mail className="contact-icon" /><p>mindcare888@gmail.com</p></div>
      </div>
    </div>

    <div className="footer-copyright">
      <div className="copyright-text">
        <p>&copy; {new Date().getFullYear()} Happy MindCare. All rights reserved.</p>
        <p className="dev-credit">Crafted with passion by <a href="https://www.linkedin.com/in/karlarvindraj/" target="_blank" rel="noopener noreferrer" className="karl-link">Karl</a></p>
      </div>
      <div className="legal-links">
        <span onClick={() => setActiveModal('privacy')}>Privacy Policy</span>
        <span onClick={() => setActiveModal('terms')}>Terms of Service</span>
      </div>
    </div>
  </footer>
);