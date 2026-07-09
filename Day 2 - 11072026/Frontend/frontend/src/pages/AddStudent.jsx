import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../services/studentService";
import { toast } from "react-toastify";

function AddStudent() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    course: "",
    year: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addStudent(student);
      toast.success("Student Added Successfully!");
      navigate("/students");
    } catch (error) {
      console.error(error);
      toast.error("Failed to Add Student");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6">
        Add Student
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={student.firstName}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={student.lastName}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={student.phone}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={student.department}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="number"
          name="year"
          placeholder="Year"
          value={student.year}
          onChange={handleChange}
          className="border p-3 rounded col-span-2"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 col-span-2"
        >
          Save Student
        </button>

      </form>
    </div>
  );
}

export default AddStudent;