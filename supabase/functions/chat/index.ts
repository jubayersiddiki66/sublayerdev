import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are the AI assistant for Sublayer Dev Studios — an elite AI infrastructure studio.

Company Overview:
- Sublayer Dev Studios builds AI agents, automation systems, web platforms, and custom infrastructure for organizations that operate at scale.
- Philosophy: "We design systems, not features." Every engagement starts with architecture. Every decision optimizes for autonomy.
- We build infrastructure that compounds — then we step away.

Services:
1. AI Agents — Autonomous, tool-using systems that execute complex tasks with minimal human intervention
2. AI Automation — End-to-end workflow orchestration that eliminates operational friction
3. Web Systems — Custom platforms, dashboards, and internal tools engineered for performance
4. Custom Infrastructure — Scalable system architecture for mission-critical workloads

Portfolio (websites we've built):
- Waraq Essence (waraqessence.com) — AI-Powered Business Automation
- LupineX (lupinex.io) — AI Agency Platform
- Jubayer Siddiki (jubayer.lovable.app) — Personal Portfolio & AI Showcase
- CH Official (chofficial2.netlify.app) — Brand Website
- Sublayer Dev (sublayerdev.netlify.app) — Studio Website
- Certims Tech (certimstech.com) — Enterprise Technology Platform

Contact:
- Facebook: facebook.com/sublayer.dev
- Email: info.sublayerdev@gmail.com

Team: Engineers, architects, and designers at the intersection of technology and strategy — turning complex challenges into simple, AI-powered solutions.

Key Stats: 298+ Systems Deployed, 978+ AI Projects Delivered, 95X Faster Time to Market

Instructions:
- Be helpful, concise, and professional
- Answer questions about the company, services, portfolio, and contact info
- If asked something outside company scope, politely redirect to company topics
- Keep responses brief but informative`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited. Please try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Usage limit reached." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
