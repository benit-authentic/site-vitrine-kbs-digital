import { Calendar, MapPin, Trophy, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import eventHackathon from "@/assets/event-hackathon.jpg";
import eventPitch from "@/assets/event-pitch.jpg";

const events = [
  {
    title: "Moments Forts",
    date: "Septembre 2025",
    location: "Kara, Togo",
    image: eventHackathon,
    description: "Un événement majeur rassemblant les talents tech de la région pour célébrer l'innovation locale.",
    stats: [
      { icon: Users, value: "200+", label: "Participants" },
      { icon: Trophy, value: "5", label: "Prix" },
    ],
    type: "Événement",
  },
  {
    title: "Présentations Finales",
    date: "Septembre 2025",
    location: "Kara, Togo",
    image: eventPitch,
    description: "Les équipes présentent leurs projets innovants devant un jury d'experts. 12 projets en compétition pour 3 prix majeurs.",
    stats: [
      { icon: Trophy, value: "3", label: "Prix décernés" },
      { icon: Users, value: "12", label: "Projets" },
    ],
    type: "Pitch",
  },
];

export function EventsSection() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Autres Moments
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Nos <span className="text-primary">Événements</span> Marquants
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez les moments forts qui façonnent l'écosystème tech de Kara et au-delà.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    {event.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Date & Location */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    {event.location}
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {event.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Stats */}
                <div className="flex gap-6 mb-6">
                  {event.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <stat.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="group/btn">
                  En savoir plus
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
