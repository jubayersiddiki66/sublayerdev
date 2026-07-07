import { useEffect, useRef, useCallback, useState } from "react";

interface Node {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  icon: string;
  layer: number;
}

interface Connection {
  from: number;
  to: number;
  particles: { pos: number; speed: number }[];
}

const ArchitectureCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const initNodes = useCallback((w: number, h: number) => {
    const cx = w / 2;
    const cy = h / 2;
    const mobile = w < 500;
    setIsMobile(mobile);
    
    // Responsive sizing
    const spreadX = mobile ? w * 0.35 : w * 0.38;
    const spreadY = mobile ? h * 0.28 : h * 0.32;
    const nodeW = mobile ? 60 : 90;
    const nodeH = mobile ? 32 : 42;
    const coreW = mobile ? 70 : 105;
    const coreH = mobile ? 38 : 50;

    const nodes: Node[] = [
      // Layer 0: Inputs
      { x: cx - spreadX, y: cy - spreadY, width: nodeW, height: nodeH, label: mobile ? "API" : "API", icon: "⟨⟩", layer: 0 },
      { x: cx - spreadX, y: cy, width: nodeW, height: nodeH, label: mobile ? "Hook" : "Webhook", icon: "↗", layer: 0 },
      { x: cx - spreadX, y: cy + spreadY, width: nodeW, height: nodeH, label: mobile ? "Cron" : "Schedule", icon: "◷", layer: 0 },
      
      // Layer 1: Logic
      { x: cx - spreadX * 0.33, y: cy - spreadY * 0.5, width: nodeW, height: nodeH, label: "Filter", icon: "⧫", layer: 1 },
      { x: cx - spreadX * 0.33, y: cy + spreadY * 0.5, width: nodeW, height: nodeH, label: mobile ? "Trans" : "Transform", icon: "⟳", layer: 1 },
      
      // Layer 2: Agent Core
      { x: cx, y: cy, width: coreW, height: coreH, label: mobile ? "Agent" : "AI Agent", icon: "◈", layer: 2 },
      
      // Layer 3: Orchestration
      { x: cx + spreadX * 0.33, y: cy - spreadY * 0.5, width: nodeW, height: nodeH, label: "Router", icon: "⋈", layer: 3 },
      { x: cx + spreadX * 0.33, y: cy + spreadY * 0.5, width: nodeW, height: nodeH, label: "Merge", icon: "⊕", layer: 3 },
      
      // Layer 4: Outputs
      { x: cx + spreadX, y: cy - spreadY, width: nodeW, height: nodeH, label: mobile ? "DB" : "Database", icon: "⬡", layer: 4 },
      { x: cx + spreadX, y: cy, width: nodeW, height: nodeH, label: "Email", icon: "✉", layer: 4 },
      { x: cx + spreadX, y: cy + spreadY, width: nodeW, height: nodeH, label: "Slack", icon: "#", layer: 4 },
    ];
    nodesRef.current = nodes;

    const createParticles = () => [
      { pos: Math.random(), speed: 0.003 + Math.random() * 0.002 },
      { pos: (Math.random() + 0.5) % 1, speed: 0.003 + Math.random() * 0.002 },
    ];

    connectionsRef.current = [
      { from: 0, to: 3, particles: createParticles() },
      { from: 1, to: 3, particles: createParticles() },
      { from: 1, to: 4, particles: createParticles() },
      { from: 2, to: 4, particles: createParticles() },
      { from: 3, to: 5, particles: createParticles() },
      { from: 4, to: 5, particles: createParticles() },
      { from: 5, to: 6, particles: createParticles() },
      { from: 5, to: 7, particles: createParticles() },
      { from: 6, to: 8, particles: createParticles() },
      { from: 6, to: 9, particles: createParticles() },
      { from: 7, to: 9, particles: createParticles() },
      { from: 7, to: 10, particles: createParticles() },
    ];
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
      initNodes(rect.width, rect.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    
    const handleTouch = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      if (touch) {
        mouseRef.current = { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
      }
    };
    
    canvas.addEventListener("mousemove", handleMouse);
    canvas.addEventListener("touchmove", handleTouch, { passive: true });

    const drawRoundedRect = (x: number, y: number, w: number, h: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    };

    const draw = () => {
      const rect = container.getBoundingClientRect();
      const mobile = rect.width < 500;
      ctx.clearRect(0, 0, rect.width, rect.height);

      const nodes = nodesRef.current;
      const connections = connectionsRef.current;
      const mouse = mouseRef.current;

      // Draw subtle grid
      const gridSize = mobile ? 16 : 24;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      ctx.lineWidth = 1;
      for (let x = 0; x < rect.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, rect.height);
        ctx.stroke();
      }
      for (let y = 0; y < rect.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(rect.width, y);
        ctx.stroke();
      }

      // Draw connections
      connections.forEach((conn) => {
        const from = nodes[conn.from];
        const to = nodes[conn.to];
        if (!from || !to) return;

        const fromX = from.x + from.width / 2;
        const fromY = from.y;
        const toX = to.x - to.width / 2;
        const toY = to.y;

        const midX = (fromX + toX) / 2;

        // Connection shadow
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.bezierCurveTo(midX, fromY, midX, toY, toX, toY);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
        ctx.lineWidth = mobile ? 1.5 : 2;
        ctx.stroke();

        // Main connection line
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.bezierCurveTo(midX, fromY, midX, toY, toX, toY);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = mobile ? 0.75 : 1;
        ctx.stroke();

        // Animated particles
        conn.particles.forEach((particle) => {
          particle.pos += particle.speed;
          if (particle.pos > 1) particle.pos = 0;

          const t = particle.pos;
          const t2 = t * t;
          const t3 = t2 * t;
          const mt = 1 - t;
          const mt2 = mt * mt;
          const mt3 = mt2 * mt;

          const px = mt3 * fromX + 3 * mt2 * t * midX + 3 * mt * t2 * midX + t3 * toX;
          const py = mt3 * fromY + 3 * mt2 * t * fromY + 3 * mt * t2 * toY + t3 * toY;

          // Particle glow
          const glowSize = mobile ? 5 : 8;
          const pGradient = ctx.createRadialGradient(px, py, 0, px, py, glowSize);
          pGradient.addColorStop(0, "rgba(255, 255, 255, 0.4)");
          pGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.beginPath();
          ctx.arc(px, py, glowSize, 0, Math.PI * 2);
          ctx.fillStyle = pGradient;
          ctx.fill();

          // Particle core
          ctx.beginPath();
          ctx.arc(px, py, mobile ? 1.5 : 2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
          ctx.fill();
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        const dist = Math.sqrt(
          Math.pow(mouse.x - node.x, 2) + Math.pow(mouse.y - node.y, 2)
        );
        const hover = Math.max(0, 1 - dist / 100);
        const isCore = node.layer === 2;
        const scale = 1 + hover * 0.03;

        const scaledW = node.width * scale;
        const scaledH = node.height * scale;
        const scaledLeft = node.x - scaledW / 2;
        const scaledTop = node.y - scaledH / 2;

        // Node shadow
        ctx.save();
        ctx.shadowColor = isCore ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.4)";
        ctx.shadowBlur = isCore ? (mobile ? 10 : 16) + hover * 8 : (mobile ? 6 : 10) + hover * 4;
        ctx.shadowOffsetY = mobile ? 1 : 2;

        // Node background
        const radius = mobile ? 3 : 5;
        drawRoundedRect(scaledLeft, scaledTop, scaledW, scaledH, radius);
        
        const gradient = ctx.createLinearGradient(scaledLeft, scaledTop, scaledLeft, scaledTop + scaledH);
        if (isCore) {
          gradient.addColorStop(0, "rgba(35, 45, 55, 0.95)");
          gradient.addColorStop(1, "rgba(25, 32, 42, 0.95)");
        } else {
          gradient.addColorStop(0, "rgba(28, 35, 45, 0.9)");
          gradient.addColorStop(1, "rgba(20, 26, 35, 0.9)");
        }
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();

        // Node border
        drawRoundedRect(scaledLeft, scaledTop, scaledW, scaledH, radius);
        ctx.strokeStyle = isCore 
          ? `rgba(255, 255, 255, ${0.25 + hover * 0.25})` 
          : `rgba(255, 255, 255, ${0.08 + hover * 0.12})`;
        ctx.lineWidth = isCore ? (mobile ? 1 : 1.5) : (mobile ? 0.5 : 1);
        ctx.stroke();

        // Subtle accent bar on left
        const accentW = mobile ? 1.5 : 2;
        ctx.beginPath();
        ctx.moveTo(scaledLeft + radius, scaledTop);
        ctx.lineTo(scaledLeft + accentW, scaledTop);
        ctx.lineTo(scaledLeft + accentW, scaledTop + scaledH);
        ctx.lineTo(scaledLeft + radius, scaledTop + scaledH);
        ctx.quadraticCurveTo(scaledLeft, scaledTop + scaledH, scaledLeft, scaledTop + scaledH - radius);
        ctx.lineTo(scaledLeft, scaledTop + radius);
        ctx.quadraticCurveTo(scaledLeft, scaledTop, scaledLeft + radius, scaledTop);
        ctx.closePath();
        ctx.fillStyle = isCore ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.15)";
        ctx.fill();

        // Icon
        const iconSize = isCore ? (mobile ? 10 : 14) : (mobile ? 8 : 11);
        ctx.font = `${iconSize}px system-ui, sans-serif`;
        ctx.fillStyle = isCore ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.4)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(node.icon, node.x - scaledW * 0.25, node.y);

        // Label
        const labelSize = isCore ? (mobile ? 7 : 10) : (mobile ? 6 : 9);
        ctx.font = `${labelSize}px system-ui, sans-serif`;
        ctx.fillStyle = `rgba(255, 255, 255, ${isCore ? 0.9 : 0.7 + hover * 0.2})`;
        ctx.textAlign = "left";
        ctx.fillText(node.label, node.x - scaledW * 0.1, node.y);

        // Connection dots
        const dotSize = mobile ? 1.5 : 2.5;
        ctx.beginPath();
        ctx.arc(scaledLeft, node.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
        ctx.lineWidth = mobile ? 0.5 : 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(scaledLeft + scaledW, node.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
        ctx.fill();
        ctx.stroke();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouse);
      canvas.removeEventListener("touchmove", handleTouch);
    };
  }, [initNodes]);

  return (
    <div ref={containerRef} className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-crosshair" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-2 sm:px-4 md:px-8 pb-3 md:pb-4 pointer-events-none">
        {[
          { label: "Inputs", shortLabel: "In", color: "text-cyan-500/70" },
          { label: "Logic", shortLabel: "Log", color: "text-amber-500/70" },
          { label: "Agents", shortLabel: "AI", color: "text-violet-400" },
          { label: "Orchestration", shortLabel: "Orch", color: "text-blue-400/70" },
          { label: "Outputs", shortLabel: "Out", color: "text-emerald-500/70" },
        ].map((item) => (
          <span key={item.label} className={`text-[7px] sm:text-[8px] md:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium ${item.color}`}>
            <span className="hidden sm:inline">{item.label}</span>
            <span className="sm:hidden">{item.shortLabel}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ArchitectureCanvas;
