import { menuItems } from "@/constants";
import React from "react";
import MenuLink from "./menuLink/MenuLink";
import Image from "next/image";

const SideBar = () => {
  return (
    <nav className="sticky top-10">
      <div className="flex items-center gap-3">
        <Image
          src="/assets/icons/user-circle-icon.svg"
          alt="user-icon"
          width={50}
          height={50}
        />
        <div className="flex flex-col">
          <span className="font-medium text-xl">John Doe</span>
          <span className="text-muted-foreground text-sm">Administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <p className="py-2">{cat.title}</p>
            <div className="flex flex-col gap-2">
              {cat.list.map((item) => (
                <MenuLink key={item.title} item={item} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
