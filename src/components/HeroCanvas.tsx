import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  connections: number[];
  pulse: number;
  size: number;
}

const HeroCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    let nodes: Node[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };

    const initNodes = () => {
      nodes = [];
      // Reduced node count
      const count = Math.floor((canvas.width * canvas.height) / 18000);
      
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 0.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          connections: [],
          pulse: Math.random() * Math.PI * 2,
          size: Math.random() * 1.2 + 0.8,
        });
      }

      // Pre-compute connections
      nodes.forEach((node, i) => {
        const nearby: { idx: number; dist: number }[] = [];
        nodes.forEach((other, j) => {
          if (i !== j) {
            const dx = node.x - other.x;
            const dy = node.y - other.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
              nearby.push({ idx: j, dist });
            }
          }
        });
        nearby.sort((a, b) => a.dist - b.dist);
        node.connections = nearby.slice(0, Math.floor(Math.random() * 2) + 1).map(n => n.idx);
      });
    };

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.004;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Draw architecture grid first (behind everything)
      const gridSize = 60;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.lineWidth = 0.5;

      // Vertical grid lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal grid lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Grid intersection dots
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const distToCenter = Math.sqrt(Math.pow(x - cx, 2) + Math.pow(y - cy, 2));
          const centerFade = Math.max(0, 1 - distToCenter / (canvas.width * 0.5));
          
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${0.03 + centerFade * 0.04})`;
          ctx.fill();
        }
      }

      // Update nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.012;

        const edgeMargin = 50;
        if (node.x < edgeMargin) node.vx += 0.015;
        if (node.x > canvas.width - edgeMargin) node.vx -= 0.015;
        if (node.y < edgeMargin) node.vy += 0.015;
        if (node.y > canvas.height - edgeMargin) node.vy -= 0.015;

        node.vx *= 0.995;
        node.vy *= 0.995;
      });

      // Draw connections
      nodes.forEach((node, i) => {
        node.connections.forEach((j) => {
          const other = nodes[j];
          if (!other) return;

          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist > 180) return;

          const signalPos = (Math.sin(time * 2.5 + i * 0.5) + 1) / 2;
          const signalX = node.x + dx * signalPos;
          const signalY = node.y + dy * signalPos;

          const lineAlpha = 0.06 * (1 - dist / 180) * node.z;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();

          if (dist < 120) {
            const signalAlpha = 0.3 * (1 - dist / 120);
            ctx.beginPath();
            ctx.arc(signalX, signalY, 1.2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${signalAlpha})`;
            ctx.fill();
          }
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        const distToMouse = Math.sqrt(
          Math.pow(node.x - mouse.x, 2) + Math.pow(node.y - mouse.y, 2)
        );
        const distToCenter = Math.sqrt(
          Math.pow(node.x - cx, 2) + Math.pow(node.y - cy, 2)
        );
        
        const mouseInfluence = Math.max(0, 1 - distToMouse / 180);
        const centerInfluence = Math.max(0, 1 - distToCenter / (canvas.width * 0.4));
        
        const pulseAlpha = 0.3 + Math.sin(node.pulse) * 0.15;
        const baseAlpha = (0.15 + centerInfluence * 0.2 + mouseInfluence * 0.3) * pulseAlpha * node.z;
        const size = node.size * (1 + mouseInfluence * 0.5);

        // Subtle glow
        const glowGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, size * 3
        );
        glowGradient.addColorStop(0, `rgba(255, 255, 255, ${baseAlpha * 0.25})`);
        glowGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.beginPath();
        ctx.arc(node.x, node.y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${baseAlpha})`;
        ctx.fill();
      });

      // Central subtle glow
      const gradient = ctx.createRadialGradient(
        cx, cy * 0.9, 0,
        cx, cy * 0.9, canvas.width * 0.35
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.015)");
      gradient.addColorStop(0.6, "rgba(255, 255, 255, 0.005)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default HeroCanvas;
