import BentoGrid from "@/components/ui/dashboard/bento-grid";
import DashboardHeader from "@/components/ui/dashboard/header";

const page = () => {
  return (
    <section className="app-padding">
      <DashboardHeader />
      <BentoGrid />
    </section>
  );
};

export default page;
