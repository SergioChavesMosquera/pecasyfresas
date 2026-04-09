import Hero from '../components/Hero';
import Historia from '../components/Historia';
import Menu from '../components/Menu';       // Muestra los postres destacados (8 items)
import Galeria from '../components/Galeria';
import Testimonios from '../components/Testimonios';
import Pedido from '../components/Pedido';     // CTA para pedidos personalizados o eventos

export default function Home() {
  return (
    <main className="home-container">
      {/* Sección principal con impacto visual de los postres */}
      <Hero />
      
      {/* Relato sobre la tradición artesanal de Pecas y Fresas */}
      <Historia />
      
      {/* Vista previa de la carta: Tortas, fresas y postres destacados */}
      <Menu />
      
      {/* Muestra visual de las mejores creaciones */}
      <Galeria />
      
      {/* Lo que dicen los clientes sobre el sabor y frescura */}
      <Testimonios />
      
      {/* Bloque final para incentivar el pedido por WhatsApp o reservas */}
      <Pedido />
    </main>
  );
}