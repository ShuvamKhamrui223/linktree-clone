import { PlusIcon } from "lucide-react";
import Link from "next/link";

const DashboardHeader = () => {
  return (
    <header className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-md">
      <div>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
          Manage Links
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">
          Organize and track your content performance.
        </p>
      </div>
      <Link href={"/dashboard/add-link"} className="bg-surface-tint text-surface font-button text-button py-sm px-md rounded-lg flex items-center gap-sm hover:opacity-90 transition-opacity card-shadow cursor-pointer">
        <PlusIcon /> Add Link
      </Link>
    </header>
  );
};

export default DashboardHeader;
