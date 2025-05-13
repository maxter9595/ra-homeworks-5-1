// src/components/Card.jsx
const Card = ({ image, title, text, link = "#", children }) => {
  return (
    <div className="card custom-card">
      {image && <img src={image} className="card-img-top" alt={title} />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        {children ? children : <a href={link} className="btn btn-primary">Go somewhere</a>}
      </div>
    </div>
  );
};

export default Card;
