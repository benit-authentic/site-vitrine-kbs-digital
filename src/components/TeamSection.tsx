import { Linkedin, Twitter, Mail } from "lucide-react";
import teamCeo from "@/assets/team-ceo.jpg";
import teamCto from "@/assets/team-cto.jpg";
import teamPm from "@/assets/team-pm.jpg";
import teamCreative from "@/assets/team-creative.jpg";

const team = [
  {
    name: "Kofi Mensah",
    role: "Directeur Général (CEO)",
    image: teamCeo,
    bio: "Visionnaire passionné par la tech africaine, Kofi guide KBS-DIGITAL vers l'excellence.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Amara Diallo",
    role: "Directrice Technique (CTO)",
    image: teamCto,
    bio: "Experte en IA et développement, Amara assure la qualité technique de nos solutions.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Yao Agbénou",
    role: "Chef de Projets",
    image: teamPm,
    bio: "Yao coordonne nos équipes et garantit la livraison de projets réussis.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Afi Kodjo",
    role: "Directrice Créative",
    image: teamCreative,
    bio: "Afi apporte la vision artistique et l'identité visuelle à tous nos projets.",
    linkedin: "#",
    twitter: "#",
  },
];

export function TeamSection() {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <a
                    href={member.twitter}
                    className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Twitter className="h-4 w-4 text-primary-foreground" />
                  </a>
                  <a
                    href={`mailto:contact@kbs-digital.com`}
                    className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Mail className="h-4 w-4 text-primary-foreground" />
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
      </div>
    </section>
  );
}
