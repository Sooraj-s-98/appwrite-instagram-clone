import { useState, useContext, useEffect } from "react";


export default function Login() {

  return (
    <div className="login__container">
      <h1>Instagram Clone</h1>
      <div className="form__area">
        <div className="form">
          <form >
            <div className="form__field">
              <input
                type="email"
                id="Email"
                name="Email"
                required
              />
              <label htmlFor="Email">Email</label>
            </div>
            <div className="form__field">
              <input
                type="password"
                id="password"
                name="Password"
                required
              />
              <label htmlFor="Password">Password</label>
            </div>
            <button className="primary-insta-btn" >
                Log In
            </button>
            <div className="google__login">
              <button className="btn__authGoogle" >
                Log in with Google
              </button>
            </div>
            <a href="#!" className="forgotPassword">
              Forgot Password?
            </a>
          </form>
        </div>
        <div className="signup__area">
          <p>
            Don't have and account? <a to="/signup">Signup</a>
          </p>
        </div>
      </div>
    </div>
  );
}