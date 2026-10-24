// Preguntas del quiz "Elige tu equipo" (ver ../spec.md §7.6).
//
// CONTENIDO PENDIENTE (ver ../spec.md §9, punto 6): este es el set simple que el
// spec autoriza para no bloquear la Fase 2 ("1 pregunta por pilar/eje temático +
// alguna que cubra los 7 departamentos") -- NO es el set final. Falta que
// Marketing/RR.HH./Directores definan las preguntas y la tabla de puntajes reales.
// Mientras eso no llegue, no agregar más preguntas "inventadas": ajustar estas.

export const QUIZ_QUESTIONS = [
  {
    id: "pilar",
    pregunta: "¿Qué te gustaría impulsar más dentro de LEAD?",
    opciones: [
      {
        texto: "Mi propio crecimiento académico y profesional",
        puntos: { "desarrollo-integral": 3 },
      },
      {
        texto: "Un impacto social real, dentro y fuera de la universidad",
        puntos: { "impacto-comunitario": 3 },
      },
      {
        texto: "Conectar STEM con colegios y escuelas",
        puntos: { "lead-academia": 3 },
      },
    ],
  },
  {
    id: "estilo",
    pregunta: "¿Cómo prefieres aportar al equipo?",
    opciones: [
      {
        texto: "De cara al público: comunicar, representar, conectar con gente nueva",
        puntos: { marketing: 1, "relaciones-exteriores": 1, "lead-academia": 1 },
      },
      {
        texto: "Detrás de escena: organizar procesos, personas y recursos",
        puntos: { operaciones: 1, finanzas: 1, "recursos-humanos": 1 },
      },
      {
        texto: "Con tecnología: construir o automatizar herramientas",
        puntos: { "tecnologia-innovacion": 1 },
      },
    ],
  },
  {
    id: "departamento",
    pregunta: "De estas tareas, ¿cuál te llama más la atención?",
    opciones: [
      {
        texto: "Redactar y gestionar alianzas o convenios",
        puntos: { "asuntos-legales": 3 },
      },
      {
        texto: "Crear contenido para redes sociales y cuidar la marca",
        puntos: { marketing: 3 },
      },
      {
        texto: "Organizar espacios y logística de eventos",
        puntos: { operaciones: 3 },
      },
      {
        texto: "Programar o mantener herramientas digitales",
        puntos: { "tecnologia-innovacion": 3 },
      },
      {
        texto: "Llevar presupuestos y control de fondos",
        puntos: { finanzas: 3 },
      },
      {
        texto: "Acompañar la integración y capacitación de nuevos miembros",
        puntos: { "recursos-humanos": 3 },
      },
      {
        texto: "Representar a LEAD ante otras instituciones o universidades",
        puntos: { "relaciones-exteriores": 3 },
      },
    ],
  },
];

// Suma los puntajes de las opciones elegidas y devuelve el/los id(s) de área con
// mayor puntaje (hasta 2, si hay empate en el primer lugar -- ver spec.md §7.6).
export function computeResult(respuestas) {
  const scores = {};
  for (const opcion of respuestas) {
    for (const [areaId, puntos] of Object.entries(opcion.puntos)) {
      scores[areaId] = (scores[areaId] || 0) + puntos;
    }
  }

  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  if (ranked.length === 0) return [];

  const topScore = ranked[0][1];
  return ranked.filter(([, score]) => score === topScore).slice(0, 2).map(([areaId]) => areaId);
}
