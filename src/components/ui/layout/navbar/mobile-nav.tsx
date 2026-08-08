"use client";
import { LucideSidebar } from "lucide-react";
import { startTransition, useState, useTransition } from "react";
import MenuItems from "./menuitems";
import AuthStatus from "./auth-status";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    startTransition(() => {
      setIsOpen((prev) => !prev);
    });
  };

  if (isOpen)
    return (
      <nav className="absolute md:hidden top-0 left-0 w-10/12 transition-discrete duration-500 h-svh bg-surface-container-high flex flex-col gap-4 p-8">
        <button onClick={handleClick} className="cursor-pointer group">
          <LucideSidebar
            stroke="currentColor"
            className="group-hover:stroke-surface-tint"
          />
        </button>

        <AuthStatus />
        <MenuItems />
      </nav>
    );
  else {
    return (
      <>
        <button
          onClick={handleClick}
          className="cursor-pointer group block md:hidden"
        >
          <LucideSidebar
            stroke="currentColor"
            className="group-hover:stroke-surface-tint"
          />
        </button>
      </>
    );
  }
};

export default MobileNav;
