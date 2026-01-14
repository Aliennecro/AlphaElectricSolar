import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
// @ts-ignore
import heroVideo from "@assets/generated_videos/aerial_view_of_modern_home_with_solar_panels.mp4";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-slate-900">
      {/* Video Background with Desaturation */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full desaturate-[0.4] brightness-[0.7] contrast-[1.1]"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Sleek Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 glass-dark text-[10px] font-bold uppercase tracking-[0.3em] mb-4"
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            Ingeniería Solar Avanzada
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-medium tracking-tight leading-[1.05] mb-8">
            Energía que <br />
            <span className="opacity-40">fluye en calma.</span>
          </h1>
          
          <p className="text-lg md:text-xl font-light opacity-60 max-w-2xl mx-auto leading-relaxed mb-12">
            Soluciones fotovoltaicas de alta eficiencia diseñadas para integrarse con la arquitectura de tu hogar.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto rounded-full bg-white text-slate-900 hover:bg-slate-100 transition-all duration-500 text-[10px] font-bold uppercase tracking-[0.2em] h-16 px-12 group"
              onClick={() => document.getElementById('ahorro')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Calcular Ahorro
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 transition-all duration-500 text-[10px] font-bold uppercase tracking-[0.2em] h-16 px-12"
            >
              Asesoría Técnica
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 opacity-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
