import CardEl from "@/components/shared/dashboard/cardEl/CardEl";
import Chart from "@/components/shared/dashboard/chart/Chart";
import RightBar from "@/components/shared/dashboard/rightBar/RightBar";
import Transactions from "@/components/shared/dashboard/transactions/Transactions";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex gap-5 mt-5 w-full">
      <div className="flex flex-col gap-5 flex-[3]">
        {/* Cards */}
        <div className="flex items-center justify-between gap-4">
          <CardEl />
          <CardEl />
          <CardEl />
        </div>
        {/* Transactions section */}
        <Transactions />
        {/* Charts */}
        <Chart />
      </div>
      <div className="flex-[1]">
        <RightBar />
      </div>
    </div>
  );
};

export default DashboardPage;
