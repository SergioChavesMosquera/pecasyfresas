// Navbar.js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const WA = 'https://wa.me/573057499947?text=Hola!%20Quiero%20hacer%20un%20pedido%20a%20Pecas%20y%20Fresas%20';

const links = [
  { label: 'Inicio',   href: '/#inicio',     isRoute: false },
  { label: 'Historia', href: '/#historia',    isRoute: false },
  { label: 'Menú',     href: '/menu',          isRoute: true  },
  { label: 'Galería',  href: '/#galeria',      isRoute: false },
  { label: 'Sedes',    href: '/#sedes',        isRoute: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const logoUrl = "https://images.rappi.com/restaurants_logo/logo-1739639838607.png?e=webp&d=10x10&q=10";

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      {/* Detalle visual de colores de marca */}
      <div className="nav__branding-line">
        <span className="bl-pink" /><span className="bl-white" /><span className="bl-red" />
      </div>

      <div className="nav__left">
        <Link to="/" className="nav__logo" onClick={() => setOpen(false)}>
          <img 
            src={logoUrl} 
            alt="Logo Pecas y Fresas" 
            className="nav__logo-img" 
            style={{ borderRadius: '50%' }} 
          />
          <div>
            <span className="nav__logo-main">PECAS Y FRESAS</span>
            <span className="nav__logo-sub">Pastelería Artesanal</span>
          </div>
        </Link>
        <Link to="/armatucaja" className="nav__custom-btn">
          🍰 Arma tu caja
        </Link>
      </div>

      <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
        
        <li className="nav__mobile-custom">
          <Link to="/armatucaja" className="btn-red" onClick={() => setOpen(false)}>
            🍰 Arma tu caja
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
        aria-label="menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}