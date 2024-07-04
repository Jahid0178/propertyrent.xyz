import React from "react";

import { getPropertyByUserId } from "@/lib/actions/property.action";
import PropertyListingTable from "@/components/Tables/PropertyListingTable";

type PageProps = {
  params: any;
  searchParams: {
    id: string;
  };
};

const MyPropertyPage = async ({ params, searchParams }: PageProps) => {
  const response = await getPropertyByUserId(searchParams.id);

  return (
    <section>
      <div className="container">
        <PropertyListingTable properties={response.properties} />
      </div>
    </section>
  );
};

export default MyPropertyPage;
