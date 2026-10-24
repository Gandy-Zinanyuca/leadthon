// Datos del explorador de roles LEAD PUCP.
// Fuente: roles_directores_pilares_departamentos.md (PPTX institucional, slides 6, 7 y 9).
// Los campos vacíos ("") y pendiente:true son contenido real que debe salir de cada
// Director de área (ver ../spec.md §9) -- no inventar descripciones aquí.

export const JERARQUIA = [
  {
    nivel: 1,
    nombre: "Presidente",
    descripcion: "Máxima autoridad de LEAD PUCP. Representa a la organización en su conjunto.",
  },
  {
    nivel: 2,
    nombre: "Vicepresidente",
    descripcion: "Segunda máxima autoridad. Apoya y respalda la gestión de Presidencia.",
  },
  {
    nivel: 3,
    nombre: "Directores de pilar y departamento",
    descripcion:
      "Lideran una de las 10 áreas de LEAD (3 pilares + 7 departamentos). Reportan directamente a Presidencia/Vicepresidencia.",
    destacado: true,
  },
  {
    nivel: 4,
    nombre: "Directores de comisión",
    descripcion: "Lideran una comisión específica dentro de un pilar o departamento.",
  },
  {
    nivel: 5,
    nombre: "Subdirectores de pilar y departamento",
    descripcion: "Apoyan al Director de su área y coordinan el trabajo de los miembros.",
    destacado: true,
  },
  {
    nivel: 6,
    nombre: "Subdirectores de comisión",
    descripcion: "Apoyan al Director de su comisión.",
  },
  {
    nivel: 7,
    nombre: "Miembros de pilar y departamento",
    descripcion: "Forman parte activa de un pilar o departamento, ejecutando las actividades del área.",
    destacado: true,
  },
  {
    nivel: 8,
    nombre: "Participantes en eventos",
    descripcion: "Se suman a actividades y eventos puntuales de LEAD, sin pertenecer todavía a un área.",
  },
];

function rolesVacios() {
  return [
    { nivel: "Director", descripcion: "", requisitos: [] },
    { nivel: "Subdirector", descripcion: "", requisitos: [] },
    { nivel: "Miembro", descripcion: "", requisitos: [] },
  ];
}

export const AREAS = [
  {
    id: "desarrollo-integral",
    nombre: "Desarrollo Integral",
    tipo: "pilar",
    responsabilidad_central: "Crecimiento académico y profesional",
    descripcion_larga: "",
    roles: rolesVacios(),
    comisiones: [],
  },
  {
    id: "impacto-comunitario",
    nombre: "Impacto Comunitario",
    tipo: "pilar",
    responsabilidad_central: "RSU (Responsabilidad Social Universitaria) dentro y fuera de la universidad",
    descripcion_larga: "",
    roles: rolesVacios(),
    comisiones: [],
  },
  {
    id: "lead-academia",
    nombre: "LEAD Academia",
    tipo: "pilar",
    responsabilidad_central: "Conexión STEM con escuelas",
    descripcion_larga: "",
    roles: rolesVacios(),
    comisiones: [],
  },
  {
    id: "asuntos-legales",
    nombre: "Asuntos Legales",
    tipo: "departamento",
    responsabilidad_central: "Alianzas y representación",
    descripcion_larga: "",
    nota: "Comparte la misma descripción corta que Relaciones Exteriores en la fuente original -- pendiente de aclarar la diferencia real con el Director del área (ver ../spec.md §9).",
    roles: rolesVacios(),
    comisiones: [],
  },
  {
    id: "marketing",
    nombre: "Marketing",
    tipo: "departamento",
    responsabilidad_central: "Redes sociales y marca",
    descripcion_larga: "",
    roles: rolesVacios(),
    comisiones: [],
  },
  {
    id: "operaciones",
    nombre: "Operaciones",
    tipo: "departamento",
    responsabilidad_central: "Espacios y procesos",
    descripcion_larga: "",
    roles: rolesVacios(),
    comisiones: [],
  },
  {
    id: "tecnologia-innovacion",
    nombre: "Tecnología e Innovación",
    tipo: "departamento",
    responsabilidad_central: "Desarrollo y aplicaciones",
    descripcion_larga: "",
    roles: rolesVacios(),
    comisiones: [],
  },
  {
    id: "finanzas",
    nombre: "Finanzas",
    tipo: "departamento",
    responsabilidad_central: "Presupuestos y fondos",
    descripcion_larga: "",
    roles: rolesVacios(),
    comisiones: [],
  },
  {
    id: "recursos-humanos",
    nombre: "Recursos Humanos",
    tipo: "departamento",
    responsabilidad_central: "Integración y capacitación",
    descripcion_larga: "",
    roles: rolesVacios(),
    comisiones: [],
  },
  {
    id: "relaciones-exteriores",
    nombre: "Relaciones Exteriores",
    tipo: "departamento",
    responsabilidad_central: "Alianzas y representación",
    descripcion_larga: "",
    nota: "Comparte la misma descripción corta que Asuntos Legales en la fuente original -- pendiente de aclarar la diferencia real con el Director del área (ver ../spec.md §9).",
    roles: rolesVacios(),
    comisiones: [],
  },
];

export function areaMatchesQuery(area, query) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const haystack = [area.nombre, area.responsabilidad_central, area.tipo]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}
