import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/images/logo-desktop.svg"}
        alt="brand logo"
        width={100}
        height={40}
        className="hidden lg:block"
      />
      <Image
        src={"/images/logo-mobile.svg"}
        alt="brand logo"
        width={30}
        height={30}
        className="block lg:hidden"
      />
    </Link>
  );
};

export default Logo;
