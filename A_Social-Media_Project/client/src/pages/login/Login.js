import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, setItem } from "../../utils/localStorageManager";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await axiosClient.post("/auth/login", {
        email,
        password,
      });

      if (response && response.result && response.result.accessToken) {
        setItem(KEY_ACCESS_TOKEN, response.result.accessToken);
        navigate("/"); // Redirect to home or desired page
        console.log("Login successful:", response);
      } else {
        console.error("Invalid response format:", response);
        // Handle cases where accessToken or expected properties are missing
      }
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle API call errors or network issues
    }
  }

  return (
    <div className="Login">
      <div className="login-box">
        <h2 className="heading">Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
        <p className="subheading">
          Do not have An Account ? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
