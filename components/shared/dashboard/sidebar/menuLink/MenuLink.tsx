import { menuItemParams } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuLink = ({ item }: menuItemParams) => {
  return (
    <Link href={item.path} className="flex items-center gap-2">
      <Image src={item.icon} width={24} height={24} alt={item.title} />
      {item.title}
    </Link>
  );
};

export default MenuLink;
