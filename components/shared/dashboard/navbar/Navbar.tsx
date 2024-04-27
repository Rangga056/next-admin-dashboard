"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex p-5 w-full items-center justify-between bg-slate-900 rounded-lg">
      <div className="capitalize text-lg font-medium">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center gap-3">
        {/* Search Bar */}
        <div className="flex items-center bg-slate-700 px-3 py-1 gap-2 rounded-lg h-4/5">
          <Image
            src="/assets/icons/search-icon.svg"
            alt="search-icon"
            width={24}
            height={24}
          />
          <Input
            type="text"
            placeholder="Search..."
            className="outline-none bg-transparent focus-visible:ring-transparent border-none focus-visible:ring-offset-transparent"
          />
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/assets/icons/chat-icon.svg"
            alt="chat-icon"
            width={24}
            height={24}
          />
          <Image
            src="/assets/icons/bell-icon.svg"
            alt="bell-icon"
            width={24}
            height={24}
          />
          <Image
            src="/assets/icons/globe-icon.svg"
            alt="globe-icon"
            width={24}
            height={24}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
