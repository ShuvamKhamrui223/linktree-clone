const Navbar = () => {
  return (
    <nav className="hidden md:flex bg-surface-container-low dark:bg-inverse-surface fixed left-0 top-0 h-screen w-[240px] flex-col h-full p-md border-r border-outline-variant dark:border-outline z-40">
      <div className="flex items-center gap-sm mb-lg">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-surface flex-shrink-0">
          <img
            alt="User Profile"
            className="w-full h-full object-cover"
            data-alt="A professional headshot of a young creator looking confident and creative against a clean, light backdrop. The lighting is soft and flattering, emphasizing a modern aesthetic. The image is cropped in a perfect circle, serving as an avatar for a digital profile."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFuJXVs6xfZOZ_-Ow0KRZoZx5idvlZv24Lqv-VClYtaME9I0CaLZunM_PRS25b2gbGKSjR9ZfJKT3nr3nmQmBvZ6DT10tF4cLPq4HRr1tTB8D98BowtYGFNfJdHQt_6s3dJoAgSXRjKYNP2h5Q5qTldH3WsP9SBI5B9NGXKeYmmi9CAtqGvxVzTjvp8_pKk9ChC6kJMxk8t6W4WFVSUdXWDnuaVMFsyQS7AWQIKq9Oz6179lzaeWVs"
          />
        </div>
        <div>
          <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary">
            Kinetic Link
          </h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant">
            Creator Dashboard
          </p>
        </div>
      </div>
      <ul className="flex-1 space-y-xs">
        <li>
          <a
            className="flex items-center gap-sm px-sm py-sm rounded-lg bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary font-bold transition-transform scale-98 active:scale-95"
            href="#"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "FILL" }}
            >
              link
            </span>
            <span className="font-label-md text-label-md">Links</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors scale-98 active:scale-95"
            href="#"
          >
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="font-label-md text-label-md">Analytics</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors scale-98 active:scale-95"
            href="#"
          >
            <span className="material-symbols-outlined">palette</span>
            <span className="font-label-md text-label-md">Design</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors scale-98 active:scale-95"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-md text-label-md">Settings</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors scale-98 active:scale-95"
            href="#"
          >
            <span className="material-symbols-outlined">auto_awesome</span>
            <span className="font-label-md text-label-md">Upgrade</span>
          </a>
        </li>
      </ul>
      <div className="mt-auto pt-lg border-t border-outline-variant dark:border-outline">
        <button className="w-full bg-white border border-[#E2E8F0] text-[#6366F1] font-button text-button py-sm px-md rounded-lg hover:shadow-sm transition-all duration-200 mb-md flex justify-center items-center gap-xs">
          <span className="material-symbols-outlined text-[18px]">share</span>{" "}
          Share Profile
        </button>
        <ul className="space-y-xs">
          <li>
            <a
              className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors scale-98 active:scale-95"
              href="#"
            >
              <span className="material-symbols-outlined">help</span>
              <span className="font-label-md text-label-md">Help</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors scale-98 active:scale-95"
              href="#"
            >
              <span className="material-symbols-outlined">logout</span>
              <span className="font-label-md text-label-md">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
