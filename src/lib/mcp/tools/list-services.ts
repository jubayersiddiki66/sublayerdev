import { defineTool } from "@lovable.dev/mcp-js";

const services = [
  {
    slug: "ai-agents",
    title: "AI Agents",
    description:
      "Autonomous, tool-using agents that replace repetitive human workflows and scale without headcount.",
    url: "https://sublayerd.lovable.app/services/ai-agents",
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    description:
      "End-to-end workflow automation across lead capture, ops, and invoicing to eliminate manual bottlenecks.",
    url: "https://sublayerd.lovable.app/services/ai-automation",
  },
  {
    slug: "web-systems",
    title: "Web Systems",
    description:
      "High-performance custom web platforms, funnels, and dashboards engineered to convert and scale.",
    url: "https://sublayerd.lovable.app/services/web-systems",
  },
  {
    slug: "custom-infrastructure",
    title: "Custom Infrastructure",
    description:
      "Scalable AI-ready system architecture for data pipelines, deployment, and mission-critical workloads.",
    url: "https://sublayerd.lovable.app/services/custom-infrastructure",
  },
];

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List the AI and web services offered by Sublayer Dev Studios, with slugs, descriptions, and canonical URLs.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});
