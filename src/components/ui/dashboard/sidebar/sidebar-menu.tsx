"use client";
import { menuItems } from "@/constants/menu-items";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarMenu = () => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col gap-xs">
      {menuItems.dashboard.map((item) => (
        <Link
          key={item.href}
          className={`px-sm py-sm rounded-lg capitalize transition-transform scale-98 active:scale-95 ${pathname?.split("/")[2]?.toLowerCase() == item.label.toLowerCase() ? "bg-primary-container dark:bg-primary hover:bg-primary-container/90 text-on-primary-container dark:text-on-primary font-bold" : "hover:bg-surface"}`}
          href={`/dashboard${item.href}`}
        >
          <span className="font-label-md text-label-md">{item.label}</span>
        </Link>
      ))}
    </ul>
  );
};

export default SidebarMenu;
