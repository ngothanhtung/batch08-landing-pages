import Image from "next/image";
import { Star } from "lucide-react";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { gallery, partners, stats, testimonials, unsplash } from "@/lib/content";

export function SocialProof() {
  return (
    <section id="danh-gia" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Thống kê */}
        <Reveal className="grid grid-cols-2 gap-6 rounded-[2rem] glass p-8 lg:grid-cols-4 lg:p-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-semibold text-gradient lg:text-5xl">
                <CountUp value={stat.value} />
                {stat.suffix}
              </p>
              <p className="mt-2 text-sm text-amethyst-100/60">{stat.label}</p>
            </div>
          ))}
        </Reveal>

        <SectionHeading className="mx-auto mt-24 max-w-2xl text-center" eyebrow="Học viên nói gì" before="Những câu chuyện" highlight="thay đổi sự nghiệp" />

        {/* Testimonials */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              as="figure"
              key={t.name}
              delay={i * 100}
              className={`flex flex-col rounded-3xl p-7 ${
                t.featured
                  ? "border border-amethyst-400/30 bg-linear-to-b from-amethyst-800/40 to-ink-900 lg:-translate-y-4"
                  : "glass"
              } ${i === testimonials.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="flex gap-1 text-amber-300" aria-label="5 sao">
                {Array.from({ length: 5 }, (_, k) => (
                  <Star key={k} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 leading-relaxed text-amethyst-100/80">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <span className={`grid size-12 place-items-center rounded-full bg-linear-to-br font-semibold text-white ${t.gradient}`}>{t.initials}</span>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-amethyst-100/50">{t.role}</p>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>

        {/* Logos đối tác */}
        <Reveal animation="fadeIn" className="mt-20">
          <p className="text-center text-sm uppercase tracking-[0.25em] text-amethyst-100/40">Đối tác tuyển dụng &amp; đồng hành</p>
          <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-16 font-display text-2xl text-amethyst-100/40">
              {[...partners, ...partners].map(({ icon: Icon, name }, i) => (
                <span key={i} className="flex items-center gap-2" aria-hidden={i >= partners.length || undefined}>
                  <Icon className="size-6" /> {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Gallery */}
        <Reveal className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((img, i) => (
            <Image
              key={img.id}
              src={unsplash(img.id, 700)}
              alt={img.alt}
              width={450}
              height={600}
              sizes="(min-width: 768px) 25vw, 50vw"
              className={`aspect-[3/4] w-full rounded-3xl border border-white/10 object-cover transition duration-500 hover:scale-[1.02] ${i % 2 ? "md:mt-10" : ""}`}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
