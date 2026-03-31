import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const WA = 'https://wa.me/573005023817?text=Hola!%20Quiero%20hacer%20un%20pedido%20a%20domicilio%20';

const links = [
  { label: 'Inicio',   href: '/#inicio',      isRoute: false },
  { label: 'Historia', href: '/#historia',     isRoute: false },
  { label: 'Menu',     href: '/menu',          isRoute: true  },
  { label: 'Galeria',  href: '/#galeria',      isRoute: false },
  { label: 'Reseñas',  href: '/#testimonios',  isRoute: false },
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
      <div className="nav__tricolor">
        <span className="tc-g" /><span className="tc-w" /><span className="tc-r" />
      </div>

      <div className="nav__left">
        <Link to="/" className="nav__logo">
          <img src="/images/logo-pizza.png" alt="Logo La Vina" className="nav__logo-pizza" />
          <div>
            <span className="nav__logo-main">LA VINA</span>
            <span className="nav__logo-sub">Pizzeria</span>
          </div>
        </Link>
        <Link to="/arma" className="nav__arma-btn">
          🍕 Arma tu pizza
        </Link>
      </div>

      <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
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
            Pedir ya
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