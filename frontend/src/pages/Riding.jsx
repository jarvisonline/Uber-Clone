import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-full">
      <Link
        to="/home"
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <FaHome size={20} className="rounded-full" />
      </Link>
      <div className="h-1/2">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-20"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png"
            alt=""
          />
          <div className="text-right font-semibold -mt-1 -mb-1">
            <h2 className="text-lg font-medim">Sarthak</h2>
            <h4 className="text-xl font-semibold">MP04 AB 1234 </h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>
        <div className="flex gap-2 justify-between flex-col items-center">
          <div className="w-full mt-5">
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
        <button className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5 ">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
