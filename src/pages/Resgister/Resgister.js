import { useState, useEffect } from "react";
import React from "react";
import "./Resgister.css";
import { Link, Navigate } from "react-router-dom";
import { axiosInstance } from "../../apis/baseApi";
function Resgister() {
  // let navigate = Navigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    fullname: "",
    phone: "",
    email: "",
    address: "",
    avatar: "",
  });
  const handleSumbmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/Auth/sign-up", user);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  async function resgister(e) {
    e.preventDefault();
    console.log(user);
    // let item = user;

    // let result = await fetch("http://localhost:3004/user", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(item),
    // });
    // result = await result.json();
    // setUser({ userName: "", email: "", password: "" });
  }

  return (
    <div className="resgister">
      <div className="overlay"></div>
      <form className="form">
        <div className="form-container">
          <div className="form-gorup">
            <input
              type="text"
              placeholder="User Name"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              value={user.username}
              autoFocus={true}
            />
          </div>
          <div className="form-gorup">
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
            />
          </div>

          <div className="form-gorup">
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setUser({ ...user, fullname: e.target.value })}
              value={user.fullname}
            />
          </div>

          <div className="form-gorup">
            <input
              type="text"
              placeholder="Phone"
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              value={user.phone}
            />
          </div>

          <div className="form-gorup">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              value={user.email}
              autoFocus={true}
            />
          </div>

          <div className="form-gorup">
            <input
              type="text"
              placeholder="Address"
              onChange={(e) => setUser({ ...user, address: e.target.value })}
              value={user.address}
            />
          </div>
          <button className="button-form" onClick={handleSumbmit}>
            Sign Up
          </button>
        </div>
        {/* <p>— Or Sign In With —</p> */}
        {/* <div className="social"> */}
        {/*   <button>Facebook</button> */}
        {/*   <button>Tiwiter</button> */}
        {/* </div> */}
      </form>
      <Link className="link" to="/login">
        <button className="resgister-login-btn">Login</button>
      </Link>
    </div>
  );
}
export default Resgister;
