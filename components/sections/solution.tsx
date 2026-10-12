import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { features, unsplash } from "@/lib/content";

const imgClass = "w-full rounded-3xl border border-white/10 object-cover";

export function Solution() {
  return (
    <section id="giai-phap" className="relative overflow-hidden py-24">
      <div className="orb absolute top-1/3 -left-40 size-[420px] rounded-full bg-amethyst-800" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal animation="fadeInLeft" className="relative">
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={unsplash("1570172619644-dfd03ed5d881", 900)}
              alt="Chuyên viên thực hiện liệu trình chăm sóc da mặt bằng cọ"
              width={800}
              height={500}
              sizes="(min-width: 1024px) 40vw, 90vw"
              className={`col-span-2 aspect-[16/10] ${imgClass}`}
            />
            <Image
              src={unsplash("1552693673-1bf958298935", 600)}
              alt="Kỹ thuật viên thẩm mỹ thao tác trên da mặt khách hàng"
              width={400}
              height={400}
              sizes="(min-width: 1024px) 20vw, 45vw"
              className={`aspect-square ${imgClass}`}
            />
            <Image
              src={unsplash("1540555700478-4be289fbecef", 600)}
              alt="Sản phẩm chăm sóc da, khăn và hoa tulip tại spa"
              width={400}
              height={400}
              sizes="(min-width: 1024px) 20vw, 45vw"
              className={`aspect-square ${imgClass}`}
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 w-max -translate-x-1/2 rounded-2xl border border-amethyst-400/30 bg-ink-900/95 px-6 py-4 text-center shadow-2xl backdrop-blur-xl">
            <p className="font-display text-3xl font-semibold text-gradient">80%</p>
            <p className="text-xs text-amethyst-100/70">thời lượng thực hành trên khách thật</p>
          </div>
        </Reveal>

        <Reveal animation="fadeInRight">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orchid-400">Giải pháp dành cho bạn</span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Khóa học <span className="italic text-gradient">Chuyên viên Spa &amp; Thẩm mỹ</span> toàn diện
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-amethyst-100/70">
            Chương trình 12 tuần được thiết kế bởi đội ngũ bác sĩ da liễu và chuyên gia spa hơn 15 năm kinh nghiệm. Bạn đi từ nền
            tảng da học đến kỹ thuật nâng cao, rồi bước ra kinh doanh với một hồ sơ năng lực hoàn chỉnh.
          </p>

          <ul className="mt-9 grid gap-5 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-amethyst-500/15 text-amethyst-300">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm text-amethyst-100/60">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
