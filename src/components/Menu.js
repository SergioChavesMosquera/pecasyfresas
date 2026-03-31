import { useState } from 'react';
import './Menu.css';

const WA_BASE = 'https://wa.me/573005023817?text=Hola!%20Quiero%20pedir%20';

const cats = ['Pizzas', 'Especiales', 'Bebidas', 'Extras'];

const items = {
  Pizzas: [
    { nombre:'Pizza Margarita',      desc:'Salsa de tomate, mozzarella fresca y albahaca. La clásica de siempre.',      precio:'desde $28.000', emoji:'🍕' },
    { nombre:'Pizza Pepperoni',      desc:'Abundante pepperoni, mozzarella y salsa de tomate artesanal.',                precio:'desde $32.000', emoji:'🍕' },
    { nombre:'Pizza 4 Quesos',       desc:'Mozzarella, parmesano, gorgonzola y provolone. Para los amantes del queso.', precio:'desde $35.000', emoji:'🧀' },
    { nombre:'Pizza La Viña',        desc:'Nuestra pizza especial de la casa con ingredientes secretos seleccionados.',  precio:'desde $38.000', emoji:'⭐' },
    { nombre:'Pizza Hawaiana',       desc:'Jamón, piña, mozzarella y salsa de tomate. Dulce y salada a la vez.',        precio:'desde $30.000', emoji:'🍍' },
    { nombre:'Pizza Vegetariana',    desc:'Pimientos, champiñones, aceitunas, cebolla y mozzarella fresca.',            precio:'desde $30.000', emoji:'🥦' },
  ],
  Especiales: [
    { nombre:'Pizza Familiar XL',   desc:'La pizza más grande para compartir en familia. Elige tus ingredientes favoritos.', precio:'desde $55.000', emoji:'👨‍👩‍👧‍👦' },
    { nombre:'Combo 2 Pizzas',      desc:'Dos pizzas medianas a tu elección. El combo perfecto para una noche en casa.',     precio:'desde $58.000', emoji:'🎉' },
    { nombre:'Pizza + Bebida',      desc:'Pizza mediana de tu elección con gaseosa 1.5L incluida.',                         precio:'desde $36.000', emoji:'🥤' },
  ],
  Bebidas: [
    { nombre:'Gaseosa 1.5L',        desc:'Coca-Cola, Sprite o Manzana. Perfecta para acompañar tu pizza.',  precio:'$7.000',  emoji:'🥤' },
    { nombre:'Jugo Natural 500ml',  desc:'Jugos de fruta natural del día. Preguunta por los disponibles.',   precio:'$5.000',  emoji:'🍹' },
    { nombre:'Agua 600ml',          desc:'Agua cristal fría para tu pedido.',                                precio:'$3.000',  emoji:'💧' },
  ],
  Extras: [
    { nombre:'Porción de Queso',    desc:'Queso extra para tu pizza. Nunca es demasiado queso.',             precio:'$5.000',  emoji:'🧀' },
    { nombre:'Salsa de Ajo',        desc:'Salsa de ajo artesanal para dipear o acompañar tu pizza.',         precio:'$3.000',  emoji:'🧄' },
    { nombre:'Orillas de Pan',      desc:'Orillas crujientes con ajo y perejil. El snack perfecto.',         precio:'$8.000',  emoji:'🍞' },
  ],
};

export default function Menu() {
  const [cat, setCat] = useState('Pizzas');

  return (
    <section className="menu" id="menu">
      <div className="menu__header">
        <span className="tag">— Nuestra carta</span>
        <h2 className="section-title">El <em>Menú</em></h2>
        <div className="divider-italy"><span/><span/><span/></div>
        <p className="section-sub" style={{margin:'0 auto', textAlign:'center'}}>
          Masa artesanal, ingredientes frescos y 30 años de receta. Todo directo a tu puerta. 🛵
        </p>
      </div>

      <div className="menu__tabs">
        {cats.map(c => (
          <button
            key={c}
            className={`menu__tab ${cat === c ? 'active' : ''}`}
            onClick={() => setCat(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="menu__grid">
        {items[cat].map((item, i) => (
          <a
            key={item.nombre}
            className="menu__card"
            href={`${WA_BASE}${encodeURIComponent(item.nombre)}%20🍕`}
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
              <div className="menu__card-cta">Pedir por WhatsApp →</div>
            </div>
          </a>
        ))}
      </div>

      <div className="menu__footer">
        <p>¿Quieres ver el menú completo o tienes una solicitud especial?</p>
        <a href="https://wa.me/573005023817?text=Hola!%20Quisiera%20ver%20el%20menú%20completo%20🍕" className="btn-wa" target="_blank" rel="noreferrer">
          <svg className="wa-icon" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Contactar por WhatsApp
        </a>
      </div>
    </section>
  );
}