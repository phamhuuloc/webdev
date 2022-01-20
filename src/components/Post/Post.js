import React from "react";
import "./Post.css";
function Post({ post }) {
  console.log(post.postCats);
  return (
    <div className="post">
      <img className="post-img" src={post.img} alt="" />
      <div className="post-info">
        {/* <div className="post-cats"> */}
        {/*   {post.postCats.map((item, index) => { */}
        {/*     return ( */}
        {/*       <span key={index} className="post-cat"> */}
        {/*         {item} */}
        {/*       </span> */}
        {/*     ); */}
        {/*   })} */}
        {/* </div> */}
        <span className="post-title">{post.title}</span>
        <hr />
        <span className="post-date">{post.postDate}</span>
      </div>
      <p className="post-desc">{post.description}</p>
    </div>
  );
}

export default Post;
