import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { colores } from "../styles/theme";

gsap.registerPlugin(useGSAP);

function LessonCard({ title, price, duration, image }) {
  const cardRef = useRef(null);

  // ---- Hover: scale + lift + sombra ----
  const handleEnter = () => {
    gsap.to(cardRef.current, {
      y: -10,
      scale: 1.03,
      boxShadow: `0 20px 40px rgba(14, 59, 67, 0.25)`,
      duration: 0.4,
      ease: "power2.out",
    });
    // Zoom suave en la imagen
    gsap.to(cardRef.current.querySelector("img"), {
      scale: 1.08,
      duration: 0.5,
      ease: "power2.out",
    });
    // El precio late un poco
    gsap.to(cardRef.current.querySelector(".card-price"), {
      scale: 1.1,
      color: colores.papaya,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(cardRef.current.querySelector("img"), {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(cardRef.current.querySelector(".card-price"), {
      scale: 1,
      color: colores.oceano,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <article
      ref={cardRef}
      className="card h-100 shadow-sm"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        backgroundColor: colores.blanco,
        color: colores.oceano,
        borderColor: colores.blanco,
        overflow: "hidden",
        willChange: "transform, box-shadow",
        cursor: "pointer",
      }}
    >
      <div style={{ overflow: "hidden" }}>
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{
            height: "300px",
            objectFit: "cover",
            willChange: "transform",
            display: "block",
          }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        {duration && <p className="small mb-1">Duration: {duration}</p>}
        <p
          className="card-price fw-bold mt-auto mb-0"
          aria-label={`Precio: ${price}`}
          style={{ willChange: "transform, color" }}
        >
          {price}
        </p>
      </div>
    </article>
  );
}

export default LessonCard;