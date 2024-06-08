import CardEl from "@/components/shared/dashboard/cardEl/CardEl";
import CardSwiper from "@/components/shared/dashboard/cardEl/CardSwiper";
import RightBar from "@/components/shared/dashboard/rightBar/RightBar";
import RightBarSwiper from "@/components/shared/dashboard/rightBar/RightBarSwiper";
import Transactions from "@/components/shared/dashboard/transactions/Transactions";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex gap-5 mt-5 w-full">
      <div className="flex flex-col gap-5 flex-[3]">
        {/* Desktop Cards */}
        <div className="hidden md:flex items-center justify-between gap-4">
          <CardEl />
          <CardEl />
          <CardEl />
        </div>
        {/* Mobile Cards */}
        <div className="flex md:hidden">
          <CardSwiper />
        </div>
        <div className="flex md:hidden">
          <RightBarSwiper />
        </div>

        {/* Transactions section */}
        <Transactions />
      </div>
      <div className="hidden md:flex flex-[1]">
        <RightBar />
      </div>
    </div>
  );
};

export default DashboardPage;
