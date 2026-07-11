import { Link } from "react-router-dom";

function StudentTable({ students, handleDelete }) {
  return (
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

            <tr
              key={student.id}
              className="border-b hover:bg-gray-100"
            >

              <td className="p-3">{student.id}</td>
              <td className="p-3">{student.firstName}</td>
              <td className="p-3">{student.lastName}</td>
              <td className="p-3">{student.email}</td>
              <td className="p-3">{student.phone}</td>
              <td className="p-3">{student.department}</td>
              <td className="p-3">{student.course}</td>
              <td className="p-3">{student.year}</td>

              <td className="space-x-2">

                <Link
                  to={`/view-student/${student.id}`}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  View
                </Link>

                <Link
                  to={`/edit-student/${student.id}`}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
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
  );
}

export default StudentTable;