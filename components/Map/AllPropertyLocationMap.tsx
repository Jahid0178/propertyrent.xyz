import React from "react";
import Map from "./Map";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import isAuthenticated from "@/utils/isAuthenticated";
import { getPropertyByUserId } from "@/lib/actions/property.action";

const AllPropertyLocationMap = async () => {
  const authenticatedUser = await isAuthenticated({ noRedirect: true });
  const userId = authenticatedUser?.user?.user?._id;
  const response = await getPropertyByUserId(userId);

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Property Locations</CardTitle>
      </CardHeader>
      <CardContent>
        <Map coordinates={[]} zoom={5} properties={response?.properties} />
      </CardContent>
    </Card>
  );
};

export default AllPropertyLocationMap;
