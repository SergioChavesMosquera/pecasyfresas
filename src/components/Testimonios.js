import { useState } from 'react';
import './Testimonios.css';

const reviews = [
  { nombre:'Andrea M.',   stars:5, texto:'La mejor pizza de la ciudad, sin duda. Llevo años pidiendo y nunca me ha fallado. La masa es increíble y el pepperoni es generosísimo. ¡Sigan así!', hace:'Hace 1 mes' },
  { nombre:'Carlos R.',   stars:5, texto:'30 años no mienten. El sabor es único, se nota que es artesanal. El domicilio llegó rapidísimo y la pizza estaba perfectamente caliente. Recomendadísimo.', hace:'Hace 2 meses' },
  { nombre:'Valentina T.',stars:5, texto:'Pedí la pizza La Viña especial y quedé enamorada. El servicio por WhatsApp es muy ágil, en minutos me confirmaron el pedido. Definitivamente vuelvo.', hace:'Hace 3 semanas' },
  { nombre:'Juanita P.',  stars:5, texto:'La pizza 4 quesos es un sueño. Nada que envidiarle a las grandes cadenas, pero con sabor casero de verdad. El precio es muy justo para la calidad que ofrecen.', hace:'Hace 2 semanas' },
];

export default function Testimonios() {
  const [active, setActive] = useState(0);
  const t = reviews[active];
  return (
    <section className="testi" id="testimonios">
      <div className="testi__inner">
        <div className="testi__left">
          <span className="tag">— Lo que dicen</span>
          <h2 className="section-title">Reseñas de<br /><em>clientes reales</em></h2>
          <div className="divider-italy"><span/><span/><span/></div>
          <div className="testi__rating">
            <span className="testi__big">4.8</span>
            <div>
              <div className="testi__stars">★★★★★</div>
              <div className="testi__rlabel">Calificación promedio</div>
            </div>
          </div>
          <div className="testi__controls">
            <button className="testi__btn" onClick={()=>setActive(a=>(a-1+reviews.length)%reviews.length)}>←</button>
            <span className="testi__counter">{active+1} / {reviews.length}</span>
            <button className="testi__btn" onClick={()=>setActive(a=>(a+1)%reviews.length)}>→</button>
          </div>
        </div>
        <div className="testi__right">
          <div className="testi__card" key={active}>
            <div className="testi__qmark">"</div>
            <div className="testi__stars2">{'★'.repeat(t.stars)}</div>
            <p className="testi__text">"{t.texto}"</p>
            <div className="testi__author">
              <div className="testi__avatar">{t.nombre[0]}</div>
              <div>
                <div className="testi__name">{t.nombre}</div>
                <div className="testi__meta">{t.hace}</div>
              </div>
            </div>
          </div>
          <div className="testi__dots">
            {reviews.map((_,i)=>(
              <button key={i} className={`testi__dot ${i===active?'active':''}`} onClick={()=>setActive(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}