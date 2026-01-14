export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="text-3xl font-bold tracking-tighter mb-8 block">
              AlphaElectric<span className="font-light">Solar</span>
            </a>
            <p className="text-slate-400 text-lg max-w-sm mb-8 leading-relaxed">
              Líderes en soluciones de energía renovable para el mercado latinoamericano. Calidad, confianza y ahorro real.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'LI', 'TW'].map(s => (
                <div key={s} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs font-bold hover:bg-white hover:text-black transition-all cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">Servicios</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Residencial</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Comercial</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Industrial</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Mantenimiento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">Compañía</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Proyectos</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-slate-600 font-bold">
          <p>AlphaElectricSolar © {currentYear} · Todos los derechos reservados</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
      
      {/* Decorative large text */}
      <div className="absolute bottom-[-10%] left-[-5%] text-[20vw] font-black text-white/[0.02] leading-none pointer-events-none select-none">
        SOLAR
      </div>
    </footer>
  );
}
