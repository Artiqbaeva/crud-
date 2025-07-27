import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "..";

export const key = "student";

export interface Student {
  id: string;
  fname: string;
  lname: string;
  birthdate: string;
  address: string;
  phone_number: number;
}

interface CreateStudentInput {
  fname: string;
  lname: string;
  birthdate: string;
  address: string;
  phone_number: number;
}

export const useStudents = () => {
  const client = useQueryClient();

  const getStudents = () =>
    useQuery({
      queryKey: [key],
      queryFn: () => api.get("/students"),
    });

  const createStudent = () =>
    useMutation({
      mutationFn: (body: CreateStudentInput) => api.post("/students", body),
      onSuccess: () => {
        client.invalidateQueries({ queryKey: [key] });
      },
    });

  const updateStudent = () =>
    useMutation({
      mutationFn: ({ id, ...body }: { id: string } & CreateStudentInput) =>
        api.put(`/students/${id}`, body),
      onSuccess: () => {
        client.invalidateQueries({ queryKey: [key] });
      },
    });

  const deleteStudent = () =>
    useMutation({
      mutationFn: (id: string) => api.delete(`/students/${id}`),
      onSuccess: () => {
        client.invalidateQueries({ queryKey: [key] });
      },
    });

  return {
    useGetStudents: getStudents,
    useCreateStudent: createStudent,
    useUpdateStudent: updateStudent,
    useDeleteStudent: deleteStudent,
  };
}