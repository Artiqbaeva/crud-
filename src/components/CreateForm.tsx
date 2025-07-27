import React from "react";
import { useBlog } from "../api/hooks/useBlog";

const CreateForm = () => {
  const { createBlog } = useBlog();
  const { mutate: createMutate } = createBlog();

  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    createMutate({ title, body });

    setTitle("");
    setBody("");
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold my-6">Create Blog</h2>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-3 py-1 rounded-lg border-gray-300"
          placeholder="title"
          type="text"
          required
        />
        <input
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="border px-3 py-1 rounded-lg border-gray-300"
          placeholder="body"
          type="text"
          required
        />
        <button
          type="submit"
          disabled={!title || !body}
          className="border px-3 py-1 rounded-lg border-gray-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default React.memo(CreateForm);
