"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="p-5 bg-white shadow-sm border-b-2 flex justify-between items-center">
      <div>
      <Link href={'/'} className="flex gap-1 md:hidden flex-col items-center justify-center">
        <Image alt="logo" width={40} height={40} src="/logo.svg" />
        <h3 className="font-bold text-sm">Genify<span className="font-bold text-primary">.</span>ai</h3>
      </Link>
      </div>
      <div className="flex items-center gap-5">
        <Link href={'/dashboard/billing'} className="bg-primary  p-2 rounded-full text-xs text-white px-2">
          👑Join Membership just for $9.99
        </Link>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
