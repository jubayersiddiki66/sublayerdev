import { forwardRef } from "react";
interface SectionBadgeProps {
  label: string;
}
const SectionBadge = forwardRef<HTMLDivElement, SectionBadgeProps>(({
  label
}, ref) => <div ref={ref} className="flex justify-center mb-6">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-[10px] tracking-[0.3em] uppercase text-primary">
        <span className="text-destructive">✦</span>
        {label}
        <span className="text-destructive">✦</span>
      </span>
    </div>);
SectionBadge.displayName = "SectionBadge";
export default SectionBadge;