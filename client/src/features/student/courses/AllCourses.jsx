import { useEffect, useState } from "react";
import api from "../../../services/apiClient";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    const res = await api.get("/courses?type=all");
    setCourses(res.data.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleEnroll = async (id) => {
    await api.post(`/courses/${id}/enroll`);
    fetchCourses();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Courses</h1>

      <div className="grid gap-4">
        {courses.map((course) => (
          <div key={course._id} className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>

            <button
              onClick={() => handleEnroll(course._id)}
              className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
            >
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;