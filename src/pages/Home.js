import Hero from '../components/Hero';
import Historia from '../components/Historia';
import Menu from '../components/Menu';
import Galeria from '../components/Galeria';
import Sedes from '../components/Sedes';
import Testimonios from '../components/Testimonios';
import Pedido from '../components/Pedido';

export default function Home() {
  return (
    <main className="home-container">
      {/* Hero principal con mensaje de Gúrus */}
      <Hero />
      
      {/* Tradición y esencia de la panadería */}
      <Historia />
      
      {/* Productos destacados: pan, tortas, café */}
      <Menu />
      
      {/* Galería visual de productos */}
      <Galeria />
      
      {/* Nuestras 5 sedes en Bogotá */}
      <Sedes />
      
      {/* Testimonios de clientes */}
      <Testimonios />
      
      {/* CTA para pedidos */}
      <Pedido />
    </main>
  );
}