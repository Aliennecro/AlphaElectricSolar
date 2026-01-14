import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Info, Battery, Zap, Clock } from "lucide-react";

export default function Calculator() {
  const [bill, setBill] = useState([240]);
  const [capacity, setCapacity] = useState([10]);
  
  const monthlySavings = Math.round(bill[0] * 0.85);
  const annualSavings = monthlySavings * 12;

  // Battery autonomy calculation
  const averageHourlyConsumption = bill[0] / (30 * 24); 
  const autonomyHours = Math.round(capacity[0] / (averageHourlyConsumption || 1));

  return (
    <section id="ahorro" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Main Savings Calculator */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-6 block">Eficiencia</span>
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-8 tracking-tight">
              Ahorro real <br />
              <span className="text-slate-400">mensual garantizado.</span>
            </h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed mb-12 max-w-md">
              Ajustá tu consumo actual para proyectar el rendimiento de tu futura instalación solar de alta gama.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                <ShieldCheck className="w-5 h-5 text-slate-900" />
                Auditoría técnica personalizada incluida
              </div>
              <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                <Info className="w-5 h-5 text-slate-900" />
                Cifras basadas en tarifas locales actuales
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Card className="p-12 border-none bg-[#f8f9fa] rounded-[48px] shadow-sm relative overflow-hidden">
              <div className="space-y-12">
                <div>
                  <div className="flex justify-between items-end mb-6">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Inversión mensual luz</label>
                    <span className="text-3xl font-medium text-slate-900">${bill[0]}</span>
                  </div>
                  <Slider
                    value={bill}
                    onValueChange={setBill}
                    max={1200}
                    min={50}
                    step={10}
                    className="py-4"
                  />
                </div>

                <div className="grid grid-cols-2 gap-12 pt-8 border-t border-slate-200">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Ahorro Mensual</p>
                    <p className="text-3xl font-medium text-slate-900">${monthlySavings}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Ahorro Anual</p>
                    <p className="text-3xl font-medium text-slate-900">${annualSavings.toLocaleString()}</p>
                  </div>
                </div>

                <Button className="w-full py-8 text-xs font-bold uppercase tracking-[0.2em] rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/10">
                  Solicitar Evaluación
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Enhanced Storage Capacity Calculator */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <Card className="p-1 pb-1 border-none bg-gradient-to-br from-slate-900 to-slate-800 rounded-[56px] shadow-2xl relative overflow-hidden group">
              <div className="m-1 bg-slate-900/90 backdrop-blur-3xl rounded-[52px] p-12 md:p-16 relative z-10">
                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                  <Battery size={160} />
                </div>
                
                <div className="space-y-16">
                  <div>
                    <div className="flex justify-between items-end mb-8">
                      <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-2">Capacidad Elegida</p>
                        <h4 className="text-4xl font-medium text-white tracking-tight">{capacity[0]} <span className="text-xl text-slate-500">kWh</span></h4>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Battery className="w-5 h-5 text-white/40" />
                      </div>
                    </div>
                    <Slider
                      value={capacity}
                      onValueChange={setCapacity}
                      max={50}
                      min={5}
                      step={5}
                      className="py-4"
                    />
                  </div>

                  <div className="pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-slate-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Respaldo Estimado</span>
                      </div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-7xl font-light text-white tracking-tighter">{autonomyHours}</span>
                        <span className="text-2xl text-slate-500 font-light">horas</span>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-3xl p-6 border border-white/5">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Gestión de Carga</p>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        Ajustado dinámicamente a tu consumo de <span className="text-white font-medium">${bill[0]}/mes</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="order-1 lg:order-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-6 block">Respaldo Inteligente</span>
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-8 tracking-tight leading-tight">
              Energía ininterrumpida <br />
              <span className="text-slate-400">sin depender de la red.</span>
            </h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed mb-12 max-w-md">
              Calculá con precisión la autonomía de tu hogar durante cortes de suministro. Tu independencia no tiene horario.
            </p>
            <div className="flex flex-col gap-6">
              {[
                { icon: <Zap className="w-5 h-5" />, text: "Cambio automático en milisegundos" },
                { icon: <ShieldCheck className="w-5 h-5" />, text: "Garantía de suministro crítico" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-xs font-semibold text-slate-900 uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
