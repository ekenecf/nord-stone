import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai'

function SignUp() {
  const [openEye, setopenEye] = useState(false)
  const handleVisible = () => [setopenEye(!openEye)]

  const [formInputs, changeFormInputs] = useState({
    password: '',
  })

  const updatePassword = (e) => {
    changeFormInputs({
      ...formInputs,
      password: e.target.value,
    })
  }
  console.log(formInputs.password.length)

  return (
    <div className="Login">
      <h2>SignUp</h2>
      <form>
        <input type="name" name="name" placeholder="Name here" required />
        <input type="email" name="email" placeholder="Email here" required />
        <div className="pswrd">
          <input
            type={openEye ? 'text' : 'password'}
            name="password"
            placeholder="password"
            required
            onChange={updatePassword}
          />
          {openEye ? (
            <AiOutlineEyeInvisible onClick={handleVisible} className="PShow" />
          ) : (
            <AiFillEye onClick={handleVisible} className="PShow" />
          )}
        </div>
        <div className="pswrdStrength">
          {formInputs.password.length === 0 ? null : formInputs.password
              .length < 6 ? (
            <div className="weakDiv">
              weak <p className="weak"></p>
            </div>
          ) : formInputs.password.length >= 6 &&
            formInputs.password.length <= 10 ? (
            <div className="mediumDiv">
              medium <p className="medium"></p>
            </div>
          ) : (
            <div className="strongDiv">
              strong <p className="strong"></p>
            </div>
          )}
        </div>
        <button type="submit">SignIn</button>
        <NavLink to={'/auth'}>
          <button id='navBtn'>
            Back</button>
        </NavLink>
      </form>
    </div>
  )
}

export default SignUp
