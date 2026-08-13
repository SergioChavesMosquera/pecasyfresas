// Hero.js — Gúrus Panadería
import { Link } from 'react-router-dom';
import './Hero.css';

const WA = 'https://wa.me/573173692416?text=Hola!%20Quiero%20hacer%20un%20pedido%20a%20G%C3%BArus%20Panader%C3%ADa%20';

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
          <span className="hero__badge-flag">🥐</span>
          Panadería & Pastelería Artesanal
        </div>

        <h1 className="hero__title au d2">
          Horneamos<br />
          <em>sonrisas</em><br />
          <span className="hero__title-accent">en Bogotá</span>
        </h1>

        <p className="hero__sub au d3">
          Pan recién horneado, tortas con alma y café de verdad. <br />
          Gúrus es tu rincón favorito desde las 6 de la mañana. <br />
          <span>5 sedes en Bogotá — domicilios disponibles.</span>
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
            Ver la carta
          </Link>
        </div>

        <div className="hero__stats au d5">
          {[
            ['5', 'Sedes'],
            ['6am', 'Abrimos'],
            ['100%', 'Artesanal'],
            ['∞', 'Sabor']
          ].map(([num, label]) => (
            <div className="hero__stat" key={label}>
              <span className="hero__stat-num">{num}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__visual au d3">
        <img 
          src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg"
          alt="Pan artesanal Gúrus Panadería" 
          className="hero__main-img" 
        />
      </div>
    </section>
  );
}
