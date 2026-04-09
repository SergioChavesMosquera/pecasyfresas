import { useState } from 'react';
import './Testimonios.css';

const reviews = [
  { nombre:'Andrea M.', stars:5, texto:'La mejor repostería de la ciudad. El equilibrio de dulce es perfecto y las fresas siempre están fresquísimas. ¡Mi favorita por siempre!', hace:'Hace 1 mes' },
  { nombre:'Carlos R.', stars:4.5, texto:'Se nota que todo es artesanal. La torta de chocolate es de otro mundo, húmeda y con mucho sabor. El domicilio llegó impecable.', hace:'Hace 2 meses' },
  { nombre:'Valentina T.', stars:5, texto:'Pedí una torta personalizada para mi cumpleaños y superó mis expectativas. El servicio por WhatsApp es muy atento y amable.', hace:'Hace 3 semanas' },
  { nombre:'Charlotte P.', stars:4, texto:'Me encanta venir por un café y un postre. Los sabores me recuerdan a las meriendas en casa de mi abuela. Muchas bendiciones.', hace:'Hace 2 meses' },
  { nombre:'Vandergraaf.', stars:5, texto:'Las fresas con crema son las mejores que he probado. Tienen ese toque secreto que las hace únicas. Qué alegría volver a probarlas.', hace:'Hace 2 semanas' },
  { nombre:'Esperanza C.', stars:5, texto:'El lugar es encantador, la atención es de primera y los postres son una verdadera delicia. 100% recomendado.', hace:'Hace 2 semanas' },
  { nombre:'Maira V.', stars:4, texto:'Es nuestra parada obligatoria los domingos. A mis hijos les encantan los cheesecakes. Un lugar muy especial para nosotros.', hace:'Hace 2 semanas' },
  { nombre:'Johanna C.', stars:5, texto:'Excelente calidad 👏🏼👏🏼👏🏼. He sido cliente desde hace años y la calidad nunca baja. La mejor pastelería.', hace:'Hace 2 semanas' },
  { nombre:'Blanca M.', stars:5, texto:'Buen servicio y las porciones son muy generosas. ¡Todo muy rico!', hace:'Hace 2 semanas' },
  { nombre:'Feliz K.', stars:4, texto:'Un sitio muy agradable para disfrutar de un buen postre y una buena charla.', hace:'Hace 2 semanas' },
  { nombre:'Angela Z.', stars:5, texto:'Wowwww espectacular la decoración de las tortas, 10/10 😍', hace:'Hace 2 semanas' },
  { nombre:'Noemi N.', stars:4, texto:'El merengón es increíble, muy ligero y frutal.', hace:'Hace 2 semanas' },
  { nombre:'Mary T.', stars:5, texto:'El local es hermoso, ideal para fotos, y la comida es simplemente deliciosa.', hace:'Hace 2 semanas' },
  { nombre:'Brian R.', stars:4, texto:'Muy buen lugar, los precios son justos para la calidad y el tamaño de los postres.', hace:'Hace 2 semanas' },
  { nombre:'David Z.', stars:5, texto:'Tienen una gran variedad. Desde galletas hasta tortas complejas, todo tiene un sazón increíble.', hace:'Hace 2 semanas' },
  { nombre:'Pao A.', stars:5, texto:'La atención es muy cálida, te hacen sentir como en casa. La torta de tres leches es mi recomendada.', hace:'Hace 2 semanas' },
  { nombre:'Mario M.', stars:5, texto:'Sabor: 5/5 | Servicio: 5/5 | Ambiente: 5/5. El mejor lugar para un antojo dulce.', hace:'Hace 2 semanas' },
  { nombre:'Marco O.', stars:5, texto:'Productos frescos y de alta calidad. Sin duda volveré a pedir.', hace:'Hace 2 semanas' },
  { nombre:'Jose C.', stars:4, texto:'Un sitio muy agradable, la atención fue rápida y el postre de frutos rojos estaba exquisito.', hace:'Hace 2 semanas' },
];

export default function Testimonios() {
  const [active, setActive] = useState(0);
  const t = reviews[active];

  return (
    <section className="testi" id="testimonios">
      <div className="testi__inner">
        <div className="testi__left">
          <span className="tag">— Nuestra comunidad</span>
          <h2 className="section-title">Momentos dulces de<br /><em>nuestros clientes</em></h2>
          
          <div className="divider-brand"><span/><span/><span/></div>
          
          <div className="testi__rating">
            <span className="testi__big">4.9</span>
            <div>
              <div className="testi__stars">★★★★★</div>
              <div className="testi__rlabel">Calificación en Google</div>
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
            <div className="testi__stars2">{'★'.repeat(Math.floor(t.stars))}</div>
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
            {/* Limitamos los puntos visuales si son demasiados, o mostramos solo una selección */}
            {reviews.slice(0, 10).map((_,i)=>(
              <button 
                key={i} 
                className={`testi__dot ${i===active?'active':''}`} 
                onClick={()=>setActive(i)} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}