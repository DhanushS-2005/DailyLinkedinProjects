import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStudents, deleteStudent, searchStudent } from "../services/studentService";
import SearchBar from "../components/SearchBar";
import StudentTable from "../components/StudentTable";
import { toast } from "react-toastify";


function Students() {
  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  useEffect(() => {
  handleSearch();
}, [search]);

  const loadStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async () => {
  try {
    if (search.trim() === "") {
      loadStudents();
      return;
    }

    const response = await searchStudent(search);
    setStudents(response.data);
  } catch (error) {
    console.error(error);
  }
};

  const handleDelete = async (id) => {
  if (window.confirm("Are you sure you want to delete this student?")) {
    try {
      await deleteStudent(id);

      setStudents(students.filter(student => student.id !== id));

      toast.success("Student Deleted Successfully");
    } catch (error) {
      toast.error("Failed to Delete Student");
      console.error(error);
    }
  }
};

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Students</h1>

        <Link
          to="/add-student"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Student
        </Link>
      </div>

      <div className="flex justify-between items-center mb-5">

        {/* Search box */}
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

      </div>

      {/* Table */}
      <StudentTable
        students={students}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Students;