import { addNewLink } from "@/actions/manage-links";
import ButtonWithSpinner from "../buttons/button-with-spinner";
import FormButtonSpinner from "../spinners/form-button-spinner";

const AddLinkForm = () => {
  return (
    <form
      action={addNewLink}
      className="max-w-2xl w-full bg-surface rounded-xl py-8 px-4 space-y-6"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="platformName"
          className="capitalize text-sm font-normal"
        >
          platform name
        </label>
        <input
          type="text"
          className="outline-1 rounded py-2 px-4 focus:outline-surface-tint/80"
          name="platformName"
          id="platformName"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="platformUrl" className="capitalize text-sm font-normal">
          URL
        </label>
        <input
          type="text"
          className="outline-1 rounded py-2 px-4 focus:outline-surface-tint/80"
          name="platformUrl"
          id="platformUrl"
        />
      </div>
      <div className="flex items-center">
        <input type="checkbox" name="isActive" id="isActive" className="mr-2" />
        <label htmlFor="isActive" className="capitalize text-sm font-normal">
          publicly visible
        </label>
      </div>

      <ButtonWithSpinner />
    </form>
  );
};

export default AddLinkForm;
