// hero.js
import { Link } from 'react-router-dom';
import './Hero.css';

// Número de teléfono actualizado al de Pecas y Fresas y mensaje personalizado
const WA = 'https://wa.me/573057499947?text=Hola!%20Quiero%20hacer%20un%20pedido%20a%20Pecas%20y%20Fresas%20';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg">
        <div className="hero__bg-img" />
        <div className="hero__overlay" />
        <div className="hero__pattern" />
      </div>

      <div className="hero__content">
        <div className="hero__badge au d1">
          <span className="hero__badge-flag">🍓</span>
          Pastelería Artesanal & Café
        </div>

        <h1 className="hero__title au d2">
          Un rincón<br />
          que <em>enamora</em><br />
          {/* Mantuve la clase original, pero adapté el texto al contexto de Bogotá */}
          <span className="hero__title-green">en Bogotá</span>
        </h1>

        <p className="hero__sub au d3">
          Pecas y Fresas - sabor auténtico, repostería tradicional <br />
          y espacios mágicos muy instagrameables. <br />
          <span>Visítanos en nuestras sedes o pide a domicilio.</span>
        </p>
        
        <div className="hero__actions au d4">
          <a
            href={WA}
            className="btn-wa"
            target="_blank"
            rel="noreferrer"
          >
            Hacer un pedido
          </a>
          <Link to="/menu" className="btn-outline-white">
            Ver el menú
          </Link>
        </div>

        <div className="hero__stats au d5">
          {/* Estadísticas actualizadas con base en el perfil de Instagram */}
          {[
            ['40K+', 'Comunidad'],
            ['4.1', 'Calificación'],
            ['3', 'Sedes en Bogotá'],
            ['100%', 'Artesanal']
          ].map(([num, label]) => (
            <div className="hero__stat" key={label}>
              <span className="hero__stat-num">{num}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__visual au d3">
        {/* Actualizada la ruta y el alt text de la imagen */}
        <img 
  src="https://www.bettycrocker.lat/wp-content/uploads/2023/04/Strawberry-Frosted-Layer-Cake.jpg"
 
  alt="Postres artesanales y café en Pecas y Fresas" 
  className="hero__main-img" 
/>
      </div>
    </section>
  );
}