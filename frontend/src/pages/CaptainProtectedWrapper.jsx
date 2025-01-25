import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
    if (!captain) {
      navigate("/captain-login");
    }
  }, [token, captain]);

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
