import { useState, useEffect, useRef } from 'react';
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

  const hasSizes    = pizza && pizza.precios.medium !== null;
  const hasVariants = pizza && pizza.variantes && pizza.variantes.length > 0;

  const [size,    setSize]    = useState('medium');
  const [variant, setVariant] = useState('');
  const [zoomed,  setZoomed]  = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const imgRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSize('medium');
    if (pizza && pizza.variantes) setVariant(pizza.variantes[0]);
    else setVariant('');
  }, [id, pizza]);

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  if (!pizza) {
    return (
      <div className="pdetail__notfound">
        <h2>Producto no encontrado</h2>
        <Link to="/menu">Volver al menu</Link>
      </div>
    );
  }

  const selectedPrice  = hasSizes ? pizza.precios[size] : pizza.precios.small;
  const selectedSize   = SIZES.find(s => s.key === size);

  const waMsg = hasVariants
    ? `Hola! Quiero pedir ${pizza.nombre} - Sabor: ${variant} - Precio: ${selectedPrice}`
    : hasSizes
      ? `Hola! Quiero pedir ${pizza.nombre} tamano ${selectedSize.label} (${selectedSize.desc}) - ${pizza.precios[size]}`
      : `Hola! Quiero pedir ${pizza.nombre} - ${selectedPrice}`;

  const waUrl = `https://wa.me/573005023817?text=${encodeURIComponent(waMsg)}`;

  return (
    <div className="pdetail">
      {/* Fondo decorativo */}
      <div className="pdetail__bg">
        <div className="pdetail__bg-glow" />
        <div className="pdetail__bg-grid" />
      </div>

      <div className="pdetail__container">

        {/* Columna imagen */}
        <div className="pdetail__img-col">
          <div
            className={`pdetail__img-wrap ${zoomed ? 'zoomed' : ''}`}
            ref={imgRef}
            onMouseEnter={() => setZoomed(true)}
            onMouseLeave={() => setZoomed(false)}
            onMouseMove={handleMouseMove}
          >
            {pizza.imagen ? (
              <>
                <img
                  src={pizza.imagen}
                  alt={pizza.nombre}
                  className="pdetail__img"
                  style={zoomed ? {
                    transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                    transform: 'scale(1.55)',
                  } : {}}
                  onError={e => { e.target.style.display='none'; }}
                />
                <div className="pdetail__img-overlay" />
                <div className="pdetail__zoom-hint">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                  Zoom
                </div>
              </>
            ) : (
              <div className="pdetail__emoji-big">{pizza.emoji}</div>
            )}
          </div>

          {/* Badge categoria */}
          <div className="pdetail__img-badge">
            <span className="pdetail__img-badge-cat">{pizza.categoria}</span>
            <span className="pdetail__img-badge-emoji">{pizza.emoji}</span>
          </div>
        </div>

        {/* Columna info */}
        <div className="pdetail__info">
          <nav className="pdetail__breadcrumb">
            <Link to="/">Inicio</Link>
            <span className="pdetail__breadcrumb-sep">›</span>
            <Link to="/menu">Menu</Link>
            <span className="pdetail__breadcrumb-sep">›</span>
            <span>{pizza.nombre}</span>
          </nav>

          <h1 className="pdetail__nombre pdetail__nombre--anim">{pizza.nombre}</h1>

          <div className="divider-italy"><span/><span/><span/></div>

          <p className="pdetail__detalle">{pizza.desc}</p>

          {/* Selector tamaños */}
          {hasSizes && (
            <div className="pdetail__sizes">
              <div className="pdetail__label">Elige el tamaño</div>
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

          {/* Selector variantes */}
          {hasVariants && (
            <div className="pdetail__variants">
              <div className="pdetail__label">Elige el sabor</div>
              <div className="pdetail__variants-grid">
                {pizza.variantes.map(v => (
                  <button
                    key={v}
                    className={`pdetail__variant-btn ${variant === v ? 'active' : ''}`}
                    onClick={() => setVariant(v)}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Precio */}
          <div className="pdetail__price-card">
            <div className="pdetail__price-card-inner">
              <div className="pdetail__price-left">
                <span className="pdetail__price-label">Precio</span>
                <span className="pdetail__precio">{selectedPrice}</span>
              </div>
              {hasSizes && (
                <div className="pdetail__price-right">
                  <span className="pdetail__price-size-badge">
                    {selectedSize.label} · {selectedSize.desc}
                  </span>
                </div>
              )}
            </div>
            <div className="pdetail__price-shimmer" />
          </div>

          {/* CTA */}
          <a href={waUrl} className="pdetail__wa-btn" target="_blank" rel="noreferrer">
            <svg className="pdetail__wa-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pedir por WhatsApp
          </a>

          <Link to="/menu" className="pdetail__back">
            ← Ver más productos
          </Link>
        </div>

      </div>
    </div>
  );
}