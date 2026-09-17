import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { colores, tituloCartel } from "../styles/theme";

gsap.registerPlugin(useGSAP);

function NotFound() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // ---- 1. Número 404: entra explotando desde el centro ----
      gsap.from(".notfound-number", {
        scale: 0.3,
        opacity: 0,
        rotate: -15,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.2,
      });

      // ---- 2. Número 404: flotación continua (bob) ----
      gsap.to(".notfound-number", {
        y: -15,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.2,
      });

      // ---- 3. Onda decorativa detrás del 404 ----
      gsap.from(".notfound-wave", {
        scaleX: 0,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.4,
      });

      // ---- 4. Subtítulo: cae desde arriba ----
      gsap.from(".notfound-subtitle", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.9,
      });

      // ---- 5. Mensaje: fade up ----
      gsap.from(".notfound-message", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 1.2,
      });

      // ---- 6. Botón: rebote con escala ----
      gsap.from(".notfound-cta", {
        scale: 0.7,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(2)",
        delay: 1.5,
      });

      // ---- 7. Pulso suave del botón (loop) ----
      gsap.to(".notfound-cta", {
        scale: 1.05,
        duration: 1.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2.4,
      });
    },
    { scope: containerRef }
  );

  return (
    <>
      <Helmet>
        <title>Page Not Found | Tiger Tribe Surf School</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Go back to Tiger Tribe Surf School homepage."
        />
      </Helmet>

      <section
        ref={containerRef}
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          minHeight: "80vh",
          backgroundColor: colores.oceano,
          padding: "4rem 1rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ maxWidth: "640px", position: "relative", zIndex: 1 }}>
          {/* Onda decorativa SVG detrás del 404 */}
          <svg
            className="notfound-wave"
            viewBox="0 0 400 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80%",
              height: "120px",
              zIndex: 0,
              pointerEvents: "none",
              opacity: 0.15,
            }}
          >
            <path
              d="M0,50 C50,20 100,80 150,50 C200,20 250,80 300,50 C350,20 400,80 400,50 L400,100 L0,100 Z"
              fill={colores.espuma}
            />
          </svg>

          {/* Número 404 */}
          <h1
            className="notfound-number display-1 mb-3"
            style={{
              ...tituloCartel,
              color: colores.papaya,
              fontSize: "clamp(5rem, 15vw, 10rem)",
              lineHeight: 1,
              position: "relative",
              zIndex: 1,
              display: "inline-block",
            }}
          >
            404
          </h1>

          {/* Subtítulo */}
          <h2
            className="notfound-subtitle h3 mb-4"
            style={{ ...tituloCartel, color: colores.blanco }}
          >
            This wave doesn't exist
          </h2>

          {/* Mensaje */}
          <p
            className="notfound-message fs-5 mb-5"
            style={{
              color: colores.espuma,
              maxWidth: "50ch",
              margin: "0 auto",
            }}
          >
            Looks like you paddled out too far. Let's get you back to the
            lineup.
          </p>

          {/* Botón CTA */}
          <Link
            to="/"
            className="notfound-cta btn px-5 py-3 fw-bold text-decoration-none"
            style={{
              backgroundColor: colores.papaya,
              color: colores.blanco,
              borderRadius: 0,
              border: "none",
              boxShadow: "0 10px 30px rgba(255, 111, 60, 0.4)",
              display: "inline-block",
            }}
          >
            🌊 Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}

export default NotFound;