import React from "react";
import { NavLink } from "react-router-dom";

import "./Components.css";

function Auth() {
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
