import { Link } from 'react-router-dom';
import './Hero.css';

const WA = 'https://wa.me/573005023817?text=Hola!%20Quiero%20hacer%20un%20pedido%20a%20domicilio%20';

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
          <span className="hero__badge-flag">IT</span>
          Mas de 30 anos de sabor y tradicion
        </div>

        <h1 className="hero__title au d2">
          La pizza<br />
          que <em>enamora</em><br />
          <span className="hero__title-green">desde 1994</span>
        </h1>

        <p className="hero__sub au d3">
          Pizzeria La Vina - sabor autentico, masa artesanal y los mejores ingredientes.
          Domicilios disponibles ahora mismo.
        </p>

        <div className="hero__actions au d4">
          <a
            href={WA}
            className="btn-wa"
            target="_blank"
            rel="noreferrer"
          >
            Pedir a domicilio
          </a>
          <Link to="/menu" className="btn-outline-white">
            Ver el menu
          </Link>
        </div>

        <div className="hero__stats au d5">
          {[
            ['30+', 'Anos de tradicion'],
            ['4.8', 'Calificacion'],
            ['Rapido', 'Domicilios'],
            ['Artesanal', 'Masa propia']
          ].map(([num, label]) => (
            <div className="hero__stat" key={label}>
              <span className="hero__stat-num">{num}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__slice au d3">pizza</div>
    </section>
  );
}