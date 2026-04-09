// historia.js
import './Historia.css';

export default function Historia() {
  return (
    <section className="hist" id="historia">
      <div className="hist__img-col">
        {/* Imagen Principal - Ambiente de café con plantas (Vivero) */}
        <div className="hist__img-main">
          <img 
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/0c/a6/d8/un-interior-con-encanto.jpg?w=1100&h=1100&s=1" 
            alt="Pecas y Fresas Pastelería Ambiente" 
          />
        </div>
        
        {/* Imagen Secundaria - Usando el logo circular de Instagram que pasaste */}
        <div className="hist__img-sec">
          <img 
            src="https://images.rappi.com/restaurants_logo/logo-1739639838607.png?e=webp&d=10x10&q=10"
            alt="Logo Pecas y Fresas" 
          />
        </div>

        <div className="hist__years">
          <span className="hist__years-num">40K</span>
          <span className="hist__years-label">Seguidores<br />en redes</span>
        </div>
      </div>

      <div className="hist__content">
        <span className="tag">— Nuestra esencia</span>
        <h2 className="section-title">
          Un rincón<br />
          mágico que<br />
          <span className="green">enamora</span>
        </h2>
        <div className="divider-pastry"><span/><span/><span/></div>
        
        <p className="section-sub">
          <strong>Pecas y Fresas</strong> es más que una pastelería; es un refugio artesanal en el corazón de Bogotá. Nos especializamos en crear espacios <strong>extremadamente instagrameables</strong> donde cada detalle está pensado para acompañar un momento dulce.
        </p>
        <p className="section-sub" style={{marginTop:'1rem'}}>
          Desde nuestras famosas galletas y tortas personalizadas hasta nuestro café de especialidad, mantenemos una técnica <strong>100% artesanal</strong>. Te invitamos a descubrir nuestras sedes en <strong>Galerías, Cedritos y La Candelaria</strong>.
        </p>

        <div className="hist__pillars">
          {[
            { 
              icon:'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg', 
              t:'Repostería Creativa', 
              d:'Postres únicos con un diseño visual increíble y sabor artesanal.' 
            },
            { 
              icon:'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg', 
              t:'Café & Vivero', 
              d:'Más que café, un oasis urbano rodeado de naturaleza y frescura.' 
            },
            { 
              icon:'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg', 
              t:'Pet Friendly', 
              d:'Tus compañeros de cuatro patas son siempre bienvenidos en casa.' 
            },
          ].map(p => (
            <div className="hist__pillar" key={p.t}>
              <img src={p.icon} alt={p.t} className="hist__pillar-img-icon" style={{objectFit: 'cover', borderRadius: '50%'}} />
              <div>
                <div className="hist__pillar-title">{p.t}</div>
                <div className="hist__pillar-desc">{p.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}