import React from "react";
// import AOS from 'aos';

import "./Components.css";

function Auth() {
  // AOS.init({
  //   duration: 1200,
  // });

  return (
    <div className="Auth">
      <p>Kindly Authenticate Yourself</p>
      <div className="authBtn">
      <button>Sign In</button>
      <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Auth;
