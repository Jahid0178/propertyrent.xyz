"use client";

import React, { useEffect } from "react";
import MostViewdCard from "./MostViewdCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import analyticsStore from "@/store/analytics";
import { PropertyProps } from "@/typescript/interface";

const MostViewedSection = () => {
  const { getMostViewedProperty, mostViewedProperties } = analyticsStore(
    (state) => state
  );

  useEffect(() => {
    getMostViewedProperty();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Most viewed property</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {mostViewedProperties
          .slice(0, 4)
          .map((viewedProperty: PropertyProps) => (
            <MostViewdCard key={viewedProperty._id} data={viewedProperty} />
          ))}
      </CardContent>
    </Card>
  );
};

export default MostViewedSection;
