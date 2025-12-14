import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-hero relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow animation-delay-200" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Commencez dès aujourd'hui</span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Prêt à digitaliser votre activité ?
          </h2>

          <p className="text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
            Rejoignez les entreprises et particuliers qui ont fait confiance à KBS-DIGITAL SARL 
            pour leur transformation numérique.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Découvrir nos projets
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
