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

      // ---- 1. TABLA entra girando PRIMERO ----
      gsap.from(".surfboard-svg", {
        x: -600,
        y: -400,
        rotate: -180,
        scale: 0.4,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.3,
      });

      // ---- 2. TÍTULO cae palabra por palabra ----
      gsap.from(".hero-word", {
        y: -150,
        opacity: 0,
        rotateX: -90,
        duration: 0.8,
        ease: "bounce.out",
        stagger: 0.2,
        delay: 1.5,
      });

      // ---- 3. Location badge (después de la tabla) ----
      gsap.from(".hero-location", {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power3.out",
        delay: 2.6,
      });

      // ---- 4. Flotación continua de la tabla ----
      gsap.to(".surfboard-container", {
        y: 8,
        rotate: 1.5,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 3,
      });

      // ---- 5. Subtítulo ----
      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
        delay: 3,
      });

      // ---- 6. Spans del subtítulo ----
      gsap.from(".hero-subtitle span", {
        opacity: 0,
        y: 15,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.08,
        delay: 3.2,
      });

      // ---- 7. Botón CTA ----
      gsap.from(".hero-cta", {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.7,
        ease: "back.out(1.5)",
        delay: 3.5,
      });

      // ---- 8. Trust badges ----
      gsap.from(".hero-trust-item", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.1,
        delay: 3.8,
      });
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
            "linear-gradient(180deg, rgba(14, 59, 67, 0.25) 0%, rgba(14, 59, 67, 0.1) 50%, rgba(14, 59, 67, 0.5) 100%)",
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
        {/* ───── TABLA + TÍTULO centrados ───── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginBottom: "2rem",
          }}
        >
          <div
            className="surfboard-container"
            style={{
              position: "relative",
              display: "inline-block",
              width: "100%",
              maxWidth: "760px",
              aspectRatio: "16 / 5",
              willChange: "transform",
            }}
          >
            {/* Tabla de surf SVG */}
            <svg
              className="surfboard-svg"
              viewBox="0 0 600 140"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none",
                filter: "drop-shadow(0 12px 20px rgba(0, 0, 0, 0.35))",
              }}
            >
              <defs>
                <linearGradient
                  id="surfboardGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#FFB088" />
                  <stop offset="50%" stopColor="#FF6F3C" />
                  <stop offset="100%" stopColor="#E85A2A" />
                </linearGradient>
              </defs>

              <path
                d="M 40,70 
                   C 40,30 110,10 200,10 
                   L 420,10 
                   C 520,10 575,35 575,70 
                   C 575,105 520,130 420,130 
                   L 200,130 
                   C 110,130 40,110 40,70 Z"
                fill="url(#surfboardGradient)"
                stroke="#0E3B43"
                strokeWidth="3"
                strokeLinejoin="round"
              />

              <line
                x1="55"
                y1="70"
                x2="560"
                y2="70"
                stroke="#FFFFFF"
                strokeWidth="3.5"
                opacity="0.9"
                strokeLinecap="round"
              />

              <path
                d="M 500,55 L 540,70 L 500,85 Z"
                fill="#FFFFFF"
                opacity="0.35"
              />
            </svg>

            {/* Título centrado sobre la tabla */}
            <h1
              className="display-3 fw-bold text-white mb-0"
              style={{
                ...tituloCartel,
                color: "#FFFFFF",
                perspective: 800,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                margin: 0,
                width: "100%",
                whiteSpace: "nowrap",
                fontSize: "clamp(1.8rem, 5.5vw, 4.2rem)",
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
          </div>
        </div>

        {/* ───── Location badge (arriba visualmente, pero aparece después) ───── */}
        <div
          className="hero-location d-inline-flex align-items-center gap-2 mb-5 px-3 py-2"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: 0,
          }}
        >
          <span
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Tamarindo · Guanacaste · Costa Rica
          </span>
        </div>

        {/* ───── Subtítulo ───── */}
        <p
          className="hero-subtitle lead fw-bold text-white mb-4"
          style={{
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
            maxWidth: "48ch",
            margin: "0 auto 2rem",
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
