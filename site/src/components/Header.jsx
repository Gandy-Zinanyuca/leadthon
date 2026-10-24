import { Link } from "preact-router/match";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/jerarquia", label: "Jerarquía" },
  { href: "/areas", label: "Áreas" },
];

export function Header() {
  return (
    <header class="site-header">
      <div class="site-header__bar">
        <Link class="site-header__brand" href="/">
          <img src="/assets/logo-mark.png" alt="" />
          <span>LEAD PUCP · Roles</span>
        </Link>
        <nav class="site-nav">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} activeClassName="is-active">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
