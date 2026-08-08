"use client";
import UserCard from "../../user-card";
import { startTransition, Suspense, useState } from "react";
import { SidebarIcon } from "lucide-react";
import SidebarMenu from "./sidebar-menu";

const Sidebar = () => {
  const [iOpen, setOpen] = useState(false);

  const handleClick = () => {
    startTransition(() => {
      setOpen((prev) => !prev);
    });
  };
  return (
    <nav className={`flex gap-gutter bg-surface-container col-span-1 md:col-span-2 w-0 flex-col h-svh p-md border-r border-outline-variant dark:border-outline relative`}>
      <button onClick={handleClick} className="absolute left-full bg-surface-container p-2 cursor-pointer">
        <SidebarIcon />
      </button>
      <Suspense fallback={<>loading</>}>
        <UserCard />
      </Suspense>

      <SidebarMenu />
      <div className="mt-auto pt-lg border-t border-outline-variant dark:border-outline">
        <button className="w-full bg-white border border-[#E2E8F0] text-[#6366F1] font-button text-button py-sm px-md rounded-lg hover:shadow-sm transition-all duration-200 mb-md flex justify-center items-center gap-xs">
          <span className="material-symbols-outlined text-[18px]">share</span>{" "}
          Share Profile
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
