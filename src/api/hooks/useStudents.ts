// src/api/hooks/useStudents.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "..";

export const key = "students";

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
    useQuery<{ data: Student[] }>({
      queryKey: [key],
      queryFn: () => api.get("/students").then((res) => res.data),
    });

  const createStudent = () =>
    useMutation<void, unknown, CreateStudentInput>({
      mutationFn: (body) => api.post("/students", body),
      onSuccess: () => {
        client.invalidateQueries({ queryKey: [key] });
      },
    });

  const deleteStudent = () =>
    useMutation<void, unknown, string>({
      mutationFn: (id: string) => api.delete(`/students/${id}`),
      onSuccess: () => {
        client.invalidateQueries({ queryKey: [key] });
      },
    });

  return { getStudents, createStudent, deleteStudent };
};
