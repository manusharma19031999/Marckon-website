import { CaretDown, CaretUp } from "@phosphor-icons/react";

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={onToggle}>
        <span>{faq.question}</span>

        {isOpen ? (
          <CaretUp size={22} weight="bold" />
        ) : (
          <CaretDown size={22} weight="bold" />
        )}
      </button>

      {isOpen && (
        <div className="faq-answer">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default FAQItem;
