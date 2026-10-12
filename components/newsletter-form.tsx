"use client";

import { useState, type FormEvent } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) return setStatus("error");
    // TODO: gửi email tới dịch vụ newsletter
    setStatus("ok");
    setEmail("");
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} noValidate className="flex gap-3">
        <label htmlFor="nl-email" className="sr-only">
          Email của bạn
        </label>
        <input
          id="nl-email"
          type="email"
          required
          placeholder="Email của bạn"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white placeholder:text-amethyst-100/30 focus:border-amethyst-400 focus:outline-none focus:ring-2 focus:ring-amethyst-500/30"
        />
        <button type="submit" className="btn-primary shrink-0 px-5! py-3!">
          Đăng ký
        </button>
      </form>
      <p aria-live="polite" className={`mt-3 text-sm ${status === "ok" ? "text-emerald-300" : "text-red-300"}`}>
        {status === "ok" && "Đăng ký thành công! Hãy kiểm tra hộp thư của bạn."}
        {status === "error" && "Vui lòng nhập email hợp lệ."}
      </p>
    </div>
  );
}
