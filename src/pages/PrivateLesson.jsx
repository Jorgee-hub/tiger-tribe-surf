import { Helmet } from "react-helmet-async";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import privadaLesson from "../img/lessons/privadaLesson.jpg";
import { colores, tituloCartel } from "../styles/theme";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function PrivateLesson() {
  const containerRef = useRef(null);

  const incluye = [
    "One-on-one instruction with Deivy or a certified surf coach",
    "Surfboard and rash guard included for the entire session",
    "Personalized beach safety briefing and pop-up practice",
    "Feedback tailored to your level — from first-timer to intermediate",
    "Flexible scheduling around your trip",
  ];

  const pasos = [
    {
      titulo: "Personal Briefing",
      texto:
        "We start on the sand with a custom warm-up, stance practice, and a safety briefing tailored to your experience level.",
    },
    {
      titulo: "Paddle & Pop-Up",
      texto:
        "Your coach works with you one-on-one on paddling technique, positioning, and timing so you catch your first wave with confidence.",
    },
    {
      titulo: "Ride & Refine",
      texto:
        "We give you continuous feedback after each wave so you progress fast — with plenty of stoke along the way.",
    },
  ];

  useGSAP(
    () => {
      // 1. Back link
      gsap.from(".back-link", {
        opacity: 0,
        x: -20,
        duration: 0.6,
        ease: "power3.out",
      });

      // 2. Hero texto desde la izquierda
      gsap.from(".lesson-hero-text", {
        opacity: 0,
        x: -60,
        duration: 0.9,
        ease: "power3.out",
      });

      // 3. Imagen desde la derecha
      gsap.from(".lesson-hero-img", {
        opacity: 0,
        x: 60,
        scale: 0.95,
        duration: 0.9,
        ease: "power3.out",
      });

      // 4. Stats escalonadas
      gsap.from(".lesson-stat", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.4,
      });

      // 5. Título "What's Included"
      gsap.from(".included-title", {
        opacity: 0,
        y: -30,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".included-section",
          start: "top 80%",
        },
      });

      // 6. Items de incluidos — escalonados
      gsap.from(".included-item", {
        opacity: 0,
        x: -40,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".included-section",
          start: "top 75%",
        },
      });

      // 7. Título "How The Session Goes"
      gsap.from(".steps-title", {
        opacity: 0,
        y: -30,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".steps-section",
          start: "top 80%",
        },
      });

      // 8. Step cards con rebote
      gsap.from(".step-card", {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 0.7,
        ease: "back.out(1.4)",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".steps-section",
          start: "top 75%",
        },
      });

      // 9. CTA
      gsap.from(".cta-block > *", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".cta-block",
          start: "top 80%",
        },
      });

      // 10. Hover en step cards
      const stepCards = gsap.utils.toArray(".step-card");
      stepCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -8, duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <>
      <Helmet>
        <title>Private Surf Lessons in Tamarindo | Tiger Tribe</title>
        <meta
          name="description"
          content="Book a private surf lesson in Tamarindo with a certified local instructor. Personalized attention for all levels. If you don't ride a wave, you don't pay."
        />
      </Helmet>
      <div ref={containerRef} style={{ backgroundColor: colores.oceano }}>
        {/* Hero */}
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
              <div className="col-12 col-lg-7 lesson-hero-text">
                <h1 className="display-3 mb-3" style={tituloCartel}>
                  Private Lesson
                </h1>
                <p className="fs-4 mb-4" style={{ color: colores.espuma }}>
                  Surf at your level, improve at your pace.
                </p>
                <p
                  className="fs-5"
                  style={{ color: colores.blanco, maxWidth: "62ch" }}
                >
                  Private lessons mean one student, one instructor — full
                  attention, faster progress, and a session built entirely
                  around you. From your first pop-up to your first green wave,
                  we're with you every step. And yes —{" "}
                  <strong>if you don't ride a wave, you don't pay.</strong>
                </p>

                <div className="d-flex flex-wrap gap-4 mt-4">
                  <div className="lesson-stat">
                    <p className="small mb-1" style={{ color: colores.espuma }}>
                      Price
                    </p>
                    <p className="h3 mb-0" style={{ color: colores.blanco }}>
                      $55 / person
                    </p>
                  </div>
                  <div className="lesson-stat">
                    <p className="small mb-1" style={{ color: colores.espuma }}>
                      Duration
                    </p>
                    <p className="h3 mb-0" style={{ color: colores.blanco }}>
                      1.5 hours
                    </p>
                  </div>
                  <div className="lesson-stat">
                    <p className="small mb-1" style={{ color: colores.espuma }}>
                      Ratio
                    </p>
                    <p className="h3 mb-0" style={{ color: colores.blanco }}>
                      1 student / 1 coach
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-5 lesson-hero-img">
                <img
                  src={privadaLesson}
                  alt="Private surf lesson in Tamarindo"
                  className="img-fluid w-100"
                  style={{
                    border: `3px solid ${colores.arena}`,
                    objectFit: "cover",
                    aspectRatio: "4 / 5",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="included-section py-5">
          <div className="container">
            <h2 className="included-title display-5 mb-5" style={tituloCartel}>
              What's Included
            </h2>
            <div className="row g-4">
              {incluye.map((item) => (
                <div key={item} className="col-12 col-md-6 included-item">
                  <div className="d-flex gap-3 align-items-start">
                    <span
                      className="flex-shrink-0 d-inline-block"
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: colores.papaya,
                        marginTop: "0.5rem",
                      }}
                    />
                    <p className="fs-5 mb-0" style={{ color: colores.blanco }}>
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo es la sesión */}
        <section className="steps-section py-5">
          <div className="container">
            <h2 className="steps-title display-5 mb-5" style={tituloCartel}>
              How The Session Goes
            </h2>
            <div className="row g-4">
              {pasos.map((paso, indice) => (
                <div key={paso.titulo} className="col-12 col-md-4">
                  <div
                    className="step-card h-100 p-4"
                    style={{
                      backgroundColor: colores.blanco,
                      borderTop: `4px solid ${colores.papaya}`,
                    }}
                  >
                    <p
                      className="h1 mb-3"
                      style={{ ...tituloCartel, color: colores.papaya }}
                    >
                      0{indice + 1}
                    </p>
                    <h3
                      className="h5 mb-3"
                      style={{ color: colores.oceano, fontWeight: 700 }}
                    >
                      {paso.titulo}
                    </h3>
                    <p className="mb-0" style={{ color: colores.oceano }}>
                      {paso.texto}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-5 text-center">
          <div className="container py-4 cta-block">
            <h2 className="display-5 mb-3" style={tituloCartel}>
              Ready to Catch Your Wave?
            </h2>
            <p className="fs-5 mb-4" style={{ color: colores.espuma }}>
              Message us on WhatsApp to book your private lesson.
            </p>
            <a
              href="https://wa.me/50664787288?text=Hi!%20I%20found%20you%20through%20your%20website%20and%20I'd%20like%20to%20book%20a%20private%20surf%20lesson.%20When%20are%20you%20available%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="btn px-5 py-3 fw-bold text-decoration-none"
              style={{
                backgroundColor: colores.papaya,
                color: colores.blanco,
                borderRadius: 0,
                border: "none",
              }}
            >
              Book This Lesson
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default PrivateLesson;
