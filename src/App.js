import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import Setting from "./pages/Setting/Setting";
import LoginForm from "./pages/Login/LoginForm";
import Resgister from "./pages/Resgister/Resgister";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePost from "./components/SinglePost/SinglePost";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/resgister" element={user ? <Home /> : <Resgister />} />
        <Route path="/login" element={user ? <Home /> : <LoginForm />} />
        <Route path="/write" element={user ? <Write /> : <Resgister />} />
        <Route path="/setting" element={user ? <Setting /> : <Resgister />} />
        <Route
          path="/post/:postId"
          element={user ? <SinglePost /> : <LoginForm />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
