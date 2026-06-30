import { useState } from "react";
import "../../css/CreatePostForm.css";

function CreatePostForm({ url }) {
  const [form, setForm] = useState({
    title: "",
    content: "",
    image_url: "",
    created_by: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(url + "posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Post oluşturulamadı");
      }

      const data = await res.json();

      console.log("Created post:", data);

      // form reset
      setForm({
        title: "",
        content: "",
        image_url: "",
        created_by: "",
      });
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <form className="CreatePostForm" onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
      />

      <textarea
        name="content"
        placeholder="Content"
        value={form.content}
        onChange={handleChange}
      />

      <input
        name="image_url"
        placeholder="Image URL"
        value={form.image_url}
        onChange={handleChange}
      />

      <input
        name="created_by"
        placeholder="Created By"
        value={form.created_by}
        onChange={handleChange}
      />

      <button type="submit">Create Post</button>
    </form>
  );
}

export default CreatePostForm;
