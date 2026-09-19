"use client";

import { useEffect, useRef, useState } from "react";
import type { Stat } from "@/lib/data";

export default function StatCounter({ label, value, suffix = "" }: Stat) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (prefersReducedMotion) {
          setCount(value);
          return;
        }

        const duration = 1200;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * value));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref}>
      <p className="font-display text-3xl font-semibold text-primary sm:text-4xl">
        {count}
        <span className="text-accent">{suffix}</span>
      </p>
      <p className="mt-1 text-sm text-secondary">{label}</p>
    </div>
  );
}
