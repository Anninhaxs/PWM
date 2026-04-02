import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 selection:bg-purple-500 selection:text-white">
      <Navbar /> {/* A barra agora fica no topo de tudo */}
      
      <div className="pt-24"> 
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        
        {/* Placeholder para o Jogo da Forca */}
        <section id="forca" className="py-20">
            {/* Aqui entrará o código do jogo no próximo passo */}
        </section>

        <Contact />
        <Footer />
      </div>
    </main>
  );
}