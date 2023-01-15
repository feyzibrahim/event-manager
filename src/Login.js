import React from "react";
import bazi from "./images/img1.jpg";

const Login = () => {
  return (
    <div
      className="homeDiv"
      style={{
        backgroundImage: `url(${bazi})`,
        backgroundSize: "130%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="cent">
        <form>
          <h1>LOGIN PAGE</h1>
          {/* <div className="loginDiv"> */}
          {/* <div className="label" > */}
          <div>
            <label>Email</label>
            <input type="text" name="email" placeholder="Email id" />
          </div>
          <div>
            <label>Password</label>
            <input type="text" name="passw" placeholder="Password" />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
