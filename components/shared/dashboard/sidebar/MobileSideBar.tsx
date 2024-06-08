"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { menuItems } from "@/constants";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import MenuLink from "./menuLink/MenuLink";
import { Button } from "@/components/ui/button";

const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex justify-start">
          <Image
            src="/assets/icons/user-circle-icon.svg"
            alt="user-icon"
            width={48}
            height={48}
          />
        </div>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>
            <div className="flex flex-col lg:flex-row items-center gap-3 p-3 -pt-2">
              <Image
                src="/assets/icons/user-circle-icon.svg"
                alt="user-icon"
                width={48}
                height={48}
              />
              <div className="flex flex-col">
                <span className="font-medium text-lg">John Doe</span>
                <span className="text-muted-foreground text-xs">
                  Administrator
                </span>
              </div>
            </div>
          </SheetTitle>
          <Separator className="border border-slate-700" />
          <div className="mt-3">
            <ul>
              {menuItems.map((cat) => (
                <li key={cat.title}>
                  <p className="py-2 px-3 text-left text-sm capitalize font-medium text-muted-foreground">
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
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
