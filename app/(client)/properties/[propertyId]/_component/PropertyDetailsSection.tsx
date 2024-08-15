import React from "react";
import Link from "next/link";
import Image from "next/image";
import AuthorCard from "@/components/Cards/AuthorCard";
import PropertyLocation from "./PropertyLocation";
import PropertyLocationMap from "./PropertyLocationMap";
import moment from "moment";

import { PropertyProps } from "@/typescript/interface";
import { IoBedOutline, IoLocationOutline, IoBusOutline } from "react-icons/io5";
import { TbBath, TbFence } from "react-icons/tb";
import { RxSize } from "react-icons/rx";
import { GiPaintRoller } from "react-icons/gi";
import { CiCalendarDate } from "react-icons/ci";
import { PiFireSimple, PiGarage, PiPerson } from "react-icons/pi";
import { FaWifi } from "react-icons/fa6";
import { MdElectricBolt, MdOutlineShoppingCart } from "react-icons/md";
import { MdLocalDining, MdOutlineWaterDrop, MdBalcony } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";
import { LuFlower2, LuSchool } from "react-icons/lu";
import { FaRegHospital } from "react-icons/fa";
import { Button } from "@/components/ui/button";

type PropertyDetailsSectionProps = {
  propertyData: PropertyProps;
};

const PropertyDetailsSection = ({
  propertyData,
}: PropertyDetailsSectionProps) => {
  const {
    author,
    description,
    availableFrom,
    address: { city, country, zipCode, street },
    propertyDetails: {
      propertyFeatures: {
        propertySize,
        propertySizeUnit,
        numberOfBedrooms,
        numberOfBathrooms,
        numberOfDiningrooms,
        numberOfGarage,
        numberOfBalconies,
        renovation,
        yearBuilt,
        gender,
      },
      propertyUtilities: { gas, electricity, internet, water },
    },
    mapLocation,
  } = propertyData;

  return (
    <div className="grid grid-cols-12 gap-6 mt-6">
      <div className="col-span-12 md:col-span-8 space-y-6">
        <div>
          <h2 className="mb-2 text-xl font-semibold">Description</h2>
          <p>{description}</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-semibold">
            Property Available From: {moment(availableFrom).format("ll")}
          </h2>
          <div className="mt-4">
            <h3 className="mb-2 text-lg font-semibold">Property details</h3>
            <div className="divide-y divide-gray-300">
              <div className="flex items-center gap-2 p-2">
                <span>
                  <RxSize size={22} />
                </span>
                <span>Size</span>
                <span className="ml-auto">
                  {propertySize} {propertySizeUnit}
                </span>
              </div>
              {numberOfBedrooms > "0" && (
                <div className="flex items-center gap-2 p-2">
                  <span>
                    <IoBedOutline size={22} />
                  </span>
                  <span>Bedrooms</span>
                  <span className="ml-auto">{numberOfBedrooms}</span>
                </div>
              )}
              {numberOfBathrooms > "0" && (
                <div className="flex items-center gap-2 p-2">
                  <span>
                    <TbBath size={22} />
                  </span>
                  <span>Bathrooms</span>
                  <span className="ml-auto">{numberOfBathrooms}</span>
                </div>
              )}
              {numberOfDiningrooms > "0" && (
                <div className="flex items-center gap-2 p-2">
                  <span>
                    <MdLocalDining size={22} />
                  </span>
                  <span>Dining Room</span>
                  <span className="ml-auto">{numberOfDiningrooms}</span>
                </div>
              )}
              {numberOfGarage > "0" && (
                <div className="flex items-center gap-2 p-2">
                  <span>
                    <PiGarage size={22} />
                  </span>
                  <span>Garage</span>
                  <span className="ml-auto">{numberOfGarage}</span>
                </div>
              )}
              {numberOfBalconies > "0" && (
                <div className="flex items-center gap-2 p-2">
                  <span>
                    <MdBalcony size={22} />
                  </span>
                  <span>Balcony</span>
                  <span className="ml-auto">{numberOfBalconies}</span>
                </div>
              )}
              {gender && (
                <div className="flex items-center gap-2 p-2">
                  <span>
                    <PiPerson size={22} />
                  </span>
                  <span>Gender</span>
                  <span className="ml-auto">{gender}</span>
                </div>
              )}
              <div className="flex items-center gap-2 p-2">
                <span>
                  <GiPaintRoller size={22} />
                </span>
                <span>Renovation</span>
                <span className="ml-auto">{renovation}</span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <span>
                  <CiCalendarDate size={22} />
                </span>
                <span>Construction Year</span>
                <span className="ml-auto">{yearBuilt}</span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <span>
                  <IoLocationOutline size={22} />
                </span>
                <span>Location</span>
                <span className="ml-auto">{city}</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-2 text-lg font-semibold">Property utility</h3>
            <div className="divide-y divide-gray-300">
              <div className="flex items-center gap-2 p-2">
                <span>
                  <PiFireSimple size={22} />
                </span>
                <span>Gas</span>
                <span className="ml-auto">{gas}</span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <span>
                  <FaWifi size={22} />
                </span>
                <span>Internet</span>
                <span className="ml-auto">{internet}</span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <span>
                  <MdElectricBolt size={22} />
                </span>
                <span>Electricity</span>
                <span className="ml-auto">{electricity}</span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <span>
                  <MdOutlineWaterDrop size={22} />
                </span>
                <span>Water</span>
                <span className="ml-auto">{water}</span>
              </div>
            </div>
          </div>
          <PropertyLocation
            location={{
              city,
              country,
              zipCode,
              street,
            }}
          />
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 space-y-4">
        {author && <AuthorCard author={author} />}
        <PropertyLocationMap mapLocation={mapLocation} />
      </div>
    </div>
  );
};

export default PropertyDetailsSection;
