import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pizzas } from '../data/pizzas';
import './ArmaTuPizza.css';

// Solo pizzas con tamaños (no hamburguesas, perros, etc.)
const solopizzas = pizzas.filter(p => p.precios.medium !== null);

const SIZES = [
  { key:'small',  label:'S',  desc:'28 cm', factor: 0 },
  { key:'medium', label:'M',  desc:'35 cm', factor: 1 },
  { key:'large',  label:'L',  desc:'40 cm', factor: 2 },
  { key:'xlarge', label:'XL', desc:'45 cm', factor: 3 },
];

const PRICE_KEYS = ['small','medium','large','xlarge'];

// Convierte "$35.000" a 35000
function parsePrice(str) {
  if (!str) return 0;
  return parseInt(str.replace(/\$|\./g,''), 10);
}

// Colores para la visualizacion de cada pizza
const PIZZA_COLORS = [
  '#c8a84b','#cc1f1f','#1a7a2e','#8b4513','#d4883a',
  '#9b2335','#4a7c59','#c47a2d','#7a3b8c','#2e86ab',
  '#e8c96e','#6b8f71','#d4622d','#8c6239','#3d5a80',
  '#b5541c','#2d6a4f','#e07b39','#6a3d9a','#1d7874',
];

function getPizzaColor(index) {
  return PIZZA_COLORS[index % PIZZA_COLORS.length];
}

// SVG de pizza completa
function PizzaFull({ color, emoji }) {
  return (
    <g>
      {/* Masa borde */}
      <circle cx="200" cy="200" r="185" fill="#c8a84b" />
      {/* Base salsa */}
      <circle cx="200" cy="200" r="170" fill={color} />
      {/* Textura */}
      <circle cx="200" cy="200" r="170" fill="rgba(0,0,0,0.15)" />
      {/* Queso derretido */}
      <circle cx="200" cy="200" r="155" fill={color} opacity="0.85" />
      {/* Emoji central */}
      <text x="200" y="215" textAnchor="middle" fontSize="72" dominantBaseline="middle">{emoji}</text>
    </g>
  );
}

// SVG mitad izquierda
function PizzaHalfLeft({ color, emoji }) {
  return (
    <g>
      <clipPath id="left-clip">
        <rect x="0" y="0" width="200" height="400" />
      </clipPath>
      <g clipPath="url(#left-clip)">
        <circle cx="200" cy="200" r="170" fill={color} />
        <circle cx="200" cy="200" r="170" fill="rgba(0,0,0,0.15)" />
        <circle cx="200" cy="200" r="155" fill={color} opacity="0.85" />
        <text x="110" y="215" textAnchor="middle" fontSize="52" dominantBaseline="middle">{emoji}</text>
      </g>
    </g>
  );
}

// SVG mitad derecha
function PizzaHalfRight({ color, emoji }) {
  return (
    <g>
      <clipPath id="right-clip">
        <rect x="200" y="0" width="200" height="400" />
      </clipPath>
      <g clipPath="url(#right-clip)">
        <circle cx="200" cy="200" r="170" fill={color} />
        <circle cx="200" cy="200" r="170" fill="rgba(0,0,0,0.15)" />
        <circle cx="200" cy="200" r="155" fill={color} opacity="0.85" />
        <text x="290" y="215" textAnchor="middle" fontSize="52" dominantBaseline="middle">{emoji}</text>
      </g>
    </g>
  );
}

function PizzaSVG({ mode, left, right, single }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className="pizza-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sombra */}
      <ellipse cx="200" cy="390" rx="170" ry="12" fill="rgba(0,0,0,0.35)" />

      {/* Borde de masa (siempre) */}
      <circle cx="200" cy="200" r="185" fill="#c8a84b" />

      {mode === 'completa' && single && (
        <PizzaFull
          color={getPizzaColor(solopizzas.findIndex(p => p.id === single.id))}
          emoji={single.emoji}
        />
      )}

      {mode === 'mitad' && (
        <>
          {left && (
            <PizzaHalfLeft
              color={getPizzaColor(solopizzas.findIndex(p => p.id === left.id))}
              emoji={left.emoji}
            />
          )}
          {right && (
            <PizzaHalfRight
              color={getPizzaColor(solopizzas.findIndex(p => p.id === right.id))}
              emoji={right.emoji}
            />
          )}
          {/* Linea divisoria */}
          {(left || right) && (
            <line x1="200" y1="15" x2="200" y2="385" stroke="#c8a84b" strokeWidth="4" strokeDasharray="8 4" />
          )}
        </>
      )}

      {/* Placeholder si no hay seleccion */}
      {mode === 'completa' && !single && (
        <text x="200" y="215" textAnchor="middle" fontSize="80" dominantBaseline="middle" opacity="0.3">🍕</text>
      )}
      {mode === 'mitad' && !left && !right && (
        <text x="200" y="215" textAnchor="middle" fontSize="80" dominantBaseline="middle" opacity="0.3">🍕</text>
      )}
    </svg>
  );
}

export default function ArmaTuPizza() {
  const [mode,   setMode]   = useState('completa');
  const [size,   setSize]   = useState('medium');
  const [single, setSingle] = useState(null);
  const [left,   setLeft]   = useState(null);
  const [right,  setRight]  = useState(null);
  const [search, setSearch] = useState('');
  const [selecting, setSelecting] = useState('single'); // 'single' | 'left' | 'right'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reset al cambiar modo
  useEffect(() => {
    setSingle(null);
    setLeft(null);
    setRight(null);
    setSearch('');
    setSelecting(mode === 'completa' ? 'single' : 'left');
  }, [mode]);

  const filteredPizzas = solopizzas.filter(p =>
    p.nombre.toLowerCase().includes(search.toLowerCase())
  );

  // Calculo de precio

  const calcPrice = () => {
    if (mode === 'completa') {
      if (!single) return null;
      return single.precios[size];
    }
    if (mode === 'mitad') {
      if (!left && !right) return null;
      const prices = [left, right]
        .filter(Boolean)
        .map(p => parsePrice(p.precios[size]));
      const max = Math.max(...prices);
      return '$' + max.toLocaleString('es-CO');
    }
    return null;
  };

  const precio = calcPrice();

  // Mensaje WhatsApp
  const buildWA = () => {
    const sizeLabel = SIZES.find(s => s.key === size);
    let msg = 'Hola! Quiero armar mi pizza:\n';
    msg += `Tamano: ${sizeLabel.label} (${sizeLabel.desc})\n`;
    if (mode === 'completa' && single) {
      msg += `Pizza completa: ${single.nombre}\n`;
      msg += `Precio: ${single.precios[size]}`;
    } else if (mode === 'mitad') {
      msg += `Mitad izquierda: ${left ? left.nombre : 'por definir'}\n`;
      msg += `Mitad derecha: ${right ? right.nombre : 'por definir'}\n`;
      msg += `Precio: ${precio}`;
    }
    return `https://wa.me/573005023817?text=${encodeURIComponent(msg)}`;
  };

  const canOrder = mode === 'completa'
    ? !!single
    : !!(left && right);

  const selectPizza = (p) => {
    if (mode === 'completa') {
      setSingle(p);
    } else {
      if (selecting === 'left') {
        setLeft(p);
        setSelecting('right');
      } else {
        setRight(p);
        setSelecting('left');
      }
    }
  };

  const isSelected = (p) => {
    if (mode === 'completa') return single?.id === p.id;
    return left?.id === p.id || right?.id === p.id;
  };

  return (
    <div className="arma">

      <div className="arma__header">
        <Link to="/" className="arma__back">← Volver</Link>
        <span className="tag">- Personaliza tu pedido</span>
        <h1 className="section-title">Arma tu <em>Pizza</em></h1>
        <div className="divider-italy"><span/><span/><span/></div>
        <p className="arma__sub">
          Elige el modo, el tamano y los sabores. Te llevamos tu pizza perfecta a la puerta.
        </p>
      </div>

      <div className="arma__layout">

        {/* Panel izquierdo: visualizacion */}
        <div className="arma__visual-col">
          <div className="arma__pizza-wrap">
            <PizzaSVG
              mode={mode}
              single={single}
              left={left}
              right={right}
            />
          </div>

          {/* Info de seleccion actual */}
          <div className="arma__summary">
            {mode === 'completa' && (
              <div className="arma__summary-item">
                <span className="arma__summary-label">Pizza</span>
                <span className="arma__summary-val">
                  {single ? single.nombre : 'Sin elegir'}
                </span>
              </div>
            )}
            {mode === 'mitad' && (
              <>
                <div className={`arma__summary-item ${selecting==='left' && !left ? 'arma__summary-item--active' : ''}`}>
                  <span className="arma__summary-label">Mitad izquierda</span>
                  <span className="arma__summary-val">
                    {left ? left.nombre : 'Sin elegir'}
                  </span>
                </div>
                <div className={`arma__summary-item ${selecting==='right' && !right ? 'arma__summary-item--active' : ''}`}>
                  <span className="arma__summary-label">Mitad derecha</span>
                  <span className="arma__summary-val">
                    {right ? right.nombre : 'Sin elegir'}
                  </span>
                </div>
              </>
            )}
            <div className="arma__summary-item arma__summary-item--price">
              <span className="arma__summary-label">Total</span>
              <span className="arma__summary-precio">
                {precio || 'Elige tu pizza'}
              </span>
            </div>
          </div>

          {/* Boton pedir */}
          <a
            href={canOrder ? buildWA() : undefined}
            className={`btn-wa arma__order-btn ${!canOrder ? 'arma__order-btn--disabled' : ''}`}
            target={canOrder ? '_blank' : undefined}
            rel="noreferrer"
            onClick={e => { if (!canOrder) e.preventDefault(); }}
          >
            {canOrder ? 'Pedir por WhatsApp' : 'Completa tu pizza primero'}
          </a>
        </div>

        {/* Panel derecho: controles */}
        <div className="arma__controls">

          {/* Modo */}
          <div className="arma__section">
            <div className="arma__section-title">Modo de pizza</div>
            <div className="arma__mode-btns">
              <button
                className={`arma__mode-btn ${mode==='completa' ? 'active' : ''}`}
                onClick={() => setMode('completa')}
              >
                <span className="arma__mode-icon">🍕</span>
                <span>Pizza completa</span>
                <span className="arma__mode-sub">Un solo sabor</span>
              </button>
              <button
                className={`arma__mode-btn ${mode==='mitad' ? 'active' : ''}`}
                onClick={() => setMode('mitad')}
              >
                <span className="arma__mode-icon">🍕🍕</span>
                <span>Mitad y mitad</span>
                <span className="arma__mode-sub">Dos sabores</span>
              </button>
            </div>
          </div>

          {/* Tamaño */}
          <div className="arma__section">
            <div className="arma__section-title">Tamano</div>
            <div className="arma__size-btns">
              {SIZES.map(s => (
                <button
                  key={s.key}
                  className={`arma__size-btn ${size===s.key ? 'active' : ''}`}
                  onClick={() => setSize(s.key)}
                >
                  <span className="arma__size-letter">{s.label}</span>
                  <span className="arma__size-desc">{s.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Buscador */}
          <div className="arma__section">
            <div className="arma__section-title">
              {mode === 'completa'
                ? 'Elige tu sabor'
                : left && right
                  ? 'Toca cualquier pizza para cambiarla'
                  : `Eligiendo: mitad ${selecting === 'left' ? 'izquierda' : 'derecha'}`
              }
            </div>
            <input
              className="arma__search"
              type="text"
              placeholder="Buscar pizza..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <div className="arma__pizza-list">
              {filteredPizzas.map((p, i) => (
                <button
                  key={p.id}
                  className={`arma__pizza-item ${isSelected(p) ? 'selected' : ''}`}
                  onClick={() => selectPizza(p)}
                  style={{ '--pizza-color': getPizzaColor(i) }}
                >
                  <span className="arma__pizza-dot" />
                  <span className="arma__pizza-emoji">{p.emoji}</span>
                  <div className="arma__pizza-info">
                    <span className="arma__pizza-nombre">{p.nombre}</span>
                    <span className="arma__pizza-precio">desde {p.precios.small}</span>
                  </div>
                  {isSelected(p) && <span className="arma__pizza-check">✓</span>}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}