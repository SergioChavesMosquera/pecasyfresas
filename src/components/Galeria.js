import './Galeria.css';

// Aquí defines tú mismo el nombre de cada archivo
const cols = [
  [
    { id: 1, label: 'Germana', img: 'pizza-germana.jpg' },
    { id: 4, label: 'Bacon Cheese', img: 'burguer-bacon-cheese.jpg' },
    { id: 8, label: 'Pollo con Champiñones', img: 'pizza-pollo-champiñones.jpg' }
  ],
  [
    { id: 2, label: '4 carnes', img: 'pizza-4-carnes.jpg' },
    { id: 5, label: 'Perro Planchao', img: 'hotdog-planchao.jpg' },
    { id: 7, label: 'Tocineta Jamon Ajo', img: 'pizza-tocineta-jamon-ajo.jpg' }
  ],
  [
    { id: 3, label: 'Marinera', img: 'pizza-marinera.jpg' },
    { id: 6, label: 'Bacon Bbq', img: 'burguer-bacon-bbq.jpg' },
    { id: 9, label: 'Hawaiana Pollo Tocineta Bbq', img: 'pizza-hawaiana-pollo-tocineta-bbq.jpg' }
  ],
];

export default function Galeria() {
  return (
    <section className="gal" id="galeria">
      <div className="gal__header">
        <span className="tag">— Galería</span>
        <h2 className="section-title">Así se <em>ve</em> el sabor</h2>
        <div className="divider-italy"><span/><span/><span/></div>
      </div>

      <div className="gal__layout">
        {cols.map((col, ci) => (
          <div className="gal__col" key={ci}>
            {col.map(item => (
              <div className="gal__item" key={item.id}>
                <div className="gal__img-wrap">
                  {/* Usamos item.img que es el nombre que tú pusiste arriba */}
                  <img 
                    src={`/images/${item.img}`} 
                    alt={item.label} 
                    className="gal__img"
                  />
                  <div className="gal__overlay">
                    <span>{item.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="gal__cta">
        <a 
          href="https://wa.me/573005023817?text=Hola!%20Vi%20la%20galería%20y%20quiero%20hacer%20un%20pedido%20🍕" 
          className="btn-wa" 
          target="_blank" 
          rel="noreferrer"
        >
          <svg className="wa-icon" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          ¡Quiero pedir ahora!
        </a>
      </div>
    </section>
  );
}