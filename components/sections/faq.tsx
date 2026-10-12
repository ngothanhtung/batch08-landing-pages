import { FaqAccordion } from "@/components/faq-accordion";
import { SectionHeading } from "@/components/section-heading";
import { faqs, HOTLINE, HOTLINE_TEL } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading className="text-center" eyebrow="Hỏi đáp" before="Câu hỏi" highlight="thường gặp" />
        <FaqAccordion items={faqs} />
        <p className="mt-10 text-center text-amethyst-100/60">
          Vẫn còn thắc mắc?{" "}
          <a href={HOTLINE_TEL} className="font-semibold text-orchid-300 underline-offset-4 hover:underline">
            Gọi hotline {HOTLINE}
          </a>
        </p>
      </div>
    </section>
  );
}
