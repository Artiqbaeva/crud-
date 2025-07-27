import React from "react";
import { useStudents } from "../api/hooks/useStudents";

const StudentList = () => {
  const { getStudents, deleteStudent } = useStudents();
  const { data, isLoading, isError } = getStudents();
  const { mutate: deleteMutate } = deleteStudent();

  const students = Array.isArray(data?.data) ? data.data : [];

  const handleDelete = (id: string) => {
    deleteMutate(id);
  };

  if (isLoading) return <p className="text-center">Loading students...</p>;
  if (isError) return <p className="text-center text-red-500">Failed to load students.</p>;

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-xl font-bold">Student List</h2>
      <div className="grid grid-cols-3 gap-3 py-4">
        {students.map((student) => (
          <div key={student.id} className="border p-4 rounded-lg border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold mb-1">
              {student.fname} {student.lname}
            </h3>
            <p className="text-sm text-gray-700 mb-1">
              <strong>Birthdate:</strong> {student.birthdate?.split("T")[0]}
            </p>
            <p className="text-sm text-gray-700 mb-1">
              <strong>Address:</strong> {student.address}
            </p>
            <p className="text-sm text-gray-700 mb-1">
              <strong>Phone:</strong> {student.phone_number}
            </p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleDelete(student.id)}
                className="text-red-500 border border-red-300 px-2 py-0.5 rounded-md hover:bg-red-50"
              >
                Delete
              </button>
              <button className="text-green-500 border border-green-300 px-2 py-0.5 rounded-md hover:bg-green-50">
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(StudentList);
