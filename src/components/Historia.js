// Historia.js — Gúrus Panadería
import './Historia.css';

export default function Historia() {
  return (
    <section className="hist" id="historia">
      <div className="hist__img-col">
        <div className="hist__img-main">
          <img 
            src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg" 
            alt="Panadería artesanal Gúrus" 
          />
        </div>
        
        <div className="hist__img-sec">
          {/* Placeholder del logo — reemplaza con logo real cuando lo tengas */}
          <div className="hist__logo-placeholder">
            <span className="hist__logo-g">G</span>
            <span className="hist__logo-text">GÚRUS</span>
          </div>
        </div>

        <div className="hist__years">
          <span className="hist__years-num">5</span>
          <span className="hist__years-label">Sedes<br />en Bogotá</span>
        </div>
      </div>

      <div className="hist__content">
        <span className="tag">— Nuestra esencia</span>
        <h2 className="section-title">
          Tradición que<br />
          se siente en<br />
          <span className="accent">cada bocado</span>
        </h2>
        <div className="divider-brand"><span/><span/><span/></div>
        
        <p className="section-sub">
          <strong>Gúrus Panadería</strong> nace de la pasión por hornear con alma. Cada pan, cada torta, cada producto sale de nuestro horno con la dedicación de las recetas tradicionales y el amor de la panadería de barrio.
        </p>
        <p className="section-sub" style={{marginTop:'1rem'}}>
          Abrimos muy temprano para que empieces tu día con pan recién horneado y café de verdad. Nos encuentras en <strong>Castellana, Floresta, Normandía, Normandía Libre y Pontevedra</strong>.
        </p>

        <div className="hist__pillars">
          {[
            { 
              icon:'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg', 
              t:'Pan Artesanal', 
              d:'Amasado a mano, con ingredientes naturales y recetas tradicionales.' 
            },
            { 
              icon:'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg', 
              t:'Tortas Caseras', 
              d:'Decoradas con amor para cada ocasión especial de tu vida.' 
            },
            { 
              icon:'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg', 
              t:'Café Auténtico', 
              d:'El mejor complemento para tu pan. Café colombiano, recién preparado.' 
            },
          ].map(p => (
            <div className="hist__pillar" key={p.t}>
              <img src={p.icon} alt={p.t} className="hist__pillar-img-icon" style={{objectFit: 'cover', borderRadius: '8px'}} />
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
