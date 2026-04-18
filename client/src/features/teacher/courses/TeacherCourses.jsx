import { useEffect, useState } from "react";
import api from "../../../services/apiClient";

const TeacherCourses = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [form, setForm] = useState({ title: "", description: "" });

  const fetchCourses = async () => {
    const res = await api.get("/courses");
    setCourses(res.data.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    await api.delete(`/courses/${id}`);
    fetchCourses();
  };

  const handleEditClick = (course) => {
    setEditingCourse(course._id);
    setForm({
      title: course.title,
      description: course.description,
    });
  };

  const handleUpdate = async (id) => {
    await api.put(`/courses/${id}`, form);
    setEditingCourse(null);
    setForm({ title: "", description: "" });
    fetchCourses();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Courses</h1>

      <div className="grid gap-4">
        {courses.map((course) => (
          <div key={course._id} className="p-4 bg-white rounded shadow">

            {editingCourse === course._id ? (
              <>
                <input
                  value={form.title}
                  onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                  }
                  className="border p-1 w-full mb-2"
                />

                <textarea
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  className="border p-1 w-full mb-2"
                />

                <button
                  onClick={() => handleUpdate(course._id)}
                  className="px-2 py-1 bg-green-500 text-white mr-2"
                >
                  Save
                </button>

                <button
                  onClick={() => setEditingCourse(null)}
                  className="px-2 py-1 bg-gray-400 text-white"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h2 className="text-lg font-semibold">{course.title}</h2>
                <p className="text-gray-600">{course.description}</p>

                <button
                  onClick={() => handleEditClick(course)}
                  className="mt-2 px-3 py-1 bg-blue-500 text-white mr-2"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(course._id)}
                  className="mt-2 px-3 py-1 bg-red-500 text-white"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherCourses;