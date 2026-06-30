import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

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
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
