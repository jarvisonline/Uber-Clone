import React, { useState } from "react";
import { data, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing eye icons
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";

const UserLogin = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );
    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    setEmail("");
    setPassword("");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setuserData] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <Link to="/">
          <img
            className="w-16 mb-10"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt=""
          />
        </Link>
        <form onSubmit={handleLogin}>
          <h3 className="text-lg font-medium mb-2 ">What's your email</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <div className="relative mb-7">
            <input
              type={passwordVisible ? "text" : "password"}
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-base"
              placeholder="password"
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
            New Here?
            <Link to="/signup" className="text-blue-600">
              Create new Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] flex items-center justify-center text-white mb-5 rounded px-4 py-2 w-full text-lg"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
