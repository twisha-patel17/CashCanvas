import { DashboardTopbar } from "../components/dashboard/DashboardTopbar";
import { ExpenseChart } from "../components/dashboard/ExpenseChart";
import { SummaryCard } from "../components/dashboard/SummaryCard";

import {
  FiCreditCard,
  FiTrendingUp,
  FiTrendingDown,
  FiTarget,
} from "react-icons/fi";

export const DashboardPage = () => {
  return (
    <>
      <DashboardTopbar />

      <div className="grid grid-cols-4 gap-4 mt-8">
        <SummaryCard
          label="BALANCE"
          value="₹37,660"
          icon={<FiCreditCard />}
          valueColor="#1C2321"
          iconBg="#EDF5F2"
          iconColor="#2D5A4A"
        />

        <SummaryCard
          label="INCOME"
          value="₹64,000"
          icon={<FiTrendingUp />}
          valueColor="#3E8E7E"
          iconBg="#EAF7F3"
          iconColor="#3E8E7E"
        />

        <SummaryCard
          label="EXPENSE"
          value="₹26,340"
          icon={<FiTrendingDown />}
          valueColor="#C1633D"
          iconBg="#FCEFEA"
          iconColor="#C1633D"
        />

        <SummaryCard
          label="BUDGET LEFT"
          value="₹12,000"
          icon={<FiTarget />}
          valueColor="#1C2321"
          iconBg="#FBF6EA"
          iconColor="#B8934A"
        />
      </div>

     <div className="grid grid-cols-[1.1fr_1fr] gap-4 mt-6">
  <ExpenseChart />

  <div className="bg-white border border-[#DCD6C7] rounded-2xl p-5">
    Monthly Expense
  </div>
</div>

    </>
  );
};
