import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { NewsletterForm } from "@/components/newsletter-form";
import { SocialIcons } from "@/components/social-icons";
import { ADDRESS, EMAIL, footerColumns, HOTLINE, HOTLINE_TEL } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-900/60 pt-20 pb-28 lg:pb-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Newsletter */}
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl glass p-8 lg:flex-row lg:items-center">
          <div>
            <p className="font-display text-2xl font-semibold text-white">Nhận bí quyết làm đẹp &amp; kinh doanh spa mỗi tuần</p>
            <p className="mt-2 text-amethyst-100/60">Hơn 20.000 người đã đăng ký bản tin của AURA.</p>
          </div>
          <NewsletterForm />
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="inline" />
            <p className="mt-5 max-w-sm leading-relaxed text-amethyst-100/60">
              Học viện đào tạo Spa &amp; Thẩm mỹ thực chiến, đồng hành cùng hơn 5.000 học viên trên hành trình chinh phục nghề làm đẹp.
            </p>
            <SocialIcons />
          </div>

          {footerColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <p className="font-semibold text-white">{col.title}</p>
              <ul className="mt-5 space-y-3 text-amethyst-100/60">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-4">
            <p className="font-semibold text-white">Liên hệ</p>
            <ul className="mt-5 space-y-4 text-amethyst-100/60">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-amethyst-300" /> {ADDRESS}
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-amethyst-300" />
                <a href={HOTLINE_TEL} className="hover:text-white">
                  {HOTLINE}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-amethyst-300" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white">
                  {EMAIL}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock3 className="mt-0.5 size-5 shrink-0 text-amethyst-300" /> Thứ 2 – Chủ nhật: 8:00 – 21:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-amethyst-100/40 md:flex-row">
          <p>© 2026 AURA Academy. Bảo lưu mọi quyền.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Chính sách bảo mật
            </a>
            <a href="#" className="hover:text-white">
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
