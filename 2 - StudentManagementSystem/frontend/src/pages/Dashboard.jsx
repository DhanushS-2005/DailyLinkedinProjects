import { useEffect, useState } from "react";
import { getStudents } from "../services/studentService";

function Dashboard() {
  const [students, setStudents] =useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const totalStudents = students.length;

  const departments = [
    ...new Set(students.map((student) => student.department)),
  ].length;

  const courses = [
    ...new Set(students.map((student) => student.course)),
  ].length;

  const finalYear = students.filter(
    (student) => student.year == 4
  ).length;

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-blue-600 text-white rounded-lg shadow p-6">
          <h3 className="text-lg">Total Students</h3>
          <p className="text-4xl font-bold mt-3">
            {totalStudents}
          </p>
        </div>

        <div className="bg-green-600 text-white rounded-lg shadow p-6">
          <h3 className="text-lg">Departments</h3>
          <p className="text-4xl font-bold mt-3">
            {departments}
          </p>
        </div>

        <div className="bg-yellow-500 text-white rounded-lg shadow p-6">
          <h3 className="text-lg">Courses</h3>
          <p className="text-4xl font-bold mt-3">
            {courses}
          </p>
        </div>

        <div className="bg-red-600 text-white rounded-lg shadow p-6">
          <h3 className="text-lg">Final Year</h3>
          <p className="text-4xl font-bold mt-3">
            {finalYear}
          </p>
        </div>

      </div>

      <div className="bg-white mt-10 rounded-lg shadow">

        <div className="border-b p-5">
          <h2 className="text-xl font-bold">
            Recently Added Students
          </h2>
        </div>

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-3">Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Year</th>
            </tr>

          </thead>

          <tbody>

            {students.slice(-5).reverse().map((student) => (

              <tr
                key={student.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-3">
                  {student.firstName} {student.lastName}
                </td>

                <td>{student.email}</td>

                <td>{student.department}</td>

                <td>{student.year}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;