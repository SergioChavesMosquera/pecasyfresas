# 📝 Instrucciones para Implementar el Logo de Gúrus Panadería

## 🎯 Ubicaciones del Logo

El logo necesita ser reemplazado en **3 lugares principales**:

### 1. **Navbar (Menú de Navegación)**
**Archivo:** `src/components/Navbar.js`

**Ubicación actual (línea ~29):**
```jsx
{/* Placeholder de logo — reemplaza con <img src="..." /> cuando tengas el archivo */}
<div className="nav__logo-placeholder">G</div>
```

**Reemplazar con:**
```jsx
<img 
  src="/images/logo-gurus.png" 
  alt="Logo Gúrus Panadería" 
  className="nav__logo-img"
/>
```

---

### 2. **Historia/Nosotros (Sección)**
**Archivo:** `src/components/Historia.js`

**Ubicación actual (línea ~17-23):**
```jsx
{/* Placeholder del logo — reemplaza con logo real cuando lo tengas */}
<div className="hist__logo-placeholder">
  <span className="hist__logo-g">G</span>
  <span className="hist__logo-text">GÚRUS</span>
</div>
```

**Reemplazar con:**
```jsx
<img 
  src="/images/logo-gurus.png" 
  alt="Logo Gúrus Panadería"
  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '15px' }}
/>
```

---

### 3. **Favicon (Pestaña del navegador)**
**Archivo:** `public/index.html`

**Ubicación actual (línea ~5):**
```html
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
```

**Reemplazar con:**
```html
<link rel="icon" href="%PUBLIC_URL%/images/logo-gurus.png" />
```

---

## 📁 Dónde Colocar el Archivo del Logo

1. **Guarda tu logo** con el nombre `logo-gurus.png` (o `.jpg`, `.svg` según prefieras)
2. **Colócalo en:** `public/images/logo-gurus.png`

---

## ✅ Resumen Rápido

| Componente | Archivo | Línea Aprox | Código a Buscar |
|-----------|---------|-------------|-----------------|
| Navbar | `src/components/Navbar.js` | ~29 | `nav__logo-placeholder` |
| Historia | `src/components/Historia.js` | ~17 | `hist__logo-placeholder` |
| Favicon | `public/index.html` | ~5 | `<link rel="icon"` |

---

## 🎨 Recomendaciones para el Logo

- **Formato:** PNG con fondo transparente (ideal para el navbar oscuro)
- **Tamaño:** 500x500px o superior (cuadrado)
- **Peso:** Menos de 200KB para carga rápida
- **Colores:** Que incluya los tonos de la paleta (#8B1A5C, #D4A853)

---

## 🚀 Después de Agregar el Logo

1. Si el servidor está corriendo, refresca la página (F5)
2. Si el logo no aparece, verifica la ruta en la consola del navegador (F12)
3. Puedes ajustar el tamaño editando `nav__logo-img` en `Navbar.css` si es necesario

---

**¿Dudas?** Revisa los comentarios en los archivos que dicen `"Placeholder de logo"` o `"reemplaza con logo real"`.
