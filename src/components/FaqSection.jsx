import React, { useState } from 'react';
import './FaqSection.css';

const faqs = [
  {
    question: 'How can I create an event on EventBook?',
    answer: 'Just click on "Create Event" in the navigation bar and fill out the event details.',
  },
  {
    question: 'Is there a fee to host events?',
    answer: 'Hosting is free for free events. For paid events, we charge a small commission.',
  },
  {
    question: 'Can I edit my event after publishing?',
    answer: 'Yes, you can edit event details anytime from your dashboard.',
  },
  {
    question: 'How do I contact support?',
    answer: 'Visit our Help Center or email us at support@eventbook.com.',
  },
  {
    question: 'Are virtual events supported?',
    answer: 'Yes, you can host both in-person and virtual events with EventBook.',
  },
  {
    question: 'How are ticket payments handled?',
    answer: 'We use secure gateways like Stripe and Razorpay for payment processing.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Do you have any other questions?</h2>
      <p>Please check these FAQs</p>
      <div className="faq-grid">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <span>{item.question}</span>
              <button className="toggle-button">{openIndex === index ? '−' : '+'}</button>
            </div>
            {openIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
