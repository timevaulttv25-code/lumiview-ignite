import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

/**
 * Reveal — wraps children with scroll-triggered fade-up animation.
 * `delay` is in ms and applied as transition-delay for stagger.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "figure";
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  return (
    <As
      ref={ref as never}
      style={style}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`.trim()}
    >
      {children}
    </As>
  );
}
