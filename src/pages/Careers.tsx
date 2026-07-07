import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const roles = [
{
  title: "Systems Engineer",
  type: "Full-time · Remote",
  description: "Design and build scalable infrastructure for AI-driven systems. You think in architectures, not tasks."
},
{
  title: "AI Agent Developer",
  type: "Full-time · Remote",
  description: "Build autonomous, tool-using AI systems. Deep experience with LLMs, planning algorithms, and system integration."
}];

const Careers = () => {
  return (
    <main className="pt-20 pb-20">
      <SEOHead
        title="Careers at Sublayer Dev Studios — AI Engineering Jobs Bangladesh"
        description="Join Sublayer Dev Studios. We're hiring AI engineers, systems engineers, and AI agent developers. Remote AI jobs in Bangladesh."
        keywords="AI jobs Bangladesh, AI engineering careers, systems engineer jobs, AI agent developer jobs, Sublayer Dev Studios careers, remote AI jobs"
        canonical="https://sublayerd.lovable.app/careers"
      />
      <div className="relative max-w-3xl mx-auto px-4 md:px-8">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
        
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-px bg-accent/50" />
            <p className="text-[10px] tracking-[0.4em] uppercase text-destructive">Careers</p>
          </div>
          <h1 className="text-heading text-foreground mb-4 break-words">Build with us.</h1>
          <p className="text-body-lg text-muted-foreground max-w-xl mb-16">
            We hire builders who care about systems, not titles. Small team. Deep work. No performance theater.
          </p>
        </ScrollReveal>

        <div className="space-y-3 stagger-children">
          {roles.map((role, i) =>
          <ScrollReveal key={i}>
              <div className="group relative bg-gradient-card rounded-lg border border-border hover:border-accent/30 p-5 sm:p-6 md:p-8 transition-all duration-500">
                <div className="absolute top-0 left-6 w-12 h-px bg-gradient-to-r from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <p className="text-[10px] tracking-[0.2em] uppercase text-accent mb-2">{role.type}</p>
                <h2 className="text-lg text-foreground mb-3 font-light group-hover:text-accent transition-colors break-words">{role.title}</h2>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-md">{role.description}</p>
              </div>
            </ScrollReveal>
          )}
        </div>

        <ScrollReveal>
          <div className="mt-14 pt-10 border-t border-border/50">
            <p className="text-xs text-muted-foreground mb-4">
              No open role that fits? Reach out anyway. We value capability over credentials.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-foreground hover:text-accent transition-colors">
              <span>Get in touch</span>
              <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </main>);
};

export default Careers;
