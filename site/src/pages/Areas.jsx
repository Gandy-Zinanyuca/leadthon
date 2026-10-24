import { useMemo, useState } from "preact/hooks";
import { AREAS, areaMatchesQuery } from "../data.js";
import { AreaCard } from "../components/AreaCard.jsx";
import { SearchInput } from "../components/SearchInput.jsx";

const FILTERS = [
  { key: "todas", label: "Todas" },
  { key: "pilar", label: "Pilares" },
  { key: "departamento", label: "Departamentos" },
];

export function Areas() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("todas");

  const matches = useMemo(
    () =>
      AREAS.filter(
        (area) => (type === "todas" || area.tipo === type) && areaMatchesQuery(area, query)
      ),
    [query, type]
  );

  return (
    <>
      <div class="page-head">
        <div class="container">
          <span class="kicker">3 pilares + 7 departamentos</span>
          <h1>Las 10 áreas de LEAD PUCP</h1>
          <p>
            Cada área tiene su propio Director, Subdirector y Miembros. Elige una
            para ver qué hace y qué roles puedes ocupar ahí.
          </p>
          <SearchInput
            value={query}
            onInput={setQuery}
            placeholder="Busca por nombre de área o palabra clave"
          />
        </div>
      </div>

      <section class="section">
        <div class="container">
          <div class="section__head">
            <div class="filters">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  class={type === f.key ? "is-active" : ""}
                  onClick={() => setType(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <p class={`search__empty${matches.length === 0 ? " is-visible" : ""}`}>
            No encontramos áreas con ese término o filtro.
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
