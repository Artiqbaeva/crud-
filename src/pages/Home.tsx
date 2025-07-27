import CreateStudentForm from "../components/CreateStudentForm";
import StudentList from "../components/StudentList";

const Home = () => {
  
  return (
    <div className="p-6">
    <CreateStudentForm />
    <StudentList />
  </div>
  );
};

export default Home;
