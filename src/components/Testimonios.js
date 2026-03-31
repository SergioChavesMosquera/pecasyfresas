import { useState } from 'react';
import './Testimonios.css';

const reviews = [
  { nombre:'Andrea M.',   stars:5, texto:'La mejor pizza de la ciudad, sin duda. Llevo años pidiendo y nunca me ha fallado. La masa es increíble y el pepperoni es generosísimo. ¡Sigan así!', hace:'Hace 1 mes' },
  { nombre:'Carlos R.',   stars:4.5, texto:'30 años no mienten. El sabor es único, se nota que es artesanal. El domicilio llegó rapidísimo y la pizza estaba perfectamente caliente. Recomendadísimo.', hace:'Hace 2 meses' },
  { nombre:'Valentina T.',stars:5, texto:'Pedí la pizza La Viña especial y quedé enamorada. El servicio por WhatsApp es muy ágil, en minutos me confirmaron el pedido. Definitivamente vuelvo.', hace:'Hace 3 semanas' },
  { nombre:'Charlotte P.',  stars:4, texto:'Súper la pizza de mi adolescencia. Super bendiciones en esta nueva etapa y nueva sede', hace:'Hace 2 meses' },
  { nombre:'Vandergraaf.',  stars:5, texto:'Las mejores pizzas que he probado. La viña desde pequeña su sabor es unico. Que felicidad volver a probar y recordar esos momentos', hace:'Hace 2 semanas' },
  { nombre:'Esperanza C.',  stars:5, texto:'El lugar es maravilloso y encantadoro, buenisima la atención y la comida es excelente.', hace:'Hace 2 semanas' },
  { nombre:'Maira V.',  stars:4, texto:'La pizzeria mas top. Cuando estaba pequeña mi papa nos llevaba los domingos, que bonito ir y revivir todos esos momentos', hace:'Hace 2 semanas' },
  { nombre:'Mary T.',  stars:4, texto:'El lugar hermoso y la comida deliciosa', hace:'Hace 2 semanas' },
  { nombre:'Johanna C.',  stars:5, texto:'Excelente 👏🏼👏🏼👏🏼. Los mejores éxitos mi pizzeria favorita de niña desde el año 1990.', hace:'Hace 2 semanas' },
  { nombre:'Blanca M.',  stars:5, texto:'Buen servicio y la comida muy rica!', hace:'Hace 2 semanas' },
  { nombre:'Feliz K.',  stars:4, texto:'Excelente restaurante, venden unas pizzas bien ricas', hace:'Hace 2 semanas' },
  { nombre:'Angela Z.',  stars:4, texto:'Wowwww espectacular todo, 10/10 😍', hace:'Hace 2 semanas' },
  { nombre:'Noemi N.',  stars:4, texto:'Excelente lugar para compartir', hace:'Hace 2 semanas' },
  { nombre:'Mary T.',  stars:5, texto:'El lugar hermoso y la comida deliciosa', hace:'Hace 2 semanas' },
  { nombre:'Brian R.',  stars:4, texto:'Muy buen lugar excelentes comidas rápidas y buena atención', hace:'Hace 2 semanas' },
  { nombre:'David Z.',  stars:5, texto:'Un restaurante que te ofrece gran variedad de platos en su carta, con excelentes sabores para todos los gustos.', hace:'Hace 2 semanas' },
  { nombre:'Pao A.',  stars:5, texto:'La comida es muy rica, es recién hecha y tienen buen sazón. Las personas muy amables y el local es amplio.', hace:'Hace 2 semanas' },
  { nombre:'Mario M.',  stars:4, texto:'Comida: 5/5  |  Servicio: 5/5  |  Ambiente: 5/5', hace:'Hace 2 semanas' },
  { nombre:'Marco O.',  stars:5, texto:'Muy buenos Comida: 5/5  |  Servicio: 5/5  |  Ambiente: 5/5 | Sin espera', hace:'Hace 2 semanas' },
  { nombre:'Jose C.',  stars:4, texto:'Un sitio muy agradable, la atención fue buena y las pizzas son muy buenas a un precio razonable', hace:'Hace 2 semanas' },
  
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