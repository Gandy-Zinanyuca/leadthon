import { useMemo, useState } from "preact/hooks";
import { AREAS } from "../data.js";
import { QUIZ_QUESTIONS, computeResult } from "../quiz.js";
import { APPLICATION_FORM_URL } from "../config.js";

export function EligeTuEquipo() {
  // step: "start" | number (índice de pregunta) | "result"
  const [step, setStep] = useState("start");
  const [respuestas, setRespuestas] = useState([]);

  const resultadoAreas = useMemo(() => {
    if (step !== "result") return [];
    return computeResult(respuestas)
      .map((id) => AREAS.find((a) => a.id === id))
      .filter(Boolean);
  }, [step, respuestas]);

  function empezar() {
    setRespuestas([]);
    setStep(0);
  }

  function elegirOpcion(opcion) {
    const siguientes = [...respuestas, opcion];
    setRespuestas(siguientes);
    if (step + 1 < QUIZ_QUESTIONS.length) {
      setStep(step + 1);
    } else {
      setStep("result");
    }
  }

  function atras() {
    if (typeof step === "number" && step > 0) {
      setRespuestas(respuestas.slice(0, -1));
      setStep(step - 1);
    }
  }

  if (step === "start") {
    return (
      <section class="hero">
        <div class="container">
          <span class="kicker">Elige tu equipo</span>
          <h1>¿A qué área de LEAD le quedarías mejor?</h1>
          <p>
            Responde {QUIZ_QUESTIONS.length} preguntas cortas y te sugerimos a qué
            pilar o departamento podrías encajar. Nada de lo que respondas aquí se
            guarda ni se envía — es solo una guía para ayudarte a decidir a qué área
            postular.
          </p>
          <div class="hero__actions">
            <button type="button" class="btn btn--solid" onClick={empezar}>
              Empezar →
            </button>
            <a class="btn" href="/areas">
              Prefiero ver todas las áreas
            </a>
          </div>
          <p class="quiz-disclaimer quiz-disclaimer--light">
            Versión inicial del quiz — preguntas sujetas a cambio mientras se define
            el set definitivo con Marketing/RR.HH.
          </p>
        </div>
      </section>
    );
  }

  if (typeof step === "number") {
    const pregunta = QUIZ_QUESTIONS[step];
    return (
      <section class="section quiz-question">
        <div class="container">
          <div class="quiz-progress">
            <span>
              Pregunta {step + 1} de {QUIZ_QUESTIONS.length}
            </span>
            <div class="quiz-progress__bar">
              <div
                class="quiz-progress__fill"
                style={{ width: `${((step + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          <h2>{pregunta.pregunta}</h2>

          <div class="quiz-options">
            {pregunta.opciones.map((opcion) => (
              <button
                key={opcion.texto}
                type="button"
                class="quiz-option"
                onClick={() => elegirOpcion(opcion)}
              >
                {opcion.texto}
              </button>
            ))}
          </div>

          {step > 0 && (
            <button type="button" class="quiz-back" onClick={atras}>
              ← Pregunta anterior
            </button>
          )}
        </div>
      </section>
    );
  }

  // step === "result"
  return (
    <>
      <section class="area-hero">
        <div class="container">
          <span class="area-hero__tag">Tu equipo recomendado</span>
          <h1>
            {resultadoAreas.length === 1
              ? `Te recomendamos: ${resultadoAreas[0].nombre}`
              : `Te recomendamos: ${resultadoAreas.map((a) => a.nombre).join(" o ")}`}
          </h1>
          <p>
            Según tus respuestas, estas áreas podrían quedarte bien. Puedes ver el
            detalle de sus roles antes de postular.
          </p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="role-grid">
            {resultadoAreas.map((area) => (
              <div class="role-card" key={area.id}>
                <h3>{area.nombre}</h3>
                <p>{area.responsabilidad_central}</p>
                <a class="back-link" href={`/areas/${area.id}`}>
                  Ver roles de esta área →
                </a>
              </div>
            ))}
          </div>

          <div class="quiz-actions">
            <a
              class="btn btn--solid"
              href={APPLICATION_FORM_URL}
              target="_blank"
              rel="noopener"
            >
              Postula aquí
            </a>
            <button type="button" class="btn" onClick={empezar}>
              Volver a intentar
            </button>
            <a class="btn" href="/areas">
              Ver todas las áreas
            </a>
          </div>
          <p class="quiz-disclaimer">
            Al postular saldrás de este sitio hacia un formulario externo. Esta
            página no guarda tus respuestas.
          </p>
        </div>
      </section>
    </>
  );
}
