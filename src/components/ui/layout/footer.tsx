import MenuItems from "./navbar/menuitems";

const Footer = () => {
  return (
    <footer className="bg-surface dark:bg-inverse-surface border-t border-outline-variant dark:border-outline flat no shadows w-full py-xl app-padding flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      <div className="mb-4 md:mb-0">
        <span className="font-headline-sm text-headline-sm font-bold text-primary">
          Kinetic Link
        </span>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          © {new Date().getFullYear()} Kinetic Link. All rights reserved.
        </p>
      </div>
      <MenuItems />
    </footer>
  );
};

export default Footer;
