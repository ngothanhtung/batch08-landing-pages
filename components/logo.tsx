import { Flower2 } from "lucide-react";

export function Logo({ variant = "stacked" }: { variant?: "stacked" | "inline" }) {
  return (
    <a href="#" className="flex items-center gap-2.5">
      <span className="grid size-10 place-items-center rounded-2xl bg-linear-to-br from-amethyst-500 to-orchid-500 shadow-lg shadow-amethyst-700/40">
        <Flower2 className="size-5 text-white" />
      </span>
      {variant === "stacked" ? (
        <span className="leading-tight">
          <span className="block font-display text-xl font-semibold text-white">AURA</span>
          <span className="block text-[10px] uppercase tracking-[0.3em] text-amethyst-300">Academy</span>
        </span>
      ) : (
        <span className="font-display text-xl font-semibold text-white">AURA Academy</span>
      )}
    </a>
  );
}
