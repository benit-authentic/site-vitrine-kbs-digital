import { Code, Shield, Palette, Brain, Network, Megaphone, GraduationCap, Database, Smartphone } from "lucide-react";

const serviceCategories = [
  {
    title: "Développement & IA",
    description: "Solutions logicielles modernes et intelligence artificielle",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    services: [
      { name: "Applications web & mobile", icon: Smartphone },
      { name: "Intelligence artificielle", icon: Brain },
      { name: "Big Data & Analytics", icon: Database },
    ]
  },
  {
    title: "Cybersécurité & Réseaux",
    description: "Protection et infrastructure numérique",
    icon: Shield,
    color: "from-emerald-500 to-teal-500",
    services: [
      { name: "Cybersécurité & audits SI", icon: Shield },
      { name: "Réseaux & Télécom", icon: Network },
      { name: "Services numériques", icon: Code },
    ]
  },
  {
    title: "Design & Marketing",
    description: "Création visuelle et stratégie de communication",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    services: [
      { name: "Design & graphisme", icon: Palette },
      { name: "Marketing & communication", icon: Megaphone },
      { name: "Événements Tech & Formations", icon: GraduationCap },
    ]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nos Services</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Des solutions <span className="text-primary">complètes</span> pour votre digitalisation
          </h2>
          <p className="text-lg text-muted-foreground">
            De la conception à la mise en production, nous vous accompagnons à chaque étape de votre transformation numérique.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative bg-card rounded-3xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${category.color}`} />
              
              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {category.description}
                </p>

                {/* Services list */}
                <div className="space-y-3">
                  {category.services.map((service) => (
                    <div
                      key={service.name}
                      className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
                    >
                      <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center">
                        <service.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {service.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
