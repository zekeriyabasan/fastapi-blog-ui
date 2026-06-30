import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Post from "./components/Post.jsx";
import CreatePostForm from "./components/forms/CreatePostForm.jsx";

const BASE_URL = "http://127.0.0.1:8000/";

function App() {
  const [posts, setPosts] = useState([]);

useEffect(() => {
  fetch(BASE_URL + "posts")
    .then((res) => {
      if (!res.ok) {
        throw new Error("HTTP error " + res.status);
      }
      return res.json();
    })
    .then((data) => {
      setPosts(data);
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
}, []);
  return (
    <>
      <section id="center">
        <div className="app_posts">
           {posts.map((post) => (
            <Post post={post} key={post.id} />      
        ))}
          </div>
          <div className="app_hero">
            <CreatePostForm  />
          </div>
       
      </section>
    </>
  );
}

export default App;
