import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoIosArrowDown } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclePanelref = useRef(null);
  const confirmRidePanelref = useRef(null);
  const vehicleFoundref = useRef(null);
  const WaitingForDriverRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseref = useRef(null);
  const [vehiclePanel, setvehiclePanel] = useState(false);
  const [confirmRidePanel, setconfirmRidePanel] = useState(false);
  const [vehicleFound, setvehicleFound] = useState(false);
  const [waitingForDriver, setwaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
          opacity: 1,
          ease: "power2.inOut",
          duration: 0.5,
        });
        gsap.to(panelCloseref.current, {
          opacity: 1,
          ease: "power2.inOut",
          duration: 0.3,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          opacity: 0,
          ease: "power2.inOut",
          duration: 0.5,
        });
        gsap.to(panelCloseref.current, {
          opacity: 0,
          ease: "power2.inOut",
          duration: 0.3,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelref.current, {
          y: "0%",
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(vehiclePanelref.current, {
          y: "100%",
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    },
    [vehiclePanel]
  );
  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelref.current, {
          y: "0%",
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(confirmRidePanelref.current, {
          y: "100%",
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    },
    [confirmRidePanel]
  );
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundref.current, {
          y: "0%",
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(vehicleFoundref.current, {
          y: "100%",
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    },
    [vehicleFound]
  );
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(WaitingForDriverRef.current, {
          y: "0%",
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(WaitingForDriverRef.current, {
          y: "100%",
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    },
    [waitingForDriver]
  );
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen top-0 absolute w-full ">
        <div className="h-[30%] p-6 bg-white relative">
          <h5 ref={panelCloseref} className="absolute top-6 right-6 opacity-0">
            <IoIosArrowDown size={30} onClick={() => setPanelOpen(false)} />
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setvehiclePanel={setvehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelref}
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-10 pt-12 bg-white"
      >
        <VehiclePanel
          setconfirmRidePanel={setconfirmRidePanel}
          setvehiclePanel={setvehiclePanel}
        />
      </div>
      <div
        ref={confirmRidePanelref}
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white"
      >
        <ConfirmedRide
          setconfirmRidePanel={setconfirmRidePanel}
          setvehicleFound={setvehicleFound}
        />
      </div>
      <div
        ref={vehicleFoundref}
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white"
      >
        <LookingForDriver setvehicleFound={setvehicleFound} />
      </div>
      <div
        ref={WaitingForDriverRef}
        className="fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white"
      >
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
