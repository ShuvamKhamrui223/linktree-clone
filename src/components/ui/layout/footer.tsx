
const Footer = () => {
  return (
    <footer className="bg-surface dark:bg-inverse-surface border-t border-outline-variant dark:border-outline flat no shadows w-full py-xl px-gutter flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto mt-auto">
      <div className="mb-4 md:mb-0">
        <span className="font-headline-sm text-headline-sm font-bold text-primary">
          Kinetic Link
        </span>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          © 2024 Kinetic Link. All rights reserved.
        </p>
      </div>
      <div className="flex gap-6">
        <a
          className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
          href="#"
        >
          Privacy Policy
        </a>
        <a
          className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
          href="#"
        >
          Terms of Service
        </a>
        <a
          className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
          href="#"
        >
          Cookie Policy
        </a>
      </div>
    </footer>
  );
}

export default Footer