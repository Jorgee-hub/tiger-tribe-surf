import { Helmet } from "react-helmet-async";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/Hero";
import LessonCard from "../components/LessonCard";
import TripCard from "../components/TripCard";
import grupoLesson from "../img/lessons/grupoLesson.jpg";
import privadaLesson from "../img/lessons/privadaLesson.jpg";
import rocaBruja from "../img/trips/RocaBruja.jpg";
import avellanas from "../img/trips/avellanas.jpg";
import playaGrande from "../img/trips/playaGrande.jpg";
import { Link } from "react-router-dom";
import { colores, tituloCartel } from "../styles/theme";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ────────────────────────────────────────────────────────────
// WHATSAPP
// ────────────────────────────────────────────────────────────
const WHATSAPP_PHONE = "50664787288";
const WHATSAPP_TRIPS_MESSAGE =
  "Hi! I found you through your website and I'd like to book a surf trip. Could you tell me which trips are available and where you go?";
const WHATSAPP_TRIPS_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_TRIPS_MESSAGE
)}`;

// ────────────────────────────────────────────────────────────
// REVIEWS REALES — Google Reviews
// ────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    name: "StephB",
    title: "Best on the beach!",
    meta: "Mar 2026 · Friends",
    quote:
      "Best surf school on the beach. Instructors were great… patient and knew their stuff. Also made it fun for our guys. Would highly recommend!",
  },
  {
    name: "Lesley E",
    title: "Hang 10!!!",
    meta: "Apr 2025",
    quote:
      "So much fun! There were 5 in our group ranging from 15 to 52! And all of us caught a wave. The staff was very friendly and so helpful in the water!",
  },
  {
    name: "Camper51964234619",
    title: "Professional, friendly, affordable and fun!",
    meta: "Dec 2024 · Couples",
    quote:
      "Davi's lesson was 5 star! He and his helper Juan Carlo gave me and my wife a great lesson and got us up and riding in our first lesson. They were positive, encouraging, and really helpful. We had never surfed before but still caught waves and had a blast. Look for the black 'Surf Lessons' banner at the estuary end of the beach - they're the best!",
  },
];

// Divide un texto en palabras con máscara (overflow hidden)
function SplitHeading({ text, className = "", style = {} }) {
  const words = text.split(" ");
  return (
    <h2 className={className} style={style}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "top",
          }}
        >
          <span className="split-word" style={{ display: "inline-block" }}>
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </h2>
  );
}

function Home() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // ---- 1. Wave divider ----
      const waveLayers = gsap.utils.toArray(".wave-layer");
      waveLayers.forEach((layer, i) => {
        const duration = [10, 14, 18][i];
        const direction = i % 2 === 0 ? -1 : 1;

        gsap.fromTo(
          layer,
          { xPercent: direction > 0 ? -50 : 0 },
          {
            xPercent: direction > 0 ? 0 : -50,
            duration,
            ease: "none",
            repeat: -1,
          },
        );
      });

      gsap.to(".wave-divider", {
        y: -6,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.fromTo(
        ".wave-divider",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: { trigger: ".wave-divider", start: "top 90%" },
        },
      );

      // ---- 2. About + Lessons ----
      const tlAbout = gsap.timeline({
        scrollTrigger: { trigger: ".about-section", start: "top 75%" },
      });

      tlAbout
        .from(".about-text .split-word", {
          yPercent: 120,
          opacity: 0,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.04,
        })
        .from(
          ".about-text p",
          { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        )
        .from(
          ".lessons-block .split-word",
          {
            yPercent: 120,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
            stagger: 0.04,
          },
          "-=0.6",
        )
        .fromTo(
          ".lesson-card-item",
          { opacity: 0, y: 40, scale: 0.95, clipPath: "inset(0 0 100% 0)" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.15,
          },
          "-=0.4",
        );

      // ---- 3. Trips ----
      const tlTrips = gsap.timeline({
        scrollTrigger: { trigger: ".trips-section", start: "top 78%" },
      });

      tlTrips
        .from(".trips-title .split-word", {
          yPercent: 120,
          opacity: 0,
          duration: 0.7,
          ease: "power4.out",
          stagger: 0.05,
        })
        .from(
          ".trips-subtitle",
          { opacity: 0, y: 15, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        )
        .from(
          ".trip-card-item",
          {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.25,
          },
          "-=0.35",
        )
        .from(
          ".trips-cta",
          {
            opacity: 0,
            y: 30,
            scale: 0.9,
            duration: 0.7,
            ease: "back.out(1.5)",
          },
          "-=0.2",
        );

      // ---- 4. Blobs ----
      gsap.utils.toArray(".trip-blob").forEach((blob, i) => {
        gsap.to(blob, {
          y: i % 2 === 0 ? 25 : -25,
          x: i % 2 === 0 ? -15 : 15,
          duration: 4 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // ---- 5. Reviews ----
      const tlReviews = gsap.timeline({
        scrollTrigger: { trigger: ".reviews-section", start: "top 78%" },
      });

      tlReviews
        .from(".reviews-title .split-word", {
          yPercent: 120,
          opacity: 0,
          duration: 0.7,
          ease: "power4.out",
          stagger: 0.05,
        })
        .from(
          ".reviews-subtitle",
          { opacity: 0, y: 15, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        )
        .from(
          ".review-card-item",
          {
            opacity: 0,
            y: 50,
            rotate: -2,
            duration: 0.7,
            ease: "back.out(1.4)",
            stagger: 0.15,
          },
          "-=0.3",
        );
    },
    { scope: containerRef },
  );

  const handleSpotlightMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
    card.style.setProperty("--spot-opacity", "1");
  };

  const handleSpotlightLeave = (e) => {
    e.currentTarget.style.setProperty("--spot-opacity", "0");
  };

  return (
    <>
      <Helmet>
        <title>Tiger Tribe Surf School | Surf Lessons in Tamarindo, Costa Rica</title>
        <meta
          name="description"
          content="Learn to surf in Tamarindo with certified local instructors. Private & group lessons, surf trips across Costa Rica, board rentals. Book on WhatsApp!"
        />
      </Helmet>
    <div ref={containerRef}>
      <Hero />

      {/* Wave divider */}
      <div
        className="wave-divider"
        style={{
          position: "relative",
          width: "100%",
          height: "120px",
          overflow: "hidden",
          backgroundColor: colores.oceano,
          lineHeight: 0,
        }}
      >
        <svg
          className="wave-layer"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "200%",
            height: "100%",
            willChange: "transform",
          }}
        >
          <path
            d="M0,60 C180,20 360,100 540,60 C720,20 900,100 1080,60 C1260,20 1440,100 1620,60 C1800,20 1980,100 2160,60 C2340,20 2520,100 2700,60 C2880,20 3060,100 3240,60 L3240,120 L0,120 Z"
            fill="#1A5A6B"
            opacity="0.75"
          />
        </svg>

        <svg
          className="wave-layer"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "200%",
            height: "100%",
            willChange: "transform",
          }}
        >
          <path
            d="M0,70 C180,30 360,110 540,70 C720,30 900,110 1080,70 C1260,30 1440,110 1620,70 C1800,30 1980,110 2160,70 C2340,30 2520,110 2700,70 C2880,30 3060,110 3240,70 L3240,120 L0,120 Z"
            fill="#4FB8B0"
            opacity="0.85"
          />
        </svg>

        <svg
          className="wave-layer"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "200%",
            height: "100%",
            willChange: "transform",
          }}
        >
          <path
            d="M0,80 C180,40 360,120 540,80 C720,40 900,120 1080,80 C1260,40 1440,120 1620,80 C1800,40 1980,120 2160,80 C2340,40 2520,120 2700,80 C2880,40 3060,120 3240,80 L3240,120 L0,120 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* About + Lessons */}
      <section
        className="about-section py-5"
        style={{ backgroundColor: colores.oceano }}
      >
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6 about-text">
              <SplitHeading
                text="Come surf with us!"
                className="display-5 mb-4"
                style={{ ...tituloCartel, color: colores.blanco }}
              />
              <p
                className="fs-5"
                style={{ color: colores.blanco, maxWidth: "62ch" }}
              >
                Tamarindo is one of the best places in the world to learn to
                surf — warm water, gentle waves, and a laid-back vibe that makes
                every session feel easy. Tiger Tribe is not a franchise, not a
                big brand, and not a surf factory. We're a local crew born and
                raised in Guanacaste, and we keep it that way: small groups,
                native instructors, and a genuine love for sharing the waves we
                grew up with. Whether it's your first time on a board or your
                hundredth, we'll teach you the way locals do.
              </p>
            </div>

            <div className="col-12 col-lg-6 lessons-block">
              <SplitHeading
                text="Surf Lessons"
                className="display-5 mb-4"
                style={{ ...tituloCartel, color: colores.blanco }}
              />
              <div className="row g-3">
                <div className="col-12 col-sm-6 lesson-card-item">
                  <Link
                    to="/lessons/private"
                    style={{ textDecoration: "none" }}
                  >
                    <LessonCard
                      title="Private Lesson"
                      price="$55 / person"
                      duration="1.5 hours"
                      image={privadaLesson}
                    />
                  </Link>
                </div>
                <div className="col-12 col-sm-6 lesson-card-item">
                  <Link to="/lessons/group" style={{ textDecoration: "none" }}>
                    <LessonCard
                      title="Group lesson"
                      price="$40 / person"
                      duration="1.5 hours"
                      image={grupoLesson}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trips */}
      <section
        id="trips"
        className="trips-section py-5"
        style={{
          backgroundColor: colores.blanco,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="trip-blob"
          style={{
            position: "absolute",
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: colores.papaya,
            opacity: 0.12,
            filter: "blur(50px)",
            top: "-60px",
            left: "-80px",
            zIndex: 0,
          }}
        />
        <div
          className="trip-blob"
          style={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: colores.oceano,
            opacity: 0.08,
            filter: "blur(60px)",
            bottom: "-100px",
            right: "-100px",
            zIndex: 0,
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <SplitHeading
            text="Surf Trips"
            className="trips-title display-5 mb-3"
            style={{ ...tituloCartel, color: colores.oceano }}
          />
          <p
            className="trips-subtitle fs-5 mb-5"
            style={{ color: colores.oceano, maxWidth: "62ch", opacity: 0.85 }}
          >
            We organize surf trips anywhere in Costa Rica — just ask us on
            WhatsApp about any specific spot. Below are a few of our favorites.
          </p>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4 trip-card-item">
              <TripCard
                title="Witch's Rock"
                description="4x4 trip to the legendary Witch's Rock in Santa Rosa National Park — powerful, consistent waves for intermediate to advanced surfers. Includes transport and guide."
                price="$100 / person"
                duration="Full day"
                image={rocaBruja}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 trip-card-item">
              <TripCard
                title="Playa Avellanas"
                description="Surf Playa Avellanas — a long, sandy-bottom beach break with consistent waves for all levels. Includes transport and guide, with a laid-back beach-day atmosphere."
                price="$50 / person"
                duration="4 hours"
                image={avellanas}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 trip-card-item">
              <TripCard
                title="Playa Grande"
                description="Beach break waves just across the estuary from Tamarindo, inside Las Baulas National Park. Consistent, laid-back, and great for all levels. Includes transport and guide."
                price="$50 / person"
                duration="4 hours"
                image={playaGrande}
              />
            </div>
          </div>

          {/* CTA — Reservar Surf Trip */}
          <div className="trips-cta text-center mt-5">
            <a
              href={WHATSAPP_TRIPS_URL}
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
              💬 Book a Surf Trip
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        id="reviews"
        className="reviews-section py-5"
        style={{ backgroundColor: colores.oceano }}
      >
        <div className="container">
          <SplitHeading
            text="What Surfers Say"
            className="reviews-title display-5 mb-3 text-center"
            style={{ ...tituloCartel, color: colores.blanco }}
          />
          <p
            className="reviews-subtitle text-center mb-5"
            style={{ color: colores.espuma, opacity: 0.9 }}
          >
            Real reviews from TripAdvisor ⭐ 5.0
          </p>
          <div className="row g-4">
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="col-12 col-md-4 review-card-item"
              >
                <div
                  className="h-100 p-4 position-relative review-card d-flex flex-column"
                  onMouseMove={handleSpotlightMove}
                  onMouseLeave={handleSpotlightLeave}
                  style={{
                    backgroundColor: colores.blanco,
                    border: `2px solid ${colores.papaya}`,
                    position: "relative",
                    overflow: "hidden",
                    "--spot-x": "50%",
                    "--spot-y": "50%",
                    "--spot-opacity": "0",
                  }}
                >
                  {/* Spotlight */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      background: `radial-gradient(circle 180px at var(--spot-x) var(--spot-y), ${colores.papaya}22, transparent 70%)`,
                      opacity: "var(--spot-opacity)",
                      transition: "opacity 0.3s ease",
                    }}
                  />

                  {/* Estrellas */}
                  <span
                    className="position-absolute d-inline-block px-2 py-1 small fw-bold"
                    style={{
                      top: "-14px",
                      right: "16px",
                      backgroundColor: colores.papaya,
                      color: colores.blanco,
                      transform: "rotate(4deg)",
                      zIndex: 1,
                    }}
                  >
                    ★★★★★
                  </span>

                  {/* Título de la review */}
                  <p
                    className="fw-bold mb-3"
                    style={{
                      color: colores.papaya,
                      position: "relative",
                      fontSize: "1.05rem",
                    }}
                  >
                    {review.title}
                  </p>

                  {/* Texto de la review */}
                  <p
                    className="mb-4 flex-grow-1"
                    style={{ color: colores.oceano, position: "relative" }}
                  >
                    &ldquo;{review.quote}&rdquo;
                  </p>

                  {/* Nombre */}
                  <p
                    className="fw-bold mb-0"
                    style={{ color: colores.oceano, position: "relative" }}
                  >
                    {review.name}
                  </p>

                  {/* Metadata (fecha · tipo) */}
                  <p
                    className="small mb-0"
                    style={{
                      color: colores.oceano,
                      opacity: 0.7,
                      position: "relative",
                    }}
                  >
                    {review.meta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
export default Home;