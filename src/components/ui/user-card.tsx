import { Show, SignOutButton, UserAvatar, useUser } from "@clerk/nextjs";

const UserCard = () => {
  const { user } = useUser();
  return (
    <Show when={"signed-in"}>
      <div className="text-center space-y-4">
        <div className="flex items-center gap-sm rounded-full bg-surface-container-lowest py-2 px-4">
          <UserAvatar />

          <div>
            <p className="font-headline-md text-primary dark:text-inverse-primary">
              {user?.fullName || user?.primaryEmailAddress?.emailAddress}{" "}
            </p>
          </div>
        </div>
        <SignOutButton>
          <button className="sign-out-link">sign out</button>
        </SignOutButton>
      </div>
    </Show>
  );
};

export default UserCard;
