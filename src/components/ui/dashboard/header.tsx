const DashboardHeader = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-md">
      <div>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
          Manage Links
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">
          Organize and track your content performance.
        </p>
      </div>
      <button className="bg-[#6366F1] text-white font-button text-button py-sm px-md rounded-lg flex items-center gap-sm hover:opacity-90 transition-opacity card-shadow">
        <span className="material-symbols-outlined">add</span> Add Link
      </button>
    </header>
  );
};

export default DashboardHeader;
