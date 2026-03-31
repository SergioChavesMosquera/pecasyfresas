import './App.css';
import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import Historia    from './components/Historia';
import Menu        from './components/Menu';
import Galeria     from './components/Galeria';
import Testimonios from './components/Testimonios';
import Pedido      from './components/Pedido';
import Footer      from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Historia />
      <Menu />
      <Galeria />
      <Testimonios />
      <Pedido />
      <Footer />

    </div>
  );
}

export default App;