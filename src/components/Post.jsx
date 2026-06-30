import { useState, useEffect } from "react";

function Post({ post }) {
  const [imageUrl, setImageUrl] = useState("");


  return (
    <div className="PostCard">
      <h2 className="PostCard-title">{post.title}</h2>
      <img className="PostCard-image" src={post.image_url} alt={post.title} />
      <p className="PostCard-content">{post.content}</p>
    </div>
  );
}

export default Post;
