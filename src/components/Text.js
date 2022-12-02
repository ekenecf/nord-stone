import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import myText from "../service/textService";

function Text() {
  const notify = () => {
    toast("You have successfully created a text!");
  };

  const [getText, setText] = useState([]);

  const [formInputs, changeFormInputs] = useState({
    text: "",
  });

  const getTextInput = (e) => {
    changeFormInputs({
      ...formInputs,
      text: e.target.value,
    });
  };
  console.log(formInputs.text);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const classText = new myText();
      await classText.addText(formInputs);
      changeFormInputs({
        ...formInputs,
        text: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetText = async () => {
    const classText = new myText();
    const getAllText = await classText.getText();
    setText(getAllText.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    handleGetText();
  }, []);

  console.log(getText);

  return (
    <div className="text">
      <h2>Write to store</h2>
      <ToastContainer />
      <form onSubmit={(e) => handleSubmit(e)}>
        <textarea
          type="text"
          name="text"
          placeholder="Write here"
          rows="4"
          cols="50"
          required
          onChange={getTextInput}
        />
        <button onClick={notify} type="submit">
          Send
        </button>
      </form>
      <NavLink to={"/notification"}>
        <button id="navBtn">Back</button>
      </NavLink>
      {getText.length
        ? getText.map(textData => ( 
            <p key={textData.id}>Testing the app</p>
        ))
        : "No text Added yet"}
    </div>
  );
}

export default Text;
