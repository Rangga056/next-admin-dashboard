"use client";

import { menuItemParams } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }: menuItemParams) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;
  return (
    <Link
      href={item.path}
      className="flex items-center gap-2 hover:bg-slate-800 px-3 py-[10px]"
    >
      <Image src={item.icon} width={20} height={20} alt={item.title} />
      <span
        className={`${isActive && "font-medium underline underline-offset-8"}`}
      >
        {item.title}
      </span>
    </Link>
  );
};

export default MenuLink;
