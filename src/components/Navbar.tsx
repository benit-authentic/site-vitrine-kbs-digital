import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/logo-kbs.png";

const navLinks = [
  { name: "Accueil", href: "#accueil" },
  { name: "À propos", href: "#apropos" },
  { name: "Services", href: "#services" },
  { name: "Formations", href: "#formations" },
  { name: "Projets", href: "#projets" },
  { name: "Équipe", href: "#equipe" },
  { name: "Hackathons", href: "#hackathons" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#accueil" className="flex items-center gap-2">
            <img src={logo} alt="KBS Digital" className="h-10 md:h-12 w-auto" />
            <span className="font-display font-bold text-lg hidden sm:block">
              <span className="text-primary">KBS-DIGITAL</span>
              <span className="text-foreground"> SARL</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="default" size="default" asChild>
              <a href="#contact">
                Prendre RDV
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-2"
                >
                  {link.name}
                </a>
              ))}
              <Button variant="default" className="mt-2" asChild>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Prendre RDV
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
