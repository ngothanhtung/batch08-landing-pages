import "server-only";

/** Escape ký tự đặc biệt cho parse_mode "HTML" của Telegram. */
export function escapeHtml(text: string) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function getChatIds() {
  return (process.env.TELEGRAM_CHAT_IDS ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);
}

/**
 * Gửi tin nhắn (HTML) tới mọi chat trong TELEGRAM_CHAT_IDS.
 * Không throw: lỗi gửi chỉ được ghi log để không ảnh hưởng luồng chính.
 */
export async function sendTelegramMessage(html: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatIds = getChatIds();
  if (!token || chatIds.length === 0) {
    console.warn("[telegram] Chưa cấu hình TELEGRAM_BOT_TOKEN hoặc TELEGRAM_CHAT_IDS – bỏ qua gửi tin.");
    return { sent: 0, failed: 0 };
  }

  const results = await Promise.allSettled(
    chatIds.map(async (chatId) => {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: html,
          parse_mode: "HTML",
          link_preview_options: { is_disabled: true },
        }),
        signal: AbortSignal.timeout(10_000),
      });
      const data: { ok: boolean; description?: string } = await res.json();
      // Chỉ ghi mô tả lỗi của Telegram, không bao giờ ghi URL (có chứa token)
      if (!data.ok) throw new Error(`chat ${chatId}: ${data.description ?? res.status}`);
    }),
  );

  const failed = results.filter((r): r is PromiseRejectedResult => r.status === "rejected");
  for (const f of failed) {
    console.error("[telegram] Gửi tin thất bại –", f.reason instanceof Error ? f.reason.message : "lỗi không xác định");
  }
  return { sent: results.length - failed.length, failed: failed.length };
}
