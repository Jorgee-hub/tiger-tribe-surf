import { Helmet } from "react-helmet-async";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import grupoLesson from "../img/lessons/grupoLesson.jpg";
import { colores, tituloCartel } from "../styles/theme";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function GroupLesson() {
  const containerRef = useRef(null);

  const incluye = [
    "Shared instruction with Deivy or a certified surf coach",
    "Surfboard and rash guard included for the entire session",
    "Group beach safety briefing and pop-up practice on the sand",
    "A fun, supportive environment to learn alongside other surfers",
    "Great option for families, friends, or solo travelers meeting people",
  ];

  const pasos = [
    {
      titulo: "Beach Briefing",
      texto:
        "We team up on the sand to practice your stance, understand the current, and learn how to handle the board safely around others.",
    },
    {
      titulo: "Catching Waves Together",
      texto:
        "We head into the water. Your instructor helps position everyone, cheering you on and pushing you into your first waves.",
    },
    {
      titulo: "Group Surf & Fun",
      texto:
        "Share the stoke with your group! We provide continuous feedback and corrections between waves so everyone improves.",
    },
  ];

  useGSAP(
    () => {
      // 1. Link "Back to home"
      gsap.from(".back-link", {
        opacity: 0,
        x: -20,
        duration: 0.6,
        ease: "power3.out",
      });

      // 2. Hero de la clase — texto desde la izquierda
      gsap.from(".lesson-hero-text", {
        opacity: 0,
        x: -60,
        duration: 0.9,
        ease: "power3.out",
      });

      // 3. Imagen del hero desde la derecha
      gsap.from(".lesson-hero-img", {
        opacity: 0,
        x: 60,
        scale: 0.95,
        duration: 0.9,
        ease: "power3.out",
      });

      // 4. Stats (Price / Duration / Group size) — aparecen escalonadas
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

      // 6. Items de "What's Included" — escalonados
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

      // 8. Tarjetas de pasos — escalonadas con rebote suave
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

      // 9. CTA final
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

      // 10. Hover suave en las tarjetas de pasos
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
        <title>Group Surf Lessons in Tamarindo | Tiger Tribe</title>
        <meta
          name="description"
          content="Join a fun group surf lesson in Tamarindo. Small groups led by native Costa Rican instructors. Perfect for friends, families and solo travelers."
        />
      </Helmet>
      <div ref={containerRef} style={{ backgroundColor: colores.oceano }}>
        {/* Hero de la clase */}
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
                  Group Lesson
                </h1>
                <p className="fs-4 mb-4" style={{ color: colores.espuma }}>
                  Learn together, share the wave, and double the fun.
                </p>
                <p
                  className="fs-5"
                  style={{ color: colores.blanco, maxWidth: "62ch" }}
                >
                  Our group lessons are perfect for friends, families, or solo
                  travelers who want to experience the thrill of surfing in a
                  dynamic and social environment. We keep our
                  student-to-instructor ratios low to ensure that everyone gets
                  enough attention, plenty of assistance in the water, and stays
                  completely safe.
                </p>

                <div className="d-flex flex-wrap gap-4 mt-4">
                  <div className="lesson-stat">
                    <p className="small mb-1" style={{ color: colores.espuma }}>
                      Price
                    </p>
                    <p className="h3 mb-0" style={{ color: colores.blanco }}>
                      $40 / person
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
                      Group size
                    </p>
                    <p className="h3 mb-0" style={{ color: colores.blanco }}>
                      3-10
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-5 lesson-hero-img">
                <img
                  src={grupoLesson}
                  alt="Group surf lesson in Tamarindo"
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
              Ready to Join the Tribe?
            </h2>
            <p className="fs-5 mb-4" style={{ color: colores.espuma }}>
              Message us on WhatsApp to check availability for your group.
            </p>
            <a
              href="https://wa.me/50664787288?text=Hi!%20I%20found%20you%20through%20your%20website%20and%20I'd%20like%20to%20book%20a%20group%20surf%20lesson.%20When%20are%20you%20available%3F"
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

export default GroupLesson;
