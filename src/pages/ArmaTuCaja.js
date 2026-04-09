import { useState } from 'react'; // Eliminado useEffect
import { Link } from 'react-router-dom';
import { postres } from '../data/postres'; 
import './ArmaTuCaja.css';

const SIZES = [
  { key: 'individual', label: '1', desc: 'Porción', factor: 0 },
  { key: 'box4', label: '4', desc: 'Pack x4', factor: 1 },
  { key: 'box6', label: '6', desc: 'Pack x6', factor: 2 },
  { key: 'box12', label: '12', desc: 'Pack x12', factor: 3 },
];

const BRAND_COLORS = ['#ff69b4', '#ffb6c1', '#f8bbd0', '#ff80ab', '#fad0c4'];

function getItemColor(index) {
  return BRAND_COLORS[index % BRAND_COLORS.length];
}

// Visualización de la caja de postres
// Actualiza solo el componente BoxVisual dentro de tu archivo .js
function BoxVisual({ items, size }) {
  
  return (
    <svg viewBox="0 0 400 400" className="box-svg" xmlns="http://www.w3.org/2000/svg">
      {/* Caja exterior */}
      <rect x="20" y="20" width="360" height="360" rx="40" fill="#fff" stroke="#ffcad4" strokeWidth="8" />
      {/* Papel seda interior */}
      <rect x="40" y="40" width="320" height="320" rx="20" fill="#fff5f7" />
      
      {items.length === 0 ? (
        <g opacity="0.3">
          <text x="200" y="200" textAnchor="middle" fontSize="100">📦</text>
          <text x="200" y="240" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ff69b4">CAJA VACÍA</text>
        </g>
      ) : (
        items.map((item, i) => {
          // Lógica simple de rejilla para los dulces
          const cols = size === 'box12' ? 3 : 2;
          const x = (i % cols) * (320 / cols) + (320 / cols / 2) + 40;
          const y = Math.floor(i / cols) * (320 / 4) + 80;
          
          return (
            <g key={i} transform={`translate(${x}, ${y})`}>
              <circle r="35" fill="white" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))" />
              <circle r="30" fill={getItemColor(i)} opacity="0.3" />
              <text textAnchor="middle" dominantBaseline="middle" fontSize="35">{item.emoji}</text>
            </g>
          );
        })
      )}
    </svg>
  );
}

export default function ArmaTuCaja() {
  // Eliminado: const [mode, setMode] = useState('pack');
  const [size, setSize] = useState('box4');
  const [selectedItems, setSelectedItems] = useState([]);
  const [search, setSearch] = useState('');

  const WA_NUMBER = '573057499947';

  const filteredItems = postres.filter(p => 
    p.nombre.toLowerCase().includes(search.toLowerCase())
  );

  const selectItem = (p) => {
    const limit = size === 'box4' ? 4 : size === 'box6' ? 6 : size === 'box12' ? 12 : 1;
    if (selectedItems.length < limit) {
      setSelectedItems([...selectedItems, p]);
    } else if (limit === 1) {
      setSelectedItems([p]);
    }
  };

  const buildWA = () => {
    const itemsList = selectedItems.map(i => i.nombre).join(', ');
    const msg = `¡Hola Pecas y Fresas! 🍓\nQuiero armar mi caja:\n- Tamaño: ${size}\n- Contenido: ${itemsList}`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="arma">
      <div className="arma__header">
        <Link to="/" className="arma__back">← Volver</Link>
        <span className="tag">— Personaliza tu antojo</span>
        <h1 className="section-title">Arma tu <em>Caja</em></h1>
        <div className="divider-brand"><span/><span/><span/></div>
      </div>

      <div className="arma__layout">
        <div className="arma__visual-col">
          <div className="arma__box-wrap">
            <BoxVisual items={selectedItems} size={size} />
          </div>

          <div className="arma__summary">
            <div className="arma__summary-item">
              <span className="arma__summary-label">Seleccionados</span>
              <span className="arma__summary-val">{selectedItems.length} postres</span>
            </div>
            <div className="arma__summary-item arma__summary-item--price">
              <span className="arma__summary-label">Total estimado</span>
              <span className="arma__summary-precio">Consultar</span>
            </div>
          </div>

          <a href={buildWA()} className="btn-wa arma__order-btn">
            Pedir por WhatsApp
          </a>
          <button className="arma__reset" onClick={() => setSelectedItems([])}>Vaciar caja</button>
        </div>

        <div className="arma__controls">
          <div className="arma__section">
            <div className="arma__section-title">Cantidad</div>
            <div className="arma__size-btns">
              {SIZES.map(s => (
                <button 
                  key={s.key} 
                  className={`arma__size-btn ${size === s.key ? 'active' : ''}`}
                  onClick={() => { setSize(s.key); setSelectedItems([]); }}
                >
                  <span className="arma__size-letter">{s.label}</span>
                  <span className="arma__size-desc">{s.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="arma__section">
            <div className="arma__section-title">Elige tus sabores</div>
            <input 
              className="arma__search" 
              placeholder="Buscar dulce..." 
              value={search} // Es buena práctica pasar el value
              onChange={e => setSearch(e.target.value)}
            />
            <div className="arma__item-list">
              {filteredItems.map((p) => (
                <button key={p.id} className="arma__pizza-item" onClick={() => selectItem(p)}>
                  <span className="arma__pizza-emoji">{p.emoji}</span>
                  <div className="arma__pizza-info">
                    <span className="arma__pizza-nombre">{p.nombre}</span>
                    <span className="arma__pizza-precio">Agregar a la caja</span>
                  </div>
                  <span className="add-plus">+</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 