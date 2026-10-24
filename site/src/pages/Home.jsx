import { useMemo, useState } from "preact/hooks";
import { AREAS, areaMatchesQuery } from "../data.js";
import { AreaCard } from "../components/AreaCard.jsx";
import { SearchInput } from "../components/SearchInput.jsx";

export function Home() {
  const [query, setQuery] = useState("");

  const matches = useMemo(
    () => AREAS.filter((area) => areaMatchesQuery(area, query)),
    [query]
  );

  return (
    <>
      <section class="hero">
        <div class="container">
          <span class="kicker">¿Qué es LEAD PUCP?</span>
          <h1>
            LEAD PUCP conecta liderazgo estudiantil con impacto real, a través de 3
            pilares y 7 departamentos.
          </h1>
          <p>
            Esta página te ayuda a responder una pregunta simple: ¿qué roles existen
            en LEAD y cuál podría ser el siguiente para mí?
          </p>
          <div class="hero__actions">
            <a class="btn btn--solid" href="/elige-tu-equipo">
              Encuentra tu equipo →
            </a>
            <a class="btn" href="/areas">
              Explorar las 10 áreas
            </a>
            <a class="btn" href="/jerarquia">
              Ver la jerarquía completa
            </a>
          </div>
          <SearchInput
            value={query}
            onInput={setQuery}
            placeholder="Busca un área o palabra clave (ej. marketing, RSU, tecnología)"
            light
          />
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section__head">
            <h2>3 pilares + 7 departamentos = 10 áreas</h2>
          </div>
          <p class={`search__empty${matches.length === 0 ? " is-visible" : ""}`}>
            No encontramos áreas con ese término.{" "}
            <a href="/areas">Ver el listado completo →</a>
          </p>
          <div class="card-grid">
            {matches.map((area) => (
              <AreaCard key={area.id} area={area} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
