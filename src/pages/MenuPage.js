import { useState } from 'react';
import { Link }     from 'react-router-dom';
import { pizzas }   from '../data/pizzas';
import './MenuPage.css';

const cats = ['Todas', 'Clasicas', 'Especiales', 'Combos'];

export default function MenuPage() {
  const [cat, setCat] = useState('Todas');
  const filtered = cat === 'Todas' ? pizzas : pizzas.filter(p => p.categoria === cat);

  return (
    <div className="menupage">
      <div className="menupage__header">
        <span className="tag">— Carta completa</span>
        <h1 className="section-title">Nuestro <em>Menú</em></h1>
        <div className="divider-italy"><span/><span/><span/></div>
      </div>

      <div className="menupage__layout">
        <aside className="menupage__filters">
          <h3>Categorías</h3>
          <ul>
            {cats.map(c => (
              <li key={c}>
                <button
                  className={`mfilter-btn ${cat === c ? 'active' : ''}`}
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
                <span className="menupage__price">{p.precio}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}