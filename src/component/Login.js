import { useState } from "react";
import api from "../api/api";
import SignUp from "./SignUp";
import { FetchState } from "../hooks/index";

const Login = ({ dispatch }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [register, setRegister] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: FetchState.FETCH_INIT });
    try {
      await api.createSession(email, password);
      const data = await api.getAccount();
      dispatch({ type: FetchState.FETCH_SUCCESS, payload: data });
    } catch (e) {
      dispatch({ type: FetchState.FETCH_FAILURE });
    }
  };

  return register ? (
    <SignUp setRegister={setRegister} dispatch={dispatch} />
  ) : (
      <>

    <div className="main-top" style={{width:"700px"}}>
      
    <div className="login__container">
      <h1>Instagram Clone</h1>
      <div className="form__area">
        <div className="form">
          <form onSubmit={handleLogin}>
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
                type="password"
                id="password"
                name="Password"
                onChange={(e) => setPassword(e.target.value)}
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
            Don't have and account? <a  onClick={()=>setRegister(true)}>Signup</a>
          </p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Login;