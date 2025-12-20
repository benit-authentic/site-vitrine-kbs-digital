import { Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const testimonials = [
  {
    name: "Akossiwa GBEDEMAH",
    role: "Développeuse Web",
    content: "La formation m'a permis de développer des compétences solides en développement web. L'équipe est très professionnelle et à l'écoute.",
    rating: 5,
  },
  {
    name: "Kodjo AGBEKO",
    role: "Directeur Général",
    content: "Grâce à KBS-DIGITAL, notre entreprise a réussi sa transformation digitale. Un accompagnement de qualité du début à la fin.",
    rating: 5,
  },
  {
    name: "Edem TCHAKOU",
    role: "Chef de Projet",
    content: "Les projets collaboratifs m'ont permis de gagner en expérience pratique. Je recommande vivement KBS-DIGITAL.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const plugin = useRef(
    Autoplay({ delay: 4500, stopOnInteraction: true })
  );

  return (
    <section id="temoignages" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Témoignages</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Ce que nos <span className="text-primary">clients</span> disent
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez les retours d'expérience de ceux qui nous ont fait confiance.
          </p>
        </div>

        {/* Testimonials Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative bg-card p-8 rounded-3xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Quote className="h-5 w-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel - Mobile */}
        <div className="md:hidden px-4">
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
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.name} className="pl-2 md:pl-4 basis-[90%]">
                  <div className="group relative bg-card p-8 pt-10 rounded-3xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full mt-6">
                    <div className="absolute -top-4 left-4 w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                      <Quote className="h-5 w-5 text-primary-foreground" />
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-primary">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-foreground truncate">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground truncate">{testimonial.role}</div>
                      </div>
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
