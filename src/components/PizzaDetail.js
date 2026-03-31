import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { pizzas } from '../data/pizzas';
import './PizzaDetail.css';

const WA_BASE = 'https://wa.me/573005023817?text=Hola!%20Quiero%20pedir%20';

export default function PizzaDetail() {
  const { id } = useParams();
  const pizza = pizzas.find(p => p.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!pizza) return (
    <div className="pdetail__notfound">
      <h2>Pizza no encontrada</h2>
      <Link to="/menu">← Volver al menú</Link>
    </div>
  );

  const waUrl = `${WA_BASE}${encodeURIComponent(pizza.nombre + ' 🍕')}`;

  return (
    <div className="pdetail">
      <div className="pdetail__container">

        <div className="pdetail__img-col">
          {pizza.imagen
            ? <img src={pizza.imagen} alt={pizza.nombre} className="pdetail__img" />
            : <div className="pdetail__emoji-big">{pizza.emoji}</div>
          }
        </div>

        <div className="pdetail__info">
          <nav className="pdetail__breadcrumb">
            <Link to="/">Inicio</Link> › <Link to="/menu">Menú</Link> › <span>{pizza.nombre}</span>
          </nav>

          <span className="pdetail__cat">{pizza.categoria}</span>
          <h1 className="pdetail__nombre">{pizza.nombre}</h1>
          <p className="pdetail__precio">{pizza.precio}</p>

          <div className="divider-italy"><span/><span/><span/></div>

          <p className="pdetail__detalle">{pizza.detalle}</p>

          <a href={waUrl} className="btn-wa pdetail__btn" target="_blank" rel="noreferrer">
            🍕 Pedir por WhatsApp
          </a>

          <Link to="/menu" className="pdetail__back">← Ver más pizzas</Link>
        </div>
      </div>
    </div>
  );
}