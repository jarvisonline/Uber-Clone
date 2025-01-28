import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowUp, IoIosLogOut } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finsihRidePanel, setfinsihRidePanel] = useState(false);
  const finsihRidePanelRef = useRef(null);
  useGSAP(
    function () {
      if (finsihRidePanel) {
        gsap.to(finsihRidePanelRef.current, {
          y: "0%",
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(finsihRidePanelRef.current, {
          y: "100%",
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    },
    [finsihRidePanel]
  );
  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-full">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captain-home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <IoIosLogOut size={20} className="rounded-full" />
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div
        className="h-1/5 p-6 flex items-center justify-between bg-yellow-400 relative pt-10"
        onClick={() => {
          setfinsihRidePanel(true);
        }}
      >
        <h5 className="p-1 flex items-center justify-center w-[85%] absolute top-0">
          <IoIosArrowUp size={30} className="text-gray-800" />
        </h5>
        <h4 className="text-xl font-semibold">4 KM away</h4>
        <button className=" bg-green-600 text-white font-semibold p-3 px-10 rounded-lg  ">
          Complete Ride
        </button>
      </div>
      <div
        ref={finsihRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-10 pt-12 bg-white"
      >
        <FinishRide setfinsihRidePanel={setfinsihRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
