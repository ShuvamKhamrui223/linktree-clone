"use client";
import { useFormStatus } from "react-dom";
import FormButtonSpinner from "../spinners/form-button-spinner";

const ButtonWithSpinner = () => {
  const { pending } = useFormStatus();
  return (
    <button className="px-6 py-3 bg-surface-tint text-surface cursor-pointer capitalize rounded-md">
      {pending ? <FormButtonSpinner /> : <>add link</>}
    </button>
  );
};

export default ButtonWithSpinner;
