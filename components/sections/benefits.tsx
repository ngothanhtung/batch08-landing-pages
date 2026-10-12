import { PhoneCall } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { benefits } from "@/lib/content";

const variants = {
  amethyst: { card: "border border-amethyst-400/20 bg-linear-to-br from-amethyst-800/40 to-ink-900", num: "text-amethyst-400/20", icon: "size-9 text-amethyst-300", title: "text-2xl" },
  orchid: { card: "border border-orchid-400/20 bg-linear-to-br from-orchid-500/20 to-ink-900", num: "text-orchid-400/20", icon: "size-9 text-orchid-300", title: "text-2xl" },
  glass: { card: "glass", num: "text-amethyst-400/20", icon: "size-8 text-amethyst-300", title: "text-xl" },
};

export function Benefits() {
  return (
    <section id="loi-ich" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Bạn nhận được gì" before="Những thay đổi" highlight="rõ ràng" after="sau khóa học" />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {benefits.map(({ icon: Icon, title, text, variant, span }, i) => {
            const v = variants[variant];
            return (
              <Reveal as="article" key={title} delay={(i % 3) * 100} className={`relative overflow-hidden rounded-3xl p-8 ${v.card} ${span}`}>
                <span className={`font-display text-6xl font-semibold ${v.num}`}>{String(i + 1).padStart(2, "0")}</span>
                <Icon className={`absolute right-8 top-8 ${v.icon}`} />
                <h3 className={`mt-2 font-semibold text-white ${v.title}`}>{title}</h3>
                <p className="mt-3 leading-relaxed text-amethyst-100/65">{text}</p>
              </Reveal>
            );
          })}
        </div>

        {/* CTA giữa trang */}
        <Reveal className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-amethyst-400/20 bg-linear-to-r from-amethyst-900/60 via-ink-800 to-orchid-500/20 p-8 text-center md:flex-row md:text-left lg:p-10">
          <div>
            <p className="font-display text-2xl font-semibold text-white">Chưa chắc khóa học có phù hợp với bạn?</p>
            <p className="mt-2 text-amethyst-100/70">Nhận buổi tư vấn 1:1 miễn phí và đánh giá năng lực đầu vào trong 15 phút.</p>
          </div>
          <a href="#dang-ky" className="btn-primary shrink-0">
            <PhoneCall className="size-5" /> Nhận tư vấn miễn phí
          </a>
        </Reveal>
      </div>
    </section>
  );
}
