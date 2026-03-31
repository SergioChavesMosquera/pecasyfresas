import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar        from './components/Navbar';
import Footer        from './components/Footer';
import WhatsAppBtn   from './components/WhatsAppBtn';
import Home          from './pages/Home';
import MenuPage      from './pages/MenuPage';
import ArmaTuPizza   from './pages/ArmaTuPizza';
import PizzaDetail   from './components/PizzaDetail';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/menu"      element={<MenuPage />} />
        <Route path="/menu/:id"  element={<PizzaDetail />} />
        <Route path="/arma"      element={<ArmaTuPizza />} />
      </Routes>
      <Footer />
      <WhatsAppBtn />
    </BrowserRouter>
  );
}

export default App;