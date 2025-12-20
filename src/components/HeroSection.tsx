import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-kbs.png";

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Penser Local, Agir Concret</span>
          </div>

          {/* Logo animation */}
          <div className="mb-8 animate-fade-in animation-delay-100">
            <img 
              src={logo} 
              alt="KBS Digital" 
              className="h-24 md:h-32 w-auto mx-auto animate-float"
            />
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in animation-delay-200">
            <span className="text-primary">KBS-DIGITAL</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-bold mt-2 text-foreground">
              {" "}SARL
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in animation-delay-300">
            Votre partenaire pour la digitalisation et la création de solutions informatiques innovantes. 
            Basés à Kara-Togo depuis septembre 2025, nous développons des projets qui répondent aux besoins locaux avec une expertise technique de pointe.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Button variant="default" size="xl" asChild>
              <a href="#projets">
                Découvrir nos projets
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#contact">
                Prendre rendez-vous
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 mb-6 pt-16 border-t border-border animate-fade-in animation-delay-400">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2025</div>
              <div className="text-sm text-muted-foreground">Année de création</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
