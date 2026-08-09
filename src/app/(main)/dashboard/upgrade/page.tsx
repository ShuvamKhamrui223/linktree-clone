import PreLoader from "@/components/ui/layout/preloader";
import PricingHeader from "@/components/ui/pricing/header";
import { PricingTable } from "@clerk/nextjs";
import { Suspense } from "react";

const page = () => {
  return (
    <section className="app-padding">
      <PricingHeader />
      <Suspense
        fallback={
          <>
            <PreLoader />
          </>
        }
      >
        <PricingTable ctaPosition="bottom" />
      </Suspense>
      {/* <PricingCards /> */}
    </section>
  );
};

export default page;
