import React from "react";
import { useBlog } from "../api/hooks/useBlog";


const Blog = () => {
  const { getBlog } = useBlog();
  const { data } = getBlog();

  const { deleteBlog } = useBlog();
  const { mutate: deleteMutate } = deleteBlog();

  const blogs = Array.isArray(data?.data) ? data.data : [];

  const handleDelete = (id: string) => {
    deleteMutate(id);
  };



  return (
    <div className="container mx-auto mt-4">
    <h2 className="text-xl font-bold">Blog</h2>
    <div className="grid grid-cols-3 gap-3 py-4">
      {blogs.map((item: any) => (
        <div key={item.id} className="border p-4 rounded-lg relative border-gray-200">
          <div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-gray-700 mb-2">{item.body}</p>
            <div className="flex justify-between items-end">
              <div className="flex gap-2">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 cursor-pointer border rounded-md px-2"
                >
                  Delete
                </button>
                <button className="text-green-500 border cursor-pointer rounded-md px-2">
                  Update
                </button>
              </div>
              <p className="text-sm text-gray-400">{item.createAt.split("T")[0]}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default React.memo(Blog);
