import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const Legal = () => {
  return (
    <main className="pt-20 pb-20">
      <SEOHead
        title="Privacy & Terms | Sublayer Dev Studios"
        description="Privacy policy and terms of service for Sublayer Dev Studios. Learn how we handle your data and our engagement terms."
        canonical="https://sublayerd.lovable.app/legal"
      />
      <div className="relative max-w-2xl mx-auto px-4 md:px-8">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
        
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-px bg-accent/50" />
            <p className="text-[10px] tracking-[0.4em] uppercase text-accent">Legal</p>
          </div>
          <h1 className="text-heading text-foreground mb-12 break-words">Privacy & Terms</h1>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-8 sm:space-y-10">
            <section className="bg-gradient-card rounded-lg border border-border p-5 sm:p-6">
              <h2 className="text-base text-foreground mb-3 font-light">Privacy Policy</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Sublayer Dev Studios collects minimal data necessary for communication and service delivery. We do not sell, share, or distribute personal information to third parties. Analytics, when used, are privacy-respecting and anonymized.
              </p>
            </section>

            <section className="bg-gradient-card rounded-lg border border-border p-5 sm:p-6">
              <h2 className="text-base text-foreground mb-3 font-light">Terms of Service</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All work produced by Sublayer Dev Studios is subject to individual engagement agreements. Intellectual property terms, confidentiality, and scope are defined per project. Contact us for specific terms related to your engagement.
              </p>
            </section>

            <section className="bg-gradient-card rounded-lg border border-border p-5 sm:p-6">
              <h2 className="text-base text-foreground mb-3 font-light">Contact</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                For legal inquiries, reach us at <span className="text-accent">legal@sublayer.dev</span>
              </p>
            </section>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
};

export default Legal;
