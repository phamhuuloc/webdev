import "./Setting.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState } from "react";
function Setting() {
  const [img, setImg] = useState("");
  return (
    <div className="setting">
      <div className="setting-container">
        <div className="setting-title">
          <span className="setting-update-title">Update your Acount</span>
          <span className="setting-delete-title">Dlete Acount</span>
        </div>
        <form className="setting-form">
          <div className="setting-avatar">
            <img src={img} alt="" />
            <label htmlFor="inputForm">
              <i className=" setting-icon far fa-user"></i>
            </label>
            <input type="file" id="inputForm" style={{ display: "none" }} />
          </div>
          <label>UserName</label>
          <input type="text" placeholder="New Name" />
          <label>Email</label>
          <input type="email" placeholder="New Name" />
          <label>PassWord</label>
          <input type="password" placeholder="New Name" />
          <button className="setting-submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
export default Setting;
