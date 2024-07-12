"use client";

import React, { useEffect, useRef } from "react";
import { Map as MapLibreMap, NavigationControl, Marker } from "maplibre-gl";
import { DEFAULT_MAP_LAT, DEFAULT_MAP_LNG } from "@/constant/constant";
import "maplibre-gl/dist/maplibre-gl.css";

interface MapProps {
  coordinates: number[];
  zoom: number;
  className?: string;
}

const Map = ({ coordinates, zoom, className }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);

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

    map.on("load", () => {
      console.log("map is loaded");
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
