import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import heroVideo from "../img/hero-video.mp4";
import { colores } from "../styles/theme";

gsap.registerPlugin(useGSAP);

const tituloCartel = {
  fontFamily: "'Anton', sans-serif",
  textTransform: "uppercase",
  letterSpacing: "0.02em",
  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
};

const WHATSAPP_PHONE = "50664787288";
const WHATSAPP_MESSAGE =
  "Hi! I found you through your website and I'd like to book a surf lesson. When are you available?";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

function Hero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // ---- 1. Location badge ----
      tl.from(".hero-location", {
        opacity: 0,
        y: -15,
        duration: 0.6,
      })

        // ---- 2. TÍTULO cae palabra por palabra ----
        .from(
          ".hero-word",
          {
            y: -80,
            opacity: 0,
            duration: 0.7,
            ease: "bounce.out",
            stagger: 0.15,
          },
          0.3,
        )

        // ---- 3. Subtítulo ----
        .from(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          1.0,
        )

        // ---- 4. Spans del subtítulo ----
        .from(
          ".hero-subtitle span",
          {
            opacity: 0,
            y: 10,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.06,
          },
          1.2,
        )

        // ---- 5. Botón CTA ----
        .from(
          ".hero-cta",
          {
            opacity: 0,
            y: 20,
            scale: 0.9,
            duration: 0.5,
            ease: "back.out(1.5)",
          },
          1.5,
        )

        // ---- 6. Trust badges ----
        .from(
          ".hero-trust-item",
          {
            opacity: 0,
            y: 15,
            duration: 0.5,
            stagger: 0.08,
          },
          1.8,
        );
    },
    { scope: containerRef },
  );

  const words = ["Tiger", "Tribe", "Surf"];

  const trustBadges = [
    { label: "20+ Years", sub: "of experience" },
    { label: "Certified", sub: "surf instructor" },
    { label: "5-Star", sub: "rated by surfers" },
  ];

  return (
    <section
      ref={containerRef}
      className="hero-section d-flex align-items-center justify-content-center text-center text-white"
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      {/* Video de fondo */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          willChange: "transform",
        }}
      />

      {/* Overlay oscuro con gradiente */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(14, 59, 67, 0.4) 0%, rgba(14, 59, 67, 0.25) 50%, rgba(14, 59, 67, 0.6) 100%)",
          zIndex: 1,
        }}
      />

      {/* Contenido */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        {/* ───── Location badge ───── */}
        <div
          className="hero-location d-inline-flex align-items-center gap-2 mb-4 px-3 py-2"
          style={{
            backgroundColor: "rgba(14, 59, 67, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            borderRadius: 0,
          }}
        >
          <span
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Tamarindo · Guanacaste · Costa Rica
          </span>
        </div>

        {/* ───── Título ───── */}
        <h1
          className="display-2 fw-bold mb-4"
          style={{
            ...tituloCartel,
            color: "#FFFFFF",
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            lineHeight: 1.05,
          }}
          aria-label="Tiger Tribe Surf"
        >
          {words.map((word, i) => (
            <span key={i} style={{ display: "inline-block" }}>
              <span
                className="hero-word"
                style={{
                  display: "inline-block",
                  willChange: "transform, opacity",
                }}
                aria-hidden="true"
              >
                {word}
              </span>
              {i < words.length - 1 && (
                <span style={{ display: "inline-block" }}>&nbsp;</span>
              )}
            </span>
          ))}
        </h1>

        {/* ───── Subtítulo ───── */}
        <p
          className="hero-subtitle fs-4 mb-5 text-white"
          style={{
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
            maxWidth: "48ch",
            margin: "0 auto 2.5rem",
            fontWeight: 500,
          }}
        >
          <span className="text-primary">Ride the</span> warm waters{" "}
          <span className="text-danger">of Guanacaste</span> with local{" "}
          <span className="text-primary">instructors</span>
        </p>

        {/* ───── Botón CTA ───── */}
        <div className="d-flex justify-content-center mb-5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta btn px-5 py-3 fw-bold text-decoration-none"
            style={{
              backgroundColor: colores.papaya,
              color: colores.blanco,
              borderRadius: 0,
              border: "none",
              fontSize: "1.05rem",
              boxShadow: "0 10px 30px rgba(255, 111, 60, 0.4)",
            }}
          >
            💬 Book Your Lesson
          </a>
        </div>

        {/* ───── Trust badges ───── */}
        <div className="d-flex flex-wrap justify-content-center gap-5">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="hero-trust-item"
              style={{ color: colores.blanco, textAlign: "center" }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  lineHeight: 1.2,
                  letterSpacing: "0.02em",
                }}
              >
                {badge.label}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  opacity: 0.75,
                  lineHeight: 1.2,
                  marginTop: "2px",
                }}
              >
                {badge.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;