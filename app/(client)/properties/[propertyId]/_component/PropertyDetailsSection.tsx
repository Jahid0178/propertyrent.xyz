import React from "react";
import Link from "next/link";
import Image from "next/image";
import AuthorCard from "@/components/Cards/AuthorCard";
import { PropertyProps } from "@/typescript/interface";
import { IoBedOutline, IoLocationOutline, IoBusOutline } from "react-icons/io5";
import { TbBath, TbFence } from "react-icons/tb";
import { RxSize } from "react-icons/rx";
import { GiPaintRoller } from "react-icons/gi";
import { CiCalendarDate } from "react-icons/ci";
import { PiFireSimple } from "react-icons/pi";
import { FaWifi } from "react-icons/fa6";
import { MdElectricBolt, MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineWaterDrop } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";
import { LuFlower2, LuSchool } from "react-icons/lu";
import { FaRegHospital } from "react-icons/fa";
import { Span } from "next/dist/trace";
import { Button } from "@/components/ui/button";
import PropertyLocation from "./PropertyLocation";

type PropertyDetailsSectionProps = {
  propertyData: PropertyProps;
};

const PropertyDetailsSection = ({
  propertyData,
}: PropertyDetailsSectionProps) => {
  const {
    author,
    description,
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
      },
      propertyUtilities: { gas, electricity, internet, water },
      outdoorFeatures: { garden, pool, playground, fencing },
      nearby: { school, hospital, shoppingCenter, publicTransport },
    },
  } = propertyData;

  return (
    <div className="grid grid-cols-12 gap-6 mt-6">
      <div className="col-span-12 md:col-span-8 space-y-6">
        <div>
          <h2 className="mb-2 text-xl font-semibold">Description</h2>
          <p>{description}</p>
        </div>
        <div>
          <h2 className="mb-2 text-xl font-semibold">Property Features</h2>
          <p>Here will be property features</p>
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
              <div className="flex items-center gap-2 p-2">
                <span>
                  <IoBedOutline size={22} />
                </span>
                <span>Bedrooms</span>
                <span className="ml-auto">{numberOfBedrooms}</span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <span>
                  <TbBath size={22} />
                </span>
                <span>Bathrooms</span>
                <span className="ml-auto">{numberOfBathrooms}</span>
              </div>
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
          <div className="mt-4">
            <h3 className="mb-2 text-lg font-semibold">Outdoor features</h3>
            <div className="divide-y divide-gray-300">
              <div className="flex items-center gap-2 p-2">
                <span>
                  <MdOutlinePool size={22} />
                </span>
                <span>Pool</span>
                <span className="ml-auto">{pool}</span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <span>
                  <LuFlower2 size={22} />
                </span>
                <span>Garden</span>
                <span className="ml-auto">{garden}</span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <span>
                  <IoMdFootball size={22} />
                </span>
                <span>Playground</span>
                <span className="ml-auto">{playground}</span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <span>
                  <TbFence size={22} />
                </span>
                <span>Fence</span>
                <span className="ml-auto">{fencing}</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block mt-4">
            <h3 className="mb-2 text-lg font-semibold">Near by</h3>
            <div className="divide-y divide-gray-300">
              <div className="flex items-center gap-2 p-2">
                <span>
                  <LuSchool size={22} />
                </span>
                <span>Schools</span>
                <span className="ml-auto flex gap-2">{school}</span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <span>
                  <FaRegHospital size={22} />
                </span>
                <span>Hospital</span>
                <span className="ml-auto flex gap-2">{hospital}</span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <span>
                  <MdOutlineShoppingCart size={22} />
                </span>
                <span>Shopping Center</span>
                <span className="ml-auto flex gap-2">{shoppingCenter}</span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <span>
                  <IoBusOutline size={22} />
                </span>
                <span>Public Transport</span>
                <span className="ml-auto flex gap-2">{publicTransport}</span>
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
      <div className="col-span-12 md:col-span-4">
        {author && <AuthorCard author={author} />}
      </div>
    </div>
  );
};

export default PropertyDetailsSection;
