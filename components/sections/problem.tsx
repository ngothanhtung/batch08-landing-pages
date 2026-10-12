import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { problems } from "@/lib/content";

export function Problem() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Bạn có đang gặp phải?"
          before="Đam mê làm đẹp nhưng"
          highlight="chưa biết bắt đầu"
          after="từ đâu"
          description="Rất nhiều người yêu nghề spa dừng lại giữa chừng chỉ vì những rào cản dưới đây."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={(i % 3) * 100}
              className="rounded-3xl glass p-7 transition hover:-translate-y-1 hover:border-orchid-400/30"
            >
              <span className="grid size-14 place-items-center rounded-2xl bg-red-500/10 text-red-300">
                <Icon className="size-7" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 leading-relaxed text-amethyst-100/60">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
