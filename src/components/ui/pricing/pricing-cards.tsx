const PricingCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      {/* <!-- Free Tier --> */}
      <div className="bg-surface-container-lowest rounded-2xl p-[24px] shadow-level-1 hover:shadow-level-2 border border-outline-variant transition-all duration-200 hover:-translate-y-[2px] hover:border-primary flex flex-col h-full">
        <div className="mb-6">
          <h2 className="font-headline-md text-headline-md text-on-background">
            Free
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
            Everything you need to get started with your personal brand.
          </p>
        </div>
        <div className="mb-6">
          <span className="font-display text-display text-on-background">
            $0
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            /month
          </span>
        </div>
        <button className="w-full bg-surface-container-lowest text-primary font-button text-button py-3 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors mb-8">
          Get Started
        </button>
        <div className="flex flex-col gap-4 flex-grow">
          <p className="font-label-md text-label-md text-on-background uppercase tracking-wider">
            Includes:
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary text-[20px]"
                data-icon="check_circle"
                data-weight="fill"
              >
                check_circle
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                1 Custom Linktree
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary text-[20px]"
                data-icon="check_circle"
                data-weight="fill"
              >
                check_circle
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Basic Analytics (7 days)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary text-[20px]"
                data-icon="check_circle"
                data-weight="fill"
              >
                check_circle
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Standard Themes
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- Pro Tier (Highlighted) --> */}
      <div className="bg-surface-container-lowest rounded-[16px] p-[24px] shadow-level-2 border-2 border-primary relative flex flex-col h-full transform md:-translate-y-4">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-label-md text-label-md px-3 py-1 rounded-full uppercase tracking-wider">
          Most Popular
        </div>
        <div className="mb-6 mt-2">
          <h2 className="font-headline-md text-headline-md text-on-background">
            Pro
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
            Advanced tools for growing creators and small businesses.
          </p>
        </div>
        <div className="mb-6">
          <span className="font-display text-display text-on-background">
            $12
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            /month
          </span>
        </div>
        <button className="w-full bg-primary text-on-primary font-button text-button py-3 rounded-lg hover:bg-primary-container transition-colors shadow-level-1 hover:shadow-level-2 mb-8">
          Choose Pro
        </button>
        <div className="flex flex-col gap-4 flex-grow">
          <p className="font-label-md text-label-md text-on-background uppercase tracking-wider">
            Everything in Free, plus:
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary text-[20px]"
                data-icon="check_circle"
                data-weight="fill"
              >
                check_circle
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                Custom Domain Support
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary text-[20px]"
                data-icon="check_circle"
                data-weight="fill"
              >
                check_circle
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Advanced Analytics (365 days)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary text-[20px]"
                data-icon="check_circle"
                data-weight="fill"
              >
                check_circle
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Custom Themes &amp; Fonts
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary text-[20px]"
                data-icon="check_circle"
                data-weight="fill"
              >
                check_circle
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Email &amp; SMS Collection
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- Premium Tier --> */}
      <div className="bg-surface-container-lowest rounded-[16px] p-[24px] shadow-level-1 hover:shadow-level-2 border border-outline-variant transition-all duration-200 hover:-translate-y-[2px] hover:border-primary flex flex-col h-full">
        <div className="mb-6">
          <h2 className="font-headline-md text-headline-md text-on-background">
            Premium
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
            For agencies, brands, and top-tier creators needing full control.
          </p>
        </div>
        <div className="mb-6">
          <span className="font-display text-display text-on-background">
            $39
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            /month
          </span>
        </div>
        <button className="w-full bg-surface-container-lowest text-primary font-button text-button py-3 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors mb-8">
          Contact Sales
        </button>
        <div className="flex flex-col gap-4 flex-grow">
          <p className="font-label-md text-label-md text-on-background uppercase tracking-wider">
            Everything in Pro, plus:
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary text-[20px]"
                data-icon="check_circle"
                data-weight="fill"
              >
                check_circle
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Multiple Profiles (up to 5)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary text-[20px]"
                data-icon="check_circle"
                data-weight="fill"
              >
                check_circle
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Team Collaboration
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary text-[20px]"
                data-icon="check_circle"
                data-weight="fill"
              >
                check_circle
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Priority 24/7 Support
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary text-[20px]"
                data-icon="check_circle"
                data-weight="fill"
              >
                check_circle
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                API Access
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
