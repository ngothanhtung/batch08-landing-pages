import type { ReactNode } from "react";
import Image from "next/image";
import { Award, Briefcase, CirclePlay, Sparkles, Star } from "lucide-react";
import { OPENING_DATE_LABEL, unsplash } from "@/lib/content";

export function Hero() {
  return (
    <section className="grain relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="orb absolute -top-40 -left-40 size-[520px] rounded-full bg-amethyst-700" />
      <div className="orb absolute top-20 -right-32 size-[440px] rounded-full bg-orchid-500/60" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="animate__animated animate__fadeInDown inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-amethyst-200">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-orchid-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-orchid-400" />
            </span>
            Khai giảng khóa K26 – {OPENING_DATE_LABEL} · Chỉ còn 18 suất
          </span>

          <h1 className="animate__animated animate__fadeInUp mt-6 font-display text-4xl font-semibold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
            Trở thành <span className="italic text-gradient">Chuyên viên Spa &amp; Thẩm mỹ</span> được săn đón chỉ sau 12 tuần
          </h1>

          <p className="animate__animated animate__fadeInUp animate__delay-1s mt-6 max-w-xl text-lg leading-relaxed text-amethyst-100/70">
            Khóa học thực chiến 80% thời lượng trên khách thật: chăm sóc da chuyên sâu, massage trị liệu, công nghệ thẩm mỹ không
            xâm lấn và kỹ năng vận hành spa. Học xong làm được ngay – thu nhập từ 15 triệu/tháng.
          </p>

          <div className="animate__animated animate__fadeInUp animate__delay-1s mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#dang-ky" className="btn-primary text-base">
              <Sparkles className="size-5" /> Giữ chỗ với ưu đãi 30%
            </a>
            <a href="#lo-trinh" className="btn-ghost text-base">
              <CirclePlay className="size-5" /> Xem lộ trình học
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <div className="flex -space-x-3">
              {[
                ["LA", "bg-amethyst-600 text-white"],
                ["TH", "bg-orchid-500 text-white"],
                ["MN", "bg-amethyst-400 text-white"],
                ["+5k", "bg-ink-700 text-xs text-amethyst-200"],
              ].map(([label, cls]) => (
                <span key={label} className={`grid size-11 place-items-center rounded-full border-2 border-ink-950 text-sm font-semibold ${cls}`}>
                  {label}
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
                <span className="ml-1 text-sm font-semibold text-white">4.9/5</span>
              </div>
              <p className="text-sm text-amethyst-100/60">từ hơn 5.000 học viên đã tốt nghiệp</p>
            </div>
          </div>
        </div>

        <div className="animate__animated animate__fadeInRight relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-linear-to-br from-amethyst-500/40 via-transparent to-orchid-500/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src={unsplash("1761718210089-ba3bb5ccb54f", 1200)}
              alt="Chuyên viên spa đang đắp mặt nạ dưỡng da cho khách hàng"
              width={1000}
              height={1250}
              sizes="(min-width: 1024px) 50vw, 448px"
              preload
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink-950/80 via-transparent to-transparent" />
          </div>

          <FloatingBadge className="-left-4 top-10 sm:-left-10" icon={<Award className="size-5" />} iconClass="bg-amethyst-500/20 text-amethyst-300" title="Chứng chỉ nghề" text="Được công nhận toàn quốc" />
          <FloatingBadge className="-right-3 bottom-10 [animation-delay:1.5s] sm:-right-8" icon={<Briefcase className="size-5" />} iconClass="bg-orchid-500/20 text-orchid-300" title="98% có việc làm" text="ngay sau tốt nghiệp" />
        </div>
      </div>
    </section>
  );
}

function FloatingBadge({ className, icon, iconClass, title, text }: { className: string; icon: ReactNode; iconClass: string; title: string; text: string }) {
  return (
    <div className={`absolute animate-floaty rounded-2xl glass px-4 py-3 shadow-xl ${className}`}>
      <div className="flex items-center gap-3">
        <span className={`grid size-10 place-items-center rounded-xl ${iconClass}`}>{icon}</span>
        <div>
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="text-xs text-amethyst-100/60">{text}</p>
        </div>
      </div>
    </div>
  );
}
