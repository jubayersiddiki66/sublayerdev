import { Link } from "react-router-dom";
import { useBooking } from "@/components/BookingModal";

const WHATSAPP_URL = "https://wa.me/8801305273703";

const Footer = () => {
  const { open } = useBooking();
  return (
    <footer className="relative border-t border-border/50" role="contentinfo">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-12">
          <div className="max-w-xs text-center md:text-left">
            <Link to="/" className="inline-block mb-4 group">
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-foreground">Sublayer Dev Studios</span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              Never miss another lead. AI that answers, qualifies, and books — 24/7.
            </p>
            <a href="mailto:info.sublayerdev@gmail.com" className="text-xs text-accent hover:text-foreground transition-colors block">info.sublayerdev@gmail.com</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors block mt-1">WhatsApp: +880 1305 273 703</a>
            <p className="text-[10px] text-muted-foreground mt-3">Mon–Fri · 8am–10pm · Dhaka · Remote Worldwide</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-10 md:gap-12 w-full md:w-auto">
            <div className="space-y-3 text-center md:text-left">
              <span className="text-[10px] tracking-[0.25em] uppercase text-accent">Explore</span>
              <div className="flex flex-col gap-2">
                <a href="/#services" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Services</a>
                <a href="/#portfolio" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Work</a>
                <a href="/#process" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Process</a>
                <a href="/#about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">About</a>
                <a href="/#faq" className="text-xs text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              </div>
            </div>

            <div className="space-y-3 text-center md:text-left">
              <span className="text-[10px] tracking-[0.25em] uppercase text-accent">Get In Touch</span>
              <div className="flex flex-col gap-2">
                <button onClick={open} className="text-xs text-muted-foreground hover:text-foreground transition-colors text-left">Book Free AI Audit</button>
                <a href="mailto:info.sublayerdev@gmail.com" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Email</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">WhatsApp</a>
                <Link to="/legal" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Legal</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[10px] text-muted-foreground">© 2026 Sublayer Dev Studios. All rights reserved.</p>
          <p className="text-[10px] text-muted-foreground">Founder-led · Direct access · Live in days, not months</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
