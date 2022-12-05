import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loading-icons";
import image from "./assets/nordstone-removebg-preview.png";
import "./Components.css";

function Splash() {
  const Navigate = useNavigate();
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setToggle(!toggle), 50000);
    return () => clearTimeout(timer);
  }, [toggle]);

  return (
    <div className="SplashScreen">
      <p>Welcome to my test App</p>
      {toggle ? (
        <>
          <img src={image} alt="SplashImage" />
          <ThreeDots />
          <p className="Idea">A place where Idea meets reality through technology</p>
        </>
      ) : (
        Navigate("/auth")
      )}
    </div>
  );
}

export default Splash;
