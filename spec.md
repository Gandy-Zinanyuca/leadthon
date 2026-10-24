# Spec: Explorador de Roles — LEAD PUCP

## 1. Problema y objetivo

Hoy la estructura de roles de LEAD PUCP (jerarquía, pilares, departamentos) vive dispersa en un PPTX de presentación institucional. Un participante nuevo, o un miembro que ya está dentro de un pilar/departamento, no tiene una forma fácil de responder: **"¿qué roles existen en LEAD, cuál podría ser el siguiente para mí, y a qué equipo me conviene postular?"**

Objetivo: una página web simple donde cualquier persona de LEAD (participante de evento, miembro, subdirector, director) pueda:
- Ver las 10 áreas de LEAD (3 pilares + 7 departamentos) y qué hace cada una.
- Ver los roles disponibles dentro de cualquier área (Director → Subdirector → Miembro) y qué implica cada uno.
- Entender dónde está parado en la jerarquía general y qué rol sigue "arriba" de él.
- Explorar las áreas de forma guiada para decidir a cuál le gustaría pertenecer ("elegir su equipo").

No es un sistema de gestión de postulaciones ni de RR.HH.: es una página de **consulta/información**, de solo lectura para el usuario final (ver decisión en §8, Fase 2).

## 2. Usuarios y casos de uso

| Usuario | Caso de uso principal |
|---|---|
| Participante de evento | "¿Cómo paso de participante a miembro? ¿Qué áreas existen y a cuál me conviene postular?" |
| Miembro de pilar/departamento | "¿Qué rol sigue después de miembro en mi área? ¿Qué hace un subdirector acá?" |
| Subdirector | "¿Qué espera un Director de Pilar/Departamento de mí si postulo?" |
| Director | Referencia rápida para explicarle a su equipo la estructura general y a quién reporta. |
| Vicepresidencia/Presidencia (admin de contenido) | Mantener actualizada la info de áreas y roles sin tocar código. |

## 3. Alcance

**Incluye:**
- Vista general de la jerarquía (8 niveles).
- Listado y detalle de los 3 pilares y 7 departamentos.
- Descripción de los roles típicos dentro de un área (Director, Subdirector, Miembro) y, para pilares/departamentos, su relación con Directores/Subdirectores de comisión si aplica.
- Buscador/filtro simple por nombre de área o rol.
- Una página de "selección de equipo" (ver §7.6) con un **quiz corto** que sugiere a qué área(s) podría encajar mejor el usuario, y que termina con un enlace a postular.

**No incluye (fuera de alcance v1 — decisión confirmada con el usuario):**
- Formulario de postulación propio del sitio: no se recolectan ni almacenan respuestas del quiz ni datos personales en la web — al final del quiz, el sitio solo **enlaza** al formulario externo de postulación ya existente (Google Forms, ver §7.6). La postulación en sí ocurre fuera de este sitio.
- Autenticación / perfiles personalizados ("tu rol actual").
- Organigrama con nombres reales de personas (son roles genéricos, no directorio de personas).
- Integración con Notion/base de datos de miembros existente (se evalúa en v2).

## 4. Identidad visual

Fuente: `identidad_visual_lead_pucp.md` (en esta misma carpeta), extraído directamente del XML de "Presentación LEAD PUCP.pptx" (hex exactos, no aproximados, consistentes en sus 22 slides).

### 4.1 Colores de marca (oficiales)

| Color | Hex | Uso |
|---|---|---|
| 🔵 Navy oscuro | `#020C41` | Base del fondo degradado (inicio) |
| 🍷 Vino / magenta oscuro | `#8B0F4D` | Punto medio del degradado (variante más usada) |
| 🔴 Magenta / crimson | `#9D004F` | Punto medio del degradado (variante alterna) |
| 🟣 Púrpura | `#772FBF` | Final del degradado |
| 💗 Rosa frambuesa | `#B1266F` | Texto de acento (kickers, títulos de sección) |
| 🔮 Periwinkle / índigo | `#6F58CE` | Acento secundario (uso puntual) |
| ⚪ Blanco | `#FFFFFF` | Todo el texto principal y formas sobre el fondo |
| ⚫ Negro | `#000000` | Uso puntual, casi no se usa |

> Nota: el flyer del LEADTHON (navy + rosa chicle + celeste, con cinta washi) es una variante de campaña para ese evento puntual, **distinta** de esta paleta oficial de marca. Como esta web es institucional (no es para un evento puntual), se usa la paleta de esta sección, no la del flyer del LEADTHON.

### 4.2 El elemento visual más replicable: el degradado de fondo

Está en las 22 slides de la presentación sin excepción, siempre con los mismos 3 colores. Para web, un degradado lineal diagonal es lo más simple y visualmente casi idéntico al radial original:

```css
background: linear-gradient(135deg, #020C41 0%, #8B0F4D 50%, #772FBF 100%);
```

Variante que usan en algunas slides (cambia solo el color medio):
```css
background: linear-gradient(135deg, #020C41 0%, #9D004F 50%, #772FBF 100%);
```

Más fiel al original (radial, desde la esquina inferior derecha):
```css
background: radial-gradient(circle at 100% 100%, #772FBF 0%, #8B0F4D 50%, #020C41 100%);
```

**Uso recomendado:** fondo de hero/portada, fondo de footer, fondo de la página de selección de equipo (§7.6), o fondo de tarjetas destacadas. Texto siempre en blanco encima.

### 4.3 Tipografía

- Familia única: **Montserrat** (Google Font, gratis) — usada en el 100% del texto de la marca.
- Pesos: Regular (400), Semi-Bold (600), Bold (700), más cursivas de Bold y Regular.
- Fallback: Arial.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;1,400;1,700&display=swap">
```
```css
font-family: 'Montserrat', Arial, sans-serif;
```

### 4.4 Estilo de texto de acento (kickers / etiquetas)

Los títulos pequeños tipo "¿Qué es LEAD PUCP?" usan rosa frambuesa `#B1266F`, en mayúsculas, sobre el fondo degradado:

```css
.kicker {
  color: #B1266F;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### 4.5 Bloques de contenido

Las tarjetas/bloques (pilares, departamentos) son **rectángulos planos, sin bordes redondeados, sin sombra** — look limpio y geométrico, texto blanco directo sobre el degradado, sin fondo propio por bloque:

```css
.block {
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
}
.block h3 {
  font-weight: 700;
  font-size: 1.5rem;
}
.block p {
  font-weight: 400;
  opacity: 0.9;
}
```

### 4.6 Paleta lista para copiar (variables CSS)

```css
:root {
  --lead-navy: #020C41;
  --lead-wine: #8B0F4D;
  --lead-crimson: #9D004F;
  --lead-purple: #772FBF;
  --lead-pink: #B1266F;
  --lead-indigo: #6F58CE;
  --lead-white: #FFFFFF;
  --lead-gradient: linear-gradient(135deg, var(--lead-navy) 0%, var(--lead-wine) 50%, var(--lead-purple) 100%);
}
```

### 4.7 Logo e íconos

En `Documents/LEAD/Imagenes/` hay assets de referencia adicionales (logo `lead pucp.png`, variante `lead.png`, íconos de diamante `diamond.png` / `light diamong.png`, blob decorativo `mancha.png`). Son consistentes con la paleta de §4.1: el logo usa un degradado rojo→magenta→púrpura, y los íconos de diamante usan tonos rojo/rosa cálidos como acento puntual (no como color de fondo principal). Si se necesitan hex exactos de estos assets puntuales (más allá del logo y el degradado ya cubiertos arriba), pedirlos a Marketing junto con los archivos fuente (AI/SVG), ya que los PNG solo dan una aproximación por muestreo de píxeles.

## 5. Modelo de datos

Fuente actual: `roles_directores_pilares_departamentos.md` (extraído del PPTX, slides 6, 7 y 9). Este modelo es el contenido estructurado que alimenta la página.

### 5.1 Jerarquía general (nivel global, de mayor a menor autoridad)

```
1. Presidente
2. Vicepresidente
3. Directores de pilar y departamento
4. Directores de comisión
5. Subdirectores de pilar y departamento
6. Subdirectores de comisión
7. Miembros de pilar y departamento
8. Participantes en eventos
```

### 5.2 Áreas (3 pilares + 7 departamentos)

Cada área tiene: `nombre`, `tipo` (pilar | departamento), `responsabilidad_central`, y opcionalmente `rol_lider` (Director).

**Pilares**
| Área | Responsabilidad central |
|---|---|
| Desarrollo Integral | Crecimiento académico y profesional |
| Impacto Comunitario | RSU (Responsabilidad Social Universitaria) dentro y fuera de la universidad |
| LEAD Academia | Conexión STEM con escuelas |

**Departamentos**
| Área | Responsabilidad central |
|---|---|
| Asuntos Legales | Alianzas y representación |
| Marketing | Redes sociales y marca |
| Operaciones | Espacios y procesos |
| Tecnología e Innovación | Desarrollo y aplicaciones |
| Finanzas | Presupuestos y fondos |
| Recursos Humanos | Integración y capacitación |
| Relaciones Exteriores | Alianzas y representación |

> Nota: tanto Asuntos Legales como Relaciones Exteriores comparten la misma descripción en la fuente original. Al redactar contenido final, pedir a los directores de ambas áreas que aclaren la diferencia real entre ellas para que la página no muestre dos tarjetas idénticas (ver §9).

### 5.3 Roles dentro de un área

Para cada una de las 10 áreas, el patrón de roles es:

1. **Director** de pilar/departamento — reporta a Presidencia/Vicepresidencia.
2. **Subdirector** de pilar/departamento — reporta al Director del área.
3. **Miembro** de pilar/departamento — reporta al Subdirector (o Director si el área no tiene subdirector).

Adicionalmente, algunas áreas pueden tener **comisiones** internas con su propio Director de comisión y Subdirector de comisión (nivel 4 y 6 de la jerarquía). Esto hoy no está detallado por área en la fuente — es contenido pendiente (ver §9).

### 5.4 Esquema de datos sugerido (JSON/CMS)

```json
{
  "jerarquia": [
    { "nivel": 1, "nombre": "Presidente" },
    { "nivel": 2, "nombre": "Vicepresidente" },
    { "nivel": 3, "nombre": "Directores de pilar y departamento" },
    { "nivel": 4, "nombre": "Directores de comisión" },
    { "nivel": 5, "nombre": "Subdirectores de pilar y departamento" },
    { "nivel": 6, "nombre": "Subdirectores de comisión" },
    { "nivel": 7, "nombre": "Miembros de pilar y departamento" },
    { "nivel": 8, "nombre": "Participantes en eventos" }
  ],
  "areas": [
    {
      "id": "desarrollo-integral",
      "nombre": "Desarrollo Integral",
      "tipo": "pilar",
      "responsabilidad_central": "Crecimiento académico y profesional",
      "descripcion_larga": "",
      "roles": [
        { "nivel": "Director", "descripcion": "", "requisitos": [] },
        { "nivel": "Subdirector", "descripcion": "", "requisitos": [] },
        { "nivel": "Miembro", "descripcion": "", "requisitos": [] }
      ],
      "comisiones": []
    }
  ]
}
```

Los campos vacíos (`descripcion_larga`, `descripcion` de cada rol, `requisitos`, `comisiones`) son contenido real que debe salir de cada Director de área, no inventado por quien construya la página.

## 6. Arquitectura de información

```
/                        → Home: qué es LEAD, resumen de la jerarquía, CTA a explorar áreas
/jerarquia               → Vista completa de los 8 niveles, con explicación de cada uno
/areas                   → Grid de las 10 áreas (filtro: todas | pilares | departamentos)
/areas/:id               → Detalle de un área: responsabilidad, y sus 3 roles (Director/Subdirector/Miembro)
/elige-tu-equipo         → Quiz de selección de equipo (ver §7.6) — recomienda área(s) y enlaza al formulario externo de postulación
/roles/:nivel            → (opcional, Fase 3) vista transversal: "todos los puestos de Subdirector en LEAD"
```

Navegación simple de 2–3 clics: Home → Áreas o Elige tu equipo → (resultado del quiz / Área específica) → Postular (externo) o Rol.

## 7. Especificación por pantalla

### 7.1 Home (`/`)
- Qué es LEAD PUCP en 1–2 líneas.
- Diagrama simple de la jerarquía de 8 niveles (vertical, de arriba hacia abajo).
- Sección "3 pilares + 7 departamentos = 10 áreas" con tarjetas resumidas, cada una clickeable.
- Buscador (por nombre de área o de rol) visible desde el inicio.
- Fondo con el degradado de marca (§4.2) en el hero.

### 7.2 Jerarquía (`/jerarquia`)
- Lista ordenada de los 8 niveles, cada uno con una descripción breve de qué significa estar en ese nivel y a quién reporta / quién le reporta.
- Marca visual de que los niveles 3, 5 y 7 corresponden a pilares/departamentos (los que interesan a la mayoría de usuarios) y los niveles 4 y 6 a comisiones.

### 7.3 Listado de áreas (`/areas`)
- Grid de 10 tarjetas: nombre del área, ícono/color por tipo (pilar vs. departamento), responsabilidad central en una línea.
- Filtro por tipo (Pilares / Departamentos / Todas).
- Cada tarjeta enlaza al detalle.

### 7.4 Detalle de área (`/areas/:id`)
- Nombre, tipo, responsabilidad central, descripción larga (si existe).
- Los 3 roles del área (Director, Subdirector, Miembro), cada uno con:
  - Descripción de lo que hace ese rol en esa área específica.
  - A quién reporta.
  - (Si existe el dato) requisitos o perfil esperado.
- Si el área tiene comisiones, listarlas con sus propios Director/Subdirector de comisión.
- Botón/link "Volver a todas las áreas".

### 7.5 Buscador
- Campo de texto simple que filtra tarjetas de áreas y, si aplica, roles por coincidencia de texto (nombre del área, nombre del rol, palabras clave de la responsabilidad).
- Sin resultados → mensaje claro + sugerencia de ver el listado completo.

### 7.6 Página de selección de equipo (`/elige-tu-equipo`)

**Decisión confirmada con el usuario:** esta pantalla es un **quiz corto** que recomienda a qué área(s) podría encajar mejor el usuario según sus respuestas, y termina con un enlace para postular. El sitio **no recolecta ni almacena** las respuestas del quiz ni ningún dato personal — no hay formulario propio, base de datos ni backend; la postulación real ocurre en un formulario externo ya existente (Google Forms) al que el sitio solo enlaza.

**Flujo:**
1. Pantalla de inicio del quiz: usa el degradado de marca de fondo (§4.2), tipografía Montserrat, y un CTA "Empezar" (botón `.btn--solid`, mismo estilo que el resto del sitio).
2. Serie corta de preguntas de opción múltiple (ej. "¿qué te interesa más: crecimiento académico, impacto social, tecnología...?", "¿prefieres trabajar de cara al público o detrás de escena?"). Cada opción de respuesta suma puntos a una o más de las 10 áreas (§5.2).
3. Pantalla de resultado: muestra el área (o las 1–2 áreas) con mayor puntaje como recomendación, con un resumen corto (reutilizando `responsabilidad_central` de §5.2), un link a su detalle completo en `/areas/:id` (§7.4), y el **botón de postulación**:
   ```html
   <a class="btn btn--solid" href="https://forms.gle/i1d78xWgfUZyPsUG6" target="_blank" rel="noopener">
     Postula aquí
   </a>
   ```
4. Opción de "Volver a intentar" o "Ver todas las áreas" (enlaza a `/areas`) por si el resultado no convence al usuario.

**Contenido pendiente (no inventar, pedir a Marketing/RR.HH./Directores — ver §9):**
- El set real de preguntas y opciones de respuesta.
- La tabla de puntajes: qué opción suma a qué área(s) y con cuánto peso. Mientras no exista esta tabla, se puede lanzar con una versión simple de 1 pregunta por pilar/eje temático (ej. una pregunta directamente ligada a cada uno de los 3 pilares + alguna que cubra los 7 departamentos) para no bloquear la Fase 2 completa.
- Confirmar si `https://forms.gle/i1d78xWgfUZyPsUG6` es el formulario de postulación permanente de LEAD o es específico de una convocatoria/evento puntual (p. ej. del LEADTHON) que podría expirar o cambiar — si es temporal, el link debe quedar en una sola variable/constante fácil de actualizar en el código, no repetido en varios lugares.
- Confirmar si el enlace de postulación es el mismo para las 10 áreas o si cada área tiene su propio formulario/sección dentro del mismo Google Form.

## 8. Fases

### Fase 0 — Contenido y validación (antes de construir nada)
- Confirmar con los 10 Directores de pilar/departamento el contenido real de cada rol (ver §9, checklist de contenido pendiente).
- Confirmar con Marketing que la paleta e identidad visual de §4 sigue vigente (es la extraída del pptx institucional, pero conviene que la confirme quien maneja la marca).
- Resolver la ambigüedad entre Asuntos Legales y Relaciones Exteriores (§5.2).
- Decidir el nombre de dominio/ruta del sitio y quién lo va a alojar.

### Fase 1 — MVP de exploración (solo lectura)
Entregable: sitio estático desplegable, sin backend, con datos en JSON/Markdown versionado (§5.4).
- Home (§7.1)
- Jerarquía (§7.2)
- Listado de áreas (§7.3)
- Detalle de área (§7.4)
- Buscador (§7.5)
- Identidad visual de marca aplicada en todo el sitio (§4): degradado en hero/footer, tipografía Montserrat, kickers en rosa frambuesa, tarjetas planas sin sombra.

### Fase 2 — Página de selección de equipo (quiz) — construida
Entregable: `/elige-tu-equipo` (§7.6) — quiz corto que recomienda área(s) y termina con un botón "Postula aquí" que enlaza a `https://forms.gle/i1d78xWgfUZyPsUG6`. Sigue sin backend: las respuestas del quiz se calculan en el navegador (`src/quiz.js`) y no se guardan en ningún lado.
- **Construido con el set simple que el spec autoriza** (`src/quiz.js`): 1 pregunta ligada a los 3 pilares + 1 pregunta de estilo de trabajo + 1 pregunta que cubre los 7 departamentos. **Sigue pendiente** que Marketing/RR.HH./Directores definan el set real de preguntas y la tabla de puntajes — mientras eso no llegue, el quiz muestra un aviso visible ("Versión inicial del quiz — preguntas sujetas a cambio") para no presentarlo como contenido final.
- El link de postulación quedó centralizado en una sola constante (`src/config.js`) para poder actualizarlo fácilmente apenas se confirme si es permanente o de una convocatoria puntual (§9, punto 7 — sigue sin confirmar).
- Lógica de puntaje y pantalla de resultado implementadas (hasta 2 áreas si hay empate en el primer lugar), reutilizando los datos de área ya cargados en la Fase 1 (§5.2).

### Fase 3 — Mejoras futuras (fuera de alcance v1)
- Vista transversal por rol (`/roles/:nivel`).
- Si más adelante se quiere que el propio sitio capture quién hizo el quiz y qué área le salió (hoy eso vive solo en el Google Form externo), eso requeriría backend o integración (Notion, Google Sheets, etc.) — no está pedido, se deja documentado como posible siguiente paso.
- CMS o fuente de datos editable por los Directores sin tocar código (incluyendo las preguntas/puntajes del quiz), en vez de JSON/Markdown versionado a mano.

## 9. Contenido pendiente de completar

La fuente actual (slides del pptx) solo da una frase de "responsabilidad central" por área y la jerarquía general. Para que la página sea realmente útil, falta recolectar, por cada una de las 10 áreas:

1. Descripción de 2–4 líneas de qué hace el área (no solo la frase corta).
2. Qué hace específicamente un Director / Subdirector / Miembro en esa área (no solo el nombre del puesto).
3. Requisitos o perfil esperado para cada rol (si existen formalmente).
4. Si el área tiene comisiones internas, cuáles son y su estructura.
5. Aclarar la diferencia real entre Asuntos Legales y Relaciones Exteriores (comparten la misma descripción en la fuente).
6. Para el quiz de `/elige-tu-equipo` (§7.6, Fase 2): el set de preguntas, sus opciones de respuesta, y a qué área(s) suma cada opción.
7. Confirmar si `https://forms.gle/i1d78xWgfUZyPsUG6` es el formulario de postulación permanente o uno de una convocatoria puntual.

Sugerencia: enviar un formulario corto a cada uno de los 10 Directores de pilar/departamento pidiéndoles estos 4 campos por rol. Hasta que ese contenido llegue, la página puede lanzarse con la información general (jerarquía + responsabilidad central) y mostrar "más detalles próximamente" en las secciones de rol.

## 10. Requisitos no funcionales

- **Stack técnico (Fase 1):** Vite + Preact, con `preact-router` para las rutas (`/`, `/jerarquia`, `/areas`, `/areas/:id`). Sigue sin backend: build estático (`npm run build`) desplegado en Vercel (zero-config, con `vercel.json` para el rewrite de SPA). Se eligió sobre HTML/CSS/JS plano porque el quiz de Fase 2 (§7.6) necesita más estado en el cliente; Vercel da preview deploys automáticos por PR, útil para iterar el contenido del quiz con Marketing/RR.HH.
- Debe verse bien en celular (la mayoría de participantes de LEAD la van a abrir desde el teléfono, ej. compartida en un grupo de WhatsApp).
- Sin login: es información pública para cualquier miembro de la comunidad PUCP interesado.
- Carga rápida y simple: no requiere backend si el contenido se mantiene como JSON/Markdown estático versionado; si se prevé que los Directores editen contenido ellos mismos sin tocar código, considerar un CMS headless simple o una hoja de cálculo/Notion como fuente de datos en Fase 3.
- Paleta y tipografía oficiales de LEAD PUCP (§4), no colores inventados ni la variante de campaña del LEADTHON.
- Contraste accesible: el texto sobre el degradado de marca (§4.2) debe ir siempre en blanco (`#FFFFFF`) para mantener legibilidad — evitar texto en los colores de acento (`#B1266F`, `#6F58CE`) sobre fondos oscuros del mismo degradado.

## 11. Preguntas abiertas

- ¿Quién es el "dueño" de mantener el contenido actualizado una vez publicada (RR.HH., Vicepresidencia)?
- ¿Se quiere mostrar también la ruta de crecimiento ("Participante → Miembro → Subdirector → Director") como una sección explícita de "carrera dentro de LEAD", o alcanza con la jerarquía general?
- ¿La página debe vivir en un dominio propio o como sub-sección de un sitio existente de LEAD PUCP?
- ¿Se necesita en v1 la vista transversal `/roles/:nivel` (todos los Subdirectores de LEAD en una sola vista), o se puede dejar para Fase 3?
- Para `/elige-tu-equipo` (§7.6 y Fase 2): ¿Marketing/Diseño ya tiene bocetos o referencias de cómo debería verse esa pantalla, o se diseña desde cero a partir de esta spec?
- ¿La carpeta `leadthon/Página de selección de team/` tiene más contenido planeado (wireframes, copy) además del documento de identidad visual ya incorporado en §4, o es el único insumo existente hasta ahora?
- ¿Quién define el set de preguntas y la tabla de puntajes del quiz (§7.6, §9 punto 6): Marketing, RR.HH., o los propios Directores de cada área?
- ¿`https://forms.gle/i1d78xWgfUZyPsUG6` recibe postulaciones para las 10 áreas a la vez (con una pregunta dentro del form para elegir el área) o es específico de un área/convocatoria? Esto puede cambiar si conviene mostrar un único botón "Postula aquí" para todas las áreas o, más adelante, un link distinto por área.
