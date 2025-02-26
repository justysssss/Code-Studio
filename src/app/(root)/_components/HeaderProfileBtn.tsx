"use client";
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";

function HeaderProfileBtn() {
  return (
    <>
    <UserButton>
        <UserButton.MenuItems>
            <UserButton.Link
            label="Profile"
            labelIcon={<User className="size-4" />}
            href="/profile"
        />
        </UserButton.MenuItems>
    </UserButton>

    <SignedOut>
        <SignInButton mode="modal">
          <button className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 
          border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden">
            <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
              Sign In
            </span>
          </button>
        </SignInButton>
    </SignedOut>
    </>
  );
}
export default HeaderProfileBtn;