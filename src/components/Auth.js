import React from 'react'
import { NavLink } from 'react-router-dom'
// import AOS from 'aos';

import './Components.css'

function Auth() {
  // AOS.init({
  //   duration: 1200,
  // });

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
      </div>
    </div>
  )
}

export default Auth
