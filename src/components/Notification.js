import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Notification() {
  const notify = () => {
    toast("You just activated a notification!");
  };

  return (
    <>
      <ToastContainer />
      <div className="notification">
        <button onClick={notify}>Notify!</button>
        <NavLink to={"/upload"}>
          ImageUpload <IoIosArrowForward className="foward" />
        </NavLink>
      </div>
    </>
  );
}
export default Notification;
