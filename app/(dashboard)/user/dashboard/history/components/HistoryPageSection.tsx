import React from "react";
import SectionHeading from "@/components/common/Heading/SectionHeading";
import PaymentHistoryTable from "./PaymentHistoryTable";

const HistoryPageSection = () => {
  return (
    <section>
      <div className="container">
        <SectionHeading
          title="Payment History"
          subTitle="View your all payment history"
          subTitleClassName="mb-8"
        />
        <PaymentHistoryTable />
      </div>
    </section>
  );
};

export default HistoryPageSection;
