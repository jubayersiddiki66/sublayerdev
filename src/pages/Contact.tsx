import { useEffect, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionBadge from "@/components/SectionBadge";
import SEOHead from "@/components/SEOHead";

const contactCards = [
  { icon: "☎", title: "Contact Us", lines: ["(+880) 1305273703"] },
  { icon: "✉", title: "Email Us", lines: ["info.sublayerdev@gmail.com"] },
  { icon: "◷", title: "Working Hours", lines: ["Mon - Fri : 08AM - 10PM", "Sat - Sun : Close"] },
  { icon: "⌖", title: "Location", lines: ["Dhaka, Bangladesh", "Remote Worldwide"] },
];

const Contact = () => {
  const initialized = useRef(false);
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const w = window as any;

    const initCal = () => {
      w.Cal("init", "30min", { origin: "https://app.cal.com" });
      w.Cal.ns["30min"]("inline", {
        elementOrSelector: "#my-cal-inline-contact",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "sublayer-dev-studios-my6zpa/30min",
      });
      w.Cal.ns["30min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
    };

    if (w.Cal && w.Cal.loaded) {
      initCal();
    } else {
      (function (C: any, A: string, L: string) {
        const p = function (a: any, ar: any) { a.q.push(ar); };
        const d = C.document;
        C.Cal = C.Cal || function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");
      initCal();
    }
  }, []);

  return (
    <main className="pt-20 pb-20">
      <SEOHead
        title="Contact Sublayer Dev Studios — AI Automation Agency Bangladesh"
        description="Get in touch with Sublayer Dev Studios, the leading AI automation and AI agent development agency in Bangladesh. Schedule a 30-minute consultation."
        keywords="contact AI agency Bangladesh, AI consulting Dhaka, hire AI developers Bangladesh, AI automation consultation, Sublayer Dev Studios contact"
        canonical="https://sublayerd.lovable.app/contact"
      />
      <div className="relative max-w-4xl mx-auto px-4 md:px-8">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
        
        <ScrollReveal>
          <SectionBadge label="Contact" />
          <h1 className="text-heading text-foreground mb-4 break-words">Let's talk systems.</h1>
          <p className="text-body-lg text-muted-foreground max-w-lg mb-16">
            30 minutes. No pitch. We'll discuss your constraints, infrastructure, and whether there's a fit.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative rounded-2xl border border-border overflow-hidden card-corner-glow">
            <div className="relative z-10 text-center py-8 md:py-12 px-4 sm:px-6">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full border border-accent/30 flex items-center justify-center">
                <span className="text-xl text-destructive">◈</span>
              </div>
              
              <h2 className="text-heading text-foreground mb-3 break-words">
                Ready to build something <span className="text-accent">extraordinary</span>?
              </h2>
              <p className="text-body-lg text-muted-foreground mb-8">
                Let's discuss your next system.
              </p>
              
              {/* Cal.com Booking Embed */}
              <div className="w-full max-w-3xl mx-auto mb-8 rounded-xl overflow-hidden border border-border/30" style={{ minHeight: "400px" }}>
                <div id="my-cal-inline-contact" style={{ width: "100%", height: "500px", overflow: "auto" }} />
              </div>
              
              <p className="text-xs text-muted-foreground">
                Or email us directly at <span className="text-destructive">info.sublayerdev@gmail.com</span>
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact Info Cards */}
        <ScrollReveal>
          <div className="grid grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
            {contactCards.map((card, i) => (
              <div key={i} className="group relative rounded-2xl border border-border overflow-hidden card-corner-glow transition-all duration-500 hover:border-accent/30 hover:-translate-y-1">
                <div className="relative z-10 flex flex-col items-center text-center py-6 px-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 border-2 border-destructive/60" style={{
                    background: "radial-gradient(circle, hsl(15 70% 40% / 0.6), hsl(15 70% 30% / 0.3))"
                  }}>
                    <span className="text-lg">{card.icon}</span>
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{card.title}</h3>
                  {card.lines.map((line, li) => (
                    <p key={li} className="text-xs text-muted-foreground leading-relaxed break-words">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
};

export default Contact;
