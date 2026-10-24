import { AREAS } from "../data.js";

export function AreaDetail({ id }) {
  const area = AREAS.find((a) => a.id === id);

  if (!area) {
    return (
      <div class="container not-found">
        <h1>No encontramos esa área</h1>
        <p>
          <a class="back-link" href="/areas">
            ← Volver a todas las áreas
          </a>
        </p>
      </div>
    );
  }

  const tag = area.tipo === "pilar" ? "Pilar" : "Departamento";

  return (
    <>
      <section class="area-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="/areas">← Todas las áreas</a>
          </div>
          <span class="area-hero__tag">{tag}</span>
          <h1>{area.nombre}</h1>
          <p>{area.responsabilidad_central}</p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          {area.descripcion_larga && <p>{area.descripcion_larga}</p>}

          <div class="section__head">
            <h2>Roles dentro de {area.nombre}</h2>
          </div>
          <div class="role-grid">
            {area.roles.map((role) => (
              <div class="role-card" key={role.nivel}>
                <h3>{role.nivel}</h3>
                {role.descripcion ? (
                  <p>{role.descripcion}</p>
                ) : (
                  <p class="pending-note">
                    Descripción pendiente de confirmar con el Director del área.
                  </p>
                )}
              </div>
            ))}
          </div>

          {area.nota && <div class="info-note">{area.nota}</div>}

          <a class="back-link" href="/areas">
            ← Volver a todas las áreas
          </a>
        </div>
      </section>
    </>
  );
}
