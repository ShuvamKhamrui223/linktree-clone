import { ClerkLoaded, Show } from "@clerk/nextjs";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

const AuthStatus = () => {
  return (
    <>
      <ClerkLoaded>
        <Show when={"signed-out"}>
          <div className="space-x-4">
            <Link href={"/sign-in"} className="sign-in-link">
              sign in
            </Link>
            <Link href={"/sign-up"} className="sign-up-link">
              sign up
            </Link>
          </div>
        </Show>

        <Show when={"signed-in"}>
          <Link href={"/dashboard"} className="dashboard-link">
            dashboard <ChevronRightIcon className="size-6" strokeWidth={1} />
          </Link>
        </Show>
      </ClerkLoaded>
    </>
  );
};

export default AuthStatus;
