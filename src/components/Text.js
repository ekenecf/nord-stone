import React from 'react'
import { NavLink } from 'react-router-dom'

function Text() {
  return (
    <div className='text'>
      <h2>Write to store</h2>
      <form>
        <textarea
          type="text"
          name="text"
          placeholder="Write here"
          rows="4" cols="50"
          required
        />
        <button type="submit">Send</button>
      </form>
      <NavLink to={'/notification'}>
        <button id="navBtn">Back</button>
      </NavLink>
    </div>
  )
}

export default Text
