import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPlane, FaTrain, FaHospital, FaShoppingBag } from "react-icons/fa";

const LocationSearchPanel = (props) => {
  //sample array for location
  const locations = [
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "Raja Bhoj International Airport, Gandhi Nagar, Bhopal",
    "Bhopal Junction Railway Station, Navbahar Colony, Bhopal",
    "Hamidia Hospital, Royal Market, Bhopal",
    "DB City Mall, MP Nagar Zone 1, Bhopal",
  ];
  return (
    <div className="flex flex-col">
      {locations.map((location, index) => {
        const icons = [
          <FaLocationDot className="text-gray-900" />,
          <FaPlane className="text-gray-900" />,
          <FaTrain className="text-gray-900" />,
          <FaHospital className="text-gray-900" />,
          <FaShoppingBag className="text-gray-900" />,
        ];

        return (
          <div
            key={index}
            onClick={() => {
              props.setvehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex items-center border-3 p-3 rounded-xl border-white active:border-black justify-start"
          >
            <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
              {icons[index]}
            </h2>
            <h4 className="text-lg font-medium ml-5">{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
