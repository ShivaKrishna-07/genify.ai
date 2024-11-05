"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  return (
    <div className="p-5 bg-white shadow-sm border-b-2 flex justify-between items-center">
      <div></div>
      <div className="flex items-center gap-5">
        <Link href={'/dashboard/billing'} className="bg-primary  p-2 rounded-full text-sm text-white px-2">
          👑Join Membership just for $9.99
        </Link>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
