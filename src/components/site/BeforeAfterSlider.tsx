import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  /** Auto-demo: slowly slide back and forth on mount until user interacts. */
  autoplay?: boolean;
  className?: string;
};

/**
 * Interactive before/after image comparison slider.
 * - Drag the handle (mouse + touch)
 * - Click anywhere on the image to jump
 * - Optional gentle autoplay on first view to hint at interactivity
 */
export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt,
  autoplay = true,
  className,
}: Props) {
  const [pos, setPos] = useState(50); // % from left where divider sits
  const [interacted, setInteracted] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  // Gentle autoplay until user touches it
  useEffect(() => {
    if (!autoplay || interacted) return;
    let raf = 0;
    let t = 0;
    const loop = () => {
      t += 0.012;
      // ease in/out between 30 and 70
      const v = 50 + Math.sin(t) * 22;
      setPos(v);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [autoplay, interacted]);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    setInteracted(true);
    draggingRef.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    draggingRef.current = false;
  };

  return (
    <div
      ref={wrapRef}
      className={`relative aspect-[3/2] w-full select-none overflow-hidden rounded-2xl bg-muted ${className ?? ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="img"
      aria-label={alt}
    >
      {/* AFTER (full image, base layer) */}
      <img
        src={afterSrc}
        alt={`${alt} — after`}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        draggable={false}
      />
      {/* BEFORE (clipped overlay) */}
      <div
        className="pointer-events-none absolute inset-0 h-full overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={beforeSrc}
          alt={`${alt} — before`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }}
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-navy-deep/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ivory shadow-soft">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-accent/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground shadow-soft">
        After
      </span>

      {/* Divider line + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-ivory shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
        style={{ left: `calc(${pos}% - 1px)` }}
      >
        <div className="pointer-events-auto absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-ivory text-navy-deep shadow-elegant ring-1 ring-border">
          <ChevronsLeftRight className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
