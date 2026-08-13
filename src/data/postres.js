// productos.js — Gúrus Panadería
export const postres = [
  // ─── PAN ARTESANAL ──────────────────────────────────────────────────
  { id:'pan-integral',      nombre:'Pan Integral',           categoria:'Pan', desc:'Pan 100% integral con semillas de girasol y ajonjolí.',                precios:{ small:'$6.000', medium:null, large:null, xlarge:null }, emoji:'🌾', imagen:'/images/masa-artesanal.jpeg', personalizable: false },
  { id:'pan-frances',       nombre:'Pan Francés',            categoria:'Pan', desc:'Baguette tradicional con corteza crujiente y miga suave.',          precios:{ small:'$4.500', medium:null, large:null, xlarge:null }, emoji:'🥖', imagen:'/images/ingredientes-frescos.jpg', personalizable: false },
  { id:'pan-campesino',     nombre:'Pan Campesino',          categoria:'Pan', desc:'Pan rústico con harina de trigo y centeno.',                        precios:{ small:'$7.000', medium:null, large:null, xlarge:null }, emoji:'🍞', imagen:'/images/masa-artesanal.jpeg', personalizable: false },
  { id:'croissant',         nombre:'Croissant Mantequilla',  categoria:'Pan', desc:'Croissant hojaldrado, crujiente y mantecoso.',                      precios:{ small:'$5.500', medium:null, large:null, xlarge:null }, emoji:'🥐', imagen:'/images/ingredientes-frescos.jpg', personalizable: false },

  // ─── TORTAS PERSONALIZADAS ──────────────────────────────────────────
  { id:'torta-chocolate',   nombre:'Torta de Chocolate',     categoria:'Tortas', desc:'Torta húmeda de chocolate con ganache artesanal.',               precios:{ small:'$45.000', medium:'$65.000', large:'$85.000', xlarge:'$110.000' }, emoji:'🍫', imagen:'/images/masa-artesanal.jpeg', personalizable: true },
  { id:'torta-zanahoria',   nombre:'Torta de Zanahoria',     categoria:'Tortas', desc:'Torta especiada con zanahoria y nueces, frosting de queso crema.', precios:{ small:'$42.000', medium:'$62.000', large:'$82.000', xlarge:null }, emoji:'🥕', imagen:'/images/ingredientes-frescos.jpg', personalizable: true },
  { id:'torta-red-velvet',  nombre:'Red Velvet',             categoria:'Tortas', desc:'Torta aterciopelada con frosting de queso crema.',               precios:{ small:'$50.000', medium:'$70.000', large:'$90.000', xlarge:null }, emoji:'❤️', imagen:'/images/masa-artesanal.jpeg', personalizable: true },
  { id:'tres-leches',       nombre:'Tres Leches',            categoria:'Tortas', desc:'Bizcocho bañado en tres leches con crema batida.',              precios:{ small:'$35.000', medium:'$55.000', large:'$75.000', xlarge:null }, emoji:'🥛', imagen:'/images/ingredientes-frescos.jpg', personalizable: true },

  // ─── PASTELERÍA ──────────────────────────────────────────────────────
  { id:'cheesecake',        nombre:'Cheesecake de Frutos',   categoria:'Pastelería', desc:'Base de galleta con crema de queso y frutos rojos.',         precios:{ small:'$12.000', medium:null, large:null, xlarge:null }, emoji:'🍰', imagen:'/images/masa-artesanal.jpeg', personalizable: false },
  { id:'brownie',           nombre:'Brownie Artesanal',      categoria:'Pastelería', desc:'Brownie melcochudo con trozos de chocolate belga.',          precios:{ small:'$8.500', medium:null, large:null, xlarge:null }, emoji:'🧁', imagen:'/images/ingredientes-frescos.jpg', personalizable: false },
  { id:'alfajor',           nombre:'Alfajor Tradicional',    categoria:'Pastelería', desc:'Galleta rellena de arequipe, cubierta de coco rallado.',     precios:{ small:'$4.000', medium:null, large:null, xlarge:null }, emoji:'🍪', imagen:'/images/masa-artesanal.jpeg', personalizable: false },
  { id:'cupcake',           nombre:'Cupcakes',               categoria:'Pastelería', desc:'Cupcakes artesanales con buttercream y decoración.',         precios:{ small:'$5.500', medium:null, large:null, xlarge:null }, emoji:'🧁', imagen:'/images/ingredientes-frescos.jpg', personalizable: false, variantes: ['Vainilla', 'Chocolate', 'Red Velvet'] },

  // ─── CAFÉ Y BEBIDAS ──────────────────────────────────────────────────
  { id:'cafe-latte',        nombre:'Café Latte',             categoria:'Café', desc:'Espresso con leche vaporizada y arte latte.',                    precios:{ small:'$5.500', medium:null, large:null, xlarge:null }, emoji:'☕', imagen:'/images/ingredientes-frescos.jpg', personalizable: false },
  { id:'cafe-americano',    nombre:'Café Americano',         categoria:'Café', desc:'Café negro, doble shot de espresso.',                           precios:{ small:'$4.500', medium:null, large:null, xlarge:null }, emoji:'☕', imagen:'/images/masa-artesanal.jpeg', personalizable: false },
  { id:'cappuccino',        nombre:'Cappuccino',             categoria:'Café', desc:'Espresso con espuma de leche cremosa.',                         precios:{ small:'$6.000', medium:null, large:null, xlarge:null }, emoji:'☕', imagen:'/images/ingredientes-frescos.jpg', personalizable: false },
  { id:'chocolate-caliente',nombre:'Chocolate Caliente',     categoria:'Bebidas', desc:'Chocolate artesanal preparado con leche.',                   precios:{ small:'$6.500', medium:null, large:null, xlarge:null }, emoji:'🍫', imagen:'/images/masa-artesanal.jpeg', personalizable: false },
];
