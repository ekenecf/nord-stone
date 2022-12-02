import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../base";

function SignIn() {
  const Navigate = useNavigate();
  const [openEye, setopenEye] = useState(false);
  const handleVisible = () => setopenEye(!openEye);

  const [Error, setEror] = useState({
    errorMessage: "",
  });

  const [formInputs, changeFormInputs] = useState({
    email: "",
    password: "",
  });

  const getEmail = (e) => {
    changeFormInputs({
      ...formInputs,
      email: e.target.value,
    });
  };
  const getPassword = (e) => {
    changeFormInputs({
      ...formInputs,
      password: e.target.value,
    });
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    // const auth = getAuth();
    signInWithEmailAndPassword(auth, formInputs.email, formInputs.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          Navigate("/upload");
        }
        console.log(user);
      })
      .catch(() => {
        setEror({
          ...Error,
          errorMessage: "This Email/Password is Incorrect!!",
        });
        alert(Error.errorMessage);
      });
  };

  return (
    <div className="Login">
      <h2>Login</h2>
      <form onSubmit={handleLogIn}>
        <input
          type="email"
          name="email"
          placeholder="Email here"
          onChange={getEmail}
          required
        />
        <div className="pswrd">
          <input
            type={openEye ? "text" : "password"}
            name="password"
            placeholder="password"
            required
            onChange={getPassword}
          />
          {openEye ? (
            <AiOutlineEyeInvisible onClick={handleVisible} className="PShow" />
          ) : (
            <AiFillEye onClick={handleVisible} className="PShow" />
          )}
        </div>
        <button type="submit">SignIn</button>
        <NavLink to={"/auth"}>
          <button id="navBtn">Back</button>
        </NavLink>
        <NavLink to={"/forgotpassword"}>
          <p>Forgot password?</p>
        </NavLink>
      </form>
    </div>
  );
}

export default SignIn;
