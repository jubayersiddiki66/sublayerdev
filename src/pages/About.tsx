import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const About = () => {
  return (
    <main className="pt-20 pb-20">
      <SEOHead
        title="About Sublayer Dev Studios — Leading AI Agency in Bangladesh"
        description="Learn about Sublayer Dev Studios, the leading AI automation and AI agent development agency in Bangladesh. We build systems that outlast us."
        keywords="about Sublayer Dev Studios, AI agency Bangladesh, AI company Dhaka, AI development team, leading AI agency Bangladesh"
        canonical="https://sublayerd.lovable.app/about"
      />
      <div className="relative max-w-3xl mx-auto px-4 md:px-8">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
        
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-px bg-accent/50" />
            <p className="text-[10px] tracking-[0.4em] uppercase text-destructive">About</p>
          </div>
          <h1 className="text-heading text-foreground mb-16 break-words">Studio philosophy.</h1>
        </ScrollReveal>

        <div className="space-y-10 sm:space-y-12 stagger-children">
          <ScrollReveal>
            <div className="relative pl-5 sm:pl-6 md:pl-10">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />
              <h2 className="text-subheading text-foreground mb-4 font-light break-words">
                We exist to build systems that outlast us.
              </h2>
              <p className="text-body-lg text-muted-foreground max-w-xl leading-relaxed">
                Sublayer Dev Studios was founded on a simple premise: the most valuable technology is the kind that disappears into your operations. We design AI agents, automation pipelines, and infrastructure that runs without attention — and compounds over time.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative pl-5 sm:pl-6 md:pl-10">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />
              <h2 className="text-subheading text-foreground mb-4 font-light">
                How we think.
              </h2>
              <p className="text-body-lg text-muted-foreground max-w-xl leading-relaxed">
                We think in systems, not features. Every project begins with architecture — understanding constraints, mapping dependencies, and designing for the team that will maintain it. We optimize for operational silence: the best systems are the ones you forget about.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative pl-5 sm:pl-6 md:pl-10">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />
              <h2 className="text-subheading text-foreground mb-4 font-light">
                Who we work with.
              </h2>
              <p className="text-body-lg text-muted-foreground max-w-xl leading-relaxed">
                We partner with organizations that understand the difference between building software and building systems. Our clients are CTOs, heads of engineering, and operations leaders who need infrastructure they can trust — not demos they can show.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>);
};

export default About;
