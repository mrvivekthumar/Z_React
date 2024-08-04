import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.scss";
import axiosClient from "../../utils/axiosClient";

function Signup() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  async function handleSignUp(e) {
    e.preventDefault();
    try {
      const response = await axiosClient.post("/auth/signup", {
        name,
        email,
        password,
      });

      console.log(response);

      // Check if signup was successful (you can modify this check based on your response structure)
      if (response.status === "ok") {
        // Redirect to login page
        navigate("/login");
      } else {
        setError("Signup failed"); // Handle signup failure
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setError("Signup failed"); // Handle signup failure
    }
  }

  return (
    <div className="Signup">
      <div className="signup-box">
        <h2 className="heading">Signup</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSignUp}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="submit" type="submit">
            Submit
          </button>
        </form>

        <p className="subheading">
          Already Have An Account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
