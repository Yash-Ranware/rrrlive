import { useEffect, useState } from "react";
import api from "../../../services/apiClient";

const StudentCourses = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const res = await api.get("/courses"); // ✅ enrolled only
      setCourses(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Courses</h1>

      <div className="grid gap-4">
        {courses.length === 0 ? (
          <p className="text-gray-500">
            You are not enrolled in any courses yet.
          </p>
        ) : (
          courses.map((course) => (
            <div
              key={course._id}
              className="p-4 bg-white rounded shadow"
            >
              <h2 className="text-lg font-semibold">{course.title}</h2>
              <p className="text-gray-600">{course.description}</p>

              {/* ✅ Show enrolled status */}
              <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 rounded">
                Enrolled
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StudentCourses;