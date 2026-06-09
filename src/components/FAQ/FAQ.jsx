import { useState } from "react";
import "./FAQ.css";

import { faqs } from "../../data/faqs";

import FAQItem from "./FAQItem";
import Reveal from "../Reveal/Reveal";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <Reveal>
          <div className="faq-badge">FAQs</div>
        </Reveal>

        <Reveal>
          <h2 className="faq-heading">
            We’ve Got the Answers
            <br />
            You’re Looking For
          </h2>
        </Reveal>

        <Reveal>
          <p className="faq-subheading">
            Quick answers to your exciting questions
          </p>
        </Reveal>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 100}>
              <FAQItem
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
