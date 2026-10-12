import Image from "next/image";
import { Gift } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";
import { unsplash } from "@/lib/content";

const perks = ["Giảm 30% học phí khóa K26", "Tặng buổi học thử trải nghiệm miễn phí", "Tặng bộ dụng cụ thực hành cá nhân"];

export function Cta() {
  return (
    <section id="dang-ky" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grain relative overflow-hidden rounded-[2.5rem] border border-amethyst-400/25 bg-linear-to-br from-amethyst-800 via-ink-800 to-orchid-500/40">
          <Image
            src={unsplash("1600334089648-b0d9d3028eb2", 1600)}
            alt=""
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover opacity-15 mix-blend-luminosity"
          />
          <div className="relative grid items-center gap-12 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            <Reveal animation="fadeInLeft">
              <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Sẵn sàng bắt đầu <span className="italic text-orchid-300">sự nghiệp làm đẹp</span> của bạn?
              </h2>
              <p className="mt-5 text-lg text-amethyst-100/80">
                Để lại thông tin, chuyên viên tư vấn sẽ gọi lại trong vòng 30 phút để giúp bạn chọn lộ trình phù hợp nhất.
              </p>
              <ul className="mt-8 space-y-3 text-amethyst-100/85">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <Gift className="size-5 text-orchid-300" /> {perk}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal animation="fadeInRight">
              <LeadForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
