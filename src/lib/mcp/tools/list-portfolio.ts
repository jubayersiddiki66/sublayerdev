import { defineTool } from "@lovable.dev/mcp-js";

const portfolio = [
  { name: "Waraq Essence", url: "https://waraqessence.com", category: "AI-Powered Business Automation" },
  { name: "LupineX", url: "https://lupinex.io", category: "AI Agency Platform" },
  { name: "Jubayer Siddiki", url: "https://jubayer.lovable.app", category: "Personal Portfolio & AI Showcase" },
  { name: "CH Official", url: "https://chofficial2.netlify.app", category: "Brand Website" },
  { name: "Sublayer Dev", url: "https://sublayerdev.netlify.app", category: "Studio Website" },
  { name: "Certims Tech", url: "https://certimstech.com", category: "Enterprise Technology Platform" },
];

export default defineTool({
  name: "list_portfolio",
  title: "List portfolio",
  description:
    "List Sublayer Dev Studios portfolio projects with names, categories, and live URLs.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(portfolio, null, 2) }],
    structuredContent: { portfolio },
  }),
});
