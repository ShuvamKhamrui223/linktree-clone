import AddLinkForm from "@/components/ui/forms/add-link-form";

const page = () => {
  return (
    <section className="app-padding flex flex-col h-dvh items-center justify-center">
      <h2 className="text-4xl first-letter:uppercase">add a new link</h2>
      <AddLinkForm />
    </section>
  );
};

export default page;
