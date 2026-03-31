import './Hero.css';

const WA = 'https://wa.me/573005023817?text=Hola!%20Quiero%20hacer%20un%20pedido%20a%20domicilio%20🍕';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg">
        {/* Reemplaza el div por: <img src="/images/hero.jpg" alt="Pizza La Viña" className="hero__bg-img" /> */}
        <div className="hero__bg-img" />
        <div className="hero__overlay" />
        <div className="hero__pattern" />
      </div>

      <div className="hero__content">
        <div className="hero__badge au d1">
          <span className="hero__badge-flag">🇮🇹</span>
          Más de 30 años de sabor y tradición
        </div>

        <h1 className="hero__title au d2">
          La pizza<br />
          que <em>enamora</em><br />
          <span className="hero__title-green">desde 1994</span>
        </h1>

        <p className="hero__sub au d3">
          Pizzería La Viña — sabor auténtico, masa artesanal y los mejores ingredientes.<br />
          Domicilios disponibles ahora mismo. 🍕
        </p>

        <div className="hero__actions au d4">
          <a href={WA} className="btn-wa" target="_blank" rel="noreferrer">
            <svg className="wa-icon" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Pedir a domicilio
          </a>
          <a href="#menu" className="btn-outline-white">Ver el menú</a>
        </div>

        <div className="hero__stats au d5">
          {[['🍕','30+','Años de tradición'],['⭐','4.8','Calificación'],['🛵','Rápido','Domicilios'],['🧑‍🍳','Artesanal','Masa propia']].map(([icon,num,label]) => (
            <div className="hero__stat" key={label}>
              <span className="hero__stat-icon">{icon}</span>
              <span className="hero__stat-num">{num}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slice decorativo */}
      <div className="hero__slice au d3">🍕</div>
    </section>
  );
}