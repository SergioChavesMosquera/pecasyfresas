import './Historia.css';

export default function Historia() {
  return (
    <section className="hist" id="historia">
      <div className="hist__img-col">
        {/* Imagen Principal */}
        <div className="hist__img-main">
          <img src="/images/historia-pizza.jpg" alt="Pizzería La Viña" />
        </div>
        
        {/* Imagen Secundaria (más pequeña) */}
        <div className="hist__img-sec">
          <img src="/images/logo-pizza.png" alt="Pizza artesanal" />
        </div>

        <div className="hist__years">
          <span className="hist__years-num">30+</span>
          <span className="hist__years-label">Años de<br />tradición</span>
        </div>
      </div>

      <div className="hist__content">
        <span className="tag">— Nuestra historia</span>
        <h2 className="section-title">
          Más de 30 años<br />
          de <em>sabor</em> y<br />
          <span className="green">tradición</span>
        </h2>
        <div className="divider-italy"><span/><span/><span/></div>
        
        <p className="section-sub">
          Pizzería La Viña nació en los 90 como un <strong>sitio emblemático de Barranquilla</strong>. Recordada por todos en nuestra antigua ubicación de la <strong>Cra 14 esquina</strong>, donde crecimos junto a nuestra comunidad.
        </p>
        <p className="section-sub" style={{marginTop:'1rem'}}>
          ¡Hoy estamos de vuelta! Manteniendo la misma receta artesanal y el sabor que nos hizo grandes, ahora nos encuentras en el <strong>Barrio La Victoria (Cra 14 #44-19)</strong>. Tres décadas después, seguimos sirviendo con el amor y la calidad de siempre.
        </p>

        <div className="hist__pillars">
          {[
            { icon:'/images/masa-artesanal.jpeg', t:'Masa artesanal',     d:'Preparada a diario con nuestra receta original de siempre.' },
            { icon:'/images/ingredientes-frescos.jpg', t:'Ingredientes frescos',  d:'Seleccionamos los mejores tomates, quesos y embutidos.' },
            { icon:'/images/domicilio.jpg', t:'Domicilios rápidos',    d:'Llevamos tu pizza caliente directamente a tu puerta.' },
          ].map(p => (
            <div className="hist__pillar" key={p.t}>
              <img src={p.icon} alt={p.t} className="hist__pillar-img-icon" />
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
