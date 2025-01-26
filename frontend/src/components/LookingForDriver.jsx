import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiUserLocationFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { FcMoneyTransfer } from "react-icons/fc";
const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        className="p-1 flex items-center justify-center w-[93%] absolute top-0"
        onClick={() => {
          props.setvehicleFound(false);
        }}
      >
        <IoIosArrowDown size={30} className="text-gray-200" />
      </h5>
      <h3 className="text-2xl font-semibold">Looking for a driver</h3>
      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-50"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png"
          alt=""
        />
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
      </div>
    </div>
  );
};

export default LookingForDriver;
