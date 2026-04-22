import { useCallback, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  className?: string;
};

/**
 * Interactive before/after image comparison slider.
 * - Starts centered, stays put until the user moves it
 * - Drag the handle (mouse + touch) or click anywhere to jump
 * - "Before" / "After" labels live ABOVE the image so the slider can't hide them
 */
export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt,
  className,
}: Props) {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
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
    <div className={className}>
      {/* Labels ABOVE the image — never obscured by the slider */}
      <div className="flex items-center justify-between px-1 pb-2 text-[11px] font-semibold uppercase tracking-wider">
        <span className="rounded-full bg-navy-deep/10 px-2.5 py-1 text-navy-deep">
          Before
        </span>
        <span className="rounded-full bg-accent/15 px-2.5 py-1 text-accent">
          After
        </span>
      </div>

      <div
        ref={wrapRef}
        className="relative aspect-[3/2] w-full select-none overflow-hidden rounded-2xl bg-muted"
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
            style={{ width: `${(100 / Math.max(pos, 0.01)) * 100}%`, maxWidth: "none" }}
            loading="lazy"
            draggable={false}
          />
        </div>

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
    </div>
  );
}
