import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai'

function SignIn() {
  const [openEye, setopenEye] = useState(false)
  const handleVisible = () => [setopenEye(!openEye)]
  return (
    <div className="Login">
      <h2>Login</h2>
      <form>
        <input type="email" name="email" placeholder="Email here" required />
        <div className="pswrd">
          <input
            type={openEye ? 'text' : 'password'}
            name="password"
            placeholder="password"
            required
          />
          {openEye ? (
            <AiOutlineEyeInvisible onClick={handleVisible} className="PShow" />
          ) : (
            <AiFillEye onClick={handleVisible} className="PShow" />
          )}
        </div>
        <button type="submit">SignIn</button>
        <NavLink to={'/auth'}>
          <button id="navBtn">Back</button>
        </NavLink>
      </form>
    </div>
  )
}

export default SignIn
