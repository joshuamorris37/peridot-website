import Hero from "@/components/sections/Hero";
import CategoryProblem from "@/components/sections/CategoryProblem";
import ValuePrivacy from "@/components/sections/ValuePrivacy";
import Ownership from "@/components/sections/Ownership";
import Restraint from "@/components/sections/Restraint";
import HonestPredictions from "@/components/sections/HonestPredictions";
import PrivacyPlumbing from "@/components/sections/PrivacyPlumbing";
import Closer from "@/components/sections/Closer";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryProblem />
      <ValuePrivacy />
      <Ownership />
      <Restraint />
      <HonestPredictions />
      <PrivacyPlumbing />
      <Closer />
    </main>
  );
}
