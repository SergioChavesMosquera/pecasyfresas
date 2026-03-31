import { useState } from 'react';
import { Link }     from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Importamos la magia
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

        {/* AnimatePresence ayuda a que los elementos que salen lo hagan suavemente */}
        <motion.div 
          layout 
          className="menupage__grid"
        >
          <AnimatePresence mode='popLayout'>
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout // Esto hace que las tarjetas se muevan suavemente a su nueva posición
                initial={{ opacity: 0, y: 20 }} // Empieza invisible y un poco abajo
                whileInView={{ opacity: 1, y: 0 }} // Se hace visible al hacer scroll
                exit={{ opacity: 0, scale: 0.9 }} // Al desaparecer se encoge y difumina
                transition={{ duration: 0.3 }}
                viewport={{ once: true }} // Solo se anima la primera vez que lo ves
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
                      {hasSizes(p) && (
                        <span className="menupage__desde">desde </span>
                      )}
                      <span className="menupage__price">{getMinPrice(p)}</span>
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