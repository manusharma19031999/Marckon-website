import "./ServiceCard.css";

function ServiceCard({ image, title, description }) {
  return (
    <div className="service-card">
      <div className="service-image-wrapper">
        <img src={image} alt={title} className="service-image" />
      </div>

      <h3 className="service-title">{title}</h3>

      <p className="service-description">{description}</p>
    </div>
  );
}

export default ServiceCard;
