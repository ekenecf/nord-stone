import React from 'react'
import { NavLink } from 'react-router-dom'

function Calculate() {
  return (
    <div className='calculate'>
      <h2>Solve it</h2>
      <form >
        <input type="number" name="number" placeholder="Number1" required />
        <label for="cars">Choose operation:</label>

<select name="cars" id="operators">
  <option value="volvo">Select Operator</option>
  <option value="Multiplication">*</option>
  <option value="Addition">+</option>
  <option value="Subtraction">-</option>
  <option value="Addition">/</option>
</select>
        <input type="number" name="number" placeholder="Number2" required />

        <button type="submit">Calculate</button>
        <NavLink to={'/notification'}>
          <button id="navBtn">Back</button>
        </NavLink>
      </form>
    </div>
  )
}

export default Calculate
