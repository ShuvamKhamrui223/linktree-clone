import React from "react";

const page = () => {
  return (
    <>
      <header className="flex flex-col items-center text-center mb-lg w-full">
        <div className="relative mb-md">
          <img
            alt="Alex River Avatar"
            className="w-[96px] h-[96px] rounded-full object-cover border-2 border-surface-container-lowest shadow-sm"
            data-alt="A high-quality, professional headshot of a creative individual with a warm, confident expression. The lighting is soft and flattering, highlighting modern features. The background is a subtle, out-of-focus gradient in cool indigo tones, reflecting a premium SaaS aesthetic. The image is cropped in a perfect circle with a crisp white border."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSRIVTPLOvbSrh6MHFm_q9zS29fuKWrBS7l365lnxespbKRDRkVgA4L0mkX8CfB3nI_RetuaTQuBSaeGYQmlWt5fb-jvCk3PJMRPMEqR7GIeyVb7cSLkAfseTIAfn3OTJglArE_1vapk2ki1hNadXiau1UgsXJEjWte3hqtmPIqmehRemp2F0kcy_rxDUgrYO9NRV2TpBMMzjyyQV8d0sHKQEwypOjwZVaxEvEGJykQ6HcRL1PwQpo"
          />
        </div>
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-xs">
          Alex River
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-[400px] mx-auto">
          Digital Creator &amp; Designer. Bridging the gap between code and
          pixels. Building tools for the modern web.
        </p>
        <div className="flex gap-sm mt-md">
          <span className="inline-flex items-center px-sm py-xs rounded-full bg-primary/10 text-primary font-label-md text-label-md">
            Designer
          </span>
          <span className="inline-flex items-center px-sm py-xs rounded-full bg-secondary/10 text-secondary font-label-md text-label-md">
            Developer
          </span>
        </div>
      </header>

      <section className="w-full flex flex-col gap-sm">
        {/* <!-- Link Item 1 --> */}
        <a
          className="link-card flex items-center justify-between p-md rounded-[16px] bg-surface-container-lowest border border-transparent cursor-pointer group w-full relative overflow-hidden"
          href="#"
        >
          <div className="flex items-center gap-sm z-10">
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
              palette
            </span>
            <span className="font-button text-button text-on-surface">
              My Portfolio
            </span>
          </div>
          <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors z-10">
            arrow_forward
          </span>
        </a>
        {/* <!-- Link Item 2 --> */}
        <a
          className="link-card flex items-center justify-between p-md rounded-[16px] bg-surface-container-lowest border border-transparent cursor-pointer group w-full relative overflow-hidden"
          href="#"
        >
          <div className="flex items-center gap-sm z-10">
            <span className="material-symbols-outlined text-secondary group-hover:scale-110 transition-transform">
              play_circle
            </span>
            <span className="font-button text-button text-on-surface">
              Latest YouTube Video
            </span>
          </div>
          <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors z-10">
            arrow_forward
          </span>
        </a>
        {/* <!-- Link Item 3 --> */}
        <a
          className="link-card flex items-center justify-between p-md rounded-[16px] bg-surface-container-lowest border border-transparent cursor-pointer group w-full relative overflow-hidden"
          href="#"
        >
          <div className="flex items-center gap-sm z-10">
            <span className="material-symbols-outlined text-[#1DA1F2] group-hover:scale-110 transition-transform">
              flutter_dash
            </span>
            <span className="font-button text-button text-on-surface">
              Twitter
            </span>
          </div>
          <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors z-10">
            arrow_forward
          </span>
        </a>
        {/* <!-- Link Item 4 --> */}
        <a
          className="link-card flex items-center justify-between p-md rounded-[16px] bg-surface-container-lowest border border-transparent cursor-pointer group w-full relative overflow-hidden"
          href="#"
        >
          <div className="flex items-center gap-sm z-10">
            <span className="material-symbols-outlined text-tertiary-container group-hover:scale-110 transition-transform">
              shopping_bag
            </span>
            <span className="font-button text-button text-on-surface">
              Shop My Merch
            </span>
          </div>
          <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors z-10">
            arrow_forward
          </span>
        </a>
        {/* <!-- Link Item 5 (Featured Content) --> */}
        <div className="link-card flex flex-col p-md rounded-[16px] bg-surface-container-lowest border border-transparent group w-full relative overflow-hidden mt-sm">
          <div className="w-full h-32 rounded-lg mb-sm overflow-hidden relative">
            <img
              alt="Workspace"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="A modern, minimalist workspace setup. A sleek laptop sits on a clean, light wood desk next to a minimal white coffee mug and a small potted succulent. The lighting is bright and natural, casting soft shadows. The overall aesthetic is clean, organized, and professional, perfectly matching a premium productivity SaaS visual style."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq6nxL86PGs5JjesfJdkjAkLX5sAiw9B1hIfAGIo-TU9arO1LsujieG6yRizH_YgGi8X2xvc6CVle6YEIuTWJ89PJAsdj9qGbzUaWDp4hxvFhMgFgRe9I1tQNnTjBaGxRc2V8_TYjLvfSNkjj9dLwfdVJnd0Khtksu22Ck4gEp1klIrE5Vbe-5xGI-1Pvpy8oxRjgaBTYenyMdlWi1kZwrIKiqfOmzPo5pX_vzIfrPbkzegsTZnu8V"
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col">
              <span className="font-button text-button text-on-surface">
                Mastering Design Systems
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                New Course Available Now
              </span>
            </div>
            <a
              className="px-md py-sm bg-primary text-on-primary rounded-lg font-button text-button hover:bg-primary-container transition-colors shadow-sm"
              href="#"
            >
              Enroll
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
