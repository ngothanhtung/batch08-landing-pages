"use client";

import { useEffect, useState, type FormEvent } from "react";
import { LoaderCircle, Lock, Send } from "lucide-react";
import { notifyNewLead } from "@/app/actions/notify-lead";
import type { PlanName } from "@/lib/content";
import { createCustomer } from "@/lib/firebase";
import { PLAN_OPTIONS, validateLead } from "@/lib/lead";
import { SELECT_PLAN_EVENT } from "@/components/plan-button";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-amethyst-100/30 focus:border-amethyst-400 focus:outline-none focus:ring-2 focus:ring-amethyst-500/30";

export function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState<string>("Chuyên nghiệp");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const onSelect = (e: Event) => setPlan((e as CustomEvent<PlanName>).detail);
    window.addEventListener(SELECT_PLAN_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_PLAN_EVENT, onSelect);
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSuccess("");
    const result = validateLead({ name, phone, email, plan });
    if ("error" in result) return setError(result.error);
    const { lead } = result;

    setError("");
    setSubmitting(true);
    try {
      await createCustomer(lead);
      // Báo Telegram chạy nền: lỗi gửi tin không ảnh hưởng tới khách
      notifyNewLead(lead).catch((err) => console.error("Không gửi được thông báo Telegram:", err));
      setSuccess(`Cảm ơn ${lead.name}! Chuyên viên AURA sẽ liên hệ với bạn qua số ${lead.phone} trong vòng 30 phút.`);
      setName("");
      setPhone("");
      setEmail("");
    } catch (err) {
      console.error("Không lưu được đăng ký tư vấn:", err);
      setError("Đã có lỗi khi gửi thông tin. Vui lòng thử lại hoặc gọi hotline 1900 6868.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-white/10 bg-ink-950/70 p-7 backdrop-blur-xl sm:p-9">
      <p className="text-xl font-semibold text-white">Đăng ký tư vấn miễn phí</p>
      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm text-amethyst-100/70">Họ và tên *</span>
          <input name="name" required autoComplete="name" placeholder="Nguyễn Thị Hoa" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
        </label>
        <label className="block">
          <span className="text-sm text-amethyst-100/70">Số điện thoại *</span>
          <input name="phone" type="tel" required autoComplete="tel" placeholder="0901 234 567" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
        </label>
        <label className="block">
          <span className="text-sm text-amethyst-100/70">Email *</span>
          <input name="email" type="email" required autoComplete="email" placeholder="hoa@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
        </label>
        <label className="block">
          <span className="text-sm text-amethyst-100/70">Gói quan tâm</span>
          <select name="plan" value={plan} onChange={(e) => setPlan(e.target.value)} className={`${inputClass} bg-ink-900`}>
            {PLAN_OPTIONS.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
      </div>
      {error && (
        <p role="alert" className="mt-4 text-sm text-red-300">
          {error}
        </p>
      )}
      <button type="submit" disabled={submitting} className="btn-primary mt-6 w-full text-base disabled:cursor-wait disabled:opacity-70">
        {submitting ? (
          <>
            <LoaderCircle className="size-5 animate-spin" /> Đang gửi…
          </>
        ) : (
          <>
            <Send className="size-5" /> Giữ chỗ ngay
          </>
        )}
      </button>
      <p className="mt-4 flex items-center justify-center gap-2 text-xs text-amethyst-100/50">
        <Lock className="size-3.5" /> Thông tin của bạn được bảo mật tuyệt đối
      </p>
      {success && (
        <div role="status" className="mt-4 rounded-xl border border-emerald-300/30 bg-emerald-400/10 p-4 text-sm text-emerald-200">
          {success}
        </div>
      )}
    </form>
  );
}
