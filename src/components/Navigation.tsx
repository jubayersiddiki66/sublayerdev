import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useBooking } from "@/components/BookingModal";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#portfolio" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
];

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { open } = useBooking();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (location.hash && location.pathname === "/") {
      const id = location.hash.replace("#", "");
      setTimeout(() => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }, 100);
    }
  }, [location]);

  const handleAnchor = (e: React.MouseEvent, href: string) => {
    if (!href.startsWith("/#")) return;
    e.preventDefault();
    const id = href.replace("/#", "");
    setMobileOpen(false);
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(href);
    }
  };

  const openBooking = () => { setMobileOpen(false); open(); };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5" : ""}`} style={{ paddingTop: "env(safe-area-inset-top)" }} aria-label="Main navigation">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className={`flex items-center justify-center transition-all duration-300 ${scrolled ? "h-12" : "h-14"}`}>
            <div className="absolute left-4 md:left-8">
              <Link to="/" onClick={(e) => { if (location.pathname === "/") { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); } }} className="group flex items-baseline gap-1.5">
                <span className={`font-light tracking-[0.08em] transition-all duration-300 ${scrolled ? "text-sm text-foreground" : "text-base text-foreground"}`}>Sublayer</span>
                <span className={`tracking-[0.2em] uppercase transition-all duration-300 ${scrolled ? "text-[9px] text-muted-foreground" : "text-[10px] text-muted-foreground/60"}`}>Dev Studios</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-5">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => handleAnchor(e, link.href)} className={`text-[10px] hover:text-foreground transition-colors duration-500 tracking-[0.2em] uppercase ${scrolled ? "text-muted-foreground" : "text-muted-foreground/70"}`}>
                  {link.label}
                </a>
              ))}
            </div>

            <div className="absolute right-4 md:right-8 hidden md:block">
              <button onClick={open} className="relative text-[10px] tracking-[0.2em] uppercase text-foreground/90 hover:text-foreground transition-all duration-500 border border-border hover:border-accent/30 px-4 py-2 card-corner-glow overflow-hidden rounded-2xl">
                <span className="relative z-10">🗓 Book a Call</span>
              </button>
            </div>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="absolute right-4 md:hidden text-muted-foreground hover:text-foreground transition-colors p-2" aria-label="Toggle menu">
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
                <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-background/95 backdrop-blur-2xl border-t border-white/5">
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => handleAnchor(e, link.href)} className="block text-sm text-muted-foreground/80 hover:text-foreground transition-colors min-h-[44px] flex items-center">
                  {link.label}
                </a>
              ))}
              <button onClick={openBooking} className="block text-sm text-foreground/90 min-h-[44px] flex items-center w-full text-left">
                🗓 Book a Call
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-background/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setMobileOpen(false)} />
    </>
  );
};

export default Navigation;
