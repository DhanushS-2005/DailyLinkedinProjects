function StudentCard({ student }) {
  return (
    <div className="bg-white shadow rounded-lg p-5">

      <h2 className="text-xl font-bold">
        {student.firstName} {student.lastName}
      </h2>

      <p className="mt-2">
        <strong>Email :</strong> {student.email}
      </p>

      <p>
        <strong>Phone :</strong> {student.phone}
      </p>

      <p>
        <strong>Department :</strong> {student.department}
      </p>

      <p>
        <strong>Course :</strong> {student.course}
      </p>

      <p>
        <strong>Year :</strong> {student.year}
      </p>

    </div>
  );
}

export default StudentCard;