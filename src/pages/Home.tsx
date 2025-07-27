import React from "react";
import CreateStudentForm from "../components/CreateStudentForm";
import StudentList from "../components/StudentList";

const Home = () => {
  const [editingStudent, setEditingStudent] = React.useState(null);

  return (
    <div className="p-6">
      <CreateStudentForm
        editingStudent={editingStudent}
        onClearEdit={() => setEditingStudent(null)}
      />
      <StudentList onEditStudent={setEditingStudent} />
    </div>
  );
};

export default Home;
