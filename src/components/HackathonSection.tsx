import { Trophy, Users, Clock, Code, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import eventHackathon from "@/assets/event-hackathon.jpg";

const stats = [
  { value: "50+", label: "Participants", icon: Users },
  { value: "12", label: "Projets", icon: Code },
  { value: "48h", label: "de code", icon: Clock },
];

export function HackathonSection() {
  return (
    <section id="hackathons" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={eventHackathon} 
          alt="Hackathon" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/95 to-secondary" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-full" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-primary/10 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/10 rounded-full blur-xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Événements</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground mt-4 mb-6">
            Nos <span className="text-primary">Hackathons</span>
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            Organisation de hackathons dans la région de Kara pour stimuler l'innovation et encourager les talents locaux.
          </p>

          <Button variant="cta" size="lg" className="mt-8">
            <Bell className="h-5 w-5" />
            Être notifié des prochains hackathons
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 md:p-6 bg-secondary-foreground/5 rounded-2xl border border-secondary-foreground/10 backdrop-blur-sm"
            >
              <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-2xl md:text-4xl font-bold text-secondary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-secondary-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Winner project */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 md:p-10 border border-primary/30 relative overflow-hidden backdrop-blur-sm">
            {/* Trophy badge */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Trophy className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <span className="text-primary text-sm font-semibold">1er Prix - Kara 2025</span>
                <h3 className="font-display text-2xl font-bold text-secondary-foreground mt-1">
                  AgriTech Solutions
                </h3>
              </div>
            </div>

            <p className="text-secondary-foreground/80 leading-relaxed mb-6">
              Application mobile innovante pour connecter les agriculteurs locaux aux marchés urbains, 
              facilitant la vente directe et réduisant les intermédiaires.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-secondary-foreground/10 px-4 py-2 rounded-full">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm text-secondary-foreground">4 membres</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary-foreground/10 px-4 py-2 rounded-full">
                <Code className="h-4 w-4 text-primary" />
                <span className="text-sm text-secondary-foreground">React Native</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
