import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { pizzas } from '../data/pizzas';
import './PizzaDetail.css';

const SIZES = [
  { key:'small',  label:'S',  desc:'28 cm' },
  { key:'medium', label:'M',  desc:'35 cm' },
  { key:'large',  label:'L',  desc:'40 cm' },
  { key:'xlarge', label:'XL', desc:'45 cm' },
];

export default function PizzaDetail() {
  const { id } = useParams();
  const pizza = pizzas.find(p => p.id === id);

  const hasSizes   = pizza && pizza.precios.medium !== null;
  // Cambiamos 'variantes' por 'sabores' para que coincida con tu data
  const hasSabores = pizza && pizza.sabores && pizza.sabores.length > 0;

  const [size,  setSize]  = useState('medium');
  const [sabor, setSabor] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    setSize('medium');
    // Seleccionamos el primer sabor por defecto si existen
    if (pizza && pizza.sabores) setSabor(pizza.sabores[0]);
    else setSabor('');
  }, [id, pizza]);

  if (!pizza) {
    return (
      <div className="pdetail__notfound">
        <h2>Producto no encontrado</h2>
        <Link to="/menu">Volver al menu</Link>
      </div>
    );
  }

  const selectedPrice = pizza.precios.small;
  const selectedSize  = SIZES.find(s => s.key === size);

  // Actualizamos el mensaje de WhatsApp para usar 'hasSabores' y 'sabor'
  const waMsg = hasSabores
    ? `Hola! Quiero pedir ${pizza.nombre} - Sabor: ${sabor} - Precio: ${selectedPrice}`
    : hasSizes
      ? `Hola! Quiero pedir ${pizza.nombre} tamaño ${selectedSize.label} (${selectedSize.desc}) - ${pizza.precios[size]}`
      : `Hola! Quiero pedir ${pizza.nombre} - ${selectedPrice}`;

  const waUrl = `https://wa.me/573005023817?text=${encodeURIComponent(waMsg)}`;

  const displayPrice = hasSizes ? pizza.precios[size] : selectedPrice;

  return (
    <div className="pdetail">
      <div className="pdetail__container">

        <div className="pdetail__img-col">
          {pizza.imagen
            ? <img src={pizza.imagen} alt={pizza.nombre} className="pdetail__img"
                onError={e => { e.target.style.display='none'; }} />
            : <div className="pdetail__emoji-big">{pizza.emoji}</div>
          }
        </div>

        <div className="pdetail__info">
          <nav className="pdetail__breadcrumb">
            <Link to="/">Inicio</Link> &rsaquo; <Link to="/menu">Menu</Link> &rsaquo; <span>{pizza.nombre}</span>
          </nav>

          <span className="pdetail__cat">{pizza.categoria}</span>
          <h1 className="pdetail__nombre">{pizza.nombre}</h1>

          <div className="divider-italy"><span /><span /><span /></div>

          <p className="pdetail__detalle">{pizza.desc}</p>

          {/* Selector de tamaños — solo para pizzas */}
          {hasSizes && (
            <div className="pdetail__sizes">
              <div className="pdetail__sizes-label">Elige el tamaño:</div>
              <div className="pdetail__sizes-grid">
                {SIZES.map(s => (
                  <button
                    key={s.key}
                    className={`pdetail__size-btn ${size === s.key ? 'active' : ''}`}
                    onClick={() => setSize(s.key)}
                  >
                    <span className="pdetail__size-letter">{s.label}</span>
                    <span className="pdetail__size-cm">{s.desc}</span>
                    <span className="pdetail__size-price">{pizza.precios[s.key]}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Selector de sabores — para gaseosas */}
          {hasSabores && (
            <div className="pdetail__variants">
              <div className="pdetail__sizes-label">Elige el sabor:</div>
              <div className="pdetail__variants-grid">
                {pizza.sabores.map(s => (
                  <button
                    key={s}
                    className={`pdetail__variant-btn ${sabor === s ? 'active' : ''}`}
                    onClick={() => setSabor(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="pdetail__price-wrap">
            <span className="pdetail__price-label">Precio</span>
            <span className="pdetail__precio">{displayPrice}</span>
          </div>

          <a href={waUrl} className="btn-wa pdetail__btn" target="_blank" rel="noreferrer">
            Pedir por WhatsApp
          </a>

          <Link to="/menu" className="pdetail__back">Ver más productos</Link>
        </div>

      </div>
    </div>
  );
}