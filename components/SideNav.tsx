"use client";

import { FileClock, Home, Settings, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";

const SideNav = () => {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: Wallet,
      path: "/dashboard/billing",
    },
  ];

  const path = usePathname();

  return (
    <div className="h-screen relative bg-white p-5 shadow-sm border">
      <Link href={'/'} className="flex flex-col items-center justify-center">
        <Image alt="logo" width={50} height={50} src="/logo.svg" />
        <h3 className="font-bold text-2xl">Genify.ai</h3>
      </Link>
      <hr className="border my-6" />
      <div className="mt-10">
        {MenuList.map((menu, index) => (
          <Link
            href={`/dashboard/${
              menu.name == "Home" ? "" : menu.name.toLowerCase()
            }`}
            className={`flex mb-2 p-3 gap-6 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
            ${path == menu.path && "bg-primary text-white"}
            `}
            key={index}
          >
            <menu.icon className="h-6 w-6" />
            <h2 className="text-lg">{menu.name}</h2>
          </Link>
        ))}
      </div>
      <div className="absolute w-full left-0 bottom-10">
        <UsageTrack />
      </div>
    </div>
  );
};

export default SideNav;
