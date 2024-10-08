"use client";

import React, { useEffect, useRef } from "react";
import { Map as MapLibreMap, NavigationControl, Marker } from "maplibre-gl";
import { DEFAULT_MAP_LAT, DEFAULT_MAP_LNG } from "@/constant/constant";
import { MapLibreSearchControl } from "@stadiamaps/maplibre-search-box";
import "maplibre-gl/dist/maplibre-gl.css";
import "@stadiamaps/maplibre-search-box/dist/style.css";

interface ListingMapProps {
  onCoordinatesChange: (lat: number, lng: number) => void;
}
const ListingMap: React.FC<ListingMapProps> = ({ onCoordinatesChange }) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const map = new MapLibreMap({
      // @ts-ignore
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`,
      center: [DEFAULT_MAP_LNG, DEFAULT_MAP_LAT],
      zoom: 5,
      attributionControl: false,
    });

    // Map marker
    const marker = new Marker({
      draggable: true,
    })
      .setLngLat([DEFAULT_MAP_LNG, DEFAULT_MAP_LAT])
      .addTo(map);

    const nav = new NavigationControl({
      visualizePitch: true,
    });

    const control = new MapLibreSearchControl({
      onResultSelected: (result) => {
        const [lng, lat] = result.geometry.coordinates;
        marker.setLngLat([lng, lat]);
      },
    });

    // Map navigation
    map.addControl(nav, "top-right");

    // Map search control
    map.addControl(control, "top-left");

    const onDragEnd = () => {
      const { lat, lng } = marker.getLngLat();
      onCoordinatesChange(lat, lng);
    };

    marker.on("dragend", onDragEnd);

    map.on("load", () => {
      map.resize();
    });

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{ width: "100%", height: "400px", borderRadius: "0.5rem" }}
    />
  );
};

export default ListingMap;
