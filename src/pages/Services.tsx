import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const services = [
{
  title: "AI Agents",
  description: "Replace entire departments with autonomous agents that handle complex decisions, execute tasks, and scale without headcount. Cut operational costs by up to 80%.",
  href: "/services/ai-agents",
  icon: "◈"
},
{
  title: "AI Automation",
  description: "Eliminate manual bottlenecks across your entire operation. From lead capture to invoicing — automate the workflows draining your team's time and your bottom line.",
  href: "/services/ai-automation",
  icon: "◇"
},
{
  title: "Web Systems",
  description: "Stop losing revenue to slow, outdated platforms. We build high-performance web systems that convert visitors, retain users, and scale with your growth.",
  href: "/services/web-systems",
  icon: "▣"
},
{
  title: "Custom Infrastructure",
  description: "Future-proof your tech stack. Scalable architecture that handles 10x growth without 10x cost — from data pipelines to deployment infrastructure.",
  href: "/services/custom-infrastructure",
  icon: "⬡"
}];


const Services = () => {
  return (
    <main className="pt-20 pb-20">
      <SEOHead
        title="AI Services — AI Agents, Automation, Web Systems | Sublayer Dev Studios"
        description="Explore AI services by Sublayer Dev Studios: AI Agents, AI Automation, Web Systems, and Custom Infrastructure. Leading AI development agency in Bangladesh."
        keywords="AI services Bangladesh, AI agent development, AI automation services, web systems development, custom AI infrastructure, Sublayer Dev Studios services"
        canonical="https://sublayerd.lovable.app/services"
      />
      <div className="relative max-w-4xl mx-auto px-4 md:px-8">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
        
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-px bg-accent/50" />
            <p className="text-[10px] tracking-[0.4em] uppercase text-destructive">Services</p>
          </div>
          <h1 className="text-heading text-foreground mb-4 break-words">Your competitors are automating. Are you?</h1>
          <p className="text-body-lg text-muted-foreground max-w-xl mb-16">
            Every dollar spent on repetitive work is a dollar lost. We build AI systems that cut costs, accelerate revenue, and scale without adding headcount.
          </p>
        </ScrollReveal>

        <div className="space-y-3 stagger-children">
          {services.map((service) =>
          <ScrollReveal key={service.title}>
              <Link
              to={service.href}
              className="group relative block bg-gradient-card rounded-lg border border-border hover:border-accent/30 overflow-hidden transition-all duration-500 hover:shadow-glow"
              aria-label={`Learn more about ${service.title}`}>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 arch-grid-dense opacity-0 group-hover:opacity-30 transition-opacity" />
                
                <div className="relative p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 md:gap-10">
                  <span className="text-2xl text-accent/40 group-hover:text-accent transition-colors duration-500">
                    {service.icon}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-lg text-foreground mb-1.5 group-hover:text-accent transition-colors font-light">
                      {service.title}
                    </h2>
                    <p className="text-xs text-muted-foreground leading-relaxed max-w-md">
                      {service.description}
                    </p>
                  </div>
                  <span className="text-xs text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 hidden sm:inline">
                    Deep dive →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          )}
        </div>
      </div>
    </main>);
};

export default Services;
