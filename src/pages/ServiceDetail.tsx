import { useParams, Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const serviceData: Record<string, {
  title: string;
  subtitle: string;
  icon: string;
  context: string;
  approach: string;
  useCases: string[];
  boundaries: string[];
  engagement: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
}> = {
  "ai-agents": {
    title: "AI Agents",
    subtitle: "Autonomous systems that execute.",
    icon: "◈",
    context: "Most organizations treat AI as a feature. We treat it as infrastructure. Our agents are task-driven, tool-using systems designed to operate with minimal oversight — handling complex workflows that would otherwise require dedicated teams.",
    approach: "We build agents that reason, plan, and execute. Each agent is architected around specific domains with clear tool access, memory systems, and feedback loops. They don't guess. They operate within defined boundaries with predictable behavior.",
    useCases: [
      "Automated research and analysis pipelines",
      "Customer interaction systems with tool access",
      "Document processing and decision support",
      "Multi-step operational workflows",
    ],
    boundaries: [
      "We don't build chatbots disguised as agents",
      "Every agent has defined scope and failure modes",
      "Human oversight is always architecturally available",
    ],
    engagement: "Typical agent systems are scoped in 2–3 weeks and deployed within 8–12 weeks. We provide architecture documentation, monitoring, and a transition period.",
    seoTitle: "AI Agent Development Services — Autonomous AI Systems | Sublayer Dev Studios",
    seoDescription: "Build autonomous AI agents with Sublayer Dev Studios. Task-driven, tool-using AI systems for complex workflows. Leading AI agent development agency in Bangladesh.",
    seoKeywords: "AI agent development, autonomous AI systems, AI agents Bangladesh, multi-agent systems, AI task automation, Sublayer Dev Studios AI agents",
  },
  "ai-automation": {
    title: "AI Automation",
    subtitle: "Workflow orchestration at scale.",
    icon: "◇",
    context: "Automation isn't about replacing people. It's about removing the repetitive layers between intent and execution. We design orchestration systems that handle the work your team shouldn't be doing manually.",
    approach: "We map your operational flow, identify high-leverage automation points, and build pipelines that connect your existing tools into a cohesive system. No rip-and-replace — we integrate with what works.",
    useCases: [
      "Internal operations automation",
      "Data pipeline orchestration",
      "Cross-platform workflow synchronization",
      "Intelligent routing and escalation",
    ],
    boundaries: [
      "We automate processes, not decisions that require judgment",
      "Every automation has monitoring and manual override",
      "We design for graceful degradation",
    ],
    engagement: "Automation engagements begin with a process audit. Implementation typically spans 4–8 weeks with iterative deployment.",
    seoTitle: "AI Automation Services — Workflow Orchestration | Sublayer Dev Studios",
    seoDescription: "End-to-end AI automation and workflow orchestration by Sublayer Dev Studios. Eliminate operational friction with intelligent automation solutions in Bangladesh.",
    seoKeywords: "AI automation Bangladesh, workflow automation, process automation, AI orchestration, intelligent automation, Sublayer Dev Studios automation",
  },
  "web-systems": {
    title: "Web Systems",
    subtitle: "Platforms built for internal leverage.",
    icon: "▣",
    context: "We don't build websites. We build systems that happen to have web interfaces. Internal tools, dashboards, customer portals — engineered for the people who use them daily, not for marketing screenshots.",
    approach: "Performance, security, and maintainability are non-negotiable. We use modern frameworks with server-side rendering, edge deployment, and database-driven architectures. Every system is built to scale.",
    useCases: [
      "Internal dashboards and admin platforms",
      "Customer-facing portals and tools",
      "Data visualization and reporting systems",
      "Workflow management interfaces",
    ],
    boundaries: [
      "We don't build marketing sites or landing pages",
      "Design follows function — no decoration for its own sake",
      "Every interface decision is backed by user workflow analysis",
    ],
    engagement: "Web system projects are scoped based on complexity. Typical delivery is 6–16 weeks with phased rollout.",
    seoTitle: "AI Web Systems Development — Custom Platforms | Sublayer Dev Studios",
    seoDescription: "Custom web systems, dashboards, and platforms by Sublayer Dev Studios. AI-powered web development agency in Bangladesh building scalable internal tools.",
    seoKeywords: "AI web development Bangladesh, custom web systems, web platform development, AI dashboard development, Sublayer Dev Studios web systems",
  },
  "custom-infrastructure": {
    title: "Custom Infrastructure",
    subtitle: "Architecture that scales without attention.",
    icon: "⬡",
    context: "Infrastructure decisions made early compound forever. We design systems that handle growth, failure, and change without requiring constant engineering attention. The best infrastructure is the kind you forget about.",
    approach: "We work across the full stack — databases, APIs, deployment pipelines, monitoring, and scaling strategies. Our architecture decisions prioritize operational simplicity and long-term maintainability.",
    useCases: [
      "Database architecture and optimization",
      "API design and gateway implementation",
      "CI/CD pipeline design",
      "Cloud infrastructure and scaling strategy",
    ],
    boundaries: [
      "We don't over-engineer for hypothetical scale",
      "Infrastructure serves the application, not the other way around",
      "We design for the team that will maintain it",
    ],
    engagement: "Infrastructure engagements begin with an architecture review. Implementation is phased, typically 8–16 weeks depending on scope.",
    seoTitle: "Custom AI Infrastructure — Scalable Architecture | Sublayer Dev Studios",
    seoDescription: "Custom AI infrastructure and scalable system architecture by Sublayer Dev Studios. Data pipelines, API design, and cloud infrastructure in Bangladesh.",
    seoKeywords: "custom AI infrastructure, system architecture Bangladesh, API design, data pipelines, cloud infrastructure, Sublayer Dev Studios infrastructure",
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = serviceData[slug || ""];

  if (!service) {
    return (
      <main className="pt-20 pb-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-heading text-foreground mb-3">Service not found.</h1>
          <Link to="/services" className="text-xs text-accent hover:text-accent/80 transition-colors">
            ← Back to Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 pb-20">
      <SEOHead
        title={service.seoTitle}
        description={service.seoDescription}
        keywords={service.seoKeywords}
        canonical={`https://sublayerd.lovable.app/services/${slug}`}
      />
      <div className="relative max-w-3xl mx-auto px-4 md:px-8">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
        
        <ScrollReveal>
          <Link to="/services" className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-colors mb-10">
            <span>←</span> Services
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl text-accent">{service.icon}</span>
            <div>
              <h1 className="text-heading text-foreground break-words">{service.title}</h1>
            </div>
          </div>
          <p className="text-subheading text-silver-bright mb-16">{service.subtitle}</p>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-accent/50" />
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent">Context</p>
            </div>
            <p className="text-body-lg text-muted-foreground leading-relaxed">{service.context}</p>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-accent/50" />
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent">System Approach</p>
            </div>
            <p className="text-body-lg text-muted-foreground leading-relaxed">{service.approach}</p>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-accent/50" />
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent">Use Cases</p>
            </div>
            <ul className="space-y-3">
              {service.useCases.map((uc, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-accent/50 mt-1.5 shrink-0" />
                  {uc}
                </li>
              ))}
            </ul>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-accent/50" />
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent">Technical Boundaries</p>
            </div>
            <ul className="space-y-3">
              {service.boundaries.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-accent/50 mt-1.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-accent/50" />
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent">Engagement Model</p>
            </div>
            <p className="text-body-lg text-muted-foreground leading-relaxed">{service.engagement}</p>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <div className="pt-10 border-t border-border/50">
            <a
              href="https://www.facebook.com/sublayer.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-foreground hover:text-accent transition-colors duration-300"
              aria-label="Schedule a session with Sublayer Dev Studios"
            >
              <span className="relative pb-1">
                Schedule a session
                <span className="absolute bottom-0 left-0 w-full h-px bg-accent/30 group-hover:bg-accent transition-colors" />
              </span>
              <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
};

export default ServiceDetail;
