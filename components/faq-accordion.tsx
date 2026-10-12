"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="mt-12 space-y-4">
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <Reveal key={item.q} delay={(i % 3) * 100} className="rounded-2xl glass">
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-white"
            >
              {item.q}
              <Plus className={`size-5 shrink-0 text-amethyst-300 transition-transform duration-300 ${open ? "rotate-45" : ""}`} />
            </button>
            <div id={panelId} role="region" className="faq-panel" data-open={open}>
              <div className="overflow-hidden">
                <p className="px-6 pb-6 leading-relaxed text-amethyst-100/70">{item.a}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
