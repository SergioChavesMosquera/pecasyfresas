import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar        from './components/Navbar';
import Footer        from './components/Footer';
import WhatsAppBtn   from './components/WhatsAppBtn';
import Home          from './pages/Home';
import MenuPage      from './pages/MenuPage';
import ArmaTuCaja    from './pages/ArmaTuCaja'; // Antes ArmaTuPizza
import PostreDetail  from './components/PostreDetail'; // Antes PizzaDetail

function App() {
  return (
    <BrowserRouter>
      {/* El Navbar ahora debe incluir el link a /armatucaja */}
      <Navbar />
      
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/menu"       element={<MenuPage />} />
        
        {/* Ruta dinámica para ver el detalle de cada postre/torta */}
        <Route path="/menu/:id"   element={<PostreDetail />} />
        
        {/* Nueva sección estrella para personalizar los packs de postres */}
        <Route path="/armatucaja" element={<ArmaTuCaja />} />
      </Routes>

      <Footer />
      
      {/* Botón flotante configurado con el número 305 749 9947 */}
      <WhatsAppBtn />
    </BrowserRouter>
  );
}

export default App;