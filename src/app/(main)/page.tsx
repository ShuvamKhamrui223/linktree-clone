import FeatureGrid from "@/components/ui/homepage/feature-grid";
import { landingPageSections } from "@/constants/sections";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center gap-8 mx-auto w-full py-20 app-padding">
        <h1 className="text-5xl lg:text-8xl max-w-[15ch] font-semibold text-center text-on-surface">
          {landingPageSections.hero.title}
        </h1>
        <p className="text-on-surface-variant text-center">
          {landingPageSections.hero.description}
        </p>
        <Link href={"/sign-up"} className="sign-up-link">
          get started free
        </Link>
      </section>
      <FeatureGrid />
    </>
  );
}
