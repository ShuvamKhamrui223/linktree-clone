import { ClerkLoaded, Show } from "@clerk/nextjs";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../logo";
import MenuItems from "./menuitems";
import MobileNav from "./mobile-nav";
import AuthStatus from "./auth-status";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between app-padding py-2 drop-shadow-lg sticky top-0 left-0 z-50 bg-surface-bright">
      <Logo />
      <MenuItems />
      <div className="hidden lg:block">
        <AuthStatus />
      </div>
      <MobileNav />
    </nav>
  );
};

export default Navbar;
