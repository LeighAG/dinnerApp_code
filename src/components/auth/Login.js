import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../../misc/ErrorNotice";
export default function Login() {

const [email, setEmail] = useState();
const [password, setPassword] = useState();
 
const { setUserData } = useContext(UserContext);
const history = useHistory();
const [error, setError] = useState();
/*
 input fields for email and password
call the login api
retrive the token and set in the local memory
 add the user data to the global variable
*/

const login = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post("/users/login", loginUser);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
        console.log(err.response.data.msg)
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

    return (
    
        <div className="responsive-reg">
        <h2>Log in</h2>
        {error && <ErrorNotice message={error}
     clearError = {()=>setError(undefined)}
     />}
        <form className="form" onSubmit={login}>
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
  
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="LogIn" />
        </form>
      </div>
    )
}
