import { useState } from 'react';
import { Link } from 'react-router-dom';
import { pizzas } from '../data/pizzas';
import './Menu.css';

const WA_BASE = 'https://wa.me/573005023817?text=Hola!%20Quiero%20pedir%20';

const extras = {
  Bebidas: [
    { id:'gaseosa',  nombre:'Gaseosa 1.5L',      desc:'Coca-Cola, Sprite o Manzana.',          precio:'$7.000', emoji:'🥤' },
    { id:'jugo',     nombre:'Jugo Natural 500ml', desc:'Jugos de fruta natural del dia.',        precio:'$5.000', emoji:'🍹' },
    { id:'agua',     nombre:'Agua 600ml',          desc:'Agua cristal fria para tu pedido.',      precio:'$3.000', emoji:'💧' },
  ],
  Extras: [
    { id:'queso-ex', nombre:'Porcion de Queso',   desc:'Queso extra para tu pizza.',             precio:'$5.000', emoji:'🧀' },
    { id:'ajo',      nombre:'Salsa de Ajo',        desc:'Salsa artesanal para dipear.',           precio:'$3.000', emoji:'🧄' },
    { id:'orillas',  nombre:'Orillas de Pan',      desc:'Orillas crujientes con ajo y perejil.',  precio:'$8.000', emoji:'🍞' },
  ],
};

const cats = ['Pizzas', 'Especiales', 'Combos', 'Bebidas', 'Extras'];

export default function Menu() {
  const [cat, setCat] = useState('Pizzas');

  const isPizzaCat = ['Pizzas', 'Especiales', 'Combos'].includes(cat);

  const getItems = () => {
    if (cat === 'Bebidas') return extras.Bebidas;
    if (cat === 'Extras')  return extras.Extras;
    return pizzas.filter(p => p.categoria === cat).slice(0, 8);
  };

  const currentItems = getItems();

  const totalInCat = isPizzaCat ? pizzas.filter(p => p.categoria === cat).length : 0;
  const hayMas = isPizzaCat && totalInCat > 8;

  const renderCard = (item, i) => {
    if (isPizzaCat) {
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
              <span className="menu__card-price">{item.precio}</span>
            </div>
            <p className="menu__card-desc">{item.desc}</p>
            <div className="menu__card-cta">Ver detalles</div>
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
            <span className="menu__card-price">{item.precio}</span>
          </div>
          <p className="menu__card-desc">{item.desc}</p>
          <div className="menu__card-cta">Pedir por WhatsApp</div>
        </div>
      </a>
    );
  };

  const waMenuUrl = 'https://wa.me/573005023817?text=Hola!%20Quisiera%20ver%20el%20menu%20completo';

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
        {hayMas ? (
          <div>
            <p>Hay mas opciones en el menu completo</p>
            <Link to="/menu" className="btn-red">
              Ver menu completo
            </Link>
          </div>
        ) : (
          <div>
            <p>Tienes una solicitud especial?</p>
            <a
              href={waMenuUrl}
              className="btn-wa"
              target="_blank"
              rel="noreferrer"
            >
              Contactar por WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
