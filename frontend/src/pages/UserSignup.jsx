import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing eye icons

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <Link to="/">
          <img
            className="w-16 mb-5"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt=""
          />
        </Link>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setUserData({
              username: {
                firstname: firstname,
                lastname: lastname,
              },
              email: email,
              password: password,
            });
            setEmail("");
            setPassword("");
            setFirstname("");
            setLastname("");
          }}
        >
          <h3 className="text-base font-medium mb-3 ">What's your name</h3>
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
          <h3 className="text-base font-medium mb-3 ">What's your email</h3>
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
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
            Login
          </button>
          <p className="text-center">
            Already have a account?
            <Link to="/login" className="text-blue-600">
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

export default UserSignup;
