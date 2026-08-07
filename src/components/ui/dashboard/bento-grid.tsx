const BentoGrid = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-md">
      {/* <!-- Left Column: Link List (Takes up 2 columns on XL screens) --> */}
      <div className="xl:col-span-2 space-y-sm">
        {/* <!-- Link Card 1 --> */}
        <div className="bg-white rounded-[16px] p-md card-shadow card-hover transition-all duration-200 border border-transparent hover:border-[#6366F1] flex flex-col sm:flex-row gap-md items-start sm:items-center group relative overflow-hidden">
          <div className="flex-1 min-w-0 w-full">
            <div className="flex items-center justify-between mb-xs">
              <h3 className="font-headline-md text-body-lg font-semibold text-on-surface truncate pr-4">
                My Latest Portfolio Work
              </h3>
              {/* <!-- Toggle Switch (Mobile view inline) --> */}
              <div className="sm:hidden relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                  checked
                  className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-outline-variant checked:border-[#6366F1]"
                  id="toggle1-mob"
                  name="toggle"
                  type="checkbox"
                />
                <label
                  className="toggle-label block overflow-hidden h-5 rounded-full bg-outline-variant cursor-pointer"
                  htmlFor="toggle1-mob"
                ></label>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
              https://myportfolio.com/latest
            </p>
            <div className="flex items-center gap-sm mt-sm">
              <span className="inline-flex items-center gap-xs px-2 py-1 rounded-full bg-primary-container/10 text-[#6366F1] font-label-md text-[12px]">
                <span className="material-symbols-outlined text-[14px]">
                  bar_chart
                </span>
                1.2k clicks
              </span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-md ml-auto">
            {/* <!-- Toggle Switch --> */}
            <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
              <input
                checked
                className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-outline-variant checked:border-[#6366F1]"
                id="toggle1"
                name="toggle"
                type="checkbox"
              />
              <label
                className="toggle-label block overflow-hidden h-5 rounded-full bg-outline-variant cursor-pointer"
                htmlFor="toggle1"
              ></label>
            </div>
            <button
              aria-label="Edit Link"
              className="text-on-surface-variant hover:text-[#6366F1] transition-colors p-2"
            >
              <span className="material-symbols-outlined">edit</span>
            </button>
            <button
              aria-label="Delete Link"
              className="text-on-surface-variant hover:text-error transition-colors p-2"
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        </div>
        {/* <!-- Link Card 2 --> */}
        <div className="bg-white rounded-[16px] p-md card-shadow card-hover transition-all duration-200 border border-transparent hover:border-[#6366F1] flex flex-col sm:flex-row gap-md items-start sm:items-center group relative overflow-hidden">
          <div className="flex-1 min-w-0 w-full">
            <div className="flex items-center justify-between mb-xs">
              <h3 className="font-headline-md text-body-lg font-semibold text-on-surface truncate pr-4">
                Subscribe to Newsletter
              </h3>
              {/* <!-- Toggle Switch (Mobile view inline) --> */}
              <div className="sm:hidden relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                  checked
                  className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-outline-variant checked:border-[#6366F1]"
                  id="toggle2-mob"
                  name="toggle"
                  type="checkbox"
                />
                <label
                  className="toggle-label block overflow-hidden h-5 rounded-full bg-outline-variant cursor-pointer"
                  htmlFor="toggle2-mob"
                ></label>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
              https://newsletter.kineticlink.com
            </p>
            <div className="flex items-center gap-sm mt-sm">
              <span className="inline-flex items-center gap-xs px-2 py-1 rounded-full bg-primary-container/10 text-[#6366F1] font-label-md text-[12px]">
                <span className="material-symbols-outlined text-[14px]">
                  bar_chart
                </span>
                850 clicks
              </span>
              <span className="inline-flex items-center gap-xs px-2 py-1 rounded-full bg-secondary-container/10 text-secondary-container font-label-md text-[12px]">
                Highlight
              </span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-md ml-auto">
            {/* <!-- Toggle Switch --> */}
            <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
              <input
                checked
                className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-outline-variant checked:border-[#6366F1]"
                id="toggle2"
                name="toggle"
                type="checkbox"
              />
              <label
                className="toggle-label block overflow-hidden h-5 rounded-full bg-outline-variant cursor-pointer"
                htmlFor="toggle2"
              ></label>
            </div>
            <button
              aria-label="Edit Link"
              className="text-on-surface-variant hover:text-[#6366F1] transition-colors p-2"
            >
              <span className="material-symbols-outlined">edit</span>
            </button>
            <button
              aria-label="Delete Link"
              className="text-on-surface-variant hover:text-error transition-colors p-2"
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        </div>
        {/* <!-- Link Card 3 (Inactive) --> */}
        <div className="bg-white/60 rounded-[16px] p-md card-shadow border border-outline-variant/30 flex flex-col sm:flex-row gap-md items-start sm:items-center group relative overflow-hidden opacity-75">
          <div className="flex-1 min-w-0 w-full">
            <div className="flex items-center justify-between mb-xs">
              <h3 className="font-headline-md text-body-lg font-semibold text-on-surface truncate pr-4 line-through text-on-surface-variant">
                Old Campaign Link
              </h3>
              {/* <!-- Toggle Switch (Mobile view inline) --> */}
              <div className="sm:hidden relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                  className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-outline-variant checked:border-[#6366F1]"
                  id="toggle3-mob"
                  name="toggle"
                  type="checkbox"
                />
                <label
                  className="toggle-label block overflow-hidden h-5 rounded-full bg-outline-variant cursor-pointer"
                  htmlFor="toggle3-mob"
                ></label>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
              https://promo.xyz/expired
            </p>
            <div className="flex items-center gap-sm mt-sm">
              <span className="inline-flex items-center gap-xs px-2 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label-md text-[12px]">
                <span className="material-symbols-outlined text-[14px]">
                  visibility_off
                </span>
                Hidden
              </span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-md ml-auto">
            {/* <!-- Toggle Switch --> */}
            <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
              <input
                className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-outline-variant checked:border-[#6366F1]"
                id="toggle3"
                name="toggle"
                type="checkbox"
              />
              <label
                className="toggle-label block overflow-hidden h-5 rounded-full bg-outline-variant cursor-pointer"
                htmlFor="toggle3"
              ></label>
            </div>
            <button
              aria-label="Edit Link"
              className="text-on-surface-variant hover:text-[#6366F1] transition-colors p-2"
            >
              <span className="material-symbols-outlined">edit</span>
            </button>
            <button
              aria-label="Delete Link"
              className="text-on-surface-variant hover:text-error transition-colors p-2"
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Right Column: Quick Stats --> */}
      <aside className="xl:col-span-1 space-y-md">
        <div className="bg-white rounded p-md card-shadow border border-[#E2E8F0]">
          <div className="flex items-center justify-between mb-md border-b border-outline-variant/30 pb-sm">
            <h3 className="font-headline-md text-body-lg font-semibold text-on-surface flex items-center gap-xs">
              <span className="material-symbols-outlined text-[#6366F1]">
                trending_up
              </span>
              Quick Stats
            </h3>
            <span className="font-label-md text-label-md text-on-surface-variant">
              Last 7 Days
            </span>
          </div>
          <div className="grid grid-cols-2 gap-sm mb-md">
            <div className="bg-surface-container-low p-sm rounded-lg flex flex-col justify-center items-center text-center">
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">
                Total Views
              </p>
              <p className="font-display text-[32px] font-bold text-on-surface leading-none">
                12.4k
              </p>
              <span className="text-green-600 font-label-md text-[12px] flex items-center gap-0.5 mt-1">
                <span className="material-symbols-outlined text-[14px]">
                  arrow_upward
                </span>
                +15%
              </span>
            </div>
            <div className="bg-surface-container-low p-sm rounded-lg flex flex-col justify-center items-center text-center">
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">
                Total Clicks
              </p>
              <p className="font-display text-[32px] font-bold text-on-surface leading-none">
                3.1k
              </p>
              <span className="text-green-600 font-label-md text-[12px] flex items-center gap-0.5 mt-1">
                <span className="material-symbols-outlined text-[14px]">
                  arrow_upward
                </span>
                +8%
              </span>
            </div>
          </div>
          <a
            className="text-[#6366F1] font-label-md text-label-md flex items-center justify-center gap-xs w-full py-2 hover:bg-primary-container/10 rounded-lg transition-colors"
            href="#"
          >
            View Detailed Analytics{" "}
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </a>
        </div>
        {/* <!-- Promotional/Support Card --> */}
        <div className="bg-linear-to-br from-tertiary-container/20 to-primary-container/10 rounded p-md border border-tertiary-container/30 relative overflow-hidden">
          <div className="absolute -right-4 -top-4 opacity-20">
            <span className="material-symbols-outlined text-[100px] text-tertiary-container">
              auto_awesome
            </span>
          </div>
          <div className="relative z-10">
            <h4 className="font-headline-md text-body-lg font-semibold text-on-surface mb-2">
              Upgrade to Pro
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 max-w-50">
              Unlock custom domains, advanced analytics, and premium themes.
            </p>
            <button className="bg-tertiary text-on-tertiary font-button text-button py-2 px-4 rounded-lg w-fit hover:opacity-90 transition-opacity text-sm">
              See Plans
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BentoGrid;
