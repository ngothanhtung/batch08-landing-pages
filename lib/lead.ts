import { PLAN_NAMES } from "@/lib/content";

/** Quy tắc kiểm tra form đăng ký tư vấn – dùng chung cho trình duyệt và server. */
export const PHONE_RE = /^(0|\+84)[0-9]{9}$/;
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const UNSURE_PLAN = "Chưa chắc, cần tư vấn";
export const PLAN_OPTIONS: readonly string[] = [...PLAN_NAMES, UNSURE_PLAN];

export type Lead = { name: string; phone: string; email: string; plan: string };

/** Chuẩn hóa dữ liệu nhập; trả về lỗi (tiếng Việt) hoặc dữ liệu đã làm sạch. */
export function validateLead(input: Partial<Record<keyof Lead, unknown>>): { error: string } | { lead: Lead } {
  const name = String(input.name ?? "").trim();
  const phone = String(input.phone ?? "").replace(/\s/g, "");
  const email = String(input.email ?? "").trim().toLowerCase();
  const plan = String(input.plan ?? "");

  if (!name) return { error: "Vui lòng nhập họ và tên." };
  if (name.length > 100) return { error: "Họ và tên quá dài." };
  if (!PHONE_RE.test(phone)) return { error: "Số điện thoại chưa đúng định dạng (VD: 0901234567)." };
  if (!email) return { error: "Vui lòng nhập email." };
  if (email.length > 200 || !EMAIL_RE.test(email)) return { error: "Email chưa đúng định dạng." };
  if (!PLAN_OPTIONS.includes(plan)) return { error: "Gói quan tâm không hợp lệ." };

  return { lead: { name, phone, email, plan } };
}
