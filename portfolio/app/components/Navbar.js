// app/components/Navbar.js
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/**/}
        <div className="text-white font-bold text-xl tracking-tighter">
          Anna <span className="text-purple-500 font-light">Beatriz</span>
        </div>

        {/* Links de Navegação */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium uppercase tracking-widest text-gray-400">
          <a href="#about" className="hover:text-purple-500 transition">About</a>
          <a href="#projects" className="hover:text-purple-500 transition">Projects</a>
          <a href="#contact" className="hover:text-purple-500 transition">Contact</a>
          {/* Botão de Destaque para o Jogo */}
          <a 
            href="#forca" 
            className="px-4 py-2 bg-purple-600/10 border border-purple-500/50 text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white transition-all shadow-[0_0_15px_rgba(147,51,234,0.2)]"
          >
            Jogar Forca 🎮
          </a>
        </div>
      </div>
    </nav>
  );
}