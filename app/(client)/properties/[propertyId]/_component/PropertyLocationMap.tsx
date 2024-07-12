import React from "react";
import Map from "@/components/Map/Map";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PropertyLocationMapProps {
  mapLocation: {
    coordinates: number[];
  };
}

const PropertyLocationMap = ({ mapLocation }: PropertyLocationMapProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Location By Map</CardTitle>
      </CardHeader>
      <CardContent>
        <Map coordinates={mapLocation.coordinates} zoom={15} />
      </CardContent>
    </Card>
  );
};

export default PropertyLocationMap;
