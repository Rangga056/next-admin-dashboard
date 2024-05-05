import Image from "next/image";
import React from "react";
import astronaut from "@/public/assets/images/astronaut.png";
import playIcon from "@/public/assets/icons/play-icon.svg";
import { Button } from "@/components/ui/button";

const RightBar = () => {
  return (
    <div className="">
      {/* Item */}
      <div className="w-full bg-slate-900 p-5 rounded-xl relative bg-gradient-to-t from-slate-900 via-slate-900 to-slate-700 mb-5">
        <div className="absolute bottom-0 right-3 w-1/2 h-1/2">
          <Image
            src={astronaut}
            alt="astronaut image"
            fill
            className="object-contain opacity-20"
          />
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="font-bold text-base">🔥 Avaiable Now</span>
          <h3 className="font-bold text-sm">
            How to use the new version of the admin dashboard?
          </h3>
          <span>Takes 4 minutes to learn</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            laborum facere reprehenderit eaque ipsa expedita earum officia aut
            omnis.
          </p>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="flex items-center gap-1 px-4 cursor-pointer z-10"
          >
            <Image src={playIcon} alt="play-icon" width={20} height={20} />
            <span>Watch</span>
          </Button>
        </div>
      </div>
      {/* Item */}
      <div className="w-full bg-slate-900 p-5 rounded-xl relative bg-gradient-to-t from-slate-900 via-slate-900 to-slate-700 mb-5">
        <div className="absolute bottom-0 right-3 w-1/2 h-1/2">
          <Image
            src={astronaut}
            alt="astronaut image"
            fill
            className="object-contain opacity-20"
          />
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="font-bold text-base">🔥 Avaiable Now</span>
          <h3 className="font-bold text-sm">
            How to use the new version of the admin dashboard?
          </h3>
          <span>Takes 4 minutes to learn</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            laborum facere reprehenderit eaque ipsa expedita earum officia aut
            omnis.
          </p>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="flex items-center gap-1 px-4 cursor-pointer z-10"
          >
            <Image src={playIcon} alt="play-icon" width={20} height={20} />
            <span>Watch</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
