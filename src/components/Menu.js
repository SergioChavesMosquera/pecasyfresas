// Menu.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { postres } from '../data/postres'; // Asumiendo que renombras tu data
import './Menu.css';

const WA_BASE = 'https://wa.me/573057499947?text=Hola!%20Quiero%20pedir%20este%20postre:%20';

const cats = ['Tortas', 'Galletas', 'Postres', 'Café', 'Bebidas', 'Especiales'];

const hasCustomization = (item) => item.personalizable === true;

const getMinPrice = (item) => item.precio;

export default function Menu() {
  const [cat, setCat] = useState('Tortas');

  // Filtrar por categoría y mostrar los primeros 8
  const currentItems = postres.filter(p => p.categoria === cat).slice(0, 8);

  const renderCard = (item, i) => {
    if (hasCustomization(item)) {
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
            <div className="menu__card-tag">Personalizable</div>
            <div className="menu__card-cta">Ver opciones y encargar</div>
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
        <span className="tag">- Nuestra vitrina</span>
        <h2 className="section-title">Nuestra <em>Carta</em></h2>
        <div className="divider-pastry"><span /><span /><span /></div>
        <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
          Repostería 100% artesanal, ingredientes premium y el toque dulce que te enamora.
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
        <p>¿Buscas algo especial? Revisa toda la variedad</p>
        <Link to="/menu" className="btn-red">
          Ver carta completa
        </Link>
      </div>
    </section>
  );
}