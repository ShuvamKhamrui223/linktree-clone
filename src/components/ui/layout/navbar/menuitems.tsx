import { menuItems } from "@/constants/menu-items";
import Link from "next/link";

const MenuItems = () => {
  return (
    <ul className="flex items-center flex-col lg:flex-row gap-4">
      {menuItems.navbar.map((item) => (
        <Link href={item.href} key={item.label} className="capitalize text-sm hover:text-surface-tint">
          {item.label}
        </Link>
      ))}
    </ul>
  );
};

export default MenuItems;
