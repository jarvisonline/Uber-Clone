import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiUserLocationFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { FcMoneyTransfer } from "react-icons/fc";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="p-1 flex items-center justify-center w-[93%] absolute top-0"
        onClick={() => {
          props.setridePopUpPanel(false);
        }}
      >
        <IoIosArrowDown size={30} className="text-gray-200" />
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Avialable</h3>
      <div className="flex items-center justify-between  mt-4 p-3 bg-yellow-400 rounded-lg">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 rounded-full object-cover w-12 "
            src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
            alt=""
          />
          <h2 className="text-xl font-medium">Manas Patel</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2KM</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-2 border-b-2 border-gray-400 ">
            <RiUserLocationFill />
            <div className="">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600 ">
                Kankariya Talab,Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 border-b-2 border-gray-400">
            <IoLocationSharp />
            <div className="">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600 ">
                Kankariya Talab,Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2">
            <FcMoneyTransfer />
            <div className="">
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600 ">Pay by cash</p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between mt-5">
          <button
            onClick={() => {
              props.setridePopUpPanel(false);
            }}
            className=" bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg mt-1 "
          >
            Ignore
          </button>
          <button
            onClick={() => {
              props.setconfirmridePopUpPanel(true);
            }}
            className=" bg-green-600 text-white font-semibold p-3 px-10 rounded-lg  "
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
