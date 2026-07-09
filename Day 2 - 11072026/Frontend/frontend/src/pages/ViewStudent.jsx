import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getStudent } from "../services/studentService";

function ViewStudent() {

    const { id } = useParams();

    const [student, setStudent] = useState({});

    useEffect(() => {
        loadStudent();
    }, []);

    const loadStudent = async () => {
        try {
            const response = await getStudent(id);
            setStudent(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-8">

            <h1 className="text-3xl font-bold mb-6">
                Student Details
            </h1>

            <div className="space-y-4">

                <div>
                    <span className="font-semibold">ID:</span> {student.id}
                </div>

                <div>
                    <span className="font-semibold">First Name:</span> {student.firstName}
                </div>

                <div>
                    <span className="font-semibold">Last Name:</span> {student.lastName}
                </div>

                <div>
                    <span className="font-semibold">Email:</span> {student.email}
                </div>

                <div>
                    <span className="font-semibold">Phone:</span> {student.phone}
                </div>

                <div>
                    <span className="font-semibold">Department:</span> {student.department}
                </div>

                <div>
                    <span className="font-semibold">Course:</span> {student.course}
                </div>

                <div>
                    <span className="font-semibold">Year:</span> {student.year}
                </div>

            </div>

            <Link
                to="/students"
                className="inline-block mt-8 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
            >
                Back
            </Link>

        </div>
    );
}

export default ViewStudent;