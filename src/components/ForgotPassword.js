import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../base";

function ForgotPassword() {
  const Navigate = useNavigate();
  const [formInputs, changeFormInputs] = useState({
    email: "",
    inputPass: "Please input email",
  });

  const getEmail = (e) => {
    changeFormInputs({
      ...formInputs,
      email: e.target.value,
    });
  };

  const handleReset = () => {
    sendPasswordResetEmail(auth, formInputs.email)
      .then(() => {
        alert("Password reset link sent to your mail");
        Navigate("/login");
      })
      .catch(() => {
        alert(formInputs.inputPass);
      });
  };

  return (
    <div className="forgotpassword">
      <h2>Forgot Password</h2>
      <div className="resetPassword">
        <input
          type="email"
          name="email"
          placeholder="Email here"
          onChange={getEmail}
          required
        />
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default ForgotPassword;
