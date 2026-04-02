// app/components/Contact.js
export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto py-20 px-4">
      {/* Título com Tradução */}
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-4xl font-bold text-white mb-1 flex items-center gap-2 justify-center md:justify-start">
          Let's Work <span className="text-purple-500 italic">Together</span>
        </h2>
        <p className="text-purple-500 text-sm font-medium uppercase tracking-widest opacity-80">
          Vamos trabalhar juntos
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-16">
        {/* Lado Esquerdo: Formulário */}
        <div className="flex-1 bg-[#0f0f0f] p-8 rounded-3xl border border-white/5 shadow-2xl">
          <h3 className="text-white font-semibold mb-6">Send me a message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-400 text-xs mb-2 uppercase tracking-tighter">Name</label>
              <input 
                type="text" 
                className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-xs mb-2 uppercase tracking-tighter">Email</label>
              <input 
                type="email" 
                className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-xs mb-2 uppercase tracking-tighter">Message</label>
              <textarea 
                rows="4"
                className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all resize-none"
                placeholder="Sua mensagem..."
              ></textarea>
            </div>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-purple-500/20">
              Send Message
            </button>
          </form>
        </div>

        {/* Lado Direito: Info e Sociais */}
        <div className="flex-1 space-y-10">
          <div className="space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm always open to discussing new opportunities, creative projects, or partnerships. 
              Whether you have a specific project in mind or just want to explore possibilities, I'd love to connect.
            </p>
            <ul className="space-y-3 text-white font-medium">
              <li className="flex items-center gap-3"><span className="text-purple-500">•</span> Web & Mobile Development</li>
              <li className="flex items-center gap-3"><span className="text-purple-500">•</span> UI/UX Design</li>
              <li className="flex items-center gap-3"><span className="text-purple-500">•</span> Technical Consulting</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">My Socials</h4>
            <div className="flex gap-6">
              {/* Substitua pelos seus links reais */}
              <a href="#" className="text-gray-400 hover:text-purple-500 text-2xl transition-all">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-purple-500 text-2xl transition-all">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-purple-500 text-2xl transition-all">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}