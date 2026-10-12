"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const id = setInterval(callback, 1000);
  return () => clearInterval(id);
}

const nowInSeconds = () => Math.floor(Date.now() / 1000);

const pad = (n: number) => String(n).padStart(2, "0");

/** Đồng hồ đếm ngược. Thời gian chỉ được đọc trên client nên không ảnh hưởng prerender. */
export function Countdown({ deadline }: { deadline: string }) {
  const now = useSyncExternalStore(subscribe, nowInSeconds, () => null);

  const diff = now === null ? null : Math.max(0, Math.floor(new Date(deadline).getTime() / 1000) - now);
  const parts = [
    { label: "ngày", value: diff === null ? null : Math.floor(diff / 86400) },
    { label: "giờ", value: diff === null ? null : Math.floor(diff / 3600) % 24 },
    { label: "phút", value: diff === null ? null : Math.floor(diff / 60) % 60 },
    { label: "giây", value: diff === null ? null : diff % 60 },
  ];

  return (
    <div className="flex gap-2 font-semibold tabular-nums text-white">
      {parts.map((part) => (
        <span key={part.label}>
          {part.value === null ? "--" : pad(part.value)}
          <small className="ml-0.5 text-amethyst-300">{part.label}</small>
        </span>
      ))}
    </div>
  );
}
