"use client";

import { useCountUp } from "../hooks/useCountUp";

export default function StatCounter({ target, label, suffix = "", decimals = 0 }: {
  target: number;
  label: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useCountUp(target, 2000, suffix, decimals);

  return (
    <div className="stat-item">
      <span ref={ref} className="stat-number">0</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
