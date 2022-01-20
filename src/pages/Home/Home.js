import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
function Home() {
  return (
    <div className="Home">
      <>
        <Header />
        <div className="home">
          <Posts />
          <Sidebar />
        </div>
      </>
    </div>
  );
}
export default Home;
