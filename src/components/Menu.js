import { useState } from 'react';
import { Link } from 'react-router-dom';
import { pizzas } from '../data/pizzas';
import './Menu.css';

const WA_BASE = 'https://wa.me/573005023817?text=Hola!%20Quiero%20pedir%20';

const cats = ['Pizzas', 'Especiales', 'Hamburguesas', 'Perros', 'Asados', 'Bebidas'];

const hasSizes = (item) => item.precios.medium !== null;

const getMinPrice = (item) => item.precios.small;

export default function Menu() {
  const [cat, setCat] = useState('Pizzas');

  const currentItems = pizzas.filter(p => p.categoria === cat).slice(0, 8);

  const renderCard = (item, i) => {
    if (hasSizes(item)) {
      return (
        <Link
          key={item.id}
          to={`/menu/${item.id}`}
          className="menu__card"
          style={{ animationDelay: `${i * 0.07}s` }}
        >
          <div className="menu__card-emoji">{item.emoji}</div>
          <div className="menu__card-body">
            <div className="menu__card-top">
              <h3 className="menu__card-name">{item.nombre}</h3>
              <div className="menu__card-prices">
                <span className="menu__card-desde">desde</span>
                <span className="menu__card-price">{getMinPrice(item)}</span>
              </div>
            </div>
            <p className="menu__card-desc">{item.desc}</p>
            <div className="menu__card-sizes">
              <span>S  -  </span><span>M  -  </span><span>L  -  </span><span>XL  </span>
            </div>
            <div className="menu__card-cta">Ver tamaños y pedir</div>
          </div>
        </Link>
      );
    }

    const waUrl = WA_BASE + encodeURIComponent(item.nombre);
    return (
      <a
        key={item.id}
        className="menu__card"
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        style={{ animationDelay: `${i * 0.07}s` }}
      >
        <div className="menu__card-emoji">{item.emoji}</div>
        <div className="menu__card-body">
          <div className="menu__card-top">
            <h3 className="menu__card-name">{item.nombre}</h3>
            <span className="menu__card-price">{getMinPrice(item)}</span>
          </div>
          <p className="menu__card-desc">{item.desc}</p>
          <div className="menu__card-cta">Pedir por WhatsApp</div>
        </div>
      </a>
    );
  };

  return (
    <section className="menu" id="menu">
      <div className="menu__header">
        <span className="tag">- Nuestra carta</span>
        <h2 className="section-title">El <em>Menu</em></h2>
        <div className="divider-italy"><span /><span /><span /></div>
        <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
          Masa artesanal, ingredientes frescos y 30 anos de receta. Todo directo a tu puerta.
        </p>
      </div>

      <div className="menu__tabs">
        {cats.map(c => (
          <button
            key={c}
            className={cat === c ? 'menu__tab active' : 'menu__tab'}
            onClick={() => setCat(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="menu__grid">
        {currentItems.map((item, i) => renderCard(item, i))}
      </div>

      <div className="menu__footer">
        <p>Explora la carta completa</p>
        <Link to="/menu" className="btn-red">
          Ver menu completo
        </Link>
      </div>
    </section>
  );
}