import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Write.css";

function Write() {
  let navigate = useNavigate();
  const [data, setData] = useState({
    img: "",
    title: "",
    description: "",
  });
  console.log(data);
  useEffect(() => {
    return () => {
      data.img && URL.revokeObjectURL(data.img.preview);
    };
  }, [data.img]);
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setData({ ...data, img: file.preview });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let postData = {
      img: data.img,
      title: data.title,
      description: data.description,
    };
    try {
      fetch("http://localhost:3004/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
    } catch (err) {
      console.war(err);
    }
    navigate("/home");
    setData({ img: "", title: "", description: "" });
  }
  return (
    <div className="write">
      <img
        alt=" "
        src={
          data.img !== "" ||
          "https://1.bp.blogspot.com/-aAVctlJNxes/XXdP48TzUHI/AAAAAAAASCc/fU7lRH5azFkz59_lbHEeVOJp4RI5MqSJQCLcBGAs/s1600/hinh-nen-may-tinh-phong-canh-thien-nhien-full-hd%2B%252857%2529.jpg"
        }
        className="write-img"
      />
      <form className="form">
        <div className="form-group">
          <label htmlFor="file-input">
            <i className="write-icon far fa-plus-square"></i>
          </label>
          <input
            type="file"
            id="file-input"
            style={{ display: "none" }}
            onChange={handlePreviewAvatar}
          />
          <input
            type="text"
            placeholder="title"
            className="write-input"
            autoFocus={true}
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            placeholder="Tell your stoty...."
            className="write-input write-text"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          ></textarea>
        </div>
        <button className="form-submit" onClick={handleSubmit}>
          Publish
        </button>
      </form>
    </div>
  );
}
export default Write;
