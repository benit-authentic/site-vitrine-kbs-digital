import { Heart, Smartphone, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import agronovaLogo from "@/assets/agronova.jpg";
import snapsellLogo from "@/assets/snapsell.jpg";
import ukbusgoLogo from "@/assets/ukbus.jpg";

const projects = [
  {
    logo: agronovaLogo,
    title: "AgroNova Togo",
    client: "Secteur Agricole",
    description: "Plateforme agricole digitale connectant agriculteurs et acheteurs avec application web et mobile pour transformer l'agriculture togolaise.",
    features: [
      "App web React.js pour acheteurs et conseillers",
      "App mobile Flutter pour agriculteurs",
      "Marketplace avec transparence des prix",
      "Conseils agricoles et alertes météo",
    ],
    technologies: ["React.js", "Flutter", "Node.js", "Firebase"],
    status: "Prototype",
    gradient: "from-green-600 to-lime-500",
    color: "text-green-600",
  },
  {
    logo: ukbusgoLogo,
    title: "UKBusGo",
    client: "Université de Kara",
    description: "Système de gestion intelligent de tickets de bus avec scan QR pour une expérience fluide et sécurisée.",
    features: [
      "Scan de code QR par les chauffeurs",
      "Traçage en temps réel des trajets",
      "Gestion des passagers et statistiques",
      "Interface intuitive pour conducteurs",
    ],
    technologies: ["React Native", "Node.js", "QR Code", "GPS Tracking"],
    status: "Prototype",
    gradient: "from-blue-500 to-cyan-500",
    color: "text-blue-500",
  },
  {
    logo: snapsellLogo,
    title: "SnapSell",
    client: "Projet Interne",
    description: "Marketplace moderne pour la vente et l'achat d'articles d'occasion où chacun peut être vendeur ou acheteur.",
    features: [
      "Inscription vendeur/acheteur simplifiée",
      "Système de notation et avis",
      "Chat intégré entre acheteurs et vendeurs",
      "Gestion sécurisée des transactions",
    ],
    technologies: ["React", "Firebase", "Stripe", "Cloud Storage"],
    status: "Prototype",
    gradient: "from-purple-500 to-pink-500",
    color: "text-purple-500",
  },
  {
    icon: Heart,
    title: "HealthCare+",
    client: "Projet Innovant",
    description: "Application mobile de santé complète pour gérer votre bien-être et rester connecté avec des professionnels.",
    features: [
      "Rappels automatiques de médicaments",
      "Carnet de santé virtuel complet",
      "Dossier médical numérique sécurisé",
      "Consultation en ligne avec médecins",
    ],
    technologies: ["Flutter", "Firebase", "Cloud Functions", "WebRTC"],
    status: "Prototype",
    gradient: "from-green-500 to-emerald-500",
    color: "text-green-500",
  },
  {
    icon: Smartphone,
    title: "Autres Projets",
    client: "Portfolio",
    description: "Nous développons continuellement des solutions innovantes pour répondre aux besoins du marché togolais et africain.",
    features: [
      "Applications e-commerce sur mesure",
      "Solutions de gestion d'entreprise",
      "Plateformes éducatives",
      "Outils de productivité",
    ],
    technologies: ["Multi-stack", "Cloud", "Mobile", "Web"],
    status: "En cours",
    gradient: "from-orange-500 to-red-500",
    color: "text-orange-500",
  },
];

export function ProjectsSection() {
  return (
    <section id="projets" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nos Réalisations
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Des <span className="text-primary">Projets Innovants</span> qui Façonnent l'Avenir
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez nos prototypes et solutions développées pour transformer les défis du quotidien en opportunités numériques.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-2xl transition-all duration-500 animate-slide-up border-border overflow-hidden relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
              
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  {project.logo ? (
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <img src={project.logo} alt={project.title} className="w-full h-full object-contain p-2" />
                    </div>
                  ) : (
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <project.icon className="h-8 w-8 text-white" />
                    </div>
                  )}
                  <Badge variant="secondary" className="text-xs font-medium">
                    {project.status}
                  </Badge>
                </div>
                
                <div>
                  <CardTitle className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-primary font-medium mb-3">
                    {project.client}
                  </p>
                  <CardDescription className="text-muted-foreground text-base">
                    {project.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">
                    Fonctionnalités clés :
                  </p>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${project.color} bg-current flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">
                    Technologies :
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="default" 
                    className="flex-1 group-hover:shadow-lg transition-shadow"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    En savoir plus
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="group-hover:border-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">
            Vous avez un projet en tête ?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nos prototypes démontrent notre capacité à transformer des idées en solutions concrètes. 
            Contactez-nous pour discuter de votre projet et voir comment nous pouvons le concrétiser ensemble.
          </p>
          <Button size="lg" className="text-base">
            Discuter de votre projet
          </Button>
        </div>
      </div>
    </section>
  );
}
