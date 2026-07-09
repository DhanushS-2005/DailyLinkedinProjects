import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStudents, deleteStudent, searchStudent } from "../services/studentService";


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
        <input
          type="text"
          placeholder="Search by First Name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">First Name</th>
              <th className="p-3">Last Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Department</th>
              <th className="p-3">Course</th>
              <th className="p-3">Year</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{student.id}</td>
                <td className="p-3">{student.firstName}</td>
                <td className="p-3">{student.lastName}</td>
                <td className="p-3">{student.email}</td>
                <td className="p-3">{student.phone}</td>
                <td className="p-3">{student.department}</td>
                <td className="p-3">{student.course}</td>
                <td className="p-3">{student.year}</td>

                <td className="p-3 space-x-2">
                  <Link
                    to={`/view-student/${student.id}`}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    View
                  </Link>

                  <Link
                    to={`/edit-student/${student.id}`}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(student.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;