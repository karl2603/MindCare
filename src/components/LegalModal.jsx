import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const LegalModal = ({ activeModal, setActiveModal }) => {
  if (!activeModal) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="legal-modal-overlay"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={() => setActiveModal(null)}
      >
        <motion.div 
          className="legal-modal-content glass-card"
          initial={{ y: 50, opacity: 0, scale: 0.95 }} 
          animate={{ y: 0, opacity: 1, scale: 1 }} 
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="legal-modal-header">
            <h3>{activeModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}</h3>
            <button className="legal-modal-close" onClick={() => setActiveModal(null)}>
              <X size={24} />
            </button>
          </div>
          
          {/* Modal Content Logic */}
          <div className="legal-modal-body">
            {activeModal === 'privacy' ? (
              <>
                <h4>1. Information We Collect</h4>
                <p>We collect information you provide directly to us when requesting a consultation, including your names, email address, and phone number. This information is strictly confidential and protected under therapeutic guidelines.</p>
                
                <h4>2. How We Use Your Information</h4>
                <p>Your data is used exclusively to contact you regarding your inquiry, schedule sessions, and provide counselling services. We do not sell, rent, or share your personal information with third-party marketers under any circumstances.</p>
                
                <h4>3. Data Security & Confidentiality</h4>
                <p>All communication, whether via the website, email, or WhatsApp, is handled with the utmost discretion. Client-therapist confidentiality is legally protected, meaning your identity and session contents are completely private.</p>
                
                <h4>4. Contact Us</h4>
                <p>If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us at Mindcare888@gmail.com.</p>
              </>
            ) : (
              <>
                <h4>1. Acceptance of Terms</h4>
                <p>By accessing our website and booking a consultation, you agree to be bound by these Terms of Service. If you do not agree, please refrain from using our services.</p>
                
                <h4>2. Nature of Services</h4>
                <p>Happy MindCare provides professional individual, relationship, and family counselling. Therapy is a collaborative process, and while we use evidence-based methods, we cannot guarantee specific outcomes for your mental health journey.</p>
                
                <h4>3. Cancellations & Rescheduling</h4>
                <p>We value your time and ours. If you need to cancel or reschedule a session, we require a minimum of 24 hours notice. Late cancellations may be subject to a fee as outlined during your initial discovery call.</p>
                
                <h4>4. Emergency Situations</h4>
                <p>Our clinic is not an emergency service. If you or your partner are experiencing an active crisis, domestic violence, or a mental health emergency, please immediately contact local emergency services or a dedicated crisis hotline.</p>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};