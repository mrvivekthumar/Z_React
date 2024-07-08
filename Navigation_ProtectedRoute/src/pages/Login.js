import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "vivek") {
      navigate("/user/vivek");
    } else {
      navigate("/error");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </form>
    </div>
  );
}

export default Login;
