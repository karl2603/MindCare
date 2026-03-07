import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import {
  Heart, Shield, Users, Star, StarHalf,
  MapPin, Phone, Mail, ArrowUpRight, CheckCircle2, Quote, Clock,
  Facebook, Instagram, Linkedin, Plus, Flame, Compass, Laptop
} from 'lucide-react';
import './App.css';

// --- Official WhatsApp SVG Component ---
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#FFFFFF">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.405-.883-.733-1.476-1.639-1.649-1.935-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// --- Scroll Reveal Wrapper ---
const FadeIn = ({ children, delay = 0, direction = 'up', className = "" }) => {
  const directions = {
    up: { y: 40, opacity: 0 },
    down: { y: -40, opacity: 0 },
    left: { x: 40, opacity: 0 },
    right: { x: -40, opacity: 0 }
  };
  return (
    <motion.div
      initial={directions[direction]}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Dynamic Star Rating Component ---
const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Star key={i} fill="currentColor" size={18} />);
    } else if (i - 0.5 === rating) {
      stars.push(<StarHalf key={i} fill="currentColor" size={18} />);
    } else {
      stars.push(<Star key={i} color="currentColor" size={18} />);
    }
  }
  return <div className="stars">{stars}</div>;
};

// --- SEO-Optimized FAQ Accordion ---
const FAQItem = ({ faq, isOpen, onClick }) => (
  <div 
    className={`faq-item glass-card ${isOpen ? 'open' : ''}`}
    itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
  >
    <button className="faq-question" onClick={onClick} aria-expanded={isOpen}>
      <h3 itemProp="name">{faq.question}</h3>
      <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }} className="faq-icon">
        <Plus size={20} />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="faq-answer-wrapper"
        >
          <div className="faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text">{faq.answer}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// --- Content Data ---
const therapists = [
  { 
    name: 'Sarah Jenkins', 
    title: 'LMFT, Emotionally Focused Therapist', 
    bio: 'With over a decade of clinical experience, Sarah specializes in vulnerability and emotional intimacy. She helps couples break down defensive walls, navigate complex emotional landscapes, and learn to communicate securely from the heart.', 
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=600&auto=format&fit=crop',
    tags: ['Vulnerability Mapping', 'Emotionally Focused Therapy']
  },
  { 
    name: 'David Miller', 
    title: 'Clinical Psychologist, Gottman Level 3', 
    bio: 'David brings a highly structured, evidence-based approach to the room. He focuses on actionable conflict resolution, rebuilding broken trust after betrayal, and creating practical, step-by-step roadmaps for relationship success.', 
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=600&auto=format&fit=crop',
    tags: ['Gottman Method', 'Trust & Betrayal Recovery']
  },
];

const faqs = [
  { question: "How long does couples therapy typically take?", answer: "While every relationship is unique, most couples see significant improvements within 12 to 16 sessions. Our goal is not to keep you in therapy forever, but to equip you with the tools to manage conflicts independently." },
  { question: "What if my partner refuses to come to therapy?", answer: "It is very common for one partner to be hesitant. We recommend scheduling an initial 'Discovery' session. Often, when the reluctant partner sees that our process is structured and strictly non-judgmental, they become willing to participate." },
  { question: "Do you take sides during arguments?", answer: "Never. In couples therapy, the relationship itself is our client. Our co-therapy model (having both Sarah and David in the room) specifically prevents bias, ensuring both individuals feel equally heard, validated, and challenged." },
  { question: "Is therapy only for couples on the brink of divorce?", answer: "Not at all. Many of our clients are healthy couples seeking premarital counseling, navigating major life transitions (like having a baby or changing careers), or simply wanting to deepen their emotional intimacy." },
  { question: "Do you offer online sessions, or is it strictly in-person?", answer: "We offer a hybrid approach. While we highly recommend in-person sessions at our Anna Nagar clinic for the initial phases and high-conflict interventions, we provide secure, encrypted video sessions for ongoing support." }
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Background Orbs */}
      <div className="ambient-orb orb-gold"></div>
      <div className="ambient-orb orb-green"></div>

      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo-container" onClick={() => scrollTo('hero')}>
            <img src="/MindCareLogo.jpg" alt="Happy MindCare Couple Therapy Chennai Logo" className="logo-img" />
            <span className="logo-text">Happy MindCare<span>.</span></span>
          </div>
          <div className="nav-links">
            {['about', 'services', 'testimonials', 'faq'].map(link => (
              <button key={link} onClick={() => scrollTo(link)}>{link.toUpperCase()}</button>
            ))}
            <button className="nav-cta hover-sweep-btn" onClick={() => scrollTo('booking')}>Book Session</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <FadeIn><span className="hero-badge">Expert Marriage & Relationship Counseling</span></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="hero-title">Break the cycle. <br /><span className="italic-text">Rediscover each other.</span></h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="hero-subtitle">You don't have to navigate the distance alone. Experience Chennai's premier co-therapy approach—two expert perspectives working in harmony to help you heal deep wounds, improve communication, and rebuild lasting trust.</p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="hero-buttons">
              <button className="primary-btn hover-sweep-btn" onClick={() => scrollTo('booking')}>
                <span className="btn-text">Start Your Healing Journey</span>
                <div className="btn-icon"><ArrowUpRight size={22} /></div>
              </button>
              <button className="secondary-btn" onClick={() => scrollTo('services')}>
                Explore Services
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- ULTRA-PREMIUM EDITORIAL TEAM SECTION --- */}
      <section id="about" className="team-section">
        <FadeIn>
          <div className="section-header">
            <h2>Two Experts. One Goal: Your Relationship.</h2>
            <div className="header-line"></div>
            <p className="header-desc">Traditional therapy often leaves one partner feeling misunderstood. Our dual-therapist model ensures total balance, empathy, and objective clarity.</p>
          </div>
        </FadeIn>
        
        <div className="team-editorial-container">
          {therapists.map((therapist, index) => {
            const isReverse = index % 2 !== 0;
            return (
              <FadeIn key={therapist.name} delay={index * 0.1} className={`editorial-row ${isReverse ? 'reverse' : ''}`}>
                
                {/* Image Column */}
                <div className="editorial-image-col">
                  <img src={therapist.image} alt={`${therapist.name} - Couple Therapist in Chennai`} />
                </div>
                
                {/* Floating Glass Content Column */}
                <div className="editorial-content-col">
                  <div className="editorial-content-inner">
                    <Quote className="editorial-quote-mark" size={100} />
                    <h3 className="editorial-name">{therapist.name}</h3>
                    <p className="editorial-title">{therapist.title}</p>
                    <p className="editorial-bio">{therapist.bio}</p>
                    
                    <ul className="editorial-tags">
                      {therapist.tags.map((tag, i) => (
                        <li key={i}><CheckCircle2 size={16} className="editorial-tag-icon"/> {tag}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Expanded Services Section */}
      <section id="services" className="services-section">
        <FadeIn>
          <div className="section-header">
            <h2>How We Support You</h2>
            <div className="header-line"></div>
            <p className="header-desc">Practical, evidence-based therapy tailored to your unique dynamic.</p>
          </div>
        </FadeIn>
        <div className="services-grid">
          {[
            { icon: <Heart />, title: "Premarital Counseling", desc: "Don't leave your future to chance. We help engaged couples navigate family expectations, financial goals, and emotional intimacy to build a bulletproof foundation before the wedding day." },
            { icon: <Users />, title: "Couples Therapy", desc: "Break free from endless, exhausting arguments. We utilize the Gottman Method to teach you how to communicate your needs without criticism, fostering deep empathy and renewed passion." },
            { icon: <Shield />, title: "Trust Recovery", desc: "Betrayal causes profound trauma, but healing is possible. We provide a highly structured, non-judgmental roadmap to process the pain, establish radical transparency, and rebuild a secure bond." },
            { icon: <Flame />, title: "Intimacy & Connection", desc: "Overcome emotional and physical distance. We help couples break through barriers, communicate their desires, and rebuild a deeply fulfilling, secure, and passionate attachment." },
            { icon: <Compass />, title: "Discernment Counseling", desc: "Unsure if you should stay or go? We provide a short-term, structured process (1-5 sessions) to help couples gain absolute clarity and confidence on the future of their marriage." },
            { icon: <Laptop />, title: "Online Couples Counseling", desc: "Access professional support from the privacy and comfort of your home. Our secure online sessions provide the same depth, structure, and confidentiality as in-person therapy." }
          ].map((service, index) => (
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

      {/* HORIZONTAL MARQUEE TESTIMONIALS */}
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
            {[
              { rating: 4.5, names: "Emma & James", text: "Therapy is hard work, and our first few sessions were emotionally draining. But Sarah and David guided us through the discomfort. We communicate better now than we did on our wedding day." },
              { rating: 5, names: "Arjun & Priya", text: "Navigating an arranged marriage with pressure from both families was overwhelming. The dual-therapist approach gave us a completely neutral, safe space to finally put our partnership first." },
              { rating: 4, names: "Mark & Sarah", text: "Rebuilding trust after betrayal took longer than we anticipated, and there were setbacks. But the Gottman framework they provided gave us a clear roadmap. We are finally moving forward." },
              { rating: 5, names: "Karthik & Ananya", text: "Having a male and female therapist in the room changed everything. Neither of us ever felt judged or ganged up on. A truly premium and empathetic experience in Chennai." },
              { rating: 4.5, names: "Liam & Sophia", text: "We learned more about how to communicate in our first month with Happy MindCare than we did in 10 years of marriage. It is highly structured and incredibly effective." }
            ].map((test, index) => (
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

      {/* SEO FAQ Section */}
      <section id="faq" className="faq-section">
        <FadeIn>
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <div className="header-line"></div>
            <p className="header-desc">Straightforward answers about our sessions, therapy methods, and clinic policies.</p>
          </div>
        </FadeIn>
        <div className="faq-container" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <FAQItem faq={faq} isOpen={openFaqIndex === index} onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* HIGH-END SPLIT BOOKING SECTION */}
      <section id="booking" className="booking-section">
        <FadeIn>
          <div className="booking-split-container">
            <div className="booking-info-panel">
              <h2>Take the first step toward each other.</h2>
              <p>Reaching out is often the hardest part. Book a complimentary consultation to see if our approach is right for your relationship.</p>
              
              <ul className="booking-perks">
                <li>
                  <CheckCircle2 className="perk-icon" />
                  <div>
                    <strong>100% Confidential</strong>
                    <span>Your privacy is legally protected.</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="perk-icon" />
                  <div>
                    <strong>Free 15-Min Discovery Call</strong>
                    <span>No commitment or obligation.</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="perk-icon" />
                  <div>
                    <strong>Tailored to Your Needs</strong>
                    <span>A roadmap built for your unique dynamic.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="booking-form-panel">
              <form className="luxury-form" onSubmit={(e) => e.preventDefault()}>
                <div className="input-row">
                  <div className="input-wrapper">
                    <input type="text" id="names" placeholder=" " required />
                    <label htmlFor="names">Your Names</label>
                  </div>
                  <div className="input-wrapper">
                    <input type="email" id="email" placeholder=" " required />
                    <label htmlFor="email">Email Address</label>
                  </div>
                </div>
                
                <div className="input-wrapper">
                  <input type="tel" id="phone" placeholder=" " required />
                  <label htmlFor="phone">Phone Number</label>
                </div>
                
                <div className="input-wrapper">
                  <textarea id="message" rows="3" placeholder=" " required></textarea>
                  <label htmlFor="message">Briefly introduce what you want to work on...</label>
                </div>
                
                <button type="submit" className="submit-btn hover-sweep-btn">
                  Request Consultation <ArrowUpRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* --- PREMIUM FOOTER --- */}
      <footer id="contact" className="premium-footer">
        <div className="footer-top-banner">
          <div className="footer-banner-content">
            <h2>Ready to rewrite your story?</h2>
            <p>Don't wait until the distance feels impossible to cross.</p>
            <button className="footer-cta-btn hover-sweep-btn" onClick={() => scrollTo('booking')}>
              Book Your Session Today <ArrowUpRight size={20}/>
            </button>
          </div>
        </div>

        <div className="footer-main-grid">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <img src="/MindCareLogo.jpg" alt="Mindcare Logo" />
              <h3>Happy MindCare<span>.</span></h3>
            </div>
            <p className="footer-mission">Chennai's premier co-therapy clinic dedicated to helping couples heal, communicate, and build secure emotional attachments.</p>
            <div className="social-pills">
              <a href="#"><Facebook size={18}/></a>
              <a href="#"><Instagram size={18}/></a>
              <a href="#"><Linkedin size={18}/></a>
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
            <div className="contact-item">
              <MapPin className="contact-icon"/>
              <div>
                <p><strong>Anna Nagar East</strong></p>
                <p>Chennai, Tamil Nadu 600102</p>
              </div>
            </div>
            <div className="contact-item">
              <Clock className="contact-icon"/>
              <div>
                <p><strong>Mon - Sat:</strong> 10:00 AM - 8:00 PM</p>
                <p>Online & In-person available.</p>
              </div>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon"/>
              <p>+91 98765 43210</p>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon"/>
              <p>hello@happymindcare.in</p>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="copyright-text">
            <p>&copy; {new Date().getFullYear()} Happy MindCare Therapy Chennai. All rights reserved.</p>
            {/* LINKEDIN DEV CREDIT */}
            <p className="dev-credit">
              Crafted with passion by <a href="https://www.linkedin.com/in/karlarvindraj/" target="_blank" rel="noopener noreferrer" className="karl-link">Karl</a>
            </p>
          </div>
          <div className="legal-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>

      {/* --- SIMPLE WHATSAPP BUTTON --- */}
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="whatsapp-simple" aria-label="Chat with us on WhatsApp">
        <WhatsAppIcon />
      </a>
      
    </div>
  );
}

export default App;