import Hero from "@/components/sections/Hero";
import BentoGrid from "@/components/sections/BentoGrid";
import SplitSection from "@/components/sections/SplitSections";
import BeliefText from "@/components/sections/BeliefText";

export default function Home() {
  return (
    <>
      <Hero />
      <SplitSection />
      <BentoGrid />
      <BeliefText />
    </>
  );
}