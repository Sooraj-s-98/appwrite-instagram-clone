import { useContext, useState } from "react";

export default function Signup() {

  return (
    <div className="signup__container">
      <h1>Instagram Clone</h1>
      <div className="form__area">
        <div className="form">
          <h4>Sign up to see photos and videos from your friends.</h4>
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
                type="text"
                id="Username"
                name="Username"
                required
              />
              <label htmlFor="Username">Username</label>
            </div>
            <div className="form__field">
              <input
                type="text"
                id="FullName"
                name="FullName"
                required
              />
              <label htmlFor="FullName">Full Name</label>
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
                Sign up
            </button>
            <div className="auth__error">
              <small></small>
            </div>
          </form>
          <p className="policies">
            By signing up, you agree to our Terms , Data Policy and Cookies
            Policy .
          </p>
        </div>
        <div className="signup__area">
          <p>
            Have an account <a to="/">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}