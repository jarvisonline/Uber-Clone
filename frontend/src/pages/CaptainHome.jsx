import React, { useRef, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ConfirmRidePopup from "../components/ConfirmRidePopup";

const CaptainHome = () => {
  const [ridePopUpPanel, setridePopUpPanel] = useState(true);
  const [confirmridePopUpPanel, setconfirmridePopUpPanel] = useState(false);
  const ridePopUpPanelRef = useRef(null);
  const confirmridePopUpPanelRef = useRef(null);
  useGSAP(
    function () {
      if (ridePopUpPanel) {
        gsap.to(ridePopUpPanelRef.current, {
          y: "0%",
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(ridePopUpPanelRef.current, {
          y: "100%",
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    },
    [ridePopUpPanel]
  );
  useGSAP(
    function () {
      if (confirmridePopUpPanel) {
        gsap.to(confirmridePopUpPanelRef.current, {
          y: "0%",
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(confirmridePopUpPanelRef.current, {
          y: "100%",
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    },
    [confirmridePopUpPanel]
  );
  return (
    <div className="h-full">
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
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div
        ref={ridePopUpPanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white"
      >
        <RidePopUp
          setridePopUpPanel={setridePopUpPanel}
          setconfirmridePopUpPanel={setconfirmridePopUpPanel}
        />
      </div>
      <div
        ref={confirmridePopUpPanelRef}
        className="fixed h-screen w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white"
      >
        <ConfirmRidePopup
          setridePopUpPanel={setridePopUpPanel}
          setconfirmridePopUpPanel={setconfirmridePopUpPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
