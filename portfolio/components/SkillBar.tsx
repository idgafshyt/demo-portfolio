"use client";

import { useEffect, useRef, useState } from "react";

type SkillBarProps = {
  name: string;
  percent: number;
};

export default function SkillBar({ name, percent }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-primary">{name}</span>
        <span className="font-mono text-xs text-accent">{percent}%</span>
      </div>
      <div
        role="progressbar"
        aria-label={name}
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 w-full overflow-hidden rounded-full bg-surface-2"
      >
        <div
          className="accent-gradient h-full rounded-full transition-[width] duration-1000 ease-out"
          style={{ width: visible ? `${percent}%` : "0%" }}
        />
      </div>
    </div>
  );
}
