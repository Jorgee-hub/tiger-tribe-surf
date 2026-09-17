import { colores } from "../styles/theme";

function TripCard({ title, description, price, duration, image }) {
  return (
    <article
      className="card h-100 shadow-sm"
      style={{
        backgroundColor: colores.oceano,
        color: colores.blanco,
        borderColor: colores.blanco,
      }}
    >
      <img
        src={image}
        className="card-img-top"
        alt={`Viaje: ${title}`}
        style={{ height: "220px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {duration && <p className="small mb-1">Duration: {duration}</p>}
        <p className="fw-bold mt-auto">{price}</p>
      </div>
    </article>
  );
}

export default TripCard;