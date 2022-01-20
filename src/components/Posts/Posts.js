import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Post from "../Post/Post";
import "./Posts.css";
function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    try {
      fetch("http://localhost:3004/posts")
        .then((res) => res.json())
        .then((posts) => setPosts(posts));
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(posts);
  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}

export default Posts;
