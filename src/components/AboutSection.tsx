import { Target, Users, Zap, Globe } from "lucide-react";
import aboutOffice from "@/assets/kbs.png";

const features = [
  {
    icon: Target,
    title: "Mission",
    description: "Apporter des solutions technologiques adaptées aux réalités africaines avec des formations professionnelles."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Développement d'applications web, mobile, desktop, intelligence artificielle et cybersécurité."
  },
  {
    icon: Users,
    title: "Accompagnement",
    description: "Un suivi personnalisé et des formations pour garantir votre autonomie digitale."
  },
  {
    icon: Globe,
    title: "Impact Local",
    description: "Des solutions conçues pour répondre aux besoins spécifiques du marché africain."
  }
];

export function AboutSection() {
  return (
    <section id="apropos" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={aboutOffice} 
                alt="Notre espace de travail moderne" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold">2025</div>
              <div className="text-sm opacity-90">Année de création</div>
            </div>
          </div>

          {/* Text content */}
          <div className="animate-fade-in animation-delay-200">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">À propos</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Votre partenaire en{" "}
              <span className="text-primary">transformation digitale</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              KBS-DIGITAL SARL, créée le 11 septembre 2025, est une entreprise togolaise 
              spécialisée dans la transformation digitale. Nous accompagnons les entreprises 
              et particuliers dans leur transition numérique avec des solutions sur mesure.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Basés à YÉOU, dans la région de Kara au Togo, nous combinons expertise technique 
              et connaissance du marché local pour créer des solutions qui font la différence.
            </p>
            
            {/* Location badge */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">YÉOU, Kara-Togo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
