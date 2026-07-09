function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500">
            Total Students
          </h2>

          <p className="text-4xl font-bold text-blue-600">
            0
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500">
            Departments
          </h2>

          <p className="text-4xl font-bold text-green-600">
            0
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500">
            Courses
          </h2>

          <p className="text-4xl font-bold text-red-600">
            0
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;