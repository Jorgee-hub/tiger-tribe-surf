import { Helmet } from "react-helmet-async";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { colores, tituloCartel } from "../styles/theme";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ────────────────────────────────────────────────────────────
// FOTOS DE DEIVY
// ────────────────────────────────────────────────────────────
import deivy1 from "../img/about/deivy-1.jpg";
import deivy2 from "../img/about/deivy-2.jpg";
import deivy3 from "../img/about/deivy-3.jpg";
import deivy4 from "../img/about/deivy-4.jpg";
import deivy5 from "../img/about/deivy-5.jpg";
import deivy6 from "../img/about/deivy-6.jpg";

// Nuevo orden: deivy-4 primero
const deivyPhotos = [
  { src: deivy4, alt: "Deivy at Witch's Rock" },
  { src: deivy1, alt: "Deivy surfing in Tamarindo" },
  { src: deivy2, alt: "Deivy catching a wave in Costa Rica" },
  { src: deivy3, alt: "Deivy teaching surf lessons" },
  { src: deivy5, alt: "Deivy professional surfing" },
  { src: deivy6, alt: "Deivy in Guanacaste, Costa Rica" },
];

// ────────────────────────────────────────────────────────────
// WHATSAPP
// ────────────────────────────────────────────────────────────
const WHATSAPP_PHONE = "50664787288";
const WHATSAPP_MESSAGE =
  "Hi Deivy! I found you through your website and I'd like to book a surf lesson. When are you available?";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

// Intervalo del auto-advance del carrusel (en ms)
// 4000 = 4 segundos: tiempo óptimo de lectura visual
const CAROUSEL_INTERVAL = 4000;

// Índice de la foto inicial — 0 = primera foto
// Con el nuevo orden, la primera es deivy-4
const INITIAL_PHOTO_INDEX = 0;

function About() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_PHOTO_INDEX);
  const [isPaused, setIsPaused] = useState(false);
  const totalPhotos = deivyPhotos.length;

  // Avanza el carrusel automáticamente, se detiene si:
  // - hay 1 sola foto
  // - el mouse está sobre el carrusel (isPaused)
  useEffect(() => {
    if (totalPhotos <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPhotos);
    }, CAROUSEL_INTERVAL);

    return () => clearInterval(interval);
  }, [totalPhotos, isPaused]);

  // Navegación manual: el módulo (%) hace que sea circular
  const goNext = () => {
    if (totalPhotos === 0) return;
    setCurrentIndex((prev) => (prev + 1) % totalPhotos);
  };

  const goPrev = () => {
    if (totalPhotos === 0) return;
    setCurrentIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  };

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Texto y bio
      gsap.from(".back-link", {
        opacity: 0,
        x: -20,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(".about-hero-text", {
        opacity: 0,
        x: -60,
        duration: 0.9,
        ease: "power3.out",
      });

      // Carrusel: entrada
      gsap.from(".about-carousel", {
        opacity: 0,
        x: 60,
        scale: 0.95,
        duration: 0.9,
        ease: "power3.out",
      });

      // Imagen activa: zoom suave
      gsap.from(".carousel-img", {
        scale: 1.1,
        duration: 1.4,
        ease: "power2.out",
        delay: 0.4,
      });

      // Controles (flechas, dots, contador): aparecen después
      gsap.from(".carousel-control", {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.08,
        delay: 0.6,
      });

      // Stats
      gsap.from(".about-stat", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.5,
      });

      gsap.from(".about-bio", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.8,
      });

      gsap.from(".about-cta", {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.7,
        ease: "back.out(1.5)",
        delay: 1,
      });

      // Pulso sutil del dot activo
      gsap.to(".dot-active", {
        scale: 1.2,
        duration: 0.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: containerRef },
  );

  const stats = [
    { label: "20+", sub: "years teaching" },
    { label: "8", sub: "years pro surfing" },
    { label: "100%", sub: "local Costa Rican" },
  ];

  return (
    <>
      <Helmet>
        <title>Meet Deivy Porras | Tiger Tribe Surf School Tamarindo</title>
        <meta
          name="description"
          content="Meet Deivy Porras, founder of Tiger Tribe Surf School in Tamarindo. 20+ years teaching, 8 years as a professional surfer. Local Costa Rican instructor."
        />
      </Helmet>
      <div ref={containerRef} style={{ backgroundColor: colores.oceano }}>
        <section className="py-5">
          <div className="container py-5">
            <Link
              to="/"
              className="back-link text-decoration-none d-inline-block mb-4"
              style={{ color: colores.espuma }}
            >
              ← Back to home
            </Link>

            <div className="row align-items-center g-5">
              {/* Columna texto */}
              <div className="col-12 col-lg-7 about-hero-text">
                <p
                  className="small mb-3"
                  style={{
                    color: colores.espuma,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Meet the founder
                </p>

                <h1
                  className="display-3 mb-4"
                  style={{ ...tituloCartel, color: colores.blanco }}
                >
                  Deivy Sandoval
                  <br />
                  <span style={{ color: colores.papaya }}>Porras</span>
                </h1>

                <p
                  className="fs-5 mb-4"
                  style={{ color: colores.espuma, maxWidth: "60ch" }}
                >
                  Owner & Head Surf Instructor · Tiger Tribe Surf School
                </p>

                <p
                  className="about-bio fs-5 mb-5"
                  style={{ color: colores.blanco, maxWidth: "62ch" }}
                >
                  Deivy Porras, the owner of Tiger Tribe surf school in
                  Tamarindo, is native from Costa Rica and speaks very good
                  English. He has over 20 years of experience in surfing
                  lessons. In addition to lessons in the area, he surfed
                  professionally for 8 years and knows every wave in the country
                  — which makes him an excellent guide to teach you everything
                  about surfing.
                </p>

                <div className="d-flex flex-wrap gap-4 gap-md-5 mb-5">
                  {stats.map((stat, i) => (
                    <div key={i} className="about-stat">
                      <div
                        className="h2 mb-0"
                        style={{
                          ...tituloCartel,
                          color: colores.papaya,
                          fontSize: "2.5rem",
                          lineHeight: 1,
                        }}
                      >
                        {stat.label}
                      </div>
                      <div
                        style={{
                          color: colores.blanco,
                          fontSize: "0.85rem",
                          opacity: 0.85,
                          marginTop: "0.25rem",
                        }}
                      >
                        {stat.sub}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="about-cta">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn px-5 py-3 fw-bold text-decoration-none"
                    style={{
                      backgroundColor: colores.papaya,
                      color: colores.blanco,
                      borderRadius: 0,
                      border: "none",
                      fontSize: "1.05rem",
                      boxShadow: "0 10px 30px rgba(255, 111, 60, 0.4)",
                    }}
                  >
                    💬 Surf with Deivy
                  </a>
                </div>
              </div>

              {/* Columna carrusel */}
              <div className="col-12 col-lg-5 about-carousel">
                <Carousel
                  photos={deivyPhotos}
                  currentIndex={currentIndex}
                  totalPhotos={totalPhotos}
                  goNext={goNext}
                  goPrev={goPrev}
                  setIsPaused={setIsPaused}
                  setCurrentIndex={setCurrentIndex}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// ────────────────────────────────────────────────────────────
// CARRUSEL
// ────────────────────────────────────────────────────────────
function Carousel({
  photos,
  currentIndex,
  totalPhotos,
  goNext,
  goPrev,
  setIsPaused,
  setCurrentIndex,
}) {
  const hasPhotos = totalPhotos > 0;

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "4 / 5",
        border: `3px solid ${colores.arena}`,
        overflow: "hidden",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
    >
      {hasPhotos ? (
        photos.map((photo, i) => (
          <img
            key={i}
            src={photo.src}
            alt={photo.alt}
            className={i === currentIndex ? "carousel-img" : ""}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: i === currentIndex ? 1 : 0,
              transition: "opacity 0.8s ease-in-out",
              zIndex: i === currentIndex ? 1 : 0,
              willChange: "opacity, transform",
            }}
          />
        ))
      ) : (
        <PlaceholderCarousel />
      )}

      {hasPhotos && totalPhotos > 1 && (
        <>
          <ArrowButton
            direction="prev"
            onClick={goPrev}
            className="carousel-control"
          />
          <ArrowButton
            direction="next"
            onClick={goNext}
            className="carousel-control"
          />
        </>
      )}

      {hasPhotos && totalPhotos > 1 && (
        <Dots
          total={totalPhotos}
          currentIndex={currentIndex}
          onSelect={setCurrentIndex}
        />
      )}

      {hasPhotos && totalPhotos > 1 && (
        <Counter current={currentIndex + 1} total={totalPhotos} />
      )}
    </div>
  );
}

// Flecha de navegación (izquierda o derecha)
function ArrowButton({ direction, onClick, className = "" }) {
  const isPrev = direction === "prev";

  return (
    <button
      onClick={onClick}
      aria-label={isPrev ? "Previous photo" : "Next photo"}
      className={`carousel-control ${className}`}
      style={{
        position: "absolute",
        top: "50%",
        [isPrev ? "left" : "right"]: "1rem",
        transform: "translateY(-50%)",
        zIndex: 2,
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: "none",
        backgroundColor: "rgba(14, 59, 67, 0.75)",
        color: colores.blanco,
        fontSize: "1.2rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.2s ease, transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = colores.papaya;
        e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(14, 59, 67, 0.75)";
        e.currentTarget.style.transform = "translateY(-50%) scale(1)";
      }}
    >
      {isPrev ? "←" : "→"}
    </button>
  );
}

// Puntos indicadores debajo del carrusel
function Dots({ total, currentIndex, onSelect }) {
  return (
    <div
      className="carousel-control"
      style={{
        position: "absolute",
        bottom: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "0.5rem",
        zIndex: 2,
      }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          aria-label={`Go to photo ${i + 1}`}
          className={i === currentIndex ? "dot-active" : ""}
          style={{
            width: i === currentIndex ? "24px" : "8px",
            height: "8px",
            borderRadius: "4px",
            border: "none",
            backgroundColor:
              i === currentIndex ? colores.papaya : "rgba(255,255,255,0.5)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            padding: 0,
          }}
        />
      ))}
    </div>
  );
}

// Contador "1 / 6" en la esquina superior derecha
function Counter({ current, total }) {
  return (
    <div
      className="carousel-control"
      style={{
        position: "absolute",
        top: "1rem",
        right: "1rem",
        zIndex: 2,
        backgroundColor: "rgba(14, 59, 67, 0.75)",
        color: colores.blanco,
        padding: "0.3rem 0.7rem",
        fontSize: "0.85rem",
        fontWeight: 600,
      }}
    >
      {current} / {total}
    </div>
  );
}

// Placeholder cuando todavía no hay fotos cargadas
function PlaceholderCarousel() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: colores.espuma,
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div style={{ fontSize: "4rem", marginBottom: "1rem", opacity: 0.5 }}>
        🏄‍♂️
      </div>
      <p className="mb-2" style={{ opacity: 0.8, fontWeight: 600 }}>
        Fotos de Deivy
      </p>
      <p className="small mb-0" style={{ opacity: 0.5 }}>
        Agregá fotos en <code>src/img/about/</code>
      </p>
    </div>
  );
}

export default About;
