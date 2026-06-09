import "./BenefitCard.css";

function BenefitCard({ icon, title, description, mobileDescription }) {
  const Icon = icon;

  return (
    <article className="benefit-card">
      <Icon size={28} weight="fill" className="benefit-icon" />

      <div className="benefit-content">
        <h3 className="benefit-title">{title}</h3>

        <p className="benefit-description">{description}</p>

        <p className="benefit-mobile-description">{mobileDescription}</p>
      </div>
    </article>
  );
}

export default BenefitCard;
