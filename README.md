# 🍕 Pizzería La Viña — Sitio Web Oficial

> Sitio web de domicilios y carta digital para **Pizzería La Viña**, desarrollado por [SerStack](https://wa.me/573005023817).

---

## 🛠️ Tecnologías usadas

| Tecnología | Uso |
|---|---|
| **React 18** (Create React App) | Framework principal del sitio |
| **React Router DOM v6** | Navegación entre páginas (`/`, `/menu`, `/menu/:id`, `/arma`) |
| **CSS Modules** | Estilos por componente, sin conflictos |
| **Google Fonts** | Tipografías: `Oswald`, `Merriweather`, `Barlow` |
| **SVG nativo** | Visualización interactiva de pizza en "Arma tu Pizza" |
| **Vercel** | Deploy y hosting del sitio |

Sin librerías de UI externas — todo el diseño es CSS puro personalizado.

---

## 📁 Estructura del proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.js/.css
│   ├── Hero.js/.css
│   ├── Historia.js/.css
│   ├── Menu.js/.css       ← Vista previa del menú (máx. 8 productos)
│   ├── Galeria.js/.css
│   ├── Testimonios.js/.css
│   ├── Pedido.js/.css
│   ├── PizzaDetail.js/.css  ← Detalle individual con zoom y selector de tamaño
│   ├── Footer.js/.css
│   └── WhatsAppBtn.js/.css
│
├── pages/               # Páginas completas
│   ├── Home.js          ← Landing page principal
│   ├── MenuPage.js/.css ← Catálogo completo con filtros
│   └── ArmaTuPizza.js/.css ← Constructor interactivo de pizza
│
├── data/
│   └── pizzas.js        ← ⭐ ARCHIVO PRINCIPAL DE PRODUCTOS
│
└── App.js               # Router y estructura general

public/
├── images/              # Todas las imágenes del sitio
│   ├── logo-pizza.png
│   ├── pizza-queso.webp
│   ├── pizza-salami.jpg
│   └── ...
└── index.html           # Título y favicon de la pestaña
```

---

## ✏️ Cómo editar productos

Todo el contenido del menú vive en un solo archivo:

### `src/data/pizzas.js`

Cada producto sigue esta estructura:

```js
{
  id: 'nombre-unico',          // URL del producto: /menu/nombre-unico
  nombre: 'Nombre visible',
  categoria: 'Pizzas',         // Pizzas | Especiales | Hamburguesas | Perros | Asados | Bebidas
  desc: 'Descripción corta.',
  precios: {
    small:  '$22.000',         // 28 cm
    medium: '$30.000',         // 35 cm
    large:  '$40.000',         // 40 cm
    xlarge: '$55.000',         // 45 cm
  },
  emoji: '🍕',
  imagen: '/images/pizza-queso.webp',  // Ruta desde public/
}
```

> Para **hamburguesas, perros, asados y bebidas** (precio único), los campos `medium`, `large` y `xlarge` van como `null`:
> ```js
> precios: { small: '$20.000', medium: null, large: null, xlarge: null }
> ```

> Para **gaseosas con variantes de sabor**, añade el campo `variantes`:
> ```js
> variantes: ['Coca-Cola', 'Pepsi', 'Sprite', 'Colombiana']
> ```

---

### ➕ Añadir un producto nuevo

1. Abre `src/data/pizzas.js`
2. Copia cualquier objeto existente de la categoría correcta
3. Cambia `id`, `nombre`, `desc`, `precios` y `emoji`
4. Sube la imagen a `public/images/` y actualiza `imagen`
5. Guarda — aparece automáticamente en el menú, el catálogo y "Arma tu pizza"

### ✏️ Editar un producto existente

1. Abre `src/data/pizzas.js`
2. Encuentra el producto por su `id` o `nombre`
3. Edita los campos que necesites
4. Guarda

### 🗑️ Eliminar un producto

1. Abre `src/data/pizzas.js`
2. Borra el objeto completo del producto (desde `{` hasta `},`)
3. Guarda

---

## 🖼️ Cómo añadir imágenes

1. Guarda la imagen en `public/images/`
2. Nombres recomendados: `pizza-nombre.jpg` o `pizza-nombre.webp`
3. En `pizzas.js` actualiza el campo `imagen`:
   ```js
   imagen: '/images/pizza-nombre.jpg'
   ```
4. Formatos recomendados: `.webp` (mejor rendimiento) o `.jpg`
5. Tamaño ideal: **800x600px**, máximo 300KB por imagen

---

## 🌐 Deploy en Vercel

El sitio está desplegado en Vercel conectado al repositorio de GitHub. Cada `git push` a `main` actualiza el sitio automáticamente.

```bash
# Para desplegar cambios:
git add .
git commit -m "descripción del cambio"
git push origin main
```

Vercel detecta Create React App automáticamente. No requiere configuración adicional.

---

## 📞 Contacto y soporte

Este sitio fue desarrollado por **SerStack**.

Si necesitas cambios, nuevas secciones, integraciones o cualquier mejora:

| Canal | Contacto |
|---|---|
| 💬 WhatsApp | [+57 312 803 6725](https://wa.me/573128036725) |
| 📸 Instagram | [@ser_stack](https://instagram.com/ser_stack) |
| 🌐 Web | [serstack.vercel.app](https://serstack.vercel.app) |

> *"Sitios web que convierten visitas en clientes."*
