import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

/** Tiêu đề section: nhãn nhỏ + H2 (phần nhấn mạnh truyền qua `highlight`). */
export function SectionHeading({
  eyebrow,
  before,
  highlight,
  after,
  description,
  className = "mx-auto max-w-2xl text-center",
}: {
  eyebrow: string;
  before?: ReactNode;
  highlight: ReactNode;
  after?: ReactNode;
  description?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orchid-400">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
        {before} <span className="italic text-gradient">{highlight}</span> {after}
      </h2>
      {description && <p className="mt-5 text-lg text-amethyst-100/60">{description}</p>}
    </Reveal>
  );
}
