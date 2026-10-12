"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  as?: "div" | "li" | "article" | "figure";
  /** Tên hiệu ứng Animate.css, ví dụ "fadeInUp" */
  animation?: string;
  /** Độ trễ (ms) để tạo hiệu ứng so le */
  delay?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Chạy hiệu ứng Animate.css khi phần tử cuộn vào màn hình.
 * Nội dung vẫn hiển thị bình thường khi chưa có JS; chỉ phần tử nằm dưới màn hình
 * mới bị ẩn tạm (sau khi hydrate) để chờ hiệu ứng.
 */
export function Reveal({ as = "div", animation = "fadeInUp", delay = 0, className, children }: RevealProps) {
  // Các thẻ cho phép đều là HTMLElement; ép về "div" để TS chấp nhận ref chung.
  const Tag = as as "div";
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.classList.add("reveal-pending");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.style.animationDelay = `${delay}ms`;
        el.classList.remove("reveal-pending");
        el.classList.add("animate__animated", `animate__${animation}`);
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
