import Hero        from '../components/Hero';
import Historia    from '../components/Historia';
import Menu        from '../components/Menu';      // muestra solo 8, botón "ver todo"
import Galeria     from '../components/Galeria';
import Testimonios from '../components/Testimonios';
import Pedido      from '../components/Pedido';

export default function Home() {
  return (
    <>
      <Hero />
      <Historia />
      <Menu />
      <Galeria />
      <Testimonios />
      <Pedido />
    </>
  );
}