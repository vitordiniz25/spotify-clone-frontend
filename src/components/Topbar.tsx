import { SignedOut, SignedIn, SignOutButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { SignInOAuthButtons } from "./SignInOAuthButtons";

export const Topbar = () => {
  const idAdmin = false;
  return (
    <div
      className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75
        backdrop-blur-md z-10
    "
    >
      <div className="flex gap-2 items-center">Spotify</div>
      <div className="flex items-center gap-4">
        {idAdmin && (
          <Link to={"/admin"}>
            <LayoutDashboardIcon className="size-4 mr-2" />
          </Link>
        )}

        <SignedIn>
          <SignOutButton />
        </SignedIn>

        <SignedOut>
          <SignInOAuthButtons />
        </SignedOut>
      </div>
    </div>
  );
};
