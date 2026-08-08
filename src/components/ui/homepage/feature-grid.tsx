import { landingPageSections } from "@/constants/sections";

const FeatureGrid = () => {
  return (
    <>
      <section
        className="px-margin-mobile md:px-margin-desktop py-24 max-w-container-max mx-auto app-padding"
        id="features"
      >
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface mb-4">
            {landingPageSections.featureGrid.title}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {landingPageSections.featureGrid.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Card 1 --> */}
          {landingPageSections.featureGrid.features.map((item) => (
            <div
              className="bg-surface-container-high border border-outline-variant/20 p-6 rounded-xl hover:border-primary/50 transition-colors group"
              key={item.title}
            >
              {/* <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </span> */}
              <h3 className="font-headline-md text-body-lg font-semibold text-on-surface mb-2">
                {item.title}
              </h3>
              <p className="font-body-md text-code-sm text-on-surface-variant">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeatureGrid;
