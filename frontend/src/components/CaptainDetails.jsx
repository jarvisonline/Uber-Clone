import React from "react";
import { MdAccessTime } from "react-icons/md";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LuNotepadText } from "react-icons/lu";
const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://media.istockphoto.com/id/921039506/photo/indian-man-driving-luxury-taxi.jpg?s=612x612&w=0&k=20&c=R3QNzBe2ieZOBITHeBFmNuRk4DPeiiAkJWxxcWWHxbM="
            alt=""
          />
          <h4 className="text-lg font-medium">Harsh Patel</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">₹295.02</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex p-3 bg-gray-50 rounded-xl mt-6 justify-center gap-5 items-start">
        <div className="text-center">
          <div className="flex justify-center">
            <MdAccessTime size={30} />
          </div>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center">
            <IoSpeedometerOutline size={30} />
          </div>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center">
            <LuNotepadText size={30} />
          </div>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
