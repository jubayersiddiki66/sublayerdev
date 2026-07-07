import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const steps = [
{
  label: "01",
  title: "Alignment",
  description: "We begin with a 30-minute session to understand your constraints, infrastructure, and goals. No pitch. No scope creep."
},
{
  label: "02",
  title: "Architecture",
  description: "We produce a system architecture proposal — not a feature list. This document defines boundaries, dependencies, and deployment strategy."
},
{
  label: "03",
  title: "Execution",
  description: "We build in phased sprints with continuous deployment. You see working systems, not slide decks. Every milestone is production-ready."
},
{
  label: "04",
  title: "Transition",
  description: "We hand over systems designed to run without us. Documentation, monitoring, and operational playbooks are standard deliverables."
}];

const Partnership = () => {
  return (
    <main className="pt-20 pb-20">
      <SEOHead
        title="Partner With Us — AI Development Partnership | Sublayer Dev Studios"
        description="Partner with Sublayer Dev Studios for AI development. Execution-grade AI infrastructure partnership for organizations and agencies worldwide."
        keywords="AI partnership Bangladesh, AI development partner, AI agency partnership, Sublayer Dev Studios partnership, AI infrastructure partner"
        canonical="https://sublayerd.lovable.app/partnership"
      />
      <div className="relative max-w-3xl mx-auto px-4 md:px-8">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
        
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-px bg-accent/50" />
            <p className="text-[10px] tracking-[0.4em] uppercase text-destructive">Partnership</p>
          </div>
          <h1 className="text-heading text-foreground mb-4 break-words">Working with Sublayer.</h1>
          <p className="text-body-lg text-muted-foreground max-w-xl mb-16">
            We work with organizations, agencies, and product teams that need execution-grade infrastructure — not vendor relationships.
          </p>
        </ScrollReveal>

        <div className="space-y-0 stagger-children">
          {steps.map((step, i) =>
          <ScrollReveal key={i}>
              <div className="relative border-t border-border/50 py-8 sm:py-10 md:py-12 grid sm:grid-cols-[80px_1fr] gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl font-light text-accent/50">{step.label}</span>
                </div>
                <div>
                  <h2 className="text-lg text-foreground mb-3 font-light">{step.title}</h2>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-md">{step.description}</p>
                </div>
                {i < steps.length - 1 &&
              <div className="absolute left-[36px] bottom-0 w-px h-6 bg-gradient-to-b from-accent/30 to-transparent hidden sm:block" />
              }
              </div>
            </ScrollReveal>
          )}
        </div>

        <ScrollReveal>
          <div className="mt-10 pt-12 border-t border-border/50 text-center">
            <p className="text-body-lg text-muted-foreground mb-8">
              If this resonates, we should talk.
            </p>
            <a
              href="https://www.facebook.com/sublayer.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-accent/10 hover:bg-accent/20 border border-accent/30 hover:border-accent/50 rounded-lg px-6 py-3 transition-all duration-300"
              aria-label="Schedule a session with Sublayer Dev Studios"
            >
              <span className="text-xs tracking-[0.1em] uppercase text-foreground">Schedule a session</span>
              <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </main>);
};

export default Partnership;
