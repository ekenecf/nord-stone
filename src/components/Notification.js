import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function Notification(prop) {
  const notify = () => {
    toast("You just activated a notification!");
  };
  let userEmail = JSON.parse(localStorage.getItem("userEmail"));

  console.log(prop)
  return (
    <>
      {userEmail ? (
        <>
          <ToastContainer />
          <div className="notification">
            <p>Welcome {userEmail}</p>
            <button onClick={notify}>Notify!</button>
            <NavLink to={"/upload"}>
              ImageUpload <IoIosArrowForward className="foward" />
            </NavLink>
          </div>
        </>
      ) : <p id="requestLoginNotification">Kindly login to access this page</p>}
    </>
  );
}
export default Notification;
