import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Ahorro", href: "#ahorro" },
    { name: "Proceso", href: "#proceso" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        isScrolled ? "py-4 px-6" : "py-8 px-8"
      )}
    >
      <div className={cn(
        "container mx-auto flex items-center justify-between transition-all duration-700 px-8 py-3 rounded-full",
        isScrolled ? "bg-white/80 backdrop-blur-xl shadow-sm border border-slate-100" : "bg-transparent"
      )}>
        <Link href="/">
          <span className={cn("text-xl font-bold tracking-tight cursor-pointer", isScrolled ? "text-slate-900" : "text-white")}>
            AlphaElectric<span className="font-light opacity-60">Solar</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:opacity-100",
                isScrolled ? "text-slate-500 hover:text-slate-900 opacity-60" : "text-white opacity-80"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            className={cn(
              "rounded-full px-8 text-[10px] font-bold uppercase tracking-[0.2em] h-10 transition-all duration-500",
              isScrolled ? "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10" : "bg-white text-slate-900 hover:bg-slate-100"
            )}
            onClick={() => document.getElementById('ahorro')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Empezar
          </Button>
        </div>
      </div>
    </nav>
  );
}
