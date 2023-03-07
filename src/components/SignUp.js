import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { auth } from '../base'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function SignUp() {
  const Navigate = useNavigate()
  const [openEye, setopenEye] = useState(false)
  const handleVisible = () => setopenEye(!openEye)

  const [formInputs, changeFormInputs] = useState({
    email: '',
    password: '',
    errorMessage: 'This Email/Password is already in use',
  })

  const updateEmail = (e) => {
    changeFormInputs({
      ...formInputs,
      email: e.target.value,
    })
  }
  const updatePassword = (e) => {
    changeFormInputs({
      ...formInputs,
      password: e.target.value,
    })
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, formInputs.email, formInputs.password)
      .then((userCredential) => {
        const user = userCredential.user
        localStorage.setItem('userEmail', JSON.stringify(user.email))
        if (user) {
          Navigate('/notification')
        }
      })
      .catch(() => {
        alert(formInputs.errorMessage)
      })
  }

  return (
    <div className="Login">
      <h2>SignUp</h2>
      <form onSubmit={(e) => handleSignUp(e)}>
        <input
          type="email"
          name="email"
          placeholder="Input Email"
          onChange={updateEmail}
          required
        />
        <div className="pswrd">
          <input
            type={openEye ? 'text' : 'password'}
            name="password"
            placeholder="Input password"
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
            formInputs.password.length <= 12 ? (
            <div className="mediumDiv">
              medium <p className="medium"></p>
            </div>
          ) : (
            <div className="strongDiv">
              strong <p className="strong"></p>
            </div>
          )}
        </div>
        <button type="submit">SignUp</button>
        <NavLink to={'/auth'}>
          <button id="navBtn">Back</button>
        </NavLink>
      </form>
    </div>
  )
}

export default SignUp
