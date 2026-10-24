export function SearchInput({ value, onInput, placeholder, light }) {
  return (
    <div class={`search${light ? " search--light" : ""}`}>
      <input
        type="search"
        value={value}
        onInput={(e) => onInput(e.currentTarget.value)}
        placeholder={placeholder || "Busca un área o palabra clave"}
        aria-label="Buscar área"
      />
    </div>
  );
}
