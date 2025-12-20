import { Linkedin, Twitter, Mail } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import teamCeo from "@/assets/team-ceo.jpg";
import teamCto from "@/assets/team-cto.jpg";
import teamPm from "@/assets/team-pm.jpg";
import teamCreative from "@/assets/team-creative.jpg";

const team = [
  {
    name: "Kévin MEBA",
    role: "Chief Executive Officer (CEO)",
    image: teamCeo,
    bio: "Visionnaire et architecte du développement web et mobile, Kévin pilote la stratégie de KBS-DIGITAL vers l'excellence et l'innovation.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Bénit EDOUH-SEWA",
    role: "Chief Technology Officer (CTO)",
    image: teamCto,
    bio: "Expert en architecture logicielle et développement full-stack, Bénit garantit l'excellence technique et la scalabilité de nos solutions.",
    linkedin: "https://www.linkedin.com/in/bénit-edouh-sewa/",
    twitter: "#",
  },
  {
    name: "Serge DOTSE",
    role: "Head of Cybersecurity & Marketing",
    image: teamPm,
    bio: "Spécialiste en sécurité des systèmes d'information et stratégie digitale, Serge assure la protection de nos infrastructures et le rayonnement de notre marque.",
    linkedin: "https://www.linkedin.com/in/serge-dotse/",
    twitter: "#",
  },
  {
    name: "Patrik MAYOU",
    role: "Chief Operating Officer (COO)",
    image: teamCreative,
    bio: "Expert en gestion de projets et développement agile, Patrik coordonne et encadre nos équipes pour garantir l'exécution opérationnelle et la livraison de solutions de qualité.",
    linkedin: "https://www.linkedin.com/in/patrikmayou/",
    twitter: "#",
  },
];

export function TeamSection() {
  const plugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  );

  return (
    <section id="equipe" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Notre Équipe
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Les <span className="text-primary">Visionnaires</span> derrière KBS
          </h2>
          <p className="text-lg text-muted-foreground">
            Une équipe passionnée et expérimentée, unie par la volonté de transformer le paysage numérique togolais.
          </p>
        </div>

        {/* Team Grid - Desktop */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                
                {/* Social links overlay */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-primary-foreground" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Carousel - Mobile */}
        <div className="md:hidden">
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
              {team.map((member) => (
                <CarouselItem key={member.name} className="pl-2 md:pl-4 basis-[85%]">
                  <div className="group relative bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                      
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <a
                          href={member.linkedin}
                          className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                        >
                          <Linkedin className="h-4 w-4 text-primary-foreground" />
                        </a>
                      </div>
                    </div>

                    <div className="p-6 text-center">
                      <h3 className="font-display text-xl font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-3">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
