import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

// @ts-ignore
import user1 from "@assets/stock_images/confident_mature_wom_3e3ef4db.jpg";

export default function FAQAndContact() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Cuánto puedo ahorrar realmente?",
      a: "El ahorro promedio oscila entre un 70% y 90% de tu factura eléctrica actual, dependiendo de la radiación solar de tu zona y el tamaño del sistema instalado."
    },
    {
      q: "¿Qué pasa si hay días nublados?",
      a: "Los paneles solares siguen generando energía incluso en días nublados mediante la radiación difusa. Además, si contás con baterías o estás conectado a la red, nunca te quedarás sin suministro."
    },
    {
      q: "¿Cuánto dura la instalación?",
      a: "Para una vivienda residencial promedio, la instalación física suele completarse en 2 a 3 días hábiles. Todo el proceso administrativo y puesta en marcha toma cerca de una semana."
    }
  ];

  const testimonials = [
    {
      name: "Elena Martínez",
      city: "Santiago",
      text: "La mejor inversión que hice para mi hogar. El ahorro es real desde el primer mes.",
      image: user1
    },
    {
      name: "Ricardo Gómez",
      city: "Córdoba",
      text: "Excelente asesoramiento. Un sistema que se integra perfectamente con mi casa.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&h=250&auto=format&fit=crop"
    },
    {
      name: "Sofía Valenzuela",
      city: "Mendoza",
      text: "Transparencia absoluta. Ahora tengo independencia energética total.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&h=250&auto=format&fit=crop"
    }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hola,%20me%20gustaría%20solicitar%20una%20auditoría%20solar.", "_blank");
  };

  return (
    <>
      {/* Testimonials - Minimalist version */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-md">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4 block">Testimonios</span>
              <h2 className="text-3xl font-medium text-slate-900 tracking-tight">Confianza en silencio.</h2>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold tracking-widest">
              <Star className="w-4 h-4 fill-slate-900 text-slate-900" />
              <span>4.9 / 5.0 PROMEDIO</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-10 h-10 rounded-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-900">{t.name}</p>
                    <p className="text-[9px] text-slate-400 font-bold tracking-[0.1em] uppercase">{t.city}</p>
                  </div>
                </div>
                <p className="text-slate-500 font-light leading-relaxed text-sm">
                  "{t.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Simplified WhatsApp Contact */}
      <section id="faq" className="py-32 bg-[#f8f9fa]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            {/* FAQ */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-medium text-slate-900 mb-12 tracking-tight">Preguntas Frecuentes</h2>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-100 transition-all duration-300">
                    <button 
                      className="w-full p-6 text-left flex justify-between items-center group"
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors">{faq.q}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${openIndex === i ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <div className="px-6 pb-6 text-slate-500 font-light leading-relaxed text-xs border-t border-slate-50 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Simplified WhatsApp CTA */}
            <div id="contacto" className="lg:col-span-5">
              <div className="bg-slate-900 p-12 rounded-[40px] text-white relative overflow-hidden flex flex-col items-center text-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                
                <MessageCircle className="w-12 h-12 mb-8 opacity-20" />
                <h3 className="text-2xl font-medium mb-4 tracking-tight">¿Listo para empezar?</h3>
                <p className="text-slate-400 font-light text-sm mb-10 leading-relaxed max-w-xs">
                  Solicitá tu auditoría gratuita directamente por WhatsApp y recibí una respuesta en menos de 24 horas.
                </p>

                <Button 
                  onClick={handleWhatsApp}
                  className="w-full py-8 rounded-full bg-white text-slate-900 hover:bg-slate-100 text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 shadow-xl"
                >
                  Solicitar vía WhatsApp
                </Button>
                
                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mt-8">
                  Sin formularios · Sin esperas · Sin compromiso
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
