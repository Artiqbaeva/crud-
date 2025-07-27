import React from "react";
import { useStudents } from "../api/hooks/useStudents";

const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const StudentList = ({ onEditStudent }: any) => {
  const { useGetStudents, useDeleteStudent } = useStudents();

  const { data, isLoading, isError } = useGetStudents();
  const { mutate: deleteMutate } = useDeleteStudent();

  const students = Array.isArray(data?.data) ? data.data : [];

  const handleDelete = (id: string) => {
    deleteMutate(id);
  };

  if (isLoading)
    return <p className="text-center text-gray-500">Loading students...</p>;
  if (isError)
    return (
      <p className="text-center text-red-500">Failed to load students.</p>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
        Student List
      </h2>
      {students.length === 0 ? (
        <p className="text-gray-600 text-center">No students found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {capitalize(student.fname)} {capitalize(student.lname)}
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li >
                  <strong>Birthdate:</strong>{" "}
                  {student.birthdate?.split("T")[0]}
                </li>
                <li>
                  <strong>Address:</strong> {student.address}
                </li>
                <li>
                  <strong>Phone:</strong> {student.phone_number}
                </li>
              </ul>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => handleDelete(student.id)}
                  className="px-3 py-1 cursor-pointer text-sm border border-red-300 text-red-600 rounded-md hover:bg-red-50 transition"
                >
                  Delete
                </button>
                <button
                  onClick={() => onEditStudent(student)}
                  className="px-3 py-1 cursor-pointer text-sm border border-green-300 text-green-600 rounded-md hover:bg-green-50 transition"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(StudentList);
