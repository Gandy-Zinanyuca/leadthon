import { Link } from "preact-router/match";

export function AreaCard({ area }) {
  const tag = area.tipo === "pilar" ? "Pilar" : "Departamento";
  return (
    <Link class="area-card" href={`/areas/${area.id}`}>
      <div>
        <span class="area-card__tag">{tag}</span>
        <h3>{area.nombre}</h3>
        <p>{area.responsabilidad_central}</p>
      </div>
      <span class="area-card__link">Ver roles de esta área →</span>
    </Link>
  );
}
