import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const caseStudies = [
{
  title: "Autonomous Document Processing Pipeline",
  focus: "AI Agents + Automation",
  constraints: "Legacy data formats, strict compliance requirements, 99.9% accuracy threshold",
  outcomes: "Reduced processing time from 3 days to 4 minutes. Zero manual intervention for 94% of documents."
},
{
  title: "Real-Time Operations Dashboard",
  focus: "Web Systems + Infrastructure",
  constraints: "100k+ concurrent users, sub-200ms response times, multi-region deployment",
  outcomes: "Deployed across 3 regions. Sustained 150k concurrent connections during peak load."
},
{
  title: "Multi-Agent Research System",
  focus: "AI Agents + Custom Infrastructure",
  constraints: "Unstructured data sources, domain-specific reasoning, iterative refinement loops",
  outcomes: "System processes 10,000+ sources daily. Research quality rated equivalent to senior analyst output."
}];

const Work = () => {
  return (
    <main className="pt-20 pb-20">
      <SEOHead
        title="Our Work — AI Projects & Case Studies | Sublayer Dev Studios"
        description="Explore AI projects and case studies by Sublayer Dev Studios. Autonomous document processing, real-time dashboards, and multi-agent research systems."
        keywords="AI case studies, AI projects Bangladesh, AI portfolio, Sublayer Dev Studios work, AI automation projects, AI agent case studies"
        canonical="https://sublayerd.lovable.app/work"
      />
      <div className="relative max-w-3xl mx-auto px-4 md:px-8">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
        
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-px bg-accent/50" />
            <p className="text-[10px] tracking-[0.4em] uppercase text-destructive">Work</p>
          </div>
          <h1 className="text-heading text-foreground mb-4 break-words">Selected systems.</h1>
          <p className="text-body-lg text-muted-foreground max-w-xl mb-16">
            Constraints, decisions, and outcomes. No vanity metrics.
          </p>
        </ScrollReveal>

        <div className="space-y-6 stagger-children">
          {caseStudies.map((cs, i) =>
          <ScrollReveal key={i}>
              <article className="relative bg-gradient-card rounded-lg border border-border p-5 sm:p-6 md:p-8 hover:border-accent/30 transition-colors duration-500 group">
                <div className="absolute top-0 left-6 w-12 h-px bg-gradient-to-r from-accent/30 to-transparent" />
                
                <p className="text-[10px] tracking-[0.2em] uppercase mb-3 text-accent">{cs.focus}</p>
                <h2 className="text-lg text-foreground mb-6 font-light group-hover:text-accent transition-colors break-words">{cs.title}</h2>
                
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Constraints</p>
                    <p className="text-xs text-silver leading-relaxed">{cs.constraints}</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Outcomes</p>
                    <p className="text-xs text-silver leading-relaxed">{cs.outcomes}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          )}
        </div>

        <ScrollReveal>
          <div className="mt-14 pt-10 border-t border-border/50 text-center">
            <p className="text-xs text-muted-foreground mb-4">
              Detailed case studies with architecture breakdowns available upon request.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-foreground hover:text-accent transition-colors">
              <span>Request case studies</span>
              <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </main>);
};

export default Work;
