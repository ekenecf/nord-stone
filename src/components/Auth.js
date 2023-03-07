import React from 'react'
import {
  // onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import { auth } from '../base'
import { NavLink, useNavigate } from 'react-router-dom'
import { GoogleButton } from 'react-google-button'
import './Components.css'

function Auth() {
  const Navigate = useNavigate()

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
        if(user) {
        Navigate('/notification')
        }
        console.log(user)
        console.log('token', token)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div className="Auth">
      <p>Kindly Authenticate Yourself</p>
      <div className="authBtn">
        <NavLink to={'/login'}>
          <button>Sign In</button>
        </NavLink>
        <NavLink to={'/signup'}>
          <button>Sign Up</button>
        </NavLink>
        <GoogleButton
          className="googleBtn"
          onClick={() => handleGoogleSignIn()}
        />
      </div>
    </div>
  )
}
export default Auth
