import { FloatingActions } from '@/components/floating-actions';
import { Header } from '@/components/header';
import { Benefits } from '@/components/sections/benefits';
import { Cta } from '@/components/sections/cta';
import { Curriculum } from '@/components/sections/curriculum';
import { Faq } from '@/components/sections/faq';
import { Footer } from '@/components/sections/footer';
import { Hero } from '@/components/sections/hero';
import { Pricing } from '@/components/sections/pricing';
import { Problem } from '@/components/sections/problem';
import { SocialProof } from '@/components/sections/social-proof';
import { Solution } from '@/components/sections/solution';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <Curriculum />
        <SocialProof />
        <Pricing />
        <Cta />
        <Faq />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
