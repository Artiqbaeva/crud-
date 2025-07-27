import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "..";

export const key = "blog";

interface Blog {
  id: string;
  title: string;
  body: string;
  createAt?: string;
}

interface CreateBlogInput {
  title: string;
  body: string;
}

export const useBlog = () => {
  const client = useQueryClient();

  const getBlog = () =>
    useQuery<{ data: Blog[] }>({
      queryKey: [key],
      queryFn: () => api.get("/blog").then((res) => res.data),
    });

 
  const createBlog = () =>
    useMutation<void, unknown, CreateBlogInput>({
      mutationFn: (body) => api.post("/blog", body),
      onSuccess: () => {
        client.invalidateQueries({ queryKey: [key] });
      },
    });

  const deleteBlog = () =>
    useMutation<void, unknown, string>({
      mutationFn: (id: string) => api.delete(`/blog/${id}`),
      onSuccess: () => {
        client.invalidateQueries({ queryKey: [key] });
      },
    });

  return { getBlog, createBlog, deleteBlog };
};
