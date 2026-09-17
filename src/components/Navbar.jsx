import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { colores } from "../styles/theme";

const WHATSAPP_PHONE = "50664787288";
const WHATSAPP_MESSAGE =
  "Hi! I found you through your website and I'd like to book a surf lesson. When are you available?";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// Estilo de cada link. Activo en papaya, inactivo en blanco.
const linkStyle = ({ isActive }) => ({
  color: isActive ? colores.papaya : colores.blanco,
  fontWeight: isActive ? 700 : 400,
  textDecoration: "none",
  padding: "0.5rem 0.75rem",
  fontSize: "0.95rem",
});

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="navbar sticky-top"
      style={{
        backgroundColor: colores.oceano,
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="container">
        {/* LOGO */}
        <Link className="navbar-brand fw-bold text-white fs-4" to="/">
          🏄‍♂️ Tiger Tribe
        </Link>

        {/* HAMBURGUESA (solo móvil) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="d-lg-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          style={{
            background: "transparent",
            border: `2px solid ${colores.espuma}`,
            color: colores.espuma,
            padding: "0.4rem 0.75rem",
            fontSize: "1.2rem",
            cursor: "pointer",
            borderRadius: 0,
            lineHeight: 1,
          }}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* LINKS DESKTOP */}
        <div className="navbar-nav ms-auto d-none d-lg-flex flex-row align-items-center gap-3">
          <NavLink style={linkStyle} to="/lessons/private">
            Private
          </NavLink>
          <NavLink style={linkStyle} to="/lessons/group">
            Group
          </NavLink>
          <NavLink style={linkStyle} to="/gallery">
            Gallery
          </NavLink>
          <NavLink style={linkStyle} to="/about">
            About
          </NavLink>

          {/* BOTÓN BOOK NOW */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: colores.papaya,
              color: colores.blanco,
              padding: "0.55rem 1.25rem",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              borderRadius: 0,
              marginLeft: "0.5rem",
              boxShadow: "0 4px 12px rgba(255, 111, 60, 0.3)",
            }}
          >
            Book Now
          </a>
        </div>

        {/* LINKS MÓVIL (desplegable) */}
        {isOpen && (
          <div
            className="d-lg-none"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: colores.oceano,
              borderTop: "1px solid rgba(255,255,255,0.1)",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              zIndex: 1000,
            }}
          >
            <NavLink
              style={linkStyle}
              to="/lessons/private"
              onClick={closeMenu}
            >
              Private Lesson
            </NavLink>
            <NavLink style={linkStyle} to="/lessons/group" onClick={closeMenu}>
              Group Lesson
            </NavLink>
            <NavLink style={linkStyle} to="/gallery" onClick={closeMenu}>
              Gallery
            </NavLink>
            <NavLink style={linkStyle} to="/about" onClick={closeMenu}>
              About
            </NavLink>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              style={{
                backgroundColor: colores.papaya,
                color: colores.blanco,
                padding: "0.75rem 1.25rem",
                fontWeight: 700,
                textAlign: "center",
                textDecoration: "none",
                borderRadius: 0,
                marginTop: "0.5rem",
              }}
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;