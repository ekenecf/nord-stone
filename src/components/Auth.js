import React, { useEffect } from 'react'
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import { auth } from '../base'
import { NavLink, useNavigate } from 'react-router-dom'
import { GoogleButton } from 'react-google-button'

import './Components.css'

function Auth() {
  const Navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.email)
        localStorage.setItem(
          'userEmail',
          JSON.stringify(user.displayName ? user.displayName : user.email),
        )
        Navigate('/notification')
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
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
