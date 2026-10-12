import { ArrowRight, Check, CircleCheck, CircleX, Flame, ShieldCheck, Timer, X } from "lucide-react";
import { Countdown } from "@/components/countdown";
import { PlanButton } from "@/components/plan-button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { comparison, DEADLINE, plans } from "@/lib/content";

function Cell({ value, aura = false }: { value: boolean | string; aura?: boolean }) {
  if (value === true) return <Check className={`size-5 ${aura ? "text-orchid-300" : "text-amethyst-300"}`} aria-label="Có" />;
  if (value === false) return <X className="size-5 text-red-300" aria-label="Không" />;
  return <>{value}</>;
}

export function Pricing() {
  return (
    <section id="hoc-phi" className="relative overflow-hidden py-24">
      <div className="orb absolute left-1/2 top-20 size-[600px] -translate-x-1/2 rounded-full bg-amethyst-800/80" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Học phí"
          before="Đầu tư một lần,"
          highlight="sinh lời cả đời"
          description="Ưu đãi giảm 30% cho học viên đăng ký trước ngày khai giảng."
        />

        <div className="mt-8 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl glass px-5 py-3">
            <Timer className="size-5 text-orchid-400" />
            <span className="text-sm text-amethyst-100/70">Ưu đãi kết thúc sau</span>
            <Countdown deadline={DEADLINE} />
          </div>
        </div>

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 100}
              className={
                plan.featured
                  ? "relative flex flex-col rounded-3xl border border-amethyst-400/50 bg-linear-to-b from-amethyst-800/60 via-ink-800 to-ink-900 p-8 shadow-2xl shadow-amethyst-900/60 lg:-my-4 lg:py-12"
                  : "flex flex-col rounded-3xl glass p-8"
              }
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-linear-to-r from-amethyst-500 to-orchid-500 px-4 py-1.5 text-xs font-semibold whitespace-nowrap text-white shadow-lg">
                  <Flame className="size-3.5" /> Được chọn nhiều nhất
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-1 text-sm text-amethyst-100/60">{plan.tagline}</p>
              <div className="mt-6">
                <p className="text-sm text-amethyst-100/40 line-through">{plan.oldPrice}</p>
                {plan.featured ? (
                  <p className="font-display text-5xl font-semibold text-gradient">
                    {plan.price}
                    <span className="text-2xl">đ</span>
                  </p>
                ) : (
                  <p className="font-display text-4xl font-semibold text-white">
                    {plan.price}
                    <span className="text-xl">đ</span>
                  </p>
                )}
                <p className="mt-1 text-xs text-amethyst-300">Trả góp 0% chỉ từ {plan.installment}/tháng</p>
              </div>
              <ul className={`mt-8 flex-1 space-y-3.5 text-sm ${plan.featured ? "text-amethyst-100/85" : "text-amethyst-100/75"}`}>
                {plan.items.map((item) => (
                  <li key={item.text} className={`flex gap-3 ${item.included ? "" : "text-amethyst-100/30"}`}>
                    {item.included ? (
                      <CircleCheck className={`size-5 shrink-0 ${plan.featured ? "text-orchid-400" : "text-amethyst-300"}`} />
                    ) : (
                      <CircleX className="size-5 shrink-0" />
                    )}
                    {item.text}
                  </li>
                ))}
              </ul>
              <PlanButton plan={plan.name} className={`${plan.featured ? "btn-primary" : "btn-ghost"} mt-8 w-full`}>
                Chọn gói {plan.name} {plan.featured && <ArrowRight className="size-4" />}
              </PlanButton>
            </Reveal>
          ))}
        </div>

        {/* So sánh giá trị */}
        <Reveal className="mt-20">
          <h3 className="text-center font-display text-2xl font-semibold text-white sm:text-3xl">So sánh giá trị bạn nhận được</h3>
          <div className="mt-8 overflow-x-auto rounded-3xl glass">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-amethyst-100/60">
                  <th className="px-6 py-5 font-medium">Tiêu chí</th>
                  <th className="px-6 py-5 font-medium">Tự học online</th>
                  <th className="px-6 py-5 font-medium">Trung tâm thông thường</th>
                  <th className="bg-amethyst-500/10 px-6 py-5 font-semibold text-white">AURA Academy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-amethyst-100/75">
                {comparison.map((row, i) => (
                  <tr key={row.label}>
                    <td className="px-6 py-4 font-medium text-white">{row.label}</td>
                    <td className="px-6 py-4">
                      <Cell value={row.online} />
                    </td>
                    <td className="px-6 py-4">
                      <Cell value={row.center} />
                    </td>
                    <td className={`bg-amethyst-500/10 px-6 py-4 font-semibold ${i === comparison.length - 1 ? "text-white" : "text-orchid-300"}`}>
                      <Cell value={row.aura} aura />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Cam kết */}
        <Reveal
          animation="zoomIn"
          className="mx-auto mt-14 flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-emerald-300/20 bg-emerald-400/5 p-8 text-center md:flex-row md:text-left"
        >
          <span className="grid size-20 shrink-0 place-items-center rounded-full border border-emerald-300/30 bg-emerald-400/10 text-emerald-300">
            <ShieldCheck className="size-10" />
          </span>
          <div>
            <h4 className="text-xl font-semibold text-white">Cam kết hoàn tiền 100% trong 7 ngày đầu</h4>
            <p className="mt-2 leading-relaxed text-amethyst-100/70">
              Nếu sau 7 ngày học bạn cảm thấy khóa học không phù hợp, AURA hoàn lại toàn bộ học phí, không cần lý do. Bạn hoàn toàn
              yên tâm khi đầu tư cho bản thân.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
