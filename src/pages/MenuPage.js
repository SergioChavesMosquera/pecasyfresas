import { useState } from 'react';
import { Link }     from 'react-router-dom';
import { pizzas }   from '../data/pizzas';
import './MenuPage.css';

const cats = ['Todas', 'Pizzas', 'Especiales', 'Hamburguesas', 'Perros', 'Asados', 'Bebidas'];

const getMinPrice = (p) => p.precios.small;
const hasSizes    = (p) => p.precios.medium !== null;

export default function MenuPage() {
  const [cat, setCat] = useState('Todas');
  const filtered = cat === 'Todas' ? pizzas : pizzas.filter(p => p.categoria === cat);

  return (
    <div className="menupage">
      <div className="menupage__header">
        <span className="tag">- Carta completa</span>
        <h1 className="section-title">Nuestro <em>Menu</em></h1>
        <div className="divider-italy"><span/><span/><span/></div>
      </div>

      <div className="menupage__layout">
        <aside className="menupage__filters">
          <h3>Categorias</h3>
          <ul>
            {cats.map(c => (
              <li key={c}>
                <button
                  className={cat === c ? 'mfilter-btn active' : 'mfilter-btn'}
                  onClick={() => setCat(c)}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="menupage__grid">
          {filtered.map(p => (
            <Link to={`/menu/${p.id}`} className="menupage__card" key={p.id}>
              <div className="menupage__card-img">
                {p.imagen
                  ? <img src={p.imagen} alt={p.nombre} />
                  : <div className="menupage__card-emoji">{p.emoji}</div>
                }
              </div>
              <div className="menupage__card-body">
                <span className="menupage__cat">{p.categoria}</span>
                <h3>{p.nombre}</h3>
                <p>{p.desc}</p>
                <div className="menupage__price-wrap">
                  {hasSizes(p) && (
                    <span className="menupage__desde">desde </span>
                  )}
                  <span className="menupage__price">{getMinPrice(p)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}