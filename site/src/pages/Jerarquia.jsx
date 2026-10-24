import { JERARQUIA } from "../data.js";

export function Jerarquia() {
  return (
    <>
      <div class="page-head">
        <div class="container">
          <span class="kicker">Estructura general</span>
          <h1>La jerarquía de LEAD PUCP</h1>
          <p>
            De mayor a menor autoridad: así se organiza LEAD PUCP, desde Presidencia
            hasta los participantes de eventos. Los niveles destacados son los que más
            le interesan a la mayoría de miembros: Director, Subdirector y Miembro de
            un pilar o departamento.
          </p>
        </div>
      </div>

      <section class="section">
        <div class="container">
          <div class="hierarchy-list">
            {JERARQUIA.map((item) => (
              <div
                key={item.nivel}
                class={`hierarchy-item${item.destacado ? " hierarchy-item--destacado" : ""}`}
              >
                <div class="hierarchy-item__level">{item.nivel}</div>
                <div>
                  <h3>{item.nombre}</h3>
                  <p>{item.descripcion}</p>
                  {item.destacado && (
                    <span class="hierarchy-item__badge">Pilar / Departamento</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
