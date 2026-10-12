"use server";

import { validateLead } from "@/lib/lead";
import { escapeHtml, sendTelegramMessage } from "@/lib/telegram";

const timeFormat = new Intl.DateTimeFormat("vi-VN", {
  timeZone: "Asia/Ho_Chi_Minh",
  dateStyle: "short",
  timeStyle: "short",
});

/**
 * Báo có khách đăng ký tư vấn mới vào các group Telegram.
 * Server Function là endpoint công khai, nên dữ liệu được kiểm tra lại
 * và escape HTML trước khi gửi.
 */
export async function notifyNewLead(input: { name: string; phone: string; email: string; plan: string }) {
  const result = validateLead(input);
  if ("error" in result) return { ok: false };

  const { name, phone, email, plan } = result.lead;
  const message = [
    "🔔 <b>KHÁCH ĐĂNG KÝ TƯ VẤN MỚI</b>",
    "",
    `👤 <b>Họ tên:</b> ${escapeHtml(name)}`,
    `📞 <b>SĐT:</b> <code>${escapeHtml(phone)}</code>`,
    `✉️ <b>Email:</b> ${escapeHtml(email)}`,
    `📦 <b>Gói quan tâm:</b> ${escapeHtml(plan)}`,
    `🕒 <b>Thời gian:</b> ${timeFormat.format(new Date())}`,
    "",
    "🌐 Nguồn: Landing page AURA Academy",
  ].join("\n");

  const { sent, failed } = await sendTelegramMessage(message);
  return { ok: failed === 0, sent };
}
