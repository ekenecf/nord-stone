import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Calculate() {
  const URL = "https://calculateapi-production.up.railway.app/calculate";

  const [getCalculateFromApi, setgetCalculateFromApi] = useState([]);

  const getCalculate = () => {
    axios
      .get(URL)
      .then((response) =>
        setgetCalculateFromApi((prev) => [...prev, response.data])
      )
      .catch(() => {
        alert("Failed to get data! Kindly refresh page");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { number, number1, operate } = e.target.elements;
    const createdCalculate = {
      num1: number.value,
      num2: number1.value,
      operator: operate.value,
    };
    console.log(createdCalculate);
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    axios
      .post(URL, createdCalculate, config)
      .then(() => window.location.reload())
      .catch((error) => {
        console.log("Catch error", error);
      });
    number.value = "";
    number1.value = "";
    operate.value = "Select Operator";
  };

  useEffect(() => {
    getCalculate();
  }, []);

  return (
    <div className="calculate">
      <h2>Solve it</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="number"
          name="number"
          placeholder="Input number"
          required
        />

        <select name="operate" id="operators" required>
          <option>Select Operator</option>
          <option>*</option>
          <option>+</option>
          <option>-</option>
          <option>/</option>
        </select>
        <input
          type="number"
          name="number1"
          placeholder="Input number"
          required
        />
        <button type="submit">Calculate</button>
        <div className="getApiData">
          {getCalculateFromApi[0] ? (
            getCalculateFromApi[0].data.calculate.map((datum) => (
              <p key={datum._id}>
                Result of {""}
                {datum.num1} {datum.operator} {datum.num2} is {datum.sumAnswer}
              </p>
            ))
          ) : (
            <p>No calculation yet</p>
          )}
        </div>
        <NavLink to={"/text"}>
          <button id="navBtn">Back</button>
        </NavLink>
      </form>
    </div>
  );
}

export default Calculate;
