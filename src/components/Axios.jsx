import React, { useState } from "react";
import axios from "axios";
import { div } from "framer-motion/client";

const Axios = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  const fetchuserPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
  };

  const createUserPost = async (e) => {
    const userId = 1;

    e.preventDefault();
   const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title,
      body, 
      userId
    })
    console.log(res)
  };

  return (
    <div>
      <button onClick={fetchuserPosts}>click</button>
      {posts.slice(0, 5).map((post, idx) => {
        return (
          <div key={idx}>
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}

      <form onSubmit={createUserPost}>
        <div className="">
          <label htmlFor="">Title</label>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            className="outline-1"
          />
        </div>
        <div className="">
          <label htmlFor="">Post</label>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setBody(e.target.value)}
            className="outline-1"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Axios;
