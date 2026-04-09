import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { postres } from '../data/postres'; // Asumiendo que renombraste tu data
import './MenuPage.css';

const cats = ['Todos', 'Tortas', 'Postres', 'Fresas', 'Bebidas', 'Especiales'];

export default function MenuPage() {
  const [cat, setCat] = useState('Todos');
  const filtered = cat === 'Todos' ? postres : postres.filter(p => p.categoria === cat);

  return (
    <div className="menupage">
      <div className="menupage__header">
        <span className="tag">- Dulce Tentación</span>
        <h1 className="section-title">Nuestra <em>Carta</em></h1>
        <div className="divider-brand"><span/><span/><span/></div>
      </div>

      <div className="menupage__layout">
        <aside className="menupage__filters">
          <h3>Categorías</h3>
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

        <motion.div layout className="menupage__grid">
          <AnimatePresence mode='popLayout'>
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/menu/${p.id}`} className="menupage__card">
                  <div className="menupage__card-img">
                    {p.imagen
                      ? <img src={p.imagen} alt={p.nombre} loading="lazy" />
                      : <div className="menupage__card-emoji">{p.emoji}</div>
                    }
                  </div>
                  <div className="menupage__card-body">
                    <span className="menupage__cat">{p.categoria}</span>
                    <h3>{p.nombre}</h3>
                    <p>{p.desc}</p>
                    <div className="menupage__price-wrap">
                      <span className="menupage__price">{p.precio || p.precios?.porcion}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}