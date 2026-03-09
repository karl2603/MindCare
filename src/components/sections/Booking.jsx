import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../UI';

export const Booking = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, { method: form.method, body: data, headers: { 'Accept': 'application/json' } });
      if (response.ok) {
        setFormStatus('SUCCESS');
        form.reset();
        setTimeout(() => setFormStatus(''), 5000); 
      } else {
        setFormStatus('ERROR');
      }
    } catch (error) {
      setFormStatus('ERROR');
    }
  };

  return (
    <section id="booking" className="booking-section">
      <FadeIn>
        <div className="booking-split-container">
          <div className="booking-info-panel">
            <h2>Take the first step toward each other.</h2>
            <p>Reaching out is often the hardest part. Book a complimentary consultation to see if our approach is right for your relationship.</p>
            <ul className="booking-perks">
              {[
                { title: "100% Confidential", desc: "Your privacy is legally protected." },
                { title: "Free 15-Min Discovery Call", desc: "No commitment or obligation." },
                { title: "Tailored to Your Needs", desc: "A roadmap built for your unique dynamic." }
              ].map((perk, i) => (
                <li key={i}>
                  <CheckCircle2 className="perk-icon" />
                  <div><strong>{perk.title}</strong><span>{perk.desc}</span></div>
                </li>
              ))}
            </ul>
          </div>

          <div className="booking-form-panel">
            <form className="luxury-form" action="https://formspree.io/f/xbdzddbn" method="POST" onSubmit={handleFormSubmit}>
              <div className="input-row">
                <div className="input-wrapper">
                  <input type="text" id="names" name="Names" placeholder=" " required />
                  <label htmlFor="names">Your Name</label>
                </div>
                <div className="input-wrapper">
                  <input type="email" id="email" name="Email" placeholder=" " required />
                  <label htmlFor="email">Email Address</label>
                </div>
              </div>
              <div className="input-wrapper">
                <input type="tel" id="phone" name="Phone" placeholder=" " required />
                <label htmlFor="phone">Phone Number</label>
              </div>
              <div className="input-wrapper">
                <textarea id="message" name="Message" rows="3" placeholder=" " required></textarea>
                <label htmlFor="message">Briefly introduce what you want to work on...</label>
              </div>
              <button type="submit" className="submit-btn hover-sweep-btn">
                {formStatus === 'SUCCESS' ? 'Request Sent Successfully!' : formStatus === 'ERROR' ? 'Error Sending Request' : 'Request Consultation'} 
                <ArrowUpRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};