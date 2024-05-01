import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import userCardIcon from "@/public/assets/icons/user-card-icon.svg";

const CardEl = () => {
  return (
    <Card className="w-full bg-slate-900 hover:bg-slate-800 transition-colors">
      <CardContent className="flex p-3 gap-5">
        <div>
          <Image src={userCardIcon} alt="icons" width={24} height={24} />
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-medium">Total Users</span>
          <h1 className="text-2xl font-medium">10.902</h1>
          <p className="text-sm font-normal">
            <span className="text-green-400">12%</span> more than previous
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardEl;
