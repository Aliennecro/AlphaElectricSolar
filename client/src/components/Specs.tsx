import { motion } from "framer-motion";
import { BarChart3, House, Rocket, ArrowRight } from "lucide-react";
// @ts-ignore
import flowReal from "@assets/generated_images/solar_panels_installation_by_professionals_photgraphy.png";

export default function Specs() {
  const steps = [
    {
      num: "01",
      title: "Evaluamos tu consumo",
      desc: "Analizamos tus facturas para diseñar la solución ideal.",
      icon: <BarChart3 className="w-5 h-5" />,
      delay: 0.1
    },
    {
      num: "02",
      title: "Diseñamos tu sistema",
      desc: "Ingeniería personalizada adaptada a tu techo y zona.",
      icon: <House className="w-5 h-5" />,
      delay: 0.3
    },
    {
      num: "03",
      title: "Instalamos y ahorrás",
      desc: "Montaje profesional y puesta en marcha inmediata.",
      icon: <Rocket className="w-5 h-5" />,
      delay: 0.5
    }
  ];

  return (
    <section id="proceso" className="py-32 bg-[#f8f9fa] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full noise-bg opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4 block"
          >
            Metodología
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">
            Tu camino hacia la <br />
            <span className="text-slate-400">independencia energética</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative rounded-[40px] overflow-hidden shadow-2xl bg-white aspect-[16/10]"
          >
            <img 
              src={flowReal} 
              alt="Instalación profesional de paneles solares" 
              className="w-full h-full object-cover grayscale-[0.2] contrast-[1.05]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
          </motion.div>

          <div className="lg:col-span-5 space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: step.delay }}
                viewport={{ once: true }}
                className="group relative pl-16"
              >
                {index !== steps.length - 1 && (
                  <div className="absolute left-6 top-12 w-[1px] h-20 bg-slate-200 origin-top">
                    <motion.div 
                      className="w-full h-full bg-slate-900"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 1, delay: step.delay + 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                )}

                <div className="absolute left-0 top-0 w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white text-slate-900 transition-colors duration-500 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900">
                  {step.icon}
                </div>
                
                <div className="pt-1">
                  <span className="text-[10px] font-bold text-slate-300 tracking-widest mb-1 block">PASO {step.num}</span>
                  <h3 className="text-xl font-medium mb-3 text-slate-900 flex items-center gap-3">
                    {step.title}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="text-slate-500 font-light leading-relaxed max-w-sm">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
