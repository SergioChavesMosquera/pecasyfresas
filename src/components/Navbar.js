// Navbar.js — Gúrus Panadería
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const WA = 'https://wa.me/573173692416?text=Hola!%20Quiero%20hacer%20un%20pedido%20a%20G%C3%BArus%20Panader%C3%ADa%20';

const links = [
  { label: 'Inicio',    href: '/#inicio',    isRoute: false },
  { label: 'Nosotros',  href: '/#historia',  isRoute: false },
  { label: 'Carta',     href: '/menu',        isRoute: true  },
  { label: 'Galería',   href: '/#galeria',    isRoute: false },
  { label: 'Sedes',     href: '/#sedes',      isRoute: false },
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
      <div className="nav__branding-line">
        <span className="bl-primary" /><span className="bl-rose" /><span className="bl-gold" />
      </div>

      <div className="nav__left">
        <Link to="/" className="nav__logo" onClick={() => setOpen(false)}>
          {/* Placeholder de logo — reemplaza con <img src="..." /> cuando tengas el archivo */}
          <div className="nav__logo-placeholder">G</div>
          <div>
            <span className="nav__logo-main">GÚRUS</span>
            <span className="nav__logo-sub">Panadería</span>
          </div>
        </Link>
        <Link to="/armatucaja" className="nav__custom-btn">
          🥐 Arma tu caja
        </Link>
      </div>

      <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
        
        <li className="nav__mobile-custom">
          <Link to="/armatucaja" className="btn-red" onClick={() => setOpen(false)}>
            🥐 Arma tu caja
          </Link>
        </li>

        {links.map(l => (
          <li key={l.label}>
            {l.isRoute ? (
              <Link to={l.href} className="nav__link" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ) : (
              <a href={l.href} className="nav__link" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            )}
          </li>
        ))}
        <li>
          <a href={WA} className="btn-wa nav__cta" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            Pedir por WhatsApp
          </a>
        </li>
      </ul>

      <button
        className={`nav__burger ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
