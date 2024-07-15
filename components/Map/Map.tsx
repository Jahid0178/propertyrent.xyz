"use client";

import React, { useEffect, useRef } from "react";
import {
  Map as MapLibreMap,
  NavigationControl,
  Marker,
  MapOptions,
} from "maplibre-gl";
import { DEFAULT_MAP_LAT, DEFAULT_MAP_LNG } from "@/constant/constant";
import "maplibre-gl/dist/maplibre-gl.css";
import { PropertyProps } from "@/typescript/interface";

interface MapProps {
  coordinates: number[];
  zoom: number;
  className?: string;
  properties?: PropertyProps[];
}

const Map = ({ coordinates, zoom, className, properties }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  const genGeoFeatures = (
    properties: PropertyProps[]
  ): GeoJSON.Feature<GeoJSON.Point>[] => {
    return properties.map((property) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [
          property.mapLocation.coordinates[1],
          property.mapLocation.coordinates[0],
        ],
      },
      properties: {},
    }));
  };

  useEffect(() => {
    const map = new MapLibreMap({
      // @ts-ignore
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`,
      center: [DEFAULT_MAP_LNG, DEFAULT_MAP_LAT],
      zoom: zoom || 5,
      attributionControl: false,
    });

    const navigation = new NavigationControl();

    const marker = new Marker()
      .setLngLat([
        coordinates[1] || DEFAULT_MAP_LNG,
        coordinates[0] || DEFAULT_MAP_LAT,
      ])
      .addTo(map);

    if (!coordinates.length) {
      marker.remove();
    }

    map.addControl(navigation, "top-right");

    map.on("load", async () => {
      console.log("map is loaded");

      const markerImage = await map.loadImage(
        "https://maplibre.org/maplibre-gl-js/docs/assets/custom_marker.png"
      );

      map.addImage("property-marker", markerImage.data);

      map.addSource("propertyLocation", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: genGeoFeatures(properties || []),
        },
      });

      map.addLayer({
        id: "propertyLocations",
        type: "symbol",
        source: "propertyLocation",
        layout: {
          "icon-image": "property-marker",
        },
      });

      map.on("click", "propertyLocations", (e) => {
        map.flyTo({
          // @ts-ignore
          center: e?.features?.[0]?.geometry?.coordinates,
          zoom: 15,
        });
      });

      map.on("mouseenter", "propertyLocations", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", "propertyLocations", () => {
        map.getCanvas().style.cursor = "";
      });

      const [lng, lat] = coordinates.slice(0, 2);
      map.jumpTo({ center: [lat || DEFAULT_MAP_LAT, lng || DEFAULT_MAP_LNG] });
    });

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      className={`w-full h-64 relative rounded-md overflow-hidden ${className}`}
    />
  );
};

export default Map;
