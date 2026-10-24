# Identidad visual LEAD PUCP — colores y elementos para una web

> Extraído directamente del archivo XML de "Presentación LEAD PUCP.pptx" (no son colores inventados ni aproximados — son los hex exactos que usa la presentación oficial, en sus 22 slides).

## 1. Colores de marca (hex exactos)

| Color | Hex | Uso en la presentación |
|---|---|---|
| 🔵 Navy oscuro | `#020C41` | Base del fondo degradado (inicio) |
| 🍷 Vino / magenta oscuro | `#8B0F4D` | Punto medio del degradado (variante más usada) |
| 🔴 Magenta / crimson | `#9D004F` | Punto medio del degradado (variante alterna) |
| 🟣 Púrpura | `#772FBF` | Final del degradado |
| 💗 Rosa frambuesa | `#B1266F` | Texto de acento (kickers, títulos de sección) |
| 🔮 Periwinkle / índigo | `#6F58CE` | Acento secundario (uso puntual) |
| ⚪ Blanco | `#FFFFFF` | Todo el texto principal y formas sobre el fondo |
| ⚫ Negro | `#000000` | Uso puntual, casi no se usa |

## 2. El elemento visual más replicable: el degradado de fondo

**Este es EL elemento de marca** — está en las 22 slides sin excepción, siempre con los mismos 3 colores. En PowerPoint es un degradado radial desde la esquina, pero para web lo más simple y visualmente casi idéntico es un degradado lineal diagonal:

```css
background: linear-gradient(135deg, #020C41 0%, #8B0F4D 50%, #772FBF 100%);
```

Variante que usan en algunas slides (cambia solo el color medio):
```css
background: linear-gradient(135deg, #020C41 0%, #9D004F 50%, #772FBF 100%);
```

Si quieres algo más fiel al original (radial, desde la esquina inferior derecha):
```css
background: radial-gradient(circle at 100% 100%, #772FBF 0%, #8B0F4D 50%, #020C41 100%);
```

**Uso recomendado:** fondo de hero/portada, fondo de footer, o fondo de tarjetas destacadas. Texto siempre en blanco encima.

## 3. Tipografía

- **Familia única: Montserrat** (Google Font, gratis) — usada en el 100% del texto.
- Pesos usados: Regular (400), Semi-Bold (600), Bold (700), más cursivas de Bold y Regular.
- Fallback usado en la presentación: Arial.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;1,400;1,700&display=swap">
```
```css
font-family: 'Montserrat', Arial, sans-serif;
```

## 4. Estilo de texto de acento (kickers / etiquetas)

Los títulos pequeños tipo "¿Qué es LEAD PUCP?" usan el rosa frambuesa `#B1266F`, en mayúsculas, sobre el fondo degradado:

```css
.kicker {
  color: #B1266F;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

## 5. Bloques de contenido

Las tarjetas/bloques (pilares, departamentos) son **rectángulos planos, sin bordes redondeados, sin sombra** — look limpio y geométrico, texto blanco directo sobre el degradado, sin fondo propio por bloque. Para replicar en web:

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

## 6. Paleta lista para copiar (variables CSS)

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

---

**Nota:** el flyer del LEADTHON (navy + rosa chicle + celeste, con cinta washi) es una variante de campaña para ese evento puntual, distinta de esta paleta oficial de marca. Si la web es institucional (no solo para el LEADTHON), usa esta paleta; si es solo para el evento, usa la del flyer.
