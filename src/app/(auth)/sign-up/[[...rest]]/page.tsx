import { seoConfig } from "@/constants/meta-info";
import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: seoConfig.publicPages.authPages.signup.title,
  description: seoConfig.publicPages.authPages.signup.description,
};
const page = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default page;
