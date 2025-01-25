import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing eye icons
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainSignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: parseInt(vehicleCapacity), // Convert to number
        vehicleType: vehicleType,
      },
    };

    const resposnse = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (resposnse.status === 201) {
      const data = resposnse.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
        <Link to="/">
          <img
            className="w-16 mb-5"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt=""
          />
        </Link>
        <form onSubmit={handleSubmit}>
          <h3 className="text-base font-medium mb-3 ">
            What's our Captain's name
          </h3>
          <div className="flex gap-4 mb-5">
            <input
              type="text"
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2  text-lg placeholder:text-base"
              placeholder="Firstname"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2  text-lg placeholder:text-base"
              placeholder="Lastname"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
          </div>
          <h3 className="text-base font-medium mb-3 ">
            What's our Captain's email
          </h3>
          <input
            type="email"
            required
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h3 className="text-base font-medium mb-3">Enter Password</h3>
          <div className="relative mb-5">
            <input
              type={passwordVisible ? "text" : "password"}
              required
              className="bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-base"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 cursor-pointer"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <h3 className="text-base font-medium mb-3">Vehicle Information</h3>
          <div className="flex gap-4 mb-5">
            <input
              type="text"
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-4 mb-5">
            <input
              type="number"
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
            />
            <select
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Motorcycle</option>
            </select>
          </div>

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
            Create Captain Account
          </button>
          <p className="text-center">
            Already have a account?
            <Link to="/captain-login" className="text-blue-600">
              Login Here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          By proceeding,you consent to get calls, WhatsApp or SMS messgaes,
          including by automated means, from Uber and its affiliates to the
          number provided
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
