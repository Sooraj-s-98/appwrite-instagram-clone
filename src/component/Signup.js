import { useContext, useState } from "react";
import api from "../api/api";
import { FetchState } from "../hooks/index";

export default function Signup({ dispatch }) {

  const [userName, setUserName] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch({ type: FetchState.FETCH_INIT });
    try {
      const user = await api.createAccount(email, password, name,userName);
      await api.createSession(email, password);
      dispatch({ type: FetchState.FETCH_SUCCESS, payload: user });
    } catch (e) {
      dispatch({ type: FetchState.FETCH_FAILURE });
    }
  };


  return (
    <div className="main-top" style={{width:"700px"}}>
    <div className="signup__container">
      <h1>Instagram Clone</h1>
      <div className="form__area">
        <div className="form">
          <h4>Sign up to see photos and videos from your friends.</h4>
          <form   onSubmit={handleSignup}>
            <div className="form__field">
              <input
                type="email"
                id="Email"
                name="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="Email">Email</label>
            </div>
            <div className="form__field">
              <input
                type="text"
                id="Username"
                name="Username"
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <label htmlFor="Username">Username</label>
            </div>
            <div className="form__field">
              <input
                type="text"
                id="FullName"
                name="FullName"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="FullName">Full Name</label>
            </div>
            <div className="form__field">
              <input
                type="password"
                id="password"
                name="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="Password">Password</label>
            </div>
            <button className="primary-insta-btn"
                   type="submit" 
                   disabled={!name || !email || !password || !userName} >
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
    </div>
  );
}