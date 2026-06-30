import { useState, useEffect } from "react";
import "../css/Post.css";

function Post({ post, url }) {
  const [imageUrl, setImageUrl] = useState("");

  const handleDeleteSubmit = async (e) => {
      e.preventDefault();

      try {
        const res = await fetch(url + "posts/" + post.id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Post silinemedi");
        }

        console.log("Deleted post:", post.id);
      } catch (err) {
        console.error("Error:", err);
      }
    };

  return (
    <div className="PostCard">
      <h2 className="PostCard-title">{post.title}</h2>
      <img className="PostCard-image" src={post.image_url} alt={post.title} />
      <p className="PostCard-content">{post.content}</p>
      <button onClick={handleDeleteSubmit} className="PostCard-delete-button">Delete Post</button>
    </div>
  );
}

export default Post;
