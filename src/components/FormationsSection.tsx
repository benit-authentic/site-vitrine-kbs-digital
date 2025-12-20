import { Code, Smartphone, Globe, Palette, Shield, FileText, Sparkles, Clock, Users, Award, Megaphone, Network } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const formations = [
  {
    icon: Code,
    title: "Programmation",
    description: "Maîtrisez les fondamentaux de la programmation avec Python, JavaScript et Java.",
    duration: "3-6 mois",
    level: "Débutant à Avancé",
    topics: ["Algorithmique", "Structures de données", "POO", "Bonnes pratiques"],
    color: "text-blue-500",
  },
  {
    icon: Globe,
    title: "Développement Web",
    description: "Créez des applications web modernes avec React, Node.js et les dernières technologies.",
    duration: "4-6 mois",
    level: "Intermédiaire",
    topics: ["HTML/CSS", "React", "Node.js", "Bases de données"],
    color: "text-green-500",
  },
  {
    icon: Smartphone,
    title: "Développement Mobile",
    description: "Développez des applications mobiles natives et cross-platform pour iOS et Android.",
    duration: "4-5 mois",
    level: "Intermédiaire",
    topics: ["React Native", "Flutter", "APIs", "UI/UX Mobile"],
    color: "text-purple-500",
  },
  {
    icon: Palette,
    title: "Design Graphique",
    description: "Apprenez les bases du design graphique et de l'identité visuelle avec les outils professionnels.",
    duration: "3-4 mois",
    level: "Débutant à Avancé",
    topics: ["Photoshop", "Illustrator", "Figma", "Branding"],
    color: "text-pink-500",
  },
  {
    icon: Shield,
    title: "Initiation à la Cybersécurité",
    description: "Découvrez les fondamentaux de la sécurité informatique et protégez vos systèmes.",
    duration: "2-3 mois",
    level: "Débutant à Intermédiaire",
    topics: ["Sécurité réseau", "Cryptographie", "Ethical hacking", "Bonnes pratiques"],
    color: "text-red-500",
  },
  {
    icon: FileText,
    title: "Bureautique & Outils Professionnels",
    description: "Maîtrisez les outils essentiels : Word, Excel, PowerPoint et Google Workspace.",
    duration: "1-2 mois",
    level: "Tous Niveaux",
    topics: ["Word", "Excel", "PowerPoint", "Google Suite"],
    color: "text-orange-500",
  },
  {
    icon: Sparkles,
    title: "Outils IA pour Booster sa Productivité",
    description: "Exploitez le pouvoir de l'IA pour optimiser votre travail avec ChatGPT, Copilot et plus.",
    duration: "1 mois",
    level: "Tous niveaux",
    topics: ["ChatGPT", "GitHub Copilot", "Midjourney", "Automatisation"],
    color: "text-cyan-500",
  },
  {
    icon: Megaphone,
    title: "Marketing et Communication",
    description: "Développez votre présence digitale et maîtrisez les stratégies de communication moderne.",
    duration: "2-3 mois",
    level: "Débutant à Intermédiaire",
    topics: ["Marketing digital", "Réseaux sociaux", "Content marketing", "SEO/SEA"],
    color: "text-indigo-500",
  },
  {
    icon: Network,
    title: "Réseaux et Systèmes",
    description: "Comprenez les fondamentaux des réseaux informatiques et administration système.",
    duration: "3-4 mois",
    level: "Intermédiaire",
    topics: ["Architecture réseau", "Protocoles TCP/IP", "Administration Linux", "Configuration serveur"],
    color: "text-teal-500",
  },
];

const features = [
  {
    icon: Users,
    title: "Formation en Petit Groupe",
    description: "Max 10 personnes pour un suivi personnalisé",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Attestation de formation reconnue",
  },
  {
    icon: Clock,
    title: "Flexible",
    description: "Cours en présentiel et en ligne",
  },
];

export function FormationsSection() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section id="formations" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nos Formations
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Investissez dans <span className="text-primary">Votre Avenir</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Des formations pratiques et certifiantes pour développer vos compétences numériques et accélérer votre carrière dans la tech.
          </p>
        </div>

        {/* Features - Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/30 border border-border animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Features Carousel - Mobile */}
        <div className="md:hidden mb-16">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-4xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {features.map((feature) => (
                <CarouselItem key={feature.title} className="pl-2 md:pl-4 basis-[85%]">
                  <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/30 border border-border h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>

        {/* Formations Grid - Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {formations.map((formation, index) => (
            <Card
              key={formation.title}
              className="group hover:shadow-xl transition-all duration-300 animate-slide-up border-border overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <formation.icon className={`h-7 w-7 ${formation.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {formation.level}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {formation.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {formation.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Durée : {formation.duration}</span>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Programme :</p>
                    <div className="flex flex-wrap gap-2">
                      {formation.topics.map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href="#contact">
                      En savoir plus
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Formations Carousel - Mobile */}
        <div className="md:hidden mb-12">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {formations.map((formation) => (
                <CarouselItem key={formation.title} className="pl-2 md:pl-4 basis-[85%]">
                  <Card className="group hover:shadow-xl transition-all duration-300 border-border overflow-hidden h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <formation.icon className={`h-7 w-7 ${formation.color}`} />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {formation.level}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {formation.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {formation.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>Durée : {formation.duration}</span>
                        </div>
                        
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-2">Programme :</p>
                          <div className="flex flex-wrap gap-2">
                            {formation.topics.map((topic) => (
                              <Badge key={topic} variant="outline" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button 
                          variant="outline" 
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                          asChild
                        >
                          <a href="#contact">
                            En savoir plus
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base" asChild>
              <a 
                href="https://wa.me/22871177587?text=Bonjour%2C%20je%20souhaite%20voir%20le%20calendrier%20des%20formations%20disponibles." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Voir le Calendrier
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <a 
                href="https://wa.me/22871177587?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20une%20formation." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Demander un Devis
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            🎓 Formations éligibles aux financements entreprise • Possibilité de paiement échelonné
          </p>
        </div>
      </div>
    </section>
  );
}
