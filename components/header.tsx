"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { useScrolledPast } from "@/hooks/use-scrolled-past";
import { navLinks } from "@/lib/content";

export function Header() {
  const scrolled = useScrolledPast(20);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-white/5 bg-ink-950/80 backdrop-blur-xl" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo />

        <ul className="hidden items-center gap-8 text-sm font-medium text-amethyst-100/80 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#dang-ky" className="btn-primary hidden px-5! py-2.5! text-sm sm:inline-flex">
            Đăng ký tư vấn <ArrowRight className="size-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 cursor-pointer place-items-center rounded-xl glass lg:hidden"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-white/5 bg-ink-900/95 backdrop-blur-xl lg:hidden">
        <ul className="space-y-1 px-5 py-4 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 hover:bg-white/5">
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href="#dang-ky" onClick={() => setOpen(false)} className="btn-primary w-full">
              Đăng ký tư vấn miễn phí
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
