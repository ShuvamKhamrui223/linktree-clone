import { seoConfig } from "@/constants/meta-info";
import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: seoConfig.publicPages.authPages.signin.title,
  description: seoConfig.publicPages.authPages.signin.description,
};
const SignInPage = () => {
  return (
    <>
      <SignIn />
    </>
  );
};

export default SignInPage;
