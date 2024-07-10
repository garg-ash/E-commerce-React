import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ecomcontext } from "./Main"


function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setPosts(result);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h3>Read our blog</h3>
        {posts.map((post, index) => {
          return (
            <div className="post" key={index}>
              <h3><Link to={`${post.id}`}>{post.title}</Link></h3>
              <p>{post.body}</p>
            </div>
          );
        })}
        
      </div>
    </>
  );
}

export default Blog;
