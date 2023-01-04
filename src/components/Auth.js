import React, {useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../base";

import { NavLink, useNavigate } from "react-router-dom";

import "./Components.css";

function Auth() {
  const Navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        sessionStorage.setItem("userEmail", user.email);
        Navigate("/notification");
      } else {
        Navigate("/login");
      }
    });
  }, [Navigate])

  return (
    <div className="Auth">
      <p>Kindly Authenticate Yourself</p>
      <div className="authBtn">
        <NavLink to={"/login"}>
          <button>Sign In</button>
        </NavLink>
        <NavLink to={"/signup"}>
          <button>Sign Up</button>
        </NavLink>
      </div>
    </div>
  );
}
export default Auth;
