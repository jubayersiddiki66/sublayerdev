import { ExternalLink, Check, X, MessageSquare, Instagram, Phone, Calendar, Database, Bot, Mail, Zap, Clock, ShieldCheck, Target, Rocket, Wrench, UserCheck, TrendingUp, Sparkles, Search, PhoneCall, Cog, Rocket as RocketIcon } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionBadge from "@/components/SectionBadge";
import SEOHead from "@/components/SEOHead";
import HeroCanvas from "@/components/HeroCanvas";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useBooking } from "@/components/BookingModal";
import portfolioChofficial from "@/assets/portfolio-chofficial.png";
import portfolioSublayerdev from "@/assets/portfolio-sublayerdev.png";
import portfolioWaraqessence from "@/assets/portfolio-waraqessence.png";
import portfolioLupinex from "@/assets/portfolio-lupinex.png";
import portfolioCertims from "@/assets/portfolio-certimstech.png";
import portfolioJubayer from "@/assets/portfolio-jubayer.png";
import sublayerLogo from "@/assets/sublayer-logo-new.png";

const WHATSAPP_URL = "https://wa.me/8801305273703";
const EMAIL = "info.sublayerdev@gmail.com";

const painPoints = [
  { icon: Clock, title: "Leads go cold because replies take hours", text: "By the time you get back to them, they've already booked with someone faster." },
  { icon: MessageSquare, title: "Manual DM/email replies eat your week", text: "Answering the same questions over and over is stealing hours you'll never get back." },
  { icon: Database, title: "No system tracking who you've followed up with", text: "Leads slip through the cracks. You have no idea what's in your pipeline." },
];

const flagshipTiers = [
  {
    name: "Starter",
    price: "$997",
    monthly: "+ $149/mo",
    delivery: "Delivery: 2–3 days",
    features: [
      "AI Receptionist (1 channel: WhatsApp, Instagram, or Messenger)",
      "Lead Qualification (Hot / Warm / Cold)",
      "CRM / Google Sheets Integration",
      "Basic Human Escalation",
    ],
    guarantee: "Free fix if it fails 3 real test messages in Week 1",
    highlight: false,
  },
  {
    name: "Growth",
    tag: "Most Popular",
    price: "$1,800",
    monthly: "+ $349/mo",
    delivery: "Delivery: 5–7 days",
    features: [
      "AI Receptionist (all 3 channels)",
      "AI Knowledge Agent (trained on your docs / FAQs)",
      "Lead Qualification (Hot / Warm / Cold)",
      "CRM / Google Sheets Integration",
      "Advanced Human Escalation Rules",
      "Weekly Performance Report",
    ],
    guarantee: "Free fix if it mishandles a real lead in Week 1",
    highlight: true,
  },
  {
    name: "Scale",
    price: "$2,800",
    monthly: "+ $499/mo",
    delivery: "Delivery: 7–10 days",
    features: [
      "Everything in Growth",
      "AI Email Manager (sorts, drafts, summarizes)",
      "Weekly Report + Monthly Optimization Call",
    ],
    guarantee: "Free fix if it mishandles a real lead in Week 1",
    highlight: false,
  },
];

const standaloneSolutions = [
  { name: "AI Front Desk", price: "$1,500 + $199/mo", desc: "AI receptionist for WhatsApp, Messenger & website enquiries.", icon: Bot },
  { name: "Instant Reply System", price: "$900 + $99/mo", desc: "Instantly responds to leads and captures contact information.", icon: Zap },
  { name: "Inbox Autopilot", price: "$1,200 + $149/mo", desc: "Organizes, drafts, and summarizes emails automatically.", icon: MessageSquare },
  { name: "24/7 Answer Bot", price: "$1,800 + $199/mo", desc: "AI knowledge assistant trained on your business documents.", icon: Database },
  { name: "Website Concierge", price: "$1,600 + $199/mo", desc: "Intelligent website chatbot that engages visitors and captures leads.", icon: Search },
  { name: "Follow-Up Engine", price: "$1,100 + $129/mo", desc: "Automates follow-ups and keeps warm leads moving without manual chasing.", icon: Instagram },
];

const customCapabilities = ["Custom Websites", "SaaS MVPs", "AI Voice Agents", "Business Automations", "API Integrations", "Internal Tools"];
const customHighlights = [
  { title: "Built around your workflow", text: "We map the real process first so the system feels natural, not bolted on." },
  { title: "Delivered with clarity", text: "You get a practical build plan, milestones, and a launch path that stays lean." },
  { title: "Designed to grow", text: "Every build is structured so new automations and integrations can be added later." },
];
const auditDeliverables = ["A clear breakdown of the leads you are missing", "The fastest automation opportunities to launch first", "A practical route to a live system without the fluff"];

const CALENDLY_URL = "https://cal.com/sublayer-dev-studios-my6zpa/30min?embed=true";

const differentiators = [
  { icon: Target, title: "Business Outcomes First", text: "We don't sell AI tools. We build systems that capture leads, respond faster, and cut manual work." },
  { icon: Wrench, title: "Purpose-Built Solutions", text: "Every system is tailored to your workflow, never a generic template." },
  { icon: Rocket, title: "Fast Deployment", text: "Designed, built, and launched in 2–10 days." },
  { icon: ShieldCheck, title: "Transparent & Scalable", text: "Built on reliable, flexible tech like n8n — easy to expand later." },
  { icon: UserCheck, title: "Founder-Led Delivery", text: "You work directly with the founder, start to finish. No account managers, no relay delays." },
  { icon: TrendingUp, title: "Results Over Hype", text: "If it doesn't save time, increase conversions, or earn money, we don't build it." },
];

const processSteps = [
  { id: "01", icon: Search, title: "Free AI Audit", text: "We show you exactly what the system would catch — the leads, the replies, the follow-ups you're missing today." },
  { id: "02", icon: PhoneCall, title: "Discovery Call", text: "15 minutes. Confirm scope and pricing. No pressure, no pitch deck." },
  { id: "03", icon: Cog, title: "Build", text: "Live in 2–10 days depending on tier. You approve, we ship." },
  { id: "04", icon: RocketIcon, title: "Go Live", text: "Weekly performance reports show exactly what your system is catching." },
];

const workSamples = [
  { title: "Waraq Essence", description: "AI-Powered Buiness Automation.", url: "https://waraqessence.com/", category: "BUSINESS PLATFORM", image: portfolioWaraqessence },
  { title: "LupineX", description: "AI agency platform — full stack build.", url: "https://lupinex.io/", category: "AGENCY PLATFORM", image: portfolioLupinex },
  { title: "Sublayer Dev studios", description: "Studio site — built by us, for us.", url: "https://sublayerdev.netlify.app/", category:"STUDIO WEBSITE", image: portfolioSublayerdev },
  { title: "Certims Tech", description: "Enterprise Technology Platform.", url: "https://certimstech.com", category: "Technology Company Website", image: portfolioCertims },
  { title: "Jubayer Siddiki", description: "Personal Portfolio & AI Showcase.", url: "#", category: "PORTFOLIO WEBSITE", image: portfolioJubayer },
  { title: "CH Official", description: "Brand identity & web presence.", url: "https://chofficial2.netlify.app/", category: "BRAND WEBSITE", image: portfolioChofficial },
];

const faqs = [
  { q: "How much does this cost?", a: "The flagship Never-Miss-A-Lead System starts at $997 one-time + $149/mo (Starter) and goes up to $2,800 + $499/mo (Scale). Standalone AI solutions range from $900 to $1,800. Custom builds are quoted after a discovery call." },
  { q: "How long does setup take?", a: "Starter tier goes live in 2–3 days. The Growth flagship tier ships in 5–7 days. Scale takes 7–10 days. Standalone solutions typically deploy inside a week." },
  { q: "Do I need to be technical to use this?", a: "Not at all. If you can use Instagram and Gmail, you can use this. We handle every technical piece and train you on the small parts you actually touch (usually none)." },
  { q: "What if it doesn't work for my business?", a: "Every tier ships with a Week 1 guarantee — if the system fails real test messages or mishandles a real lead, we fix it free. You don't pay for something that doesn't work." },
  { q: "Can I cancel the monthly plan anytime?", a: "Yes. Monthly maintenance is billed month-to-month. Cancel anytime with 14 days' notice. You keep the system either way — you own it." },
  { q: "What if I only need one feature, not the full system?", a: "We have 5 standalone AI solutions ranging from $900 to $1,800 — AI Front Desk, Instant Reply, Inbox Autopilot, 24/7 Answer Bot, and Website Concierge. Pick just what you need." },
];

const SEO_KEYWORDS = "AI lead capture, AI booking system, AI chatbot small business, Instagram DM automation, WhatsApp automation, AI receptionist, AI for coaches, AI for consultants, AI for service business, small business automation";

const Index = () => {
  const { open } = useBooking();
  const [leadName, setLeadName] = useState("");
  const [leadContact, setLeadContact] = useState("");

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    open();
  };

  return (
    <main>
      <SEOHead
        title="Sublayer Dev Studios — AI Lead Capture Systems for Coaches & Consultants"
        description="AI systems that instantly reply to DMs, qualify leads, and organize everything into your CRM — live in 5–7 days. For coaches, consultants, and service businesses."
        keywords={SEO_KEYWORDS}
        canonical="https://sublayerd.lovable.app/"
      />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-visible">
        <HeroCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center pt-24 pb-24 md:pb-28">
          <div className="mb-6 opacity-0 animate-fade-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Now booking free AI audits</span>
          </div>

          <h1 className="text-[clamp(2.75rem,6vw,4.4rem)] leading-[1.16] text-gradient mb-6 opacity-0 animate-fade-in mx-0" style={{ animationDelay: "0.1s" }}>
            Never Miss Another Lead —
            <br />
            <span className="text-accent">Again.</span>
          </h1>

          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            AI systems that instantly reply to your DMs, qualify leads, and organize everything into your CRM — 24/7. Live in 5–7 days.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <button onClick={open} className="group inline-flex items-center gap-2.5 bg-accent/15 hover:bg-accent/25 border border-accent/40 hover:border-accent/60 transition-all duration-300 hover:shadow-glow rounded-2xl py-2.5 px-5">
              <span className="text-[10px] tracking-[0.15em] uppercase text-foreground">🗓 Book a Free AI Audit</span>
              <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a href="#how-it-works" className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors border border-border/60 hover:border-accent/40 rounded-2xl py-2.5 px-5">
              See How It Works ↓
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
            <div className="w-px h-6 bg-gradient-to-b from-accent/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* PROBLEM / AGITATION */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 arch-grid opacity-40" />
        <div className="relative max-w-5xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <SectionBadge label="Sound Familiar?" />
            <h2 className="text-heading text-foreground mb-4 text-center">
              You're losing leads to <span className="text-accent">3 silent killers</span>.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 stagger-children">
            {painPoints.map((p) => (
              <ScrollReveal key={p.title}>
                <div className="group relative bg-gradient-card rounded-2xl border border-border hover:border-accent/30 p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow card-corner-glow h-full">
                  <div className="w-11 h-11 rounded-xl border border-destructive/30 bg-destructive/10 flex items-center justify-center text-destructive mb-4">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base text-foreground mb-2 font-light">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="text-center text-sm md:text-base text-muted-foreground mt-6">
              That's what the <span className="text-accent">Never-Miss-A-Lead System</span> fixes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FLAGSHIP OFFER */}
      <section id="services" className="relative pt-6 pb-16 md:pt-8 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 arch-grid-dense opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-[10px] tracking-[0.3em] uppercase text-accent">
                <Sparkles className="w-3 h-3" />
                Flagship Offer
                <Sparkles className="w-3 h-3" />
              </span>
            </div>
            <h2 className="text-heading text-foreground mb-4 text-center">
              The <span className="text-accent">Never-Miss-A-Lead</span> System
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-12 text-center">
              Our signature AI system that captures, replies to, qualifies, and organizes every lead across your business — 24/7.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 stagger-children items-stretch">
            {flagshipTiers.map((tier) => (
              <ScrollReveal key={tier.name}>
                <div className={`group relative bg-gradient-card rounded-2xl border ${tier.highlight ? "border-accent/60 shadow-glow md:scale-[1.03]" : "border-border hover:border-accent/30"} overflow-hidden transition-all duration-500 hover:-translate-y-1 card-corner-glow h-full flex flex-col`}>
                  {tier.highlight && <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />}
                  {tier.tag && (
                    <span className="absolute top-3 right-3 z-10 text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full bg-accent/20 border border-accent/50 text-accent">{tier.tag}</span>
                  )}
                  <div className="relative p-6 md:p-8 flex flex-col h-full">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-destructive mb-3">{tier.name}</span>
                    <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                      <span className="text-4xl font-light text-foreground">{tier.price}</span>
                      <span className="text-xs text-muted-foreground">{tier.monthly}</span>
                    </div>
                    <p className="text-[11px] text-accent/80 mb-6 tracking-wide">{tier.delivery}</p>
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {tier.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-foreground/85">
                          <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mb-6 p-3 rounded-xl border border-border/60 bg-card/30">
                      <div className="flex items-start gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <p className="text-[11px] text-muted-foreground leading-relaxed"><span className="text-foreground/90">Guarantee:</span> {tier.guarantee}</p>
                      </div>
                    </div>
                    <button onClick={open} className={`w-full text-center text-[10px] tracking-[0.2em] uppercase px-4 py-3 rounded-xl transition-all ${tier.highlight ? "bg-accent/20 hover:bg-accent/30 border border-accent/60 text-foreground hover:shadow-glow" : "border border-border hover:border-accent/40 hover:bg-accent/5 text-foreground/80 hover:text-foreground"}`}>
                      🗓 Book a Free AI Audit →
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-[11px] text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
            50% upfront, 50% on go-live. Monthly billed month-to-month. Cancel anytime with 14 days' notice.
          </p>
        </div>
      </section>

      {/* STANDALONE SOLUTIONS */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 arch-grid opacity-20" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Standalone AI Solutions</span>
              <h2 className="text-xl md:text-2xl text-foreground font-light mt-3">
                Only need <span className="text-accent">one thing?</span>
              </h2>
              <p className="text-sm text-muted-foreground max-w-lg mx-auto mt-3">
                For businesses that just need a single piece instead of the full system.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-children">
            {standaloneSolutions.map((s) => {
              const Icon = s.icon;
              return (
                <ScrollReveal key={s.name}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-gradient-card p-5 md:p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow card-corner-glow">
                    <div className="relative z-10">
                      <div className="mb-3 flex items-start justify-between gap-2">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/6 text-accent shadow-inner-dark flex-shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="rounded-full border border-border/60 bg-background/50 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.16em] text-muted-foreground flex-shrink-0">
                          {s.price}
                        </span>
                      </div>
                      <h3 className="mb-1.5 text-sm font-normal text-foreground leading-tight transition-colors duration-300 group-hover:text-accent">{s.name}</h3>
                      <p className="text-xs leading-snug text-muted-foreground mb-4">{s.desc}</p>
                      <div className="flex items-center justify-between gap-3">
                        <button onClick={open} className="inline-flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-muted-foreground transition-colors group-hover:text-accent">
                          Learn More
                          <span className="text-accent transition-transform group-hover:translate-x-0.5">→</span>
                        </button>
                        <div className="hidden md:flex items-center gap-1.5 text-[10px] text-muted-foreground">
                          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                          <span>Fast setup</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CUSTOM AI DEVELOPMENT */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 arch-grid opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[28px] border border-border/80 bg-gradient-card p-8 md:p-10 lg:p-12 card-corner-glow">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-32 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="text-center lg:text-left">
                  <SectionBadge label="Custom AI Development" />
                  <h2 className="text-heading text-foreground mb-4">
                    Need something <span className="text-accent">custom?</span>
                  </h2>
                  <p className="text-body-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                    From custom AI tools and internal business systems to SaaS MVPs, websites, and automation workflows, we design solutions around your exact requirements.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                    {customCapabilities.map((c) => (
                      <span key={c} className="rounded-full border border-border bg-card/40 px-3 py-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">{c}</span>
                    ))}
                  </div>
                  <button onClick={open} className="group mt-8 inline-flex items-center gap-2.5 rounded-2xl border border-accent/40 bg-accent/15 px-5 py-2.5 transition-all duration-300 hover:border-accent/60 hover:bg-accent/25 hover:shadow-glow">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-foreground">🗓 Book a Discovery Call</span>
                    <span className="text-accent transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>

                <div className="rounded-[24px] border border-border/70 bg-background/40 p-5 md:p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-accent" />
                    <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">What we shape</span>
                  </div>
                  <div className="space-y-3">
                    {customHighlights.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-border/60 bg-card/40 p-4">
                        <h3 className="mb-1 text-sm font-light text-foreground">{item.title}</h3>
                        <p className="text-xs leading-relaxed text-muted-foreground">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section id="about" className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 arch-grid opacity-30" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <SectionBadge label="What Makes Us Different" />
            <h2 className="text-heading text-foreground mb-4 text-center">
              Small studio. <span className="text-accent">Serious focus.</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-xl mx-auto mb-12 text-center">
              Founder-led, outcome-driven, and built for small businesses that need results — not enterprise theater.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            {differentiators.map((d) => (
              <ScrollReveal key={d.title}>
                <div className="group relative bg-gradient-card rounded-2xl border border-border hover:border-accent/30 p-6 md:p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow card-corner-glow h-full">
                  <div className="w-11 h-11 rounded-xl border border-accent/30 bg-accent/10 flex items-center justify-center text-accent mb-4">
                    <d.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base text-foreground mb-2 font-light">{d.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{d.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="relative py-16 md:py-28 overflow-hidden">
        <div className="absolute inset-0 arch-grid opacity-30" />
        <div id="process" className="absolute -top-24" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <SectionBadge label="How It Works" />
            <h2 className="text-heading text-foreground mb-4 text-center">
              From audit to <span className="text-accent">live system</span>, in 4 steps.
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-lg mx-auto mb-12 text-center">
              No jargon. No 6-month timelines. Just a clear path from problem to production.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
            {processSteps.map((step) => (
              <ScrollReveal key={step.id}>
                <div className="relative bg-gradient-card rounded-2xl border border-border hover:border-accent/30 p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow card-corner-glow h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-light text-accent/80">{step.id}</span>
                    <div className="w-10 h-10 rounded-xl border border-accent/30 bg-accent/10 flex items-center justify-center text-accent">
                      <step.icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base text-foreground mb-2 font-light">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 arch-grid opacity-30" />
        <div className="relative max-w-3xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[28px] border border-border/80 bg-gradient-card p-6 md:p-8 lg:p-10 card-corner-glow shadow-glow">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div className="text-center lg:text-left">
                  <span className="inline-block mb-4 text-[10px] uppercase tracking-[0.3em] text-accent">Free AI Audit · Worth $200</span>
                  <h2 className="text-heading text-foreground mb-3">
                    Get a free AI audit of your <span className="text-accent">DMs</span>.
                  </h2>
                  <p className="text-body-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                    See exactly what leads you're missing — no cost, no obligation. Worth $200, yours free.
                  </p>
                  <ul className="mt-6 space-y-2 text-left">
                    {auditDeliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[24px] border border-border/70 bg-background/40 p-4 md:p-5 flex items-center justify-center">
                  <form onSubmit={handleLeadSubmit} className="grid gap-3 w-full max-w-md">
                    <input
                      type="text"
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      placeholder="Your name"
                      className="bg-card/60 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent/50 transition-colors"
                    />
                    <input
                      type="text"
                      required
                      value={leadContact}
                      onChange={(e) => setLeadContact(e.target.value)}
                      placeholder="Email or Instagram handle"
                      className="bg-card/60 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent/50 transition-colors"
                    />
                    <button type="submit" className="rounded-xl border border-accent/60 bg-accent/20 px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-foreground transition-all hover:border-accent/70 hover:bg-accent/30 hover:shadow-glow">
                      Get My Free Audit →
                    </button>
                    <p className="text-xs text-muted-foreground mt-3">No spam. We’ll reply within 24 hours.</p>
                  </form>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PROOF / WORK */}
      <section id="portfolio" className="relative py-16 md:py-28 overflow-hidden">
        <div className="absolute inset-0 arch-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <SectionBadge label="Our Work" />
            <h2 className="text-heading text-foreground mb-4 text-center">
              Real client sites and <span className="text-accent">example builds</span>.
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-xl mx-auto mb-12 text-center">
              A mix of live client work and honest demo builds. We label every piece — no fake case studies, no invented numbers.
            </p>
          </ScrollReveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 items-stretch stagger-children">
            {workSamples.map((site) => (
              <ScrollReveal key={site.title}>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-gradient-card transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow card-corner-glow"
                >
                  <div className="relative overflow-hidden aspect-[16/8] lg:aspect-[16/9]">
                    <img
                      src={site.image}
                      alt={`${site.title} preview`}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <div className="absolute right-3 top-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <ExternalLink className="h-3.5 w-3.5 text-accent" />
                    </div>
                  </div>
                  <div className="flex-0 p-3 sm:p-4">
                    <span className="mb-1 block text-[9px] uppercase tracking-[0.3em] text-accent/70">{site.category}</span>
                    <h3 className="mb-0.5 text-sm font-light text-foreground transition-colors duration-300 group-hover:text-accent">{site.title}</h3>
                    <p className="text-[12px] leading-snug text-muted-foreground">{site.description}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER STRIP */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 arch-grid opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
            <div className="space-y-4">
              <ScrollReveal>
                <SectionBadge label="Founder" />
                <h2 className="text-heading text-foreground mb-4 text-center lg:text-left">
                  Built by <span className="text-accent">Jubayer</span>.
                </h2>
              </ScrollReveal>
              <ScrollReveal>
                <p className="text-body-lg text-foreground/90 leading-relaxed">
                  I'm the founder and sole builder behind Sublayer Dev Studios — a focused, one-person AI systems studio.
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <p className="text-body-lg text-muted-foreground leading-relaxed">
                  Every project gets my direct attention. No account managers, no offshore teams, no template shop. You get the person building it — on the audit call, during the build, and after go-live.
                </p>                <p className="text-body-lg text-muted-foreground leading-relaxed">
                  My focus isn't on taking on as many clients as possible—it's on building systems that solve real problems, save time, and create lasting value for every business I work with.
                </p>
              </ScrollReveal>
            </div>
            <div className="hidden lg:block">
              <ScrollReveal>
                <div className="relative">
                  <div className="absolute -inset-6 bg-accent/5 rounded-full blur-3xl" />
                  <img src={sublayerLogo} alt="Sublayer Dev Studios logo" className="relative w-32 md:w-48 lg:w-56 opacity-80 rounded-xl" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-16 md:py-28">
        <div className="absolute inset-0 arch-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
        <div className="relative max-w-2xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <SectionBadge label="FAQ" />
            <h2 className="text-heading text-foreground mb-12 text-center">Questions, <span className="text-accent">answered honestly</span>.</h2>
          </ScrollReveal>
          <ScrollReveal>
            <Accordion type="single" collapsible className="space-y-0">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border/50 group">
                  <AccordionTrigger className="text-left text-sm text-foreground py-5 hover:no-underline hover:text-accent transition-colors [&[data-state=open]]:text-accent">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="relative py-16 md:py-28">
        <div className="absolute inset-0 arch-grid opacity-30" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[28px] border border-accent/40 bg-gradient-card p-6 md:p-8 lg:p-10 card-corner-glow shadow-glow">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div className="text-center lg:text-left">
                  <SectionBadge label="Free AI Audit" />
                  <h2 className="text-heading text-foreground mb-3">
                    Stop losing leads to <span className="text-accent">slow replies</span>.
                  </h2>
                  <p className="text-body-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                    Book a free AI audit and see exactly what you're missing.
                  </p>
                  <button onClick={open} className="group inline-flex items-center gap-2.5 rounded-2xl border border-accent/50 bg-accent/20 px-5 py-2.5 transition-all duration-300 hover:border-accent/70 hover:bg-accent/30 hover:shadow-glow">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-foreground">🗓 Book a Free AI Audit</span>
                    <span className="text-accent transition-transform group-hover:translate-x-1">→</span>
                  </button>

                          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-3xl border border-border/60 bg-background/40 p-4 lg:p-5">
                      <div className="flex items-start gap-3">
                        <Mail className="mt-1 h-4 w-4 text-accent" />
                        <div className="space-y-2">
                          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Email</p>
                          <a href={`mailto:${EMAIL}`} className="block text-sm font-normal text-foreground transition-colors hover:text-accent break-all">{EMAIL}</a>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-3xl border border-border/60 bg-background/40 p-4 lg:p-5">
                      <div className="flex items-start gap-3">
                        <MessageSquare className="mt-1 h-4 w-4 text-accent" />
                        <div className="space-y-2">
                          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">WhatsApp</p>
                          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block text-sm font-normal text-foreground transition-colors hover:text-accent">+880 1305 273 703</a>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-3xl border border-border/60 bg-background/40 p-4 lg:p-5">
                      <div className="flex items-start gap-3">
                        <Clock className="mt-1 h-4 w-4 text-accent" />
                        <div className="space-y-2">
                          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Business Hours</p>
                          <p className="text-sm font-normal text-foreground">Mon–Fri · 8am–10pm</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-3xl border border-border/60 bg-background/40 p-4 lg:p-5">
                      <div className="flex items-start gap-3">
                        <Calendar className="mt-1 h-4 w-4 text-accent" />
                        <div className="space-y-2">
                          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Remote Worldwide</p>
                          <p className="text-sm font-normal text-foreground">Available to clients anywhere.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-border/70 bg-background/40 p-2 sm:p-3">
                  <div className="overflow-hidden rounded-[20px] border border-border/60 bg-card/40">
                    <iframe
                      src={CALENDLY_URL}
                      title="Book a free AI audit with Sublayer Dev Studios"
                      className="min-h-[560px] w-full border-0"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
