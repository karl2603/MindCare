import React from 'react';
import { Brain, Heart, Users, Smile, Shield, Laptop, CloudRain, Activity, RefreshCw } from 'lucide-react';

// Therapists Directory Data
export const therapists = [
  {
    name: 'Kaviya',
    title: 'Clinical Psychologist & Psychotherapist, Chennai',
    bio: 'Kaviya is a highly sought-after clinical psychologist specializing in individual therapy for anxiety, depression, and trauma. With a deeply empathetic approach, she empowers clients using cognitive-behavioral therapy (CBT) and mindfulness techniques to overcome mental health challenges, build emotional resilience, and regain control over their lives.',
    image: '/Assets/KarunaTest.png',
    tags: ['Anxiety & Depression', 'Cognitive Behavioral Therapy', 'Trauma Healing']
  },
  {
    name: 'Pandian',
    title: 'Child, Family & Relationship Therapist, Chennai',
    bio: 'Dedicated to fostering healthy dynamics, Pandian provides expert couples counseling, family therapy, and child psychology services. He creates a safe, judgment-free environment to resolve conflicts, improve communication, and address adolescent behavioral challenges, helping families and partners reconnect securely and thrive.',
    image: '/Assets/MaleTest3.png',
    tags: ['Marriage Counseling', 'Child Psychology', 'Family Dynamics']
  },
];

// FAQ Data
export const faqs = [
  { question: "What types of therapy and counseling do you offer in Chennai?", answer: "We provide a comprehensive range of mental health services, including individual counseling for anxiety and depression, couples and marriage therapy, child and adolescent psychology, and family therapy." },
  { question: "How do I know if I need to see a psychologist?", answer: "Therapy isn't just for crises. Whether you are dealing with chronic stress, navigating a difficult life transition, experiencing relationship issues, or seeking personal growth, professional counseling provides a structured space for mental wellness." },
  { question: "How long does a typical counseling process take?", answer: "Therapy is highly personalized. Some clients find clarity in 6 to 8 short-term, solution-focused sessions, while others dealing with complex trauma or chronic anxiety may benefit from long-term psychological support." },
  { question: "Is my mental health data and conversation confidential?", answer: "Absolutely. We adhere to strict clinical confidentiality guidelines. Everything discussed in your therapy sessions remains 100% private and legally protected, creating a completely safe environment for your healing." },
  { question: "Do you offer online therapy sessions or only in-person?", answer: "We offer a hybrid approach. You can visit our mental health clinic in Ayanambakkam, Chennai for in-person sessions, or choose highly secure, encrypted online video sessions to receive professional support from anywhere." }
];

// Services Directory Data
export const servicesList = [
  { icon: <Brain />, title: "Individual Therapy", desc: "Struggling with anxiety, depression, or overthinking? Our personalized one-on-one therapy provides a confidential space to process complex emotions, develop healthy coping mechanisms, and restore your mental well-being." },
  { icon: <Heart />, title: "Couples & Marriage", desc: "Relationships take work. Whether you are navigating communication breakdowns, intimacy issues, or a loss of connection, our evidence-based couples therapy helps partners rebuild trust and foster deep empathy." },
  { icon: <Users />, title: "Family Counseling", desc: "Family dynamics can be complicated. We help resolve generational conflicts, establish healthy boundaries, and improve communication to create a more supportive, peaceful, and understanding home environment." },
  { icon: <Smile />, title: "Child & Teen Therapy", desc: "Growing up in today's world is challenging. We offer specialized psychology services for children and adolescents dealing with academic stress, behavioral issues, peer pressure, and emotional regulation." },
  { icon: <Shield />, title: "Trauma & PTSD", desc: "Healing from past trauma requires profound, professional care. We utilize trauma-informed therapies to help you safely process painful memories, overcome PTSD, and move forward with renewed strength." },
  { icon: <Laptop />, title: "Online Counseling", desc: "Access top-rated psychological care from anywhere. Our highly secure, encrypted online counseling sessions ensure you receive professional, uninterrupted mental health support from the comfort of your home." },
  { icon: <CloudRain />, title: "Depression", desc: "It can feel impossible to carry the weight of depression alone. Our specialists use evidence-based therapies to help you process heavy emotions, restore your natural energy, and gradually rediscover joy and purpose." },
  { icon: <Activity />, title: "Anxiety", desc: "Constant worry and panic attacks can deeply impact your quality of life. We equip you with effective grounding tools and cognitive strategies to quiet your mind and face daily challenges with calm confidence." },
  { icon: <RefreshCw />, title: "OCD", desc: "Living with intrusive thoughts and compulsions is exhausting. Utilizing targeted approaches like ERP, we gently guide you to break the anxiety cycle, regain control over your actions, and find lasting mental peace." }
];

// Testimonials Data
export const testimonialsList = [
  { rating: 5, names: "Pradeep", text: "I was dealing with severe burnout and anxiety. The individual therapy sessions gave me the practical coping mechanisms I needed to finally feel like myself again. Truly life-changing psychological support." },
  { rating: 4.5, names: "Allwin & Hema", text: "We were constantly arguing and struggling to understand each other. Couples counselling helped us slow down, listen better, and communicate without hurting each other. It saved our marriage." },
  { rating: 5, names: "Rahul M", text: "Finding a judgment-free psychologist in Chennai was hard until I found Happy MindCare. The safe space provided allowed me to process my past trauma at my own pace." },
  { rating: 5, names: "The Murali Family", text: "Family therapy helped us bridge the gap with our teenager. We learned how to set healthy boundaries and communicate with empathy. Our home is significantly more peaceful now." },
  { rating: 4.5, names: "Hasini", text: "The online therapy sessions are incredibly convenient and just as effective as being in the clinic. The insights I've gained have drastically improved my daily mental health and focus." }
];