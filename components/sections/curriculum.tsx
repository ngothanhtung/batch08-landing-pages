import { Calendar, Check, Clock, FileText, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { modules } from "@/lib/content";

export function Curriculum() {
  return (
    <section id="lo-trinh" className="relative overflow-hidden py-24">
      <div className="orb absolute -right-40 top-40 size-[420px] rounded-full bg-orchid-500/40" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Lộ trình 12 tuần"
          before="Chương trình học"
          highlight="bài bản"
          after="từ A đến Z"
          description="6 học phần · 48 buổi học · 240 giờ đào tạo · Lịch linh hoạt sáng/chiều/tối"
        />

        <ol className="relative mt-16 space-y-10 before:absolute before:top-2 before:bottom-2 before:left-5 before:w-px before:bg-linear-to-b before:from-amethyst-400 before:via-orchid-400 before:to-transparent md:before:left-1/2">
          {modules.map((mod, i) => {
            const isLast = i === modules.length - 1;
            // Xen kẽ trái/phải trên desktop
            const right = i % 2 === 1;
            return (
              <Reveal as="li" key={mod.title} className="relative grid gap-6 pl-14 md:grid-cols-2 md:pl-0">
                <span
                  className={`absolute left-0 top-0 grid size-10 place-items-center rounded-full font-semibold md:left-1/2 md:-translate-x-1/2 ${
                    isLast
                      ? "border border-orchid-400/60 bg-linear-to-br from-amethyst-500 to-orchid-500 text-white"
                      : "border border-amethyst-400/50 bg-ink-900 text-amethyst-200"
                  }`}
                >
                  {isLast ? <GraduationCap className="size-5" /> : i + 1}
                </span>

                <div className={right ? "md:order-2 md:pl-14" : "md:pr-14 md:text-right"}>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                      isLast ? "bg-orchid-500/20 text-orchid-300" : "bg-amethyst-500/15 text-amethyst-200"
                    }`}
                  >
                    <Calendar className="size-3.5" /> {mod.weeks}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{mod.title}</h3>
                </div>

                <div className={`rounded-3xl glass p-6 ${right ? "md:order-1 md:mr-14" : "md:ml-14"}`}>
                  <ul className="space-y-2.5 text-amethyst-100/70">
                    {mod.lessons.map((lesson) => (
                      <li key={lesson} className="flex gap-2.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-orchid-400" /> {lesson}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 flex items-center gap-2 text-xs text-amethyst-300">
                    <Clock className="size-3.5" /> {mod.hours}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ol>

        <Reveal className="mt-14 text-center">
          <a href="#hoc-phi" className="btn-primary">
            <FileText className="size-5" /> Xem học phí &amp; ưu đãi
          </a>
        </Reveal>
      </div>
    </section>
  );
}
