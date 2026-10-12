"use client";

import { ArrowRight, ArrowUp, Phone } from "lucide-react";
import { useScrolledPast } from "@/hooks/use-scrolled-past";
import { HOTLINE_TEL } from "@/lib/content";

/** Thanh CTA cố định trên mobile + nút lên đầu trang. */
export function FloatingActions() {
  const showCta = useScrolledPast(600);
  const showTop = useScrolledPast(800);

  return (
    <>
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-950/90 p-3 backdrop-blur-xl transition-transform duration-300 lg:hidden ${
          showCta ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex gap-3">
          <a href={HOTLINE_TEL} className="btn-ghost px-4! py-3!" aria-label="Gọi hotline">
            <Phone className="size-5" />
          </a>
          <a href="#dang-ky" className="btn-primary flex-1 py-3!">
            Đăng ký giảm 30% <ArrowRight className="size-4" />
          </a>
        </div>
      </div>

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-5 bottom-24 z-40 grid size-12 cursor-pointer place-items-center rounded-full glass text-amethyst-200 shadow-xl transition hover:text-white lg:bottom-8"
          aria-label="Lên đầu trang"
        >
          <ArrowUp className="size-5" />
        </button>
      )}
    </>
  );
}
