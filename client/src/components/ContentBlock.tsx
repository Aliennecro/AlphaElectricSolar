import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContentBlockProps {
  title: string;
  description: string;
  imageSrc: string;
  isReversed?: boolean;
  dark?: boolean;
  id?: string;
}

export default function ContentBlock({ 
  title, 
  description, 
  imageSrc, 
  isReversed = false,
  id
}: ContentBlockProps) {
  return (
    <section id={id} className="py-40 bg-white relative overflow-hidden">
      {/* Texture Layer */}
      <div className="absolute inset-0 noise-bg" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={cn(
          "flex flex-col gap-24 items-center",
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        )}>
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-1/2 aspect-[4/5] relative rounded-[60px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-slate-100" />
            <img 
              src={imageSrc} 
              alt={title} 
              className="absolute inset-0 w-full h-full object-cover desaturate-[0.5] contrast-[0.9] brightness-[1.1] transition-transform duration-1000 hover:scale-105"
            />
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-1/2 max-w-lg"
          >
            <span className="inline-block mb-8 text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60">
              Integración
            </span>
            <h2 className="text-4xl md:text-5xl font-medium mb-10 leading-tight text-slate-900">
              {title}
            </h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              {description}
            </p>
            <div className="mt-12 w-12 h-[1px] bg-slate-200" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
