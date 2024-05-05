import { menuItems } from "@/constants";
import React from "react";
import MenuLink from "./menuLink/MenuLink";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const SideBar = () => {
  return (
    <nav className="sticky top-10 h-[100vh] max-h-[1440px] flex flex-col">
      <div className="flex flex-col lg:flex-row items-center gap-3 p-3 -pt-2 -mb-5 ">
        <Image
          src="/assets/icons/user-circle-icon.svg"
          alt="user-icon"
          width={48}
          height={48}
        />
        <div className="flex flex-col">
          <span className="font-medium text-lg">John Doe</span>
          <span className="text-muted-foreground text-xs">Administrator</span>
        </div>
      </div>
      <div className="mt-3">
        <ul>
          {menuItems.map((cat) => (
            <li key={cat.title}>
              <p className="py-2 px-3 text-sm capitalize font-medium text-muted-foreground">
                {cat.title}
              </p>
              <div className="flex flex-col text-[14px]">
                {cat.list.map((item) => (
                  <MenuLink key={item.title} item={item} />
                ))}
              </div>
            </li>
          ))}
        </ul>
        <Button
          className="my-3 font-medium flex items-center gap-2"
          size="lg"
          variant="secondary"
        >
          <Image
            src="/assets/icons/logout-icon.svg"
            alt="logout-icon"
            width={20}
            height={20}
          />
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default SideBar;
