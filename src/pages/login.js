import React from "react";
import Cookie from "js-cookie";
import { navigate } from "hookrouter";
import { Router } from "react-router-dom";

import "../styles.css";

function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e, props) => {
    e.preventDefault();
    if (username === "neil" && password === "lovesunicorns") {
      Cookie.set("username", username, { expires: 1 });
      Cookie.set("password", password);
      console.log("handler works....");
      navigate("/welcome");
      window.location.reload();
    } else {
      console.log("Access Denied");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="username-input"
            placeholder="enter username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            className="password-input"
            placeholder="enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="login-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
