import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "..";

export const key = "comment";

export const useComment = () => {
  const client = useQueryClient();

  const getComments = () =>
    useQuery({ queryKey: [key], queryFn: () => api.get("/comments") });

  const createComment = () =>
    useMutation({
      mutationFn: (body) => api.post("/comments", body),
      onSuccess: () => {
        client.invalidateQueries({ queryKey: ["todos"] });
      },
    });

  return { getComments, createComment };
};
