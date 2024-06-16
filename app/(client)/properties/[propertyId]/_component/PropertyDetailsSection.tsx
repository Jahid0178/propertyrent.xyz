import React from "react";
import Image from "next/image";
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

type PropertyDetailsSectionProps = {
  propertyData: PropertyProps;
};

const PropertyDetailsSection = ({
  propertyData,
}: PropertyDetailsSectionProps) => {
  const {
    description,
    bedrooms,
    bathrooms,
    squareFeet,
    address,
    propertyFeatures: { constructionYear, renovation },
    propertyUtilities: { gas, electricity, internet, water },
    outdoorFeatures: { pool, garden, playground, fencing },
    nearby: { schools, hospitals, shoppingCenters, publicTransport },
    location,
  } = propertyData;
  return (
    <div className="grid grid-cols-12 gap-4 mt-6">
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
                <span className="ml-auto">{squareFeet} sq.ft</span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <span>
                  <IoBedOutline size={22} />
                </span>
                <span>Bedrooms</span>
                <span className="ml-auto">{bedrooms}</span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <span>
                  <TbBath size={22} />
                </span>
                <span>Bathrooms</span>
                <span className="ml-auto">{bathrooms}</span>
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
                <span className="ml-auto">{constructionYear}</span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <span>
                  <IoLocationOutline size={22} />
                </span>
                <span>Location</span>
                <span className="ml-auto">{location}</span>
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
                <span className="ml-auto flex gap-2">
                  {schools.map((school) => (
                    <span>{school}</span>
                  ))}
                </span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <span>
                  <FaRegHospital size={22} />
                </span>
                <span>Hospital</span>
                <span className="ml-auto flex gap-2">
                  {hospitals.map((hospital) => (
                    <span>{hospital}</span>
                  ))}
                </span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <span>
                  <MdOutlineShoppingCart size={22} />
                </span>
                <span>Shopping Center</span>
                <span className="ml-auto flex gap-2">
                  {shoppingCenters.map((shoppingCenter) => (
                    <span>{shoppingCenter}</span>
                  ))}
                </span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <span>
                  <IoBusOutline size={22} />
                </span>
                <span>Public Transport</span>
                <span className="ml-auto flex gap-2">
                  {publicTransport.map((transport) => (
                    <span>{transport}</span>
                  ))}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-2 text-lg font-semibold">Property Address</h3>
            <div className="flex justify-between items-center">
              <address>{address}</address>
              <Button>Show on map</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4">2</div>
    </div>
  );
};

export default PropertyDetailsSection;
