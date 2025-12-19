import { Calendar, MapPin, Trophy, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import eventHackathon from "@/assets/event-hackathon.jpg";
import eventPitch from "@/assets/event-pitch.jpg";

const events = [
  {
    title: "Kara Bootcamp 2025",
    date: "09 - 13 Septembre 2025",
    location: "Kara, Togo",
    image: eventPitch,
    description: "5 jours intensifs sous le thème « Compétences numériques et innovation pour une jeunesse togolaise engagée et entreprenante ». KBS-DIGITAL s'illustre avec distinction : nos collaborateurs Patrik Mayou et Bénit Edouh-Sewa remportent chacun le premier prix dans leur thématique respective. L'événement a réuni des professeurs d'université, des entrepreneurs locaux, IB Bank, la GIZ et de nombreux acteurs clés de l'écosystème numérique de Kara.",
    stats: [
      { icon: Trophy, value: "2", label: "1ers Prix" },
      { icon: Users, value: "5", label: "Jours" },
    ],
    type: "Bootcamp",
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

        <div className="max-w-4xl mx-auto">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg">
                    {event.type}
                  </span>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-6 right-6 flex gap-3">
                  {event.stats.map((stat) => (
                    <div key={stat.label} className="bg-card/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                      <div className="flex items-center gap-2">
                        <stat.icon className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-bold text-foreground text-lg">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                {/* Date & Location */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-medium">{event.location}</span>
                  </div>
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {event.description}
                </p>

                <Button variant="default" size="lg" className="group/btn">
                  En savoir plus
                  <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
