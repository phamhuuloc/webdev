import { useState, useEffect } from "react";
import React from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      console.log(localStorage.getItem("user-info"));
      navigate("/");
      console.log("logged");
    }
  }, []);
  async function login(e) {
    e.preventDefault();
    let navigate;
    let item = { email, password };
    let result = await fetch("http://localhost:3004/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/");
  }

  return (
    <div className="login">
      <div className="overlay"></div>
      <form className="form">
        <div className="form-container">
          <h2 className="form-heading">Login</h2>
          <h3 className="form-title">Well Come Back</h3>
          <div className="form-gorup">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail({ ...email, email: e.target.value })}
              value={email.email}
              autoFocus={true}
            />
          </div>
          <div className="form-gorup">
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setPassword({ ...password, password: e.target.value })
              }
              value={password.password}
            />
          </div>
          <button className="button-form" onClick={login}>
            Sign In
          </button>
          <div className="form-gorup">
            <div className="checkbox-wrap">
              <input type="checkbox" />
              <span>Remember Me</span>
            </div>
            <span>Forget Password</span>
          </div>
        </div>
        <p>— Or Sign In With —</p>
        <div className="social">
          <button>Facebook</button>
          <button>Tiwiter</button>
        </div>
      </form>
      <Link className="link" to="/resgister">
        <button className="login-resgister-btn">Resgister</button>
      </Link>
    </div>
  );
}
export default LoginForm;
