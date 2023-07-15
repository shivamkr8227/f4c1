import "../App.css";
import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setSuccess("");
      setError(
        "Error : Please make sure your password and conform passwords match!"
      );
      return;
    }

    if (password !== confirmPassword) {
      setSuccess("");
      setError("Password Mismatch");
      return;
    } else {
      setError("");
      setSuccess("Successfully Created!");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setSuccess("");
      return;
    }
  };

  return (
    <div className="App">
      <div className="container-left">
        <p className="clp">Find 3D Objects, Mockups and Ilustration here</p>
        <img class="climg" className src="#03.png"></img>
      </div>
      <div className="container-right ">
        <h1>Create Account</h1>
        <div className="btn1">
          <button className="b1">
            <a href="#">
              <img src="search1.png"></img>Sign up with google
            </a>
          </button>
          <button className="b1">
            <a href="#">
              <img src="facebook1.png"></img>Sign up with facebook
            </a>
          </button>
        </div>
        <p>- OR -</p>
        <div className="form-group">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {/* <div id="msg" className="form-status"></div> */}
        <div className="message">
          <button onClick={handleSignup} className="btn">
            Create Account
          </button>
          {error && <div className="error">{error}</div>}
          {Success && <div className="success">{Success}</div>}
        </div>
      </div>
    </div>
  );
}

export default Signup;
