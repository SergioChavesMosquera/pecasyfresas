import { useState, useEffect } from 'react';
import './Navbar.css';

const WA = 'https://wa.me/573005023817?text=Hola!%20Quiero%20hacer%20un%20pedido%20a%20domicilio%20🍕';

const links = [
  { label: 'Inicio',    href: '#inicio' },
  { label: 'Historia',  href: '#historia' },
  { label: 'Menú',      href: '#menu' },
  { label: 'Galería',   href: '#galeria' },
  { label: 'Reseñas',   href: '#testimonios' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      {/* Barra tricolor */}
      <div className="nav__tricolor">
        <span className="tc-g" /><span className="tc-w" /><span className="tc-r" />
      </div>

      <a href="#inicio" className="nav__logo">
        <span className="nav__logo-pizza">🍕</span>
        <div>
          <span className="nav__logo-main">LA VIÑA</span>
          <span className="nav__logo-sub">Pizzería</span>
        </div>
      </a>

      <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
        {links.map(l => (
          <li key={l.label}>
            <a href={l.href} className="nav__link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a href={WA} className="btn-wa nav__cta" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            🍕 Pedir ya
          </a>
        </li>
      </ul>

      <button className={`nav__burger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="menú">
        <span /><span /><span />
      </button>
    </nav>
  );
}