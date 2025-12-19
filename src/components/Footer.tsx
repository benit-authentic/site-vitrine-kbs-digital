import { Phone, Mail, MapPin, Linkedin, MessageCircle } from "lucide-react";
import { SiTiktok, SiX, SiInstagram } from "@icons-pack/react-simple-icons";
import logo from "@/assets/logo-kbs.png";

const quickLinks = [
  { name: "Accueil", href: "#accueil" },
  { name: "À propos", href: "#apropos" },
  { name: "Services", href: "#services" },
  { name: "Hackathons", href: "#hackathons" },
  { name: "Témoignages", href: "#temoignages" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Développement Web & Mobile",
  "Intelligence Artificielle",
  "Cybersécurité",
  "Formation Professionnelle",
];

const socialLinks = [
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/company/kbs-digital-sarl/", 
    label: "LinkedIn",
    isCustom: false
  },
  { 
    icon: null, 
    customIcon: "tiktok",
    href: "https://www.tiktok.com/@kbs.digital.sarl", 
    label: "TikTok",
    isCustom: true
  },
  { 
    icon: null, 
    customIcon: "instagram",
    href: "https://www.instagram.com/kbs.digital.sarl", 
    label: "Instagram",
    isCustom: true
  },
  { 
    icon: null, 
    customIcon: "x",
    href: "https://x.com/KBSDigital", 
    label: "X (Twitter)",
    isCustom: true
  },
  { 
    icon: MessageCircle, 
    href: "https://whatsapp.com/channel/0029Vb6VQ07I1rcn2z5NH41L", 
    label: "WhatsApp Channel",
    isCustom: false
  },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="KBS Digital" className="h-12 w-auto" />
              <span className="font-display font-bold text-lg text-secondary-foreground">
                KBS-DIGITAL SARL
              </span>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6">
              Votre partenaire pour la digitalisation et la création de solutions informatiques innovantes au Togo.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  {social.isCustom ? (
                    social.customIcon === "tiktok" ? (
                      <SiTiktok className="h-5 w-5" />
                    ) : social.customIcon === "instagram" ? (
                      <SiInstagram className="h-5 w-5" />
                    ) : social.customIcon === "x" ? (
                      <SiX className="h-5 w-5" />
                    ) : null
                  ) : (
                    social.icon && <social.icon className="h-5 w-5" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-6">
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-secondary-foreground/70 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/70 text-sm">
                  YÉOU, Kara-Togo
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-secondary-foreground/70 text-sm">
                  <a href="tel:+22871177587" className="hover:text-primary transition-colors block">
                    +228 92 68 85 05
                  </a>
                  <a href="tel:+22871177587" className="hover:text-primary transition-colors block">
                    +228 71 17 75 87
                  </a>
                  <a href="tel:+22893826677" className="hover:text-primary transition-colors block">
                    +228 93 82 66 77
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:kbsdigitalsarl@gmail.com"
                  className="text-secondary-foreground/70 text-sm hover:text-primary transition-colors"
                >
                  kbsdigitalsarl@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-secondary-foreground/10">
          <p className="text-center text-secondary-foreground/50 text-sm">
            © 2025 KBS-DIGITAL SARL. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
