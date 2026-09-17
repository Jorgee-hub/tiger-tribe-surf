import { Helmet } from "react-helmet-async";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { colores, tituloCartel } from "../styles/theme";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Imports de las 18 fotos de la galería
import surf01 from "../img/gallery/surf-01.jpg";
import surf02 from "../img/gallery/surf-02.jpg";
import surf03 from "../img/gallery/surf-03.jpg";
import surf04 from "../img/gallery/surf-04.jpg";
import surf05 from "../img/gallery/surf-05.jpg";
import surf06 from "../img/gallery/surf-06.jpg";
import surf07 from "../img/gallery/surf-07.jpg";
import surf08 from "../img/gallery/surf-08.jpg";
import surf09 from "../img/gallery/surf-09.jpg";
import surf10 from "../img/gallery/surf-10.jpg";
import surf11 from "../img/gallery/surf-11.jpg";
import surf12 from "../img/gallery/surf-12.jpg";
import surf13 from "../img/gallery/surf-13.jpg";
import surf14 from "../img/gallery/surf-14.jpg";
import surf15 from "../img/gallery/surf-15.jpg";
import surf16 from "../img/gallery/surf-16.jpg";
import surf17 from "../img/gallery/surf-17.jpg";
import surf18 from "../img/gallery/surf-18.jpg";

const fotos = [
  { src: surf01, alt: "Surf lesson in Tamarindo" },
  { src: surf02, alt: "Surfing in Costa Rica" },
  { src: surf03, alt: "Tiger Tribe surf session" },
  { src: surf04, alt: "Beginner surfer catching a wave" },
  { src: surf05, alt: "Group surf lesson" },
  { src: surf06, alt: "Sunset surf session" },
  { src: surf07, alt: "Tamarindo beach waves" },
  { src: surf08, alt: "Surf coach with student" },
  { src: surf09, alt: "Riding a wave in Guanacaste" },
  { src: surf10, alt: "Tiger Tribe surf crew" },
  { src: surf11, alt: "Surfing Playa Grande" },
  { src: surf12, alt: "Standing up on a surfboard" },
  { src: surf13, alt: "Tamarindo surf vibes" },
  { src: surf14, alt: "Surfing in Tamarindo" },
  { src: surf15, alt: "Tiger Tribe surf lesson" },
  { src: surf16, alt: "Catching waves in Guanacaste" },
  { src: surf17, alt: "Surf session in Costa Rica" },
  { src: surf18, alt: "Tamarindo beach day" },
];

function Gallery() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // 1. Animación del título
      gsap.from(".gallery-title", {
        opacity: 0,
        y: -40,
        duration: 0.8,
        ease: "power3.out",
      });

      // 2. Animación escalonada de las fotos al entrar en viewport
      gsap.from(".gallery-item", {
        opacity: 0,
        y: 60,
        scale: 0.9,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // 3. Hover con zoom suave en cada imagen
      const items = gsap.utils.toArray(".gallery-item img");
      items.forEach((img) => {
        const parent = img.parentElement;

        parent.addEventListener("mouseenter", () => {
          gsap.to(img, { scale: 1.08, duration: 0.4, ease: "power2.out" });
        });

        parent.addEventListener("mouseleave", () => {
          gsap.to(img, { scale: 1, duration: 0.4, ease: "power2.out" });
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <>
    <Helmet>
      <title>Surf Gallery | Tiger Tribe Tamarindo, Costa Rica</title>
      <meta
        name="description"
        content="See real photos from our surf lessons and surf trips in Tamarindo, Costa Rica. Watch our students catching waves in Guanacaste."
      />
    </Helmet>
    <section
      ref={containerRef}
      className="py-5"
      style={{ backgroundColor: colores.oceano, minHeight: "100vh" }}
    >
      <div className="container py-5">
        <h1
          className="gallery-title display-4 mb-5 text-center"
          style={{ ...tituloCartel, color: colores.blanco }}
        >
          Gallery
        </h1>
        <div className="gallery-grid row g-3">
          {fotos.map((foto, i) => (
            <div
              key={i}
              className="gallery-item col-12 col-sm-6 col-lg-4"
              style={{ overflow: "hidden", borderRadius: "4px" }}
            >
              <img
                src={foto.src}
                alt={foto.alt}
                className="img-fluid w-100"
                style={{
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  border: `2px solid ${colores.espuma}`,
                  display: "block",
                  willChange: "transform",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Gallery;