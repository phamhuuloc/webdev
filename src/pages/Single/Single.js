import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SinglePost from "../../components/SinglePost/SinglePost";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Single.css";
function Single() {
  return (
    <>
      <div className="single">
        <SinglePost />
        <Sidebar />
      </div>
    </>
  );
}

export default Single;
