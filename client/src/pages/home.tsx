import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specs from "@/components/Specs";
import ContentBlock from "@/components/ContentBlock";
import Calculator from "@/components/Calculator";
import FAQAndContact from "@/components/FAQAndContact";
import Footer from "@/components/Footer";

// @ts-ignore
import solarReal from "@assets/generated_images/modern_luxury_home_solar_roof_photography.png";
// @ts-ignore
import batteryReal from "@assets/generated_images/sleek_home_battery_storage_unit_on_wall.png";

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-slate-100 selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        <Calculator />

        <Specs />
        
        <ContentBlock
          id="solar-roof"
          title="Ingeniería de alta precisión"
          description="Nuestros sistemas utilizan tecnología fotovoltaica avanzada para asegurar una integración perfecta. Cada panel es instalado por expertos certificados para maximizar la captura energética manteniendo la elegancia de tu hogar."
          imageSrc={solarReal}
        />
        
        <ContentBlock
          id="powerwall"
          title="Gestión inteligente de energía"
          description="Almacenamiento de alto rendimiento con celdas de litio de ciclo profundo. Nuestra tecnología de respaldo garantiza que tu hogar permanezca iluminado y conectado, incluso cuando la red externa falla."
          imageSrc={batteryReal}
          isReversed={true}
        />
        
        <FAQAndContact />
      </main>

      <Footer />
    </div>
  );
}
